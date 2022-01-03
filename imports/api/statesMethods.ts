import { Meteor } from "meteor/meteor";
import { StatesCollection } from "../database/StatesCollection";

Meteor.methods({
    'states.insert'(state): void {
        StatesCollection.insert(state);
    }
});