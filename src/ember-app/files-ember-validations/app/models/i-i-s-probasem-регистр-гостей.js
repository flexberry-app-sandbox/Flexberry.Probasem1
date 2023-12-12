import {
  defineNamespace,
  defineProjections,
  Model as РегистрГостейMixin
} from '../mixins/regenerated/models/i-i-s-probasem-регистр-гостей';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрГостейMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
