interface Driver {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}

interface Constructor {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

interface DriverStanding {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
}

interface StandingsList {
    season: string;
    round: string;
    DriverStandings: DriverStanding[];
}

export interface RootObject {
    StandingsLists: StandingsList[];
}



