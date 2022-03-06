const User = require('../models/account')
module.exports= class user{
    constructor(){

    }
    static findOne (email){
      return new Promise((resolve, reject)=>{
          User.findOne( {where:{ email: email }}).then(user=>resolve(user))
      })
       
    }
    static findAll (){
      return new Promise((resolve, reject)=>{
          User.findAll({raw:true}).then(listuser=>resolve(listuser))
      })
       
    }
    static save(user){
      User.create(user)
    }
}
    