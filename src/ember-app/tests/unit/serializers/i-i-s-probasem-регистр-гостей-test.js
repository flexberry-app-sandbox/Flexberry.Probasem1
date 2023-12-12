import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probasem-регистр-гостей', 'Unit | Serializer | i-i-s-probasem-регистр-гостей', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probasem-регистр-гостей',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probasem-вид-карты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
