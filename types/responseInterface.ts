export interface SimpleGameInfo {
    slug: string;
    name: string;
    cover: string;
}

export interface GameInfo {
    slug: string;
    name: string;
    release_at: number;
    updated_at: number;
    cover: string;
    url: string;
    genres: string[];
    rating_external: number;
    rating_external_count: number;
    platforms: string[];
    developer: string;
    description: string;
    background: string;
}

export interface UserInfo {
    id: string;
    email: string;
    games: SimpleGameInfo[];
}

export interface UserGames {
    games: GameInfo[];
}

export interface GameInfoSingluar {
    name: string;
    slug: string;
    cover: string;
}
