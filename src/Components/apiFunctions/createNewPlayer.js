import { generateClient } from 'aws-amplify/api'
import { createPassingStat, createRushingStat, createPlayer, createReceivingStat, updatePlayer, createBlockingStat } from '../../graphql/mutations'

async function createNewPlayer(data){

    let playerId = ""

    let player = {
        fName: data['First Name'],
        lName: data['Last Name'],
        age: data.AGE,
        speed: data.SPEED,
        acceleration: data.ACCELERATION,
        strength: data.STRENGTH,
        awareness: data.AWARENESS,
        agility: data.AGILITY,
        catch: data.CATCH,
        carry: data.CARRY,
        jump: data.JUMP,
        breakTackle: data['BREAK TACKLE'],
        tackle: data.TACKLE,
        throwPower: data['THROW POWER'],
        throwAcc: data['THROW ACC'],
        passBlock: data['PASS BLOCK'],
        runBlock: data['RUN BLOCK'],
        kickPower: data['KICK POWER'],
        kickAcc: data['KICK ACCURACY'],
        importance: data.IMPORTANCE,
        stamina: data.STAMINA,
        injury: data.INJURY,
        toughness: data.TOUGHNESS,
        ego: data['PLAYER EGO'],
        position: data.POSITION,
        wgt: data.WGT,
        height: data.HGTIN,
        playerTendency: data['PLAYER TENDENCY'],
        roleWeapon: [data['ROLE/WEAPON1'],data['ROLE/WEAPON2']],
        year: data.YEAR,
        team: data.TEAM
    }
    const client = generateClient()

    await client.graphql({
        query: createPlayer,
        variables: {input: player},
        authMode: "apiKey"
    }).then(res => {
        console.log(res)
        playerId = res.data.createPlayer.id
        CreatePlayerStats()
    })


    function CreatePlayerStats(){
        if(player.position === 'QB'){
            createPassingStats()
        }else if(player.position === 'TB'){
            createRushingStats()
        }else if(player.position === 'WR'){
            createRecStats()
        }else if(player.position === 'TE'){
            if(data.hasOwnProperty('REC')){
                createRecStats()
            }
            if(data.hasOwnProperty('PANCAKE')){
                createBlockingStats()
            }
        }
        else if(player.position === 'FB'
            || player.position === 'LT'
            || player.position === 'LG'
            || player.position === 'C'
            || player.position === 'RG'
            || player.position === 'RT'
        ){
            createBlockingStats()
        }
    }

    async function createPassingStats(){
        let passingStats = {
            cmp: data.CMP,
            att: data.ATT,
            yds: data.YDS,
            pct: data.PCT,
            ypa: data.YPA,
            sack: data.SACK,
            td: data.TD,
            int: data.INT,
            long: data.LONG,
            rating: data.RATING
        } 

        try {
            const passingStatResponse = await client.graphql({
                query: createPassingStat,
                variables: { input: passingStats }
            });
        
            let passingStatID = passingStatResponse.data.createPassingStat.id;
        
            await client.graphql({
                query: updatePlayer,
                variables: { input: { id:playerId, playerPassingStatId: passingStatID } }
            });
            
            console.log('Player successfully updated');
        } catch (error) {
            console.error('Error updating player with passing stat ID:', error);
        }
    }

    async function createRushingStats(){
        let rushingStats = {
            yds: data.YDS,
            att: data.ATT,
            avg: data.AVG,
            fumb: data.FUM,
            td: data.TD,
            btk: data.BTK,
            afh: data.AFH,
            long: data.LONG,
            twty_plus: data['20YDS']
        } 

        try {
            const rushingStatResponse = await client.graphql({
                query: createRushingStat,
                variables: { input: rushingStats }
            });
        
            let rushingStatID = rushingStatResponse.data.createRushingStat.id;
        
            await client.graphql({
                query: updatePlayer,
                variables: { input: { id:playerId, playerRushingStatId: rushingStatID } }
            });
            
            console.log('Player successfully updated');
        } catch (error) {
            console.error('Error updating player with rushing stat ID:', error);
        }


        
    }

    async function createRecStats(){
        let recStats = {
            yds: data.YDS,
            rec: data.REC,
            avg: data.AVG,
            drops: data.DROPS,
            td: data.TD,
            yac: data.YAC,
            long: data.LONG
        }
        
        try {
            const recStatResponse = await client.graphql({
                query: createReceivingStat,
                variables: { input: recStats }
            });
        
            let recStatID = recStatResponse.data.createReceivingStat.id;
        
            await client.graphql({
                query: updatePlayer,
                variables: { input: { id:playerId, playerReceivingStatId: recStatID } }
            });
            
            console.log('Player successfully updated');
        } catch (error) {
            console.error('Error updating player with rec stat ID:', error);
        }

        
    }
    
    async function createBlockingStats(){
        let blockingStats = {
            pancakes: data.PANCAKE,
            sacks_allowed: data['SACKS ALLOWED']
        }

        try {
            const blockingStatResponse = await client.graphql({
                query: createBlockingStat,
                variables: { input: blockingStats }
            });
        
            let blockingStatID = blockingStatResponse.data.createBlockingStat.id;
        
            await client.graphql({
                query: updatePlayer,
                variables: { input: { id:playerId, playerBlockingStatId: blockingStatID } }
            });
            
            console.log('Player successfully updated');
        } catch (error) {
            console.error('Error updating player with blocking stat ID:', error);
        }
    }

}

export default createNewPlayer