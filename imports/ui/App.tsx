import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTracker } from 'meteor/react-meteor-data';
import { DataTable } from './DataTable';
import { PatientForm } from './PatientForm';
import { PatientsCollection } from '../database/PatientsCollection';
import { Fields } from './PatientForm';

export const App = () => {

  // Get patients from db
  const patients = useTracker(() => PatientsCollection.find({}).fetch());

  const { reset, formState: { isSubmitSuccessful } } = useForm<Fields>();

  const onSubmit:SubmitHandler<Fields> = data => {
    PatientsCollection.insert(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({});
    } 
  }, [ isSubmitSuccessful, SubmitEvent ]);
  
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
