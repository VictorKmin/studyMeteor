import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

import './main.html';
import '../layouts/homePage/HomeLayout.html';
import '../layouts/homePage/HomeLayout.js';
import '../layouts/usersPage/usersLayout.html';
import '../layouts/usersPage/usersLayout.js';
import '../layouts/MainLayout.html';


FlowRouter.route('/', {
    action() {
        console.log('HOME PAGE');
        return BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/authors', {
    action() {
        console.log('AUTHORS');
        return BlazeLayout.render('HomeLayout')
    }
});

FlowRouter.route('*', {
    action() {
        console.log('ANOTHER PAGE');
        return BlazeLayout.render('users');

    }
});
