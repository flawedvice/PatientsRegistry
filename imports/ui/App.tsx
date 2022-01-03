import React from 'react';
import { Meteor } from 'meteor/meteor';
import { SubmitHandler } from 'react-hook-form';
import { useTracker } from 'meteor/react-meteor-data';
import { formatRut } from 'rutlib/lib';

import { Patient, PatientsCollection } from '../database/PatientsCollection';
import { StatesCollection } from '../database/StatesCollection';

import { Fields, PatientForm } from './PatientForm';
import { DataTable } from './DataTable';



export const App = () => {

  // Get patients from db
  const patients = useTracker(() => PatientsCollection.find({}, {
    sort: { createdAt: -1 }
  }).fetch());

  // Get states from db
  const states:any = StatesCollection.find({}).fetch();


  const onSubmit:SubmitHandler<Fields> = (data: Patient) => {
    data.rut = formatRut(data.rut);
    data.createdAt = new Date();
    Meteor.call('patients.insert', data);
  };
  
  
  return (
    <main>
      <section id="form-section">
        <PatientForm onSubmit={ onSubmit } states={ states }/>
      </section>
      <section id="data-section">
        <DataTable patients={ patients } />
      </section>
    </main>
  )
};
