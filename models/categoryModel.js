/**
 * Created by kissi on 13/10/17.
 */
var mongoose=require('mongoose')
var Schema = mongoose.Schema
//var mongoosastic = require('mongoosastic');

/*mongoose.connect('mongodb://localhost:27017/test33');


var elasticsearch = require('elasticsearch');
var esClient = new elasticsearch.Client({host: 'localhost:9200'});
*/

var CategorySchema=Schema({

    categoryName:{type : String, es_indexed:true},
    eventsCategory:[{type:Schema.Types.ObjectId ,ref:'events'}]

})
/*
CategorySchema.plugin(mongoosastic, {
    esClient: esClient
})
*/
var ModelCategory = mongoose.model('category',CategorySchema)


module.exports=ModelCategory;





