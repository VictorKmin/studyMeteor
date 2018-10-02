import {Template} from "meteor/templating";
import {Services} from "../../collection";

Template.services.helpers({
    findAllServices() {
       return Services.find({})
    }
});