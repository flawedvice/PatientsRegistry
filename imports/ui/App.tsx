import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useTracker } from 'meteor/react-meteor-data';
import { DataTable } from './DataTable';
import { PatientForm } from './PatientForm';
import { Patient, PatientsCollection } from '../database/PatientsCollection';
import { Fields } from './PatientForm';


export const App = () => {

  // Get patients from db
  const patients = useTracker(() => PatientsCollection.find({}).fetch());

  const onSubmit:SubmitHandler<Fields> = (data: Patient) => {
    PatientsCollection.insert(data);
  };
  
  
  return (
    <main>
      <section id="form-section">
        <PatientForm onSubmit={ onSubmit }/>
      </section>
      <section id="data-section">
        <DataTable patients={ patients } />
      </section>
    </main>
  )
};
