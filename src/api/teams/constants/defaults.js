const DEFAULTS = {

}

export const ALL_TEAMS = {
  method: 'allTeams',
  endpoint: '/teams',
}

export const TEAM = {
  method: 'team',
  parameter: 'TEAM_ID',
  endpoint: '/teams'
}

export const TEAM_ROSTER = {
  expand: [
    'team.roster'
  ],
  method: 'roster',
  parameter: 'TEAM_ID',
  endpoint: '/teams'
}

export const TEAM_STATS = {
  expand: [
    'team.stats'
  ],
  method: 'stats',
  parameter: 'TEAM_ID',
  endpoint: '/teams'
}
