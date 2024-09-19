import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { generateClient } from 'aws-amplify/api'
import { listPlayers } from '../../graphql/queries'

import './Stats.css'
import StatViewer from './StatViewer'
import SeasonNavBar from '../../Components/SeasonNavBar/SeasonNavBar'

const Stats = () => {

const [players, setPlayers] = useState([])
const [loading, setLoading] = useState(true)
const {year, statType} = useParams()

  const client = generateClient()

  const position = useMemo(() => {
    if(statType === 'Passing'){
      return ["QB"]
    }
    else if(statType === 'Rushing'){
      return ["TB"]
    }
    else if(statType === 'Receiving'){
      return ["WR","TE"]
    }
  },[statType])

  useEffect(() => {
    setLoading(true)
    let queryFilter = {and: [{year:{eq:year}},{position:{eq:position[0]}}]}
    if(position.length > 1)
      queryFilter = {
        and: [
          { year: { eq: year } },
          { or:
            [
              {position: { eq: position[0]}},
              {position: { eq: position[1]}}
            ]
          }
        ]
      }
    client.graphql({
      query: listPlayers,
      variables: {
        filter: queryFilter,
        limit: 1000
      }
    }).then(res => {
      let modifiedPlayers = res.data.listPlayers.items

      if(position.includes('QB')){
        modifiedPlayers = modifiedPlayers.filter((player) => player.PassingStat && player.PassingStat.cmp !== 0)
        modifiedPlayers.sort((a,b) => b.PassingStat.yds - a.PassingStat.yds)
      }
      if(position.includes('TB')){
        modifiedPlayers = modifiedPlayers.filter((player) => player.RushingStat && player.RushingStat.att !== 0)
        modifiedPlayers.sort((a,b) => b.RushingStat.yds - a.RushingStat.yds)
      }
      if(position.includes('WR')){
        modifiedPlayers.forEach(element => {
          if(!element.ReceivingStat)
            console.log(`Player ${element.fName} ${element.lName} has no Rec Stat (null or undefined)`)
        });
        modifiedPlayers = modifiedPlayers.filter((player) => player.ReceivingStat && player.ReceivingStat.rec !== 0)
        modifiedPlayers.sort((a,b) => b.ReceivingStat.yds - a.ReceivingStat.yds)
      }
      setPlayers(modifiedPlayers)
      setLoading(false)
  }).catch(err => {
    console.error(err)
    setLoading(false)
  })
  },[position,year])

  if(loading) {
    return <div>Loading {position.join(', ')} stats for {year}</div>
  }
  return (
    <div>
        <div className='stats'>
          <SeasonNavBar year={year}/>
          <StatViewer players={players} position={position} year={year}/>
        </div>
    </div>
  )
}

export default Stats