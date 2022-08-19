const catchAsync = require("../utils/catchAsync");
const Model = require("../model/order");
const isAuth = require("../utils/isAuth")
const expressAsyncHandler = require('express-async-handler');

// import { isAuth, isAdmin } from '../utils/utils';



exports.createOrder = (Model) => 
    catchAsync(async(req, res, next) => { 
            const addProduct = await Model.create(req.body);
            res.status(201).json({
                status: "success",
                data: addProduct,
        })
})

exports.getAll = (Model) =>
catchAsync(async (req, res) =>{
    const orders = await Model.find();
    res.send(orders)
})

exports.getOneOrder = (Model) => 
expressAsyncHandler(async (req, res) => {
    const order = await Model.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
})

exports.deleteOneOrder = (Model) =>
    catchAsync(async(req, res, next) => {
            const data = await Model.deleteOne(req.params._id);
            res.status(200).json({
                success: "success",
                data: data
            })
})
