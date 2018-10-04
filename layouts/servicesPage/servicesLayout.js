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


        'click #update'() {
            // 'click #description'(event) {
            const id = this._id;
            //Місце, на яке нажали
            // const title = event.target

            // Шукаємо div idшкою description (аналог document.getElementById)
            let some = event.path[1];
            console.log(some);
            const desc = $('#description');
            //Текст всередині кнопочки
            const content = desc.text();
            // Дівка, де знаходиться наша кнопочка
            const parent = desc.parents()[0];
            // Фіча. шо  не плодити куча кнопочок
            desc.remove();
            //Створюю нове поле з інпутом
            $(parent).prepend($('<input type="text"/>')
                // В яке кладу значення
                    .val(content)
                    //Тут навішую колбек на івент brur - віджаття кнопки
                    .on('blur', event => onDescriptionInputBlur(id, event.target))
                    // і даю для нього клас, що б можна було знайти потім той клас
                    .addClass('editDescription')
            );
            // фокусуємся на клас. якйи ми створили вище
            $('.editDescription').focus();
        },
    });


    const onDescriptionInputBlur = (id, el) => {
        const value = el.value.trim();
        const parent = $(el).parents()[0];
        $(parent).prepend($('<div id="description" />').text(value));
        Meteor.call("updateService", {id, description: value});
        $(el).remove();
    };

    Template.services.helpers({
        findAllServices() {
            return Services.find({})
        },
    });
} catch (e) {
    document.write(e)
}