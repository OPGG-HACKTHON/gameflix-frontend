export interface Pagination {
    number: 0;
    size: number;
    numberOfElements: number;
    isFirst: boolean;
    isLast: boolean;
    hasNext: boolean;
    hasPrevious: boolean;
    totalPages: number;
    totalElements: number;
}

export interface SimpleGameInfo {
    slug: string;
    name: string;
    cover: string;
    release_at: number;
    store: string;
    developer: string;
    collected: boolean;
}

export interface GameSearchInfos {
    games: SimpleGameInfo[];
    number: number;
    size: number;
    numberOfElements: number;
    isFirst: boolean;
    isLast: boolean;
    hasNext: boolean;
    hasPrevious: boolean;
    totalPage: number;
    totalElements: number;
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

export interface GameResponse extends Pagination {
    games: SimpleGameInfo[];
}
