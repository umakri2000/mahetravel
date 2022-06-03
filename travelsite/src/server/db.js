
var nano = require("nano");
var nano_url =
  "https://apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn:ec6094ae0714dc7a5ffc50a86924bef3@fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud";
  console.log(nano_url);
const nanodb = nano(nano_url);

var post_travel = function (value, dbname) {
      return nanodb.use(dbname).insert(value);
    }
    var get = function (val, dbname) {
        return nanodb.use(dbname).find(val);
     } 
     var del_id = function (id, id1, dbname) {
      return  nanodb.use(dbname).destroy(id, id1);
}; 

module.exports = {
  get,
  del_id,
  post_travel,
};