interface Driver {
    givenName: string;
    familyName: string;
    code: string;
    nationality: string;
}

interface Results{
    Driver: Driver,
    Constructor:{
        name: string;
    }
}

interface RaceTable{
    season: string;
    raceName: string;
    Results: Array<Results>;
}
export interface SeasonRaces{
    Races: Array<RaceTable>
}