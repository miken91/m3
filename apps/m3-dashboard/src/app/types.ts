export interface PlayerSearchResponse {
    search_player_all: {
        queryResults: PlayerIdQueryResults
    };
}

export interface PlayerStatResponse {
    sport_hitting_tm: {
        queryResults: PlayerStatQueryResults
    };
}

interface PlayerIdQueryResults {
    row: PlayerIdRow | undefined;
}

interface PlayerStatQueryResults {
    row: PlayerStatsRow | undefined;
}

export interface PlayerStatsRow {
    gidp: string,
    sac: string,
    np: string,
    sport_code: string,
    hgnd: string,
    tb: string,
    gidp_opp: string,
    sport_id: string,
    bb: string,
    avg: string,
    slg: string,
    team_full: string,
    ops: string,
    hbp: string,
    league_full: string,
    team_abbrev: string,
    so: string,
    hfly: string,
    wo: string,
    league_id: string,
    sf: string,
    team_seq: string,
    league: string,
    hpop: string,
    cs: string,
    season: string,
    sb: string,
    go_ao: string,
    ppa: string,
    player_id: string,
    ibb: string,
    team_id: string,
    roe: string,
    go: string,
    hr: string,
    rbi: string,
    babip: string,
    lob: string,
    end_date: string,
    xbh: string,
    league_short: string,
    g: string,
    d: string,
    sport: string,
    team_short: string,
    tpa: string,
    h: string,
    obp: string,
    hldr: string,
    t: string,
    ao: string,
    r: string,
    ab: string
}

interface PlayerIdRow {
    player_id: string;
}