export type infoMovie = {
    detailMovie: detailCastInfo<string | number | any[]>,
    castInfo: detailCastInfo<number | []>,
}

export type detailCastInfo<T> = {
    [key: string]:  T
}

export type crewData = {
    job: string;
    original_name: string;
}

export type castData = {
    known_for_department: string;
    name: string;
}