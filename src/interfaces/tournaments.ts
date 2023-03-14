interface TournamentResult {
    status:     string;
    returnData: TournamentData;
}

interface News {
    _id:          string;
    gameIds:      string[];
    publishedAt:  Date;
    coverpageImg: string;
    title:        string;
    resume:       string;
    slug:         string;
}

interface Ranking {
    _id:                  string;
    slug:                 string;
    createdAt:            Date;
    updatedAt:            Date;
    showcase:             string;
    groupName:            string;
    tabs:                 Tab[];
    formatoParticipantes: number;
}

interface Tab {
    nameTab:     string;
    tournaments: TabTournament[];
}

interface TabTournament {
    _id:         string;
    competitors: Competitor[];
}

interface Competitor {
    _id:    string;
    name:   string;
    points: number;
    foto:   string;
    slug:   string;
}

export interface ReturnDataTournament {
    _id:                  string;
    name:                 string;
    platform:             string;
    slug:                 string;
    portada:              string;
    boxBackground:        string;
    localizacion:         string;
    status:               boolean;
    formatoParticipantes: number;
    split:                number;
    estado:               number;
    idParticipantes:      string[];
    ocultarParticipantes: boolean;
    fechaInicio:          Date;
}



interface TournamentData {
    _isNew?:            boolean;
    _id:               string;
    createdAt:         Date;
    updatedAt:         Date;
    showcase:          string;
    title:             string;
    slug:              string;
    subtitle:          string;
    description:       string;
    color:             string;
    logo:              string;
    background:        string;
    outstanding:       boolean;
    categoryId:        string;
    socialNetwork:     any[];
    partnersIds:       any[];
    newsIds:           string[];
    tournamentsIds:    string[];
    landingsIds:       string[];
    rankingsIds:       string[];
    categoriesFaqsIds: string[];
    status:            boolean;
    order:             number;
    showPagination:    boolean;
    boxBackground?:    string;
    news?:             News[];
    tournaments?:      ReturnDataTournament[];
    landings?:         any[];
    rankings?:         Ranking[];
}

export { TournamentResult, TournamentData };