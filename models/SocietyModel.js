var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var EventModel=require('./EventModel')
var UserModel=require('./UserModel')
mongoose.connect('mongodb://localhost:27017/hackforalgeria');



var SocietySchema = new Schema({
	'name' : String,
	'email' : String,
	'phone' : Number,
	'isPremium' : Boolean,


});



SocietySchema.statics.approuveParticipant=function(eventId,userId){
	EventModel.findOne({_id:eventId},function (err,suc) {
		if(!err) {
			var nonParticipant=[];
			suc.participent.push(userId);
			UserModel.findOne({_id:userId},function (err,user) {
				if(user){
					user.reputation+=6;
					user.save(function (err,res) {
						if(res){
							console.log('reputation updated')
						}
					})
				}
				else{
					console.log('user not found')
				}
			})

			//TODO increment point of user
		}


	})
}


var SocietyModel=mongoose.model('Society', SocietySchema);





module.exports = SocietyModel;