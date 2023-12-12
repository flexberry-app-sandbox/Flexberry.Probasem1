import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодДолжности: DS.attr('number'),
  наимДолжности: DS.attr('string'),
  карта: DS.belongsTo('i-i-s-probasem-карта', { inverse: null, async: false })
});

export let ValidationRules = {
  кодДолжности: {
    descriptionKey: 'models.i-i-s-probasem-должность.validations.кодДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наимДолжности: {
    descriptionKey: 'models.i-i-s-probasem-должность.validations.наимДолжности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  карта: {
    descriptionKey: 'models.i-i-s-probasem-должность.validations.карта.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-probasem-должность', {
    кодДолжности: attr('Код должности', { index: 0 }),
    наимДолжности: attr('Должность', { index: 1 }),
    карта: belongsTo('i-i-s-probasem-карта', 'Карта', {
      кодКарты: attr('Код карты', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'кодКарты' })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-probasem-должность', {
    кодДолжности: attr('Код должности', { index: 0 }),
    наимДолжности: attr('Должность', { index: 1 }),
    карта: belongsTo('i-i-s-probasem-карта', 'Код карты', {
      кодКарты: attr('Код карты', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
