import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// import '../layouts/HomeLayout.html'

FlowRouter.route('/', {
    name: 'home',
    action() {
        // Render a template using Blaze
        console.log('HOME PAGE');
        // this.render('../layouts/MainLayout.html');
        this.render('../client/main.html');

        // Can be used with BlazeLayout,
        // and ReactLayout for React-based apps
    }
});

// Create 404 route (catch-all)
FlowRouter.route('*', {
    action() {
        // Show 404 error page using Blaze
        console.log('NOT FOUND')

        // this.render('HomeLayout');

        // Can be used with BlazeLayout,
        // and ReactLayout for React-based apps
    }
});