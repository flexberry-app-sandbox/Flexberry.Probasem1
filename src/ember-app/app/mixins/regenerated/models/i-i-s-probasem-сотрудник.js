import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-probasem-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-probasem-сотрудник.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-probasem-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-probasem-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-probasem-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-probasem-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    должность: belongsTo('i-i-s-probasem-должность', 'Должность', {
      наимДолжности: attr('Должность', { index: 4 }),
      карта: belongsTo('i-i-s-probasem-карта', '', {
        кодКарты: attr('', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: 3, displayMemberPath: 'наимДолжности' })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-probasem-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    должность: belongsTo('i-i-s-probasem-должность', 'Должность', {
      наимДолжности: attr('Должность', { index: 3 }),
      карта: belongsTo('i-i-s-probasem-карта', '', {
        кодКарты: attr('КодКарты', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
