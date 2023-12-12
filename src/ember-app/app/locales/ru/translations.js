import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probasem',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probasem',
          title: 'Probasem'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
