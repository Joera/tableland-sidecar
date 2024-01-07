export interface Creds {
    key: string,
    gateway: string
}

export interface Payload {

    creds?: Creds,
    table?: string,
    content?: any,
    query?: string
    sql_query?: string
}