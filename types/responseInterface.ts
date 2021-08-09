export interface GameInfo {
    slug: string;
    name: string;
    released_at: number;
    updated_at: number;
    cover: string;
    url: string;
    genres: string[];
    rating_external: number;
    rating_external_count: number;
    platform: string[];
}

export interface UserInfo {
    email: string;
    games: GameInfo[];
}

export interface UserGames {
    games: GameInfo[];
}