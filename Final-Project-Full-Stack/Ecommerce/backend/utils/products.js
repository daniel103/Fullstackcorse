const catchAsync = require("./catchAsync");

exports.createOne = (Model) => 
    catchAsync(async(req, res, next) => {     
            const addProduct = await Model.create(req.body);
            res.status(201).json({
                status: "success",
                data: addProduct,
        })
})

exports.getAll = (Model) =>
    catchAsync(async(req, res, next) => {
            const allProducts = await Model.find()
            res.json({
                data: allProducts
            });
})

exports.updateOne = (Model) =>
    catchAsync(async(req, res, next) => {
            const updateOneProduct = await Model.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({
                success: "success",
                data: updateOneProduct
            })
    })

exports.filterCategory = (Model) =>
    async(req, res) => {
        try {
            const data = await Model.filter((item) => item.brand === req.params.category)
            console.log(data)
            res.status(200).json({
                success: "success",
                data: data
            })
        } catch (error) {
            res.send(error)
        }
    }

exports.getOne = (Model) =>
    catchAsync(async(req, res, next) => {
        const data = await Model.findById(req.params.id);
            res.status(200).json({
                status: "success",
                data: data,
            });
    })

exports.deleteOne = (Model) =>
    catchAsync(async(req, res, next) => {
            const data = await Model.deleteOne(req.params._id);
            res.status(200).json({
                success: "success",
                data: data
            })
    })