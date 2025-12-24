import { generateClient } from 'aws-amplify/api'
import { createPlayer } from '../../graphql/mutations'

async function createNewPlayerFromUI(data){
    console.log(data)

    const client = generateClient()

    const player = {
        fName: data.fName,
        lname: data.lName,
        age: data.age,
        speed: data.speed,
        acceleration: data.acceleration,
        strength: data.strength,
        awareness: data.awareness,
        agility: data.agility,
        catch: data.catch,
        carry: data.carry,
        jump: data.jump,
        breakTackle: data.breakTackle,
        throwPower: data.throwPower,
        throwAcc: data.throwAcc,
        runBlock: data.runBlock,
        passBlock: data.passBlock,
        kickPower: data.kickPower,
        kickAcc: data.kickAcc,
        importance: data.importance,
        injury: data.injury,
        stamina: data.stamina,
        toughness: data.toughness,
        ego: data.ego,
        position: data.position,
        wgt: data.wgt,
        height: data.height,
        playerTendency: data.playerTendency,
        roleWeapon: [data['roleWeapon1'],data['roleWeapon2']],
        year: data.year,
        team: data.team
    }

    try{
        const res = await client.graphql({
            query: createPlayer,
            variables: {input: player},
            authMode: 'apikey'
        })
        playerId = res.data.createPlayer.id
    }catch (error){
        console.error("error creating player")
    }
}

export default createNewPlayerFromUI