import { Meteor } from "meteor/meteor";

import { PatientsCollection } from '../database/PatientsCollection';


Meteor.methods({
    
    'patients.insert'(data): void {
        PatientsCollection.insert(data);
    }

});