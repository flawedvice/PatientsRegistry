import { Meteor } from 'meteor/meteor';

import { PatientsCollection } from '/imports/database/PatientsCollection';
import { State, StatesCollection } from '/imports/database/StatesCollection';
import '/imports/api/patientsMethods';


const States = require('../imports/database/States.json');
const insertState = (state: State) => {
  StatesCollection.insert(state)
};


Meteor.startup(() => {
  console.log(PatientsCollection.find().count());
  if (StatesCollection.find().count() === 0) {
    States.regiones.forEach( (state: State) => insertState(state));
  }
});
