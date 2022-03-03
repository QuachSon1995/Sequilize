const User = require('../models/user')
module.exports=  class user{
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
    static save(user){
      User.create(user)
    }
    static edit(_id){
      return new Promise((resolve, reject)=>{
        const user = User.findOne({where:{id:_id}})
        user ==null ? console.log('not found'): resolve(user)
      })
    }
    static async update_now(id){
      // User.update(
      //   { where: { id: _id} }
      // )
      await User.update({ userName: "Doe" },{
        where: { id: id}
      }).then(function() {})
    }
}
    