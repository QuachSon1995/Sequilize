const categoryService = require('../service/category')

module.exports = {
    get_All: async (req, res) => {
      const category_all = await categoryService.all()
      return res.status(200).json({category_all})
    },
    findAllPublished: (req, res) => {
        console.log('anc')
    },
    get_Detail: async (req, res) => {
        id= req.params.id
        const category_detail = await categoryService.detail(id)
        return res.status(200).json({category_detail})
    },
    update: async (req, res) => {
        const id= req.params.id
        const category_update = await categoryService.edit(id)
        return res.status(200).json({category_update})
    },
    delete: (req, res) => {
        console.log('anc')
    },
    create: async(req, res) => {
        const { name, status } = req.body
        if (!(name && status)) return res.status(400).json({ message: "information empty" })
        else {
            const category_new = { name, status }
            const category_save = await categoryService.save(category_new)
            return res.status(200).json({message:"add category success"})
        }
    },
}