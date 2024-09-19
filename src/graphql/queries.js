/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeagueLeaders = /* GraphQL */ `
  query GetLeagueLeaders($id: ID!) {
    getLeagueLeaders(id: $id) {
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
export const listLeagueLeaders = /* GraphQL */ `
  query ListLeagueLeaders(
    $filter: ModelLeagueLeadersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagueLeaders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getYearResults = /* GraphQL */ `
  query GetYearResults($id: ID!) {
    getYearResults(id: $id) {
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
export const listYearResults = /* GraphQL */ `
  query ListYearResults(
    $filter: ModelYearResultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYearResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAwards = /* GraphQL */ `
  query GetAwards($id: ID!) {
    getAwards(id: $id) {
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
export const listAwards = /* GraphQL */ `
  query ListAwards(
    $filter: ModelAwardsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAwards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getReceivingStat = /* GraphQL */ `
  query GetReceivingStat($id: ID!) {
    getReceivingStat(id: $id) {
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
export const listReceivingStats = /* GraphQL */ `
  query ListReceivingStats(
    $filter: ModelReceivingStatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReceivingStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDefensiveStat = /* GraphQL */ `
  query GetDefensiveStat($id: ID!) {
    getDefensiveStat(id: $id) {
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
export const listDefensiveStats = /* GraphQL */ `
  query ListDefensiveStats(
    $filter: ModelDefensiveStatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDefensiveStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBlockingStat = /* GraphQL */ `
  query GetBlockingStat($id: ID!) {
    getBlockingStat(id: $id) {
      id
      pancakes
      sacks_allowed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlockingStats = /* GraphQL */ `
  query ListBlockingStats(
    $filter: ModelBlockingStatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlockingStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pancakes
        sacks_allowed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRushingStat = /* GraphQL */ `
  query GetRushingStat($id: ID!) {
    getRushingStat(id: $id) {
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
export const listRushingStats = /* GraphQL */ `
  query ListRushingStats(
    $filter: ModelRushingStatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRushingStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPassingStat = /* GraphQL */ `
  query GetPassingStat($id: ID!) {
    getPassingStat(id: $id) {
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
export const listPassingStats = /* GraphQL */ `
  query ListPassingStats(
    $filter: ModelPassingStatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPassingStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
