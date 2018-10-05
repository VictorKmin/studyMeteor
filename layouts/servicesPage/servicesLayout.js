import {Template} from "meteor/templating";
import {Services} from "../../collection";
import {Meteor} from "meteor/meteor";

try {

    /**
     * Create service with params from front-end page /service
     * @param title - input text from front end
     * @param description - input text from front end
     */
    Template.services.events({
        'click #create'() {
            const title = document.getElementById('newServiceTitle').value;
            const description = document.getElementById('newServiceDescription').value;
            Meteor.call("insertService", {title, description});
        },

        /**
         * Method delete view from DataBase
         * @param this._id - id of div in DataBase
         */
        'click #delete'() {
            console.log(`delete ${this._id}`);
            Services.remove({_id: this._id});
        },

        /**
         * This method update description text when button "update" was clicked
         * To update view we need to call onDescriptionInputBlur method with id of view and event target
         */

        'click #update'() {
            const id = this._id;
            // jQuery Magic
            const desc = $(event.path[1]).find('#description');
            //Текст всередині кнопочки
            const descContent = desc[0].innerText;
            // Дівка, де знаходиться наша кнопочка
            const parent = desc.context;
            // Фіча. шо  не плодити куча кнопочок
            desc.remove();
            //Створюю нове поле з інпутом
            $(parent).prepend($('<input type="text"/>')
                // В яке кладу значення
                    .val(descContent)
                    //Тут навішую колбек на івент brur - віджаття кнопки
                    .on('blur', event => onDescriptionInputBlur(id, event.target))
                    // і даю для нього клас, що б можна було знайти потім той клас
                    .addClass('editDescription')
            );
            // фокусуємся на клас. якйи ми створили вище
            $('.editDescription').focus();
        },
    });

    /**
     *  Set value from text field to div and save it in DataBase
     * @param id - id of view from DataBase
     * @param el - element where mouse was clicked
     */
    const onDescriptionInputBlur = (id, el) => {
        const value = el.value.trim();
        const parent = $(el).parents()[0];
        $(parent).append($('<div id="description" />').text(value));
        Meteor.call("updateService", {id, description: value});
        $(el).remove();
    };

    /**
     * This method find all services in dataBase
     */
    Template.services.helpers({
        findAllServices() {
            return Services.find({})
        },
    });
} catch (e) {
    document.write(e)
}