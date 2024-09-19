import PlayerContent from '../../Components/SVComponents/PlayerContent'


const StatViewer = ({players, position, year}) => {

  return (
    <div>
      <h1>{year} {position.join(',')} Stats</h1>
      <PlayerContent
        players={players}
        position={position}
      />
    </div>
  )
}

export default StatViewer