export interface ITalentTree {
    maxPoints: number,
    paths: ITalentPath[]
}

export interface ITalentPath {
    name: string,
    talents: ITalent[]
}

export interface ITalent {
    name: string,
    icon: string,
    enabled: boolean
}