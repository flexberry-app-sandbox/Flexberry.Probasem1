import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbasemДолжностьLForm from './forms/i-i-s-probasem-должность-l';
import IISProbasemКартаLForm from './forms/i-i-s-probasem-карта-l';
import IISProbasemКомнатаLForm from './forms/i-i-s-probasem-комната-l';
import IISProbasemРегистрВходаLForm from './forms/i-i-s-probasem-регистр-входа-l';
import IISProbasemРегистрГостейLForm from './forms/i-i-s-probasem-регистр-гостей-l';
import IISProbasemСотрудникLForm from './forms/i-i-s-probasem-сотрудник-l';
import IISProbasemДолжностьEForm from './forms/i-i-s-probasem-должность-e';
import IISProbasemКартаEForm from './forms/i-i-s-probasem-карта-e';
import IISProbasemКомнатаEForm from './forms/i-i-s-probasem-комната-e';
import IISProbasemРегистрВходаEForm from './forms/i-i-s-probasem-регистр-входа-e';
import IISProbasemРегистрГостейEForm from './forms/i-i-s-probasem-регистр-гостей-e';
import IISProbasemСотрудникEForm from './forms/i-i-s-probasem-сотрудник-e';
import IISProbasemВходГостяModel from './models/i-i-s-probasem-вход-гостя';
import IISProbasemВходСотрудникаModel from './models/i-i-s-probasem-вход-сотрудника';
import IISProbasemДолжностьModel from './models/i-i-s-probasem-должность';
import IISProbasemКартаModel from './models/i-i-s-probasem-карта';
import IISProbasemКомнатаModel from './models/i-i-s-probasem-комната';
import IISProbasemРегистрВходаModel from './models/i-i-s-probasem-регистр-входа';
import IISProbasemРегистрГостейModel from './models/i-i-s-probasem-регистр-гостей';
import IISProbasemСотрудникModel from './models/i-i-s-probasem-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probasem-вход-гостя': IISProbasemВходГостяModel,
    'i-i-s-probasem-вход-сотрудника': IISProbasemВходСотрудникаModel,
    'i-i-s-probasem-должность': IISProbasemДолжностьModel,
    'i-i-s-probasem-карта': IISProbasemКартаModel,
    'i-i-s-probasem-комната': IISProbasemКомнатаModel,
    'i-i-s-probasem-регистр-входа': IISProbasemРегистрВходаModel,
    'i-i-s-probasem-регистр-гостей': IISProbasemРегистрГостейModel,
    'i-i-s-probasem-сотрудник': IISProbasemСотрудникModel
  },

  'application-name': 'Probasem',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probasem',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probasem',
          title: 'Probasem'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        probasem: {
          caption: 'Probasem',
          title: 'Probasem',
          'i-i-s-probasem-регистр-гостей-l': {
            caption: 'Регистр гостей',
            title: ''
          },
          'i-i-s-probasem-карта-l': {
            caption: 'Карта',
            title: ''
          },
          'i-i-s-probasem-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-probasem-регистр-входа-l': {
            caption: 'Регистр входа',
            title: ''
          },
          'i-i-s-probasem-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-probasem-комната-l': {
            caption: 'Комната',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probasem-должность-l': IISProbasemДолжностьLForm,
    'i-i-s-probasem-карта-l': IISProbasemКартаLForm,
    'i-i-s-probasem-комната-l': IISProbasemКомнатаLForm,
    'i-i-s-probasem-регистр-входа-l': IISProbasemРегистрВходаLForm,
    'i-i-s-probasem-регистр-гостей-l': IISProbasemРегистрГостейLForm,
    'i-i-s-probasem-сотрудник-l': IISProbasemСотрудникLForm,
    'i-i-s-probasem-должность-e': IISProbasemДолжностьEForm,
    'i-i-s-probasem-карта-e': IISProbasemКартаEForm,
    'i-i-s-probasem-комната-e': IISProbasemКомнатаEForm,
    'i-i-s-probasem-регистр-входа-e': IISProbasemРегистрВходаEForm,
    'i-i-s-probasem-регистр-гостей-e': IISProbasemРегистрГостейEForm,
    'i-i-s-probasem-сотрудник-e': IISProbasemСотрудникEForm
  },

});

export default translations;
