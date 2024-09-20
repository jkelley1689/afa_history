import React from 'react'
import { useParams } from 'react-router-dom'

const TeamCard = () => {

    const {team} = useParams()

  return (
    <div style={{paddingTop: 120}}>{team}</div>
  )
}

export default TeamCard