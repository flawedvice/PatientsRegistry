import { Mongo } from "meteor/mongo";

export type Patient = {
    _id?: string,
    name: string,
    fatherSurname: string,
    motherSurname: string,
    rut: string,
    state: string,
    city: string,
    createdAt: Date
};

export const PatientsCollection = new Mongo.Collection<Patient>('patients');