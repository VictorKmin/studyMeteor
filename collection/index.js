import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Posts = new Mongo.Collection('posts');
export const Services = new Mongo.Collection('services');

// Описуємо всі методи
Meteor.methods({
    // метод, який вносить в базу записи
    "insertPost"(text) {
        // Перевіряю чи це стрінга
        check(text, String);
        //Запис в базу Mongo
        Posts.insert({
            text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    }
});