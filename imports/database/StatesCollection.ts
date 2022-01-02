import { Mongo } from "meteor/mongo";


export type State = {
    region: string,
    comunas: string[],
}

export const StatesCollection = new Mongo.Collection('states');