import { Meteor } from 'meteor/meteor';

import { State, StatesCollection } from '/imports/database/StatesCollection';
import '/imports/api/patientsMethods';
import '/imports/api/statesMethods';


const States = require('../imports/database/States.json');



Meteor.startup(() => {
  const states = StatesCollection.find().count();
  if (states === 0) {
    States.regiones.forEach( (state: State) => Meteor.call('states.insert',state));
  }
  console.log(states);
});
