import { Meteor } from 'meteor/meteor';
import { Patient, PatientsCollection } from '/imports/database/PatientsCollection';

const insertPatient = (patient: Patient) => {
  PatientsCollection.insert(patient);
};

Meteor.startup(() => {
  if (PatientsCollection.find().count() === 0) {
    [
      {
        name: 'Vicente',
        fatherSurname: 'Aranda',
        motherSurname: 'Ahumada',
        rut: '20.427.305-7',
        state: 'Región Metropolitana',
        city: 'Peñaflor',
        createdAt: new Date()
      },
      {
        name: 'Francisca',
        fatherSurname: 'Streuly',
        motherSurname: 'Adrian',
        rut: '20.271.330-0',
        state: 'Región Metropolitana',
        city: 'Peñaflor',
        createdAt: new Date()
      }
    ].forEach(insertPatient);
  }
});
