interface Driver {
    givenName: string;
    familyName: string;
    code: string;
    nationality: string;
}
interface DriverStandings{
    Driver : Driver
}
export interface WorldChampion{
    season: string;
    DriverStandings: Array<DriverStandings>;
}