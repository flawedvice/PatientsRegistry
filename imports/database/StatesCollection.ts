import { Mongo } from "meteor/mongo";


export type State = {
    _id?: string,
    region: string,
    comunas: string[],
}

export const StatesCollection = new Mongo.Collection('states');