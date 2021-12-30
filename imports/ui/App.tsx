import React from 'react';
import { DataTable } from './DataTable';
import { PatientForm } from './PatientForm';


export const App = () => (
  <main>
    <section id="form-section">
      <PatientForm />
    </section>
    <section id="data-section">
      <DataTable />
    </section>
  </main>
);
