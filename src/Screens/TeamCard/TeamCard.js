import React from 'react'
import { useParams } from 'react-router-dom'

const TeamCard = () => {

    const {team} = useParams()

  return (
    <div>{team}</div>
  )
}

export default TeamCard