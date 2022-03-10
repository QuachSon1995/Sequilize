const Category = require('../models/category')
module.exports = {
    save: (category) => {
        return new Promise((resolve, reject) => {
            const categories = Category.create(category).then(listcategory => resolve(listcategory))
        })

    }, 
    all:() => {
        return new Promise((resolve, reject) => {
            const categories = Category.findAll().then(listcategory => resolve(listcategory))
        })

    }, 
    detail:(id)=>{
        return new Promise((resolve, reject) => {
            const categories = Category.findOne({where:{id:id}}).then(listcategory => resolve(listcategory))
        })
    },
    edit:(id)=>{
        console.log(id)
        return new Promise((resolve, reject) => {
            const categories = Category.update({where:{id:id}})
        })
    },
}