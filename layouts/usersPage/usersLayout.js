import {Template} from "meteor/templating";
import {Meteor} from "meteor/meteor";

import "./usersLayout.html"

Template.users.helpers({
// Find all users where user ID != current user ID
    users() {
        return Meteor.users.find( { _id: { $ne: Meteor.userId() } } )
    }
});

Template.oneUser.events({
    'click button'() {
        const currentUser = Meteor.userId();
        const clickUser = this._id;
        console.log(currentUser);
        console.log(clickUser);
    }
});