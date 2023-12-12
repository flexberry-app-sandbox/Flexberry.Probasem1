import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probasem-должность-l');
  this.route('i-i-s-probasem-должность-e',
  { path: 'i-i-s-probasem-должность-e/:id' });
  this.route('i-i-s-probasem-должность-e.new',
  { path: 'i-i-s-probasem-должность-e/new' });
  this.route('i-i-s-probasem-карта-l');
  this.route('i-i-s-probasem-карта-e',
  { path: 'i-i-s-probasem-карта-e/:id' });
  this.route('i-i-s-probasem-карта-e.new',
  { path: 'i-i-s-probasem-карта-e/new' });
  this.route('i-i-s-probasem-комната-l');
  this.route('i-i-s-probasem-комната-e',
  { path: 'i-i-s-probasem-комната-e/:id' });
  this.route('i-i-s-probasem-комната-e.new',
  { path: 'i-i-s-probasem-комната-e/new' });
  this.route('i-i-s-probasem-регистр-входа-l');
  this.route('i-i-s-probasem-регистр-входа-e',
  { path: 'i-i-s-probasem-регистр-входа-e/:id' });
  this.route('i-i-s-probasem-регистр-входа-e.new',
  { path: 'i-i-s-probasem-регистр-входа-e/new' });
  this.route('i-i-s-probasem-регистр-гостей-l');
  this.route('i-i-s-probasem-регистр-гостей-e',
  { path: 'i-i-s-probasem-регистр-гостей-e/:id' });
  this.route('i-i-s-probasem-регистр-гостей-e.new',
  { path: 'i-i-s-probasem-регистр-гостей-e/new' });
  this.route('i-i-s-probasem-сотрудник-l');
  this.route('i-i-s-probasem-сотрудник-e',
  { path: 'i-i-s-probasem-сотрудник-e/:id' });
  this.route('i-i-s-probasem-сотрудник-e.new',
  { path: 'i-i-s-probasem-сотрудник-e/new' });
});

export default Router;
