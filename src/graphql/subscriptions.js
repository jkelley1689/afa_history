/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLeagueLeaders = /* GraphQL */ `
  subscription OnCreateLeagueLeaders(
    $filter: ModelSubscriptionLeagueLeadersFilterInput
  ) {
    onCreateLeagueLeaders(filter: $filter) {
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
export const onUpdateLeagueLeaders = /* GraphQL */ `
  subscription OnUpdateLeagueLeaders(
    $filter: ModelSubscriptionLeagueLeadersFilterInput
  ) {
    onUpdateLeagueLeaders(filter: $filter) {
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
export const onDeleteLeagueLeaders = /* GraphQL */ `
  subscription OnDeleteLeagueLeaders(
    $filter: ModelSubscriptionLeagueLeadersFilterInput
  ) {
    onDeleteLeagueLeaders(filter: $filter) {
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
export const onCreateYearResults = /* GraphQL */ `
  subscription OnCreateYearResults(
    $filter: ModelSubscriptionYearResultsFilterInput
  ) {
    onCreateYearResults(filter: $filter) {
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
export const onUpdateYearResults = /* GraphQL */ `
  subscription OnUpdateYearResults(
    $filter: ModelSubscriptionYearResultsFilterInput
  ) {
    onUpdateYearResults(filter: $filter) {
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
export const onDeleteYearResults = /* GraphQL */ `
  subscription OnDeleteYearResults(
    $filter: ModelSubscriptionYearResultsFilterInput
  ) {
    onDeleteYearResults(filter: $filter) {
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
export const onCreateAwards = /* GraphQL */ `
  subscription OnCreateAwards($filter: ModelSubscriptionAwardsFilterInput) {
    onCreateAwards(filter: $filter) {
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
export const onUpdateAwards = /* GraphQL */ `
  subscription OnUpdateAwards($filter: ModelSubscriptionAwardsFilterInput) {
    onUpdateAwards(filter: $filter) {
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
export const onDeleteAwards = /* GraphQL */ `
  subscription OnDeleteAwards($filter: ModelSubscriptionAwardsFilterInput) {
    onDeleteAwards(filter: $filter) {
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
export const onCreateReceivingStat = /* GraphQL */ `
  subscription OnCreateReceivingStat(
    $filter: ModelSubscriptionReceivingStatFilterInput
  ) {
    onCreateReceivingStat(filter: $filter) {
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
export const onUpdateReceivingStat = /* GraphQL */ `
  subscription OnUpdateReceivingStat(
    $filter: ModelSubscriptionReceivingStatFilterInput
  ) {
    onUpdateReceivingStat(filter: $filter) {
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
export const onDeleteReceivingStat = /* GraphQL */ `
  subscription OnDeleteReceivingStat(
    $filter: ModelSubscriptionReceivingStatFilterInput
  ) {
    onDeleteReceivingStat(filter: $filter) {
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
export const onCreateDefensiveStat = /* GraphQL */ `
  subscription OnCreateDefensiveStat(
    $filter: ModelSubscriptionDefensiveStatFilterInput
  ) {
    onCreateDefensiveStat(filter: $filter) {
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
export const onUpdateDefensiveStat = /* GraphQL */ `
  subscription OnUpdateDefensiveStat(
    $filter: ModelSubscriptionDefensiveStatFilterInput
  ) {
    onUpdateDefensiveStat(filter: $filter) {
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
export const onDeleteDefensiveStat = /* GraphQL */ `
  subscription OnDeleteDefensiveStat(
    $filter: ModelSubscriptionDefensiveStatFilterInput
  ) {
    onDeleteDefensiveStat(filter: $filter) {
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
export const onCreateBlockingStat = /* GraphQL */ `
  subscription OnCreateBlockingStat(
    $filter: ModelSubscriptionBlockingStatFilterInput
  ) {
    onCreateBlockingStat(filter: $filter) {
      id
      pancakes
      sacks_allowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBlockingStat = /* GraphQL */ `
  subscription OnUpdateBlockingStat(
    $filter: ModelSubscriptionBlockingStatFilterInput
  ) {
    onUpdateBlockingStat(filter: $filter) {
      id
      pancakes
      sacks_allowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBlockingStat = /* GraphQL */ `
  subscription OnDeleteBlockingStat(
    $filter: ModelSubscriptionBlockingStatFilterInput
  ) {
    onDeleteBlockingStat(filter: $filter) {
      id
      pancakes
      sacks_allowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRushingStat = /* GraphQL */ `
  subscription OnCreateRushingStat(
    $filter: ModelSubscriptionRushingStatFilterInput
  ) {
    onCreateRushingStat(filter: $filter) {
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
export const onUpdateRushingStat = /* GraphQL */ `
  subscription OnUpdateRushingStat(
    $filter: ModelSubscriptionRushingStatFilterInput
  ) {
    onUpdateRushingStat(filter: $filter) {
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
export const onDeleteRushingStat = /* GraphQL */ `
  subscription OnDeleteRushingStat(
    $filter: ModelSubscriptionRushingStatFilterInput
  ) {
    onDeleteRushingStat(filter: $filter) {
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
export const onCreatePassingStat = /* GraphQL */ `
  subscription OnCreatePassingStat(
    $filter: ModelSubscriptionPassingStatFilterInput
  ) {
    onCreatePassingStat(filter: $filter) {
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
export const onUpdatePassingStat = /* GraphQL */ `
  subscription OnUpdatePassingStat(
    $filter: ModelSubscriptionPassingStatFilterInput
  ) {
    onUpdatePassingStat(filter: $filter) {
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
export const onDeletePassingStat = /* GraphQL */ `
  subscription OnDeletePassingStat(
    $filter: ModelSubscriptionPassingStatFilterInput
  ) {
    onDeletePassingStat(filter: $filter) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
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
