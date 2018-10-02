import {Template} from "meteor/templating";
import {Meteor} from "meteor/meteor";

import "./usersLayout.html"

Template.users.helpers({
    users() {
        return Meteor.users.find({})
    }
});

Template.oneUser.events({
    'click button'() {
        const currentUser = Meteor.userId();
        const clickUser =
        console.log(currentUser);
    }
});