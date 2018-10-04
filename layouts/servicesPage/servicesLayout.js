import {Template} from "meteor/templating";
import {Services} from "../../collection";
import {Meteor} from "meteor/meteor";

try {
    Template.services.events({
        'click #create'() {
            const title = document.getElementById('newServiceTitle').value;
            const description = document.getElementById('newServiceDescription').value;
            Meteor.call("insertService", {title, description});
        },

        'click #delete'() {
            console.log(`delete ${this._id}`);
            Services.remove({_id: this._id});
        },


        'click #description'(event) {
            const id = this._id;
            const title = $(event.target);
            const content = title.text();
            const parent = title.parents()[0];
            title.remove();
            $(parent).prepend($('<input type="text"/>')
                .val(content)
                //Тут навішую колбек на івент.
                .on('blur', event => onDescriptionInputBlur(id, event.target))
                .addClass('editDescription')
            );
            $('.editDescription').focus();
        }
    });
    const onDescriptionInputBlur = (id, el) => {
        const value = el.value;
        const parent = $(el).parents()[0];
        $(parent).prepend($('<div id="description" />').text(value));
        Meteor.call("updateService", {id,description: value});
        $(el).remove();
    };

    Template.services.helpers({
        findAllServices() {
            return Services.find({})
        }
    });
} catch (e) {
    document.write(e)
}