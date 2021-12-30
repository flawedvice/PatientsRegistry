import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { DataTable } from './DataTable';
import { PatientForm } from './PatientForm';
import { PatientsCollection } from '../database/PatientsCollection';


export const App = () => {

  const patients = useTracker(() => PatientsCollection.find({}).fetch());
  
  return (
    <main>
      <section id="form-section">
        <PatientForm />
      </section>
      <section id="data-section">
        <DataTable patients={ patients } />
      </section>
    </main>
  )
};
