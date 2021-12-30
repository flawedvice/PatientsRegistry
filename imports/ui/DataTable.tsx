import React from 'react';
import { PatientData } from './PatientData';

export type DataTableProps = {
  patients: {
    _id?: string,
    name: string,
    fatherSurname: string,
    motherSurname: string,
    rut: string,
    state: string,
    city: string
  }[]
};

export const DataTable = (props: DataTableProps) => {
    return (
        <table>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>RUT</th>
            <th>Región</th>
            <th>Comuna</th>
          </tr>
        </thead>
        <tbody>
          { props.patients.map( patient => <PatientData key={ patient._id } patient={ patient }/>) }
        </tbody>
      </table>
    );
};