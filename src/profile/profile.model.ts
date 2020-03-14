export interface Profile{
    sid:string;
    title:string;
    description:string;
    status;
}

export enum ProfileStatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}