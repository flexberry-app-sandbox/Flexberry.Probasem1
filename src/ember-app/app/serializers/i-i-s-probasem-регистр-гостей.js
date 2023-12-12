import { Serializer as РегистрГостейSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probasem-регистр-гостей';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрГостейSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
