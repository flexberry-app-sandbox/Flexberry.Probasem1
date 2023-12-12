import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probasem-вход-сотрудника', 'Unit | Model | i-i-s-probasem-вход-сотрудника', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probasem-вход-гостя',
    'model:i-i-s-probasem-вход-сотрудника',
    'model:i-i-s-probasem-должность',
    'model:i-i-s-probasem-карта',
    'model:i-i-s-probasem-комната',
    'model:i-i-s-probasem-регистр-входа',
    'model:i-i-s-probasem-регистр-гостей',
    'model:i-i-s-probasem-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
