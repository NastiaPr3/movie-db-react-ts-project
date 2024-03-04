export interface IPerson {
    known_for_department: string
    name: string,
    character: string
    profile_path: string,
    cast_id: number,
    job: string
}

export interface IPeople {
    id: number,
    original_title: string,
    credits: {
        cast: IPerson[],
        crew: IPerson[]
    }
}
