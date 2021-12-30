import React from "react";
import { PatientDataRow } from "./PatientDataRow";

export const DataTable = () => {
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
          <PatientDataRow />
          <PatientDataRow />
          <PatientDataRow />
        </tbody>
      </table>
    );
};