import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.probasem.caption'),
          title: i18n.t('forms.application.sitemap.probasem.title'),
          children: [{
            link: 'i-i-s-probasem-регистр-гостей-l',
            caption: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-регистр-гостей-l.caption'),
            title: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-регистр-гостей-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-probasem-карта-l',
            caption: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-карта-l.caption'),
            title: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-карта-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-probasem-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-сотрудник-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-probasem-регистр-входа-l',
            caption: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-регистр-входа-l.caption'),
            title: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-регистр-входа-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-probasem-должность-l',
            caption: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-должность-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-probasem-комната-l',
            caption: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.probasem.i-i-s-probasem-комната-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})