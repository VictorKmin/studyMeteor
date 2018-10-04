import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Services = new Mongo.Collection('services');

// Описуємо всі методи
Meteor.methods({
    // метод, який вносить в базу записи
    "insertService"({title, description}) {
        if (title === '' || description === '') {
            throw new Error('Something field is empty')
        } else {
            Services.insert({
                createdAt: new Date(),
                owner: Meteor.userId(),
                username: Meteor.user().username,
                title,
                description
            });
        }
    },

    //ServicesUpdate method

    "updateService"({id, description}) {
        if (description === '') {
            throw new Error('Something field is empty')
        } else {
            Services.update(
                {_id: id},
                {description}
            )
        }
    }
})
;