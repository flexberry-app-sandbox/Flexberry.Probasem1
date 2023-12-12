import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  данныеПаспорта: DS.attr('number'),
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаРождения: DS.attr('date'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  карта: DS.belongsTo('i-i-s-probasem-карта', { inverse: null, async: false })
});

export let ValidationRules = {
  данныеПаспорта: {
    descriptionKey: 'models.i-i-s-probasem-регистр-гостей.validations.данныеПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-probasem-регистр-гостей.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаРождения: {
    descriptionKey: 'models.i-i-s-probasem-регистр-гостей.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-probasem-регистр-гостей.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-probasem-регистр-гостей.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-probasem-регистр-гостей.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрГостейE', 'i-i-s-probasem-регистр-гостей', {
    дата: attr('Дата', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    данныеПаспорта: attr('Данные паспорта', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    карта: belongsTo('i-i-s-probasem-карта', 'Карта', {
      кодКарты: attr('Код карты', { index: 6, hidden: true }),
      комната: belongsTo('i-i-s-probasem-комната', '', {
        номер: attr('Комната', { index: 7 })
      }, { index: -1, hidden: true })
    }, { index: 5, displayMemberPath: 'кодКарты' })
  });

  modelClass.defineProjection('РегистрГостейL', 'i-i-s-probasem-регистр-гостей', {
    дата: attr('Дата', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    данныеПаспорта: attr('Данные паспорта', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    карта: belongsTo('i-i-s-probasem-карта', 'Код карты', {
      кодКарты: attr('Код карты', { index: 5 }),
      комната: belongsTo('i-i-s-probasem-комната', '', {
        номер: attr('Комната', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
