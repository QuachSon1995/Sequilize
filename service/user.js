const User = require('../models/user')
module.exports= class user{
    constructor(){

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
    