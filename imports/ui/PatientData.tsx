import React from "react";

export type PatientDataProps = {
    patient: {
        _id?: string,
        name: string,
        fatherSurname: string,
        motherSurname: string,
        rut: string,
        state: string,
        city: string
    }
};


export const PatientData = (props: PatientDataProps) => {
    return (
        <tr>
            <td>{ props.patient.name }</td>
            <td>{ props.patient.fatherSurname }</td>
            <td>{ props.patient.motherSurname }</td>
            <td>{ props.patient.rut }</td>
            <td>{ props.patient.state }</td>
            <td>{ props.patient.city }</td>
        </tr>
    );
};