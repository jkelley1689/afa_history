/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLeagueLeaders = /* GraphQL */ `
  mutation CreateLeagueLeaders(
    $input: CreateLeagueLeadersInput!
    $condition: ModelLeagueLeadersConditionInput
  ) {
    createLeagueLeaders(input: $input, condition: $condition) {
      id
      passingYards
      passingTDs
      completions
      passingAttempts
      qbInts
      mostSacked
      rushingYards
      rushingTDs
      rushingAvg
      yardsAFH
      rushingFumbles
      catches
      recYards
      recTDs
      yardsAfterCatch
      drops
      pancakes
      mostSacksAllowed
      tackles
      defTDs
      tfls
      forcedFumbles
      sacks
      passDeflections
      ints
      catchAllowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLeagueLeaders = /* GraphQL */ `
  mutation UpdateLeagueLeaders(
    $input: UpdateLeagueLeadersInput!
    $condition: ModelLeagueLeadersConditionInput
  ) {
    updateLeagueLeaders(input: $input, condition: $condition) {
      id
      passingYards
      passingTDs
      completions
      passingAttempts
      qbInts
      mostSacked
      rushingYards
      rushingTDs
      rushingAvg
      yardsAFH
      rushingFumbles
      catches
      recYards
      recTDs
      yardsAfterCatch
      drops
      pancakes
      mostSacksAllowed
      tackles
      defTDs
      tfls
      forcedFumbles
      sacks
      passDeflections
      ints
      catchAllowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLeagueLeaders = /* GraphQL */ `
  mutation DeleteLeagueLeaders(
    $input: DeleteLeagueLeadersInput!
    $condition: ModelLeagueLeadersConditionInput
  ) {
    deleteLeagueLeaders(input: $input, condition: $condition) {
      id
      passingYards
      passingTDs
      completions
      passingAttempts
      qbInts
      mostSacked
      rushingYards
      rushingTDs
      rushingAvg
      yardsAFH
      rushingFumbles
      catches
      recYards
      recTDs
      yardsAfterCatch
      drops
      pancakes
      mostSacksAllowed
      tackles
      defTDs
      tfls
      forcedFumbles
      sacks
      passDeflections
      ints
      catchAllowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createYearResults = /* GraphQL */ `
  mutation CreateYearResults(
    $input: CreateYearResultsInput!
    $condition: ModelYearResultsConditionInput
  ) {
    createYearResults(input: $input, condition: $condition) {
      id
      americanBowlChamp
      americanBowlRunnerUp
      Awards {
        id
        OPOY
        DPOY
        ROTY
        GOTY
        americanBowlMVP
        CBPOTY
        SGAward
        createdAt
        updatedAt
        __typename
      }
      LeagueLeaders {
        id
        passingYards
        passingTDs
        completions
        passingAttempts
        qbInts
        mostSacked
        rushingYards
        rushingTDs
        rushingAvg
        yardsAFH
        rushingFumbles
        catches
        recYards
        recTDs
        yardsAfterCatch
        drops
        pancakes
        mostSacksAllowed
        tackles
        defTDs
        tfls
        forcedFumbles
        sacks
        passDeflections
        ints
        catchAllowed
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      yearResultsAwardsId
      yearResultsLeagueLeadersId
      __typename
    }
  }
`;
export const updateYearResults = /* GraphQL */ `
  mutation UpdateYearResults(
    $input: UpdateYearResultsInput!
    $condition: ModelYearResultsConditionInput
  ) {
    updateYearResults(input: $input, condition: $condition) {
      id
      americanBowlChamp
      americanBowlRunnerUp
      Awards {
        id
        OPOY
        DPOY
        ROTY
        GOTY
        americanBowlMVP
        CBPOTY
        SGAward
        createdAt
        updatedAt
        __typename
      }
      LeagueLeaders {
        id
        passingYards
        passingTDs
        completions
        passingAttempts
        qbInts
        mostSacked
        rushingYards
        rushingTDs
        rushingAvg
        yardsAFH
        rushingFumbles
        catches
        recYards
        recTDs
        yardsAfterCatch
        drops
        pancakes
        mostSacksAllowed
        tackles
        defTDs
        tfls
        forcedFumbles
        sacks
        passDeflections
        ints
        catchAllowed
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      yearResultsAwardsId
      yearResultsLeagueLeadersId
      __typename
    }
  }
`;
export const deleteYearResults = /* GraphQL */ `
  mutation DeleteYearResults(
    $input: DeleteYearResultsInput!
    $condition: ModelYearResultsConditionInput
  ) {
    deleteYearResults(input: $input, condition: $condition) {
      id
      americanBowlChamp
      americanBowlRunnerUp
      Awards {
        id
        OPOY
        DPOY
        ROTY
        GOTY
        americanBowlMVP
        CBPOTY
        SGAward
        createdAt
        updatedAt
        __typename
      }
      LeagueLeaders {
        id
        passingYards
        passingTDs
        completions
        passingAttempts
        qbInts
        mostSacked
        rushingYards
        rushingTDs
        rushingAvg
        yardsAFH
        rushingFumbles
        catches
        recYards
        recTDs
        yardsAfterCatch
        drops
        pancakes
        mostSacksAllowed
        tackles
        defTDs
        tfls
        forcedFumbles
        sacks
        passDeflections
        ints
        catchAllowed
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      yearResultsAwardsId
      yearResultsLeagueLeadersId
      __typename
    }
  }
`;
export const createAwards = /* GraphQL */ `
  mutation CreateAwards(
    $input: CreateAwardsInput!
    $condition: ModelAwardsConditionInput
  ) {
    createAwards(input: $input, condition: $condition) {
      id
      OPOY
      DPOY
      ROTY
      GOTY
      americanBowlMVP
      CBPOTY
      SGAward
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAwards = /* GraphQL */ `
  mutation UpdateAwards(
    $input: UpdateAwardsInput!
    $condition: ModelAwardsConditionInput
  ) {
    updateAwards(input: $input, condition: $condition) {
      id
      OPOY
      DPOY
      ROTY
      GOTY
      americanBowlMVP
      CBPOTY
      SGAward
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAwards = /* GraphQL */ `
  mutation DeleteAwards(
    $input: DeleteAwardsInput!
    $condition: ModelAwardsConditionInput
  ) {
    deleteAwards(input: $input, condition: $condition) {
      id
      OPOY
      DPOY
      ROTY
      GOTY
      americanBowlMVP
      CBPOTY
      SGAward
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReceivingStat = /* GraphQL */ `
  mutation CreateReceivingStat(
    $input: CreateReceivingStatInput!
    $condition: ModelReceivingStatConditionInput
  ) {
    createReceivingStat(input: $input, condition: $condition) {
      id
      rec
      yds
      avg
      long
      td
      drops
      yac
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReceivingStat = /* GraphQL */ `
  mutation UpdateReceivingStat(
    $input: UpdateReceivingStatInput!
    $condition: ModelReceivingStatConditionInput
  ) {
    updateReceivingStat(input: $input, condition: $condition) {
      id
      rec
      yds
      avg
      long
      td
      drops
      yac
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReceivingStat = /* GraphQL */ `
  mutation DeleteReceivingStat(
    $input: DeleteReceivingStatInput!
    $condition: ModelReceivingStatConditionInput
  ) {
    deleteReceivingStat(input: $input, condition: $condition) {
      id
      rec
      yds
      avg
      long
      td
      drops
      yac
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDefensiveStat = /* GraphQL */ `
  mutation CreateDefensiveStat(
    $input: CreateDefensiveStatInput!
    $condition: ModelDefensiveStatConditionInput
  ) {
    createDefensiveStat(input: $input, condition: $condition) {
      id
      tackles
      tfl
      sacks
      ff
      td
      int
      pass_deflection
      catch_allowed
      deflection_rate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDefensiveStat = /* GraphQL */ `
  mutation UpdateDefensiveStat(
    $input: UpdateDefensiveStatInput!
    $condition: ModelDefensiveStatConditionInput
  ) {
    updateDefensiveStat(input: $input, condition: $condition) {
      id
      tackles
      tfl
      sacks
      ff
      td
      int
      pass_deflection
      catch_allowed
      deflection_rate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDefensiveStat = /* GraphQL */ `
  mutation DeleteDefensiveStat(
    $input: DeleteDefensiveStatInput!
    $condition: ModelDefensiveStatConditionInput
  ) {
    deleteDefensiveStat(input: $input, condition: $condition) {
      id
      tackles
      tfl
      sacks
      ff
      td
      int
      pass_deflection
      catch_allowed
      deflection_rate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBlockingStat = /* GraphQL */ `
  mutation CreateBlockingStat(
    $input: CreateBlockingStatInput!
    $condition: ModelBlockingStatConditionInput
  ) {
    createBlockingStat(input: $input, condition: $condition) {
      id
      pancakes
      sacks_allowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBlockingStat = /* GraphQL */ `
  mutation UpdateBlockingStat(
    $input: UpdateBlockingStatInput!
    $condition: ModelBlockingStatConditionInput
  ) {
    updateBlockingStat(input: $input, condition: $condition) {
      id
      pancakes
      sacks_allowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBlockingStat = /* GraphQL */ `
  mutation DeleteBlockingStat(
    $input: DeleteBlockingStatInput!
    $condition: ModelBlockingStatConditionInput
  ) {
    deleteBlockingStat(input: $input, condition: $condition) {
      id
      pancakes
      sacks_allowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRushingStat = /* GraphQL */ `
  mutation CreateRushingStat(
    $input: CreateRushingStatInput!
    $condition: ModelRushingStatConditionInput
  ) {
    createRushingStat(input: $input, condition: $condition) {
      id
      att
      yds
      td
      avg
      fumb
      btk
      afh
      twty_plus
      long
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRushingStat = /* GraphQL */ `
  mutation UpdateRushingStat(
    $input: UpdateRushingStatInput!
    $condition: ModelRushingStatConditionInput
  ) {
    updateRushingStat(input: $input, condition: $condition) {
      id
      att
      yds
      td
      avg
      fumb
      btk
      afh
      twty_plus
      long
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRushingStat = /* GraphQL */ `
  mutation DeleteRushingStat(
    $input: DeleteRushingStatInput!
    $condition: ModelRushingStatConditionInput
  ) {
    deleteRushingStat(input: $input, condition: $condition) {
      id
      att
      yds
      td
      avg
      fumb
      btk
      afh
      twty_plus
      long
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPassingStat = /* GraphQL */ `
  mutation CreatePassingStat(
    $input: CreatePassingStatInput!
    $condition: ModelPassingStatConditionInput
  ) {
    createPassingStat(input: $input, condition: $condition) {
      id
      cmp
      att
      yds
      pct
      ypa
      sack
      td
      int
      long
      rating
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePassingStat = /* GraphQL */ `
  mutation UpdatePassingStat(
    $input: UpdatePassingStatInput!
    $condition: ModelPassingStatConditionInput
  ) {
    updatePassingStat(input: $input, condition: $condition) {
      id
      cmp
      att
      yds
      pct
      ypa
      sack
      td
      int
      long
      rating
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePassingStat = /* GraphQL */ `
  mutation DeletePassingStat(
    $input: DeletePassingStatInput!
    $condition: ModelPassingStatConditionInput
  ) {
    deletePassingStat(input: $input, condition: $condition) {
      id
      cmp
      att
      yds
      pct
      ypa
      sack
      td
      int
      long
      rating
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      fName
      lName
      age
      speed
      acceleration
      strength
      awareness
      agility
      catch
      carry
      jump
      breakTackle
      tackle
      throwPower
      throwAcc
      passBlock
      runBlock
      kickPower
      kickAcc
      importance
      stamina
      kickReturn
      injury
      toughness
      ego
      position
      wgt
      height
      playerTendency
      roleWeapon
      ReceivingStat {
        id
        rec
        yds
        avg
        long
        td
        drops
        yac
        createdAt
        updatedAt
        __typename
      }
      DefensiveStat {
        id
        tackles
        tfl
        sacks
        ff
        td
        int
        pass_deflection
        catch_allowed
        deflection_rate
        createdAt
        updatedAt
        __typename
      }
      BlockingStat {
        id
        pancakes
        sacks_allowed
        createdAt
        updatedAt
        __typename
      }
      RushingStat {
        id
        att
        yds
        td
        avg
        fumb
        btk
        afh
        twty_plus
        long
        createdAt
        updatedAt
        __typename
      }
      PassingStat {
        id
        cmp
        att
        yds
        pct
        ypa
        sack
        td
        int
        long
        rating
        createdAt
        updatedAt
        __typename
      }
      year
      team
      createdAt
      updatedAt
      playerReceivingStatId
      playerDefensiveStatId
      playerBlockingStatId
      playerRushingStatId
      playerPassingStatId
      __typename
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      fName
      lName
      age
      speed
      acceleration
      strength
      awareness
      agility
      catch
      carry
      jump
      breakTackle
      tackle
      throwPower
      throwAcc
      passBlock
      runBlock
      kickPower
      kickAcc
      importance
      stamina
      kickReturn
      injury
      toughness
      ego
      position
      wgt
      height
      playerTendency
      roleWeapon
      ReceivingStat {
        id
        rec
        yds
        avg
        long
        td
        drops
        yac
        createdAt
        updatedAt
        __typename
      }
      DefensiveStat {
        id
        tackles
        tfl
        sacks
        ff
        td
        int
        pass_deflection
        catch_allowed
        deflection_rate
        createdAt
        updatedAt
        __typename
      }
      BlockingStat {
        id
        pancakes
        sacks_allowed
        createdAt
        updatedAt
        __typename
      }
      RushingStat {
        id
        att
        yds
        td
        avg
        fumb
        btk
        afh
        twty_plus
        long
        createdAt
        updatedAt
        __typename
      }
      PassingStat {
        id
        cmp
        att
        yds
        pct
        ypa
        sack
        td
        int
        long
        rating
        createdAt
        updatedAt
        __typename
      }
      year
      team
      createdAt
      updatedAt
      playerReceivingStatId
      playerDefensiveStatId
      playerBlockingStatId
      playerRushingStatId
      playerPassingStatId
      __typename
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      fName
      lName
      age
      speed
      acceleration
      strength
      awareness
      agility
      catch
      carry
      jump
      breakTackle
      tackle
      throwPower
      throwAcc
      passBlock
      runBlock
      kickPower
      kickAcc
      importance
      stamina
      kickReturn
      injury
      toughness
      ego
      position
      wgt
      height
      playerTendency
      roleWeapon
      ReceivingStat {
        id
        rec
        yds
        avg
        long
        td
        drops
        yac
        createdAt
        updatedAt
        __typename
      }
      DefensiveStat {
        id
        tackles
        tfl
        sacks
        ff
        td
        int
        pass_deflection
        catch_allowed
        deflection_rate
        createdAt
        updatedAt
        __typename
      }
      BlockingStat {
        id
        pancakes
        sacks_allowed
        createdAt
        updatedAt
        __typename
      }
      RushingStat {
        id
        att
        yds
        td
        avg
        fumb
        btk
        afh
        twty_plus
        long
        createdAt
        updatedAt
        __typename
      }
      PassingStat {
        id
        cmp
        att
        yds
        pct
        ypa
        sack
        td
        int
        long
        rating
        createdAt
        updatedAt
        __typename
      }
      year
      team
      createdAt
      updatedAt
      playerReceivingStatId
      playerDefensiveStatId
      playerBlockingStatId
      playerRushingStatId
      playerPassingStatId
      __typename
    }
  }
`;
