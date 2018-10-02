import {Accounts} from 'meteor/accounts-base'
import {Meteor} from 'meteor/meteor';
import {Template} from "meteor/templating";
import {Posts} from "../../collection";

// при реєстрації замість email просить username
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});


Template.HomeLayout.helpers({
        posts() {
            return Posts.find()
        },
        // posts: [
        //     {text: "1", username: 'Hello'},
        //     {text: "2", username: 'World'},
        //     {text: "3", username: 'Test'}
        // ]
    }
);

Template.HomeLayout.events({
    'click button'() {
        const text = document.getElementById('textField').value;
        const user = Meteor.user().username;
        Meteor.call("insertPost", text);

        console.log(user);
        console.log(text);
    }
});