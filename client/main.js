import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

import './main.html';
import '../layouts/homePage/HomeLayout.html';
import '../layouts/homePage/HomeLayout.js';
import '../layouts/usersPage/usersLayout.html';
import '../layouts/usersPage/usersLayout.js';
import '../layouts/404Page/404Layout.html';
import '../layouts/404Page/404Layout.js';
import '../layouts/servicesPage/servicesLayout.html';
import '../layouts/servicesPage/servicesLayout.js';
import '../layouts/MainLayout.html';


FlowRouter.route('/', {
    action() {
        return BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/users', {
    action() {
        return BlazeLayout.render('users')
    }
});


FlowRouter.route('/services', {
    action() {
        return BlazeLayout.render('services')
    }
});

FlowRouter.route('*', {
    action() {
        return BlazeLayout.render('404');
    }
});
