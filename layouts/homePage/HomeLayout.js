import {Accounts} from 'meteor/accounts-base'

// при реєстрації замість email просить username
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});