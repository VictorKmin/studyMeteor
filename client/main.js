// import {Meteor} from 'meteor/meteor';
// import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
// // import { BlazeLayout } from 'meteor/kadira:blaze-layout';
// import { Blaze } from 'meteor/blaze';
//
// // import React from 'react';
// // import * as BlazeLayout from "react-dom";
//
//
// FlowRouter.route('/', {
//     name: 'home',
//     action() {
//             console.log('HOME PAGE');
//
//             //No such layout
//             // this.render('../layouts/MainLayout.html');
//             // BlazeLayout.render('../layouts/MainLayout.html');
//             // BlazeLayout.render(Template.HomeLayout);
//             return Blaze.render( Template.HomeLayout);
//     }
// });
//
// FlowRouter.route('*', {
//     action() {
//         console.log('NOT FOUND')
//     }
// });

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


// Router = new Iron.Router;

// Router.route('/', function () {
//     console.log('HELLO');
//     this.render('Home');
// });

Router.map(function () {
    console.log('Hello');
    this.route('Home', { path: '/' });
});