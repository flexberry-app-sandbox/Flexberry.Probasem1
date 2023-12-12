import { Serializer as РегистрВходаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probasem-регистр-входа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрВходаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
