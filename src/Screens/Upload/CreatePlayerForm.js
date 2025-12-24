import React, {useState} from 'react'
import './CreatePlayerForm.css'
import createNewPlayer from '../../Components/apiFunctions/createNewPlayer'

const CreatePlayerForm = () => {

    const allPositions = ['QB','TB','WR','FB','TE-Rec','TE-Block','RT','RG','C','LG','LT','RDE','DT','LDE','ROLB','ILB','LOLB','CB','FS','SS']
    const teams = ['WSH','ALB','TUL','PRT','BIR','BRC','SLC','SD','CHI','CLM','SJ','ORL','DET','HRT','NY','FRK','SRC','LON','SA','STL','HAW','LOU','DUB','MEM']
    const positionFields = {
        PASSING: [
            {name: 'YDS', label: "Passing Yards", type: "number"},
            {name: 'ATT', label: "Passing Att", type: "number"},
            {name: 'CMP', label: "Passing Cmp", type: "number"},
            {name: 'PCT', label: "Cmp %", type: "number"},
            {name: 'YPA', label: "YPA", type: "number"},
            {name: 'SACK', label: "Sacks Taken", type: "number"},
            {name: 'TD', label: "Passing TDs", type: "number"},
            {name: 'INT', label: "Ints Thrown", type: "number"},
            {name: 'LONG', label: "Long", type: "number"},
            {name: 'RATING', label: "Passer Rating", type: "number"}
        ],
        RUSHING: [
            {name: 'YDS', label: "Rushing Yards", type: "number"},
            {name: 'ATT', label: "Rushing Att", type: "number"},
            {name: 'AVG', label: "YPC", type: "number"},
            {name: 'FUM', label: "Fumbles", type: "number"},
            {name: 'TD', label: "TDs", type: "number"},
            {name: 'BTK', label: "Broken Tackles", type: "number"},
            {name: 'AFH', label: "After First Hit", type: "number"},
            {name: 'LONG', label: "Long", type: "number"},
            {name: '20YDS', label: "20+ Runs", type: "number"}
        ],
        REC: [
            {name: 'YDS', label: "Receiving Yards", type: "number"},
            {name: 'REC', label: "Receptions", type: "number"},
            {name: 'AVG', label: "YPC", type: "number"},
            {name: 'DROPS', label: "Drops", type: "number"},
            {name: 'TD', label: "TDs", type: "number"},
            {name: 'YAC', label: "YAC", type: "number"},
            {name: 'LONG', label: "Long", type: "number"}
        ],
        BLOCK: [
            {name: 'PANCAKE', label: "Pancakes", type: "number"},
            {name: 'SACKS ALLOWED', label: "Sacks Allowed", type: "number"}
        ],
        DEF: [
            {name: 'TACKLES', label: "Tackles", type: "number"},
            {name: 'TFL', label: "TFLs", type: "number"},
            {name: 'SACKS', label: "Sacks", type: "number"},
            {name: 'FF', label: "Forced Fumbles", type: "number"},
            {name: 'TD', label: "TDs", type: "number"},
            {name: 'INT', label: "INTs", type: "number"},
            {name: 'PASS DEFLECTION', label: "Pass Deflections", type: "number"},
            {name: 'CATCH ALLOWED', label: "Catches Allowed", type: "number"}
        ]
    }

    const [showModal, setShowModal] = useState(false)
    const [playerData, setPlayerData] = useState({
        "First Name": '',
        'Last Name': '',
        'AGE': '',
        'SPEED': '',
        'ACCELERATION': '',
        'STRENGTH': '',
        'AWARENESS': '',
        'AGILITY': '',
        'CATCH': '',
        'CARRY': '',
        'JUMP': '',
        'BREAK TACKLE': '',
        'TACKLE': '',
        'THROW POWER': '',
        'THROW ACC': '',
        'PASS BLOCK': '',
        'RUN BLOCK': '',
        'KICK POWER': '',
        'KICK ACC': '',
        'IMPORTANCE': '',
        'STAMINA': '',
        'INJURY': '',
        'TOUGHNESS': '',
        'PLAYER EGO': '',
        'POSITION': '',
        'WGT': '',
        'HEIGHT': '',
        'PLAYER TENDENCY': '',
        'ROLE/WEAPON1': '',
        'ROLE/WEAPON2': '',
        'YEAR': '',
        'TEAM': ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setPlayerData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = createNewPlayer(playerData)
            if (!response.ok) throw new Error("Failed to create player")
            alert('Player created successfully!')
            setShowModal(false)
        }catch (error){
            console.error(error)
            alert("Error creating player")
        }
    }

    

    const dynamicFields = 
        playerData.position === 'QB' ? positionFields['PASSING']
        : playerData.position === 'TB' ? positionFields['RUSHING'] 
        : ['WR','TE-Rec'].includes(playerData.position) ? positionFields['REC']
        : ['LT','LG','C','RG','RT','FB','TE-Block'].includes(playerData.position) ? positionFields['BLOCK']
        : ['LDE','DT','RDE','LOLB','ILB','ROLB','CB','SS','FS'].includes(playerData.position) ? positionFields['DEF']
        : []

    return (
        <div className='create-player-container'>
            <button className='create-btn' onClick={() => setShowModal(true)}>Create Player</button>
            {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Create New Player</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                value={playerData.fName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                value={playerData.lName}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="YEAR"
                placeholder="Year"
                value={playerData.year}
                onChange={handleChange}
                required
              />
              <select
                name="team"
                value={playerData.team}
                onChange={handleChange}
                required
              >
                <option value="">Select Team</option>
                {teams.map((team) => (
                    <option key={team} value={team}>
                        {team}
                    </option>
                ))}
              </select>
              

              <select
                name="position"
                value={playerData.position}
                onChange={handleChange}
                required
              >
                <option value="">Select Position</option>
                {allPositions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>

              {/* Dynamic Position Fields */}
              {dynamicFields.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  value={playerData[field.name] || ''}
                  onChange={handleChange}
                  required
                />
              ))}

              <h4>Core Attributes</h4>
              <div className="core-grid">
                {[
                  'age', 'speed', 'acceleration', 'strength', 'awareness',
                  'agility', 'catch', 'carry', 'jump', 'tackle',
                  'throwPower', 'throwAcc', 'passBlock', 'runBlock',
                  'kickPower', 'kickAcc', 'stamina', 'injury', 'toughness', 'ego','importance', 'wgt',
                  'height'
                ].map((attr) => (
                  <input
                    key={attr}
                    type="number"
                    name={attr}
                    placeholder={attr.charAt(0).toUpperCase() + attr.slice(1)}
                    value={playerData[attr]}
                    onChange={handleChange}
                  />
                ))}
              </div>
              <h4>Player Roles and Weapons</h4>
              <div className='roles-weapons-grid'>
                <input
                    type="text"
                    name="playerTendency"
                    placeholder="Player Tendency"
                    value={playerData.playerTendency}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="roleWeapon1"
                    placeholder="Role/Weapon 1"
                    value={playerData.roleWeapon1}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="roleWeapon2"
                    placeholder="Role/Weapon 2"
                    value={playerData.roleWeapon2}
                    onChange={handleChange}
                    required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        </div>
    )
}

export default CreatePlayerForm