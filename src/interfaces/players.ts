interface PlayerResult {
    status:     string;
    returnData: PlayerData;
}

interface PlayerData {
    torneo:    Torneo;
    juego:     Juego;
    jugadores: Jugadore[];
}

interface Juego {
    _isNew:     boolean;
    _id:        string;
    slug:       ScopeEnum;
    showcase:   string;
    logo:       string;
    bigLogo:    string;
    background: string;
    guide:      string;
    company:    string;
    official:   boolean;
    status:     boolean;
    name:       string;
    resume:     string;
    website:    string;
    order:      number;
    formatMode: FormatMode;
    sponsors:   string[];
    cardColor:  string;
    cardImage:  string;
    ignExample: string;
}

interface FormatMode {
    individual: boolean;
    teams:      boolean;
}

enum ScopeEnum {
    Temtem = "temtem",
}

interface Jugadore {
    _isNew:              boolean;
    _id:                 string;
    username:            string;
    emails:              any[];
    profile:             Profile;
    ban:                 boolean;
    silence:             boolean;
    bVerified:           boolean;
    credits:             number;
    legalDocs:           any[];
    roles:               Role[];
    academic:            Academic;
    enrollment:          null;
    identification:      null;
    usersvacanciesGames: any[];
    country:             string;
    fechaRegistro?:      Date;
}

interface Academic {
    institution: AcademicInstitution;
    season:      Season;
}

interface AcademicInstitution {
    id:     string;
    name:   string;
    slug:   string;
    logo:   string;
    siglas: string;
}


interface Season {
    id:   string;
    name: string;
    slug: string;
}


interface Profile {
    avatar:      string;
    addresses:   any[];
    phones:      any[];
    institution: ProfileInstitution;
    gameNicks:   GameNick[];
    socials:     Socials;
}

interface GameNick {
    id:   string;
    nick: string;
}

interface ProfileInstitution {
    id:   string;
    name: string;
    logo: string;
}

interface Socials {
    instagram?: null | string;
    youtube?:   null | string;
    discord?:   null | string;
    twitter?:   null | string;
    twitch?:    null | string;
    facebook?:  null;
}

interface Role {
    _id:      ID;
    scope:    ScopeEnum;
    assigned: boolean;
}

enum ID {
    Academic = "academic",
    Player = "player",
}

interface Torneo {
    _isNew:                   boolean;
    _id:                      string;
    createdAt:                Date;
    updatedAt:                Date;
    showcase:                 string;
    name:                     string;
    platform:                 string;
    slug:                     string;
    descripcion:              string;
    checkin:                  Checkin;
    portada:                  string;
    boxBackground:            string;
    localizacion:             string;
    organizador:              string;
    premios:                  string[];
    pais:                     string;
    status:                   boolean;
    formato:                  number;
    formatoParticipantes:     number;
    equipos:                  any[];
    temporada:                number;
    split:                    number;
    idJuego:                  string;
    estado:                   number;
    idParticipantes:          string[];
    registroParticipantes:    RegistroParticipante[];
    idClasificados:           string[];
    seeds:                    Seed[];
    seedType:                 string;
    minParticipantes:         number;
    maxParticipantes:         number;
    ocultarParticipantes:     boolean;
    inscripcionesPublicas:    boolean;
    fechaInicio:              Date;
    fechaLimiteInscripciones: Date;
    etapas:                   Etapa[];
    season:                   Season;
    changeSlug:               boolean;
    tags:                     any[];
    usersListAdmin:           any[];
    regions:                  string[];
    message:                  string;
    type:                     number;
}

interface Checkin {
    type:     string;
    isActive: boolean;
}

interface Etapa {
    indexEtapa:            number;
    formatoEtapa:          number;
    estadoEtapa:           number;
    etapaPorGrupos:        boolean;
    balancearPorGrupos:    boolean;
    isStageShuffle:        boolean;
    grupos:                Grupo[];
    nClasificadosPorGrupo: number;
    eliminacion:           Eliminacion;
}

interface Eliminacion {
    finalesExtra:           number;
    partido3puesto:         boolean;
    soloHastaClasificacion: boolean;
}

interface Grupo {
    indexGrupo:       number;
    idParticipantes:  string[];
    idClasificados:   string[];
    rondas:           Ronda[];
    rondasPerdedores: RondasPerdedore[];
}

interface Ronda {
    indexRonda:         number;
    partidos:           RondaPartido[];
    fechaRonda:         Date;
    fechaLimiteRonda:   Date;
    configuracionRonda: any[];
}

interface RondaPartido {
    indexPartido:               number;
    indexRonda:                 number;
    bRondaPerdedores:           boolean;
    nextPartido?:               NextPartido;
    nextPartidoPerdedor?:       NextPartido;
    participantes:              Participante[];
    estadoPartido:              number;
    resultado:                  Resultado;
    fechaLimite:                Date;
    fechaPartido:               Date;
    envioResultadosFechaLimite: Date;
    idChat?:                    string;
}

interface NextPartido {
    indexParticipante: number;
    indexPartido:      number;
    indexRonda:        number;
}

interface Participante {
    _id:                  string;
    seed?:                number;
    name:                 string;
    participanteInicial:  boolean;
    puntuacionEnviadaFFA: any[];
    puntuacionEnviada?:   number[];
    descripcion?:         string;
}

interface Resultado {
    puntuacion:               number[];
    ganador:                  number;
    puntuacionSetsFreeForAll: any[];
    configuracionSets:        any[];
}

interface RondasPerdedore {
    indexRonda:         number;
    partidos:           RondasPerdedorePartido[];
    fechaRonda:         Date;
    fechaLimiteRonda:   Date;
    configuracionRonda: any[];
}

interface RondasPerdedorePartido {
    indexPartido:               number;
    indexRonda:                 number;
    bRondaPerdedores:           boolean;
    nextPartido:                NextPartido;
    participantes:              Participante[];
    estadoPartido:              number;
    resultado:                  Resultado;
    fechaLimite:                Date;
    fechaPartido:               Date;
    envioResultadosFechaLimite: Date;
    idChat:                     string;
}

interface RegistroParticipante {
    participantId: string;
    fechaRegistro: Date;
    roster:        string;
}

interface Seed {
    seed:          number;
    participantId: string;
    participant:   string;
}

interface UniquePlayers {
    teamId: string;
    participant: {
        id: string;
        name: string;
    }
}

export { PlayerResult,  RegistroParticipante, Seed, UniquePlayers }