const uuid = require('uuid')
const Products = require('../models/products.models');


const getAllProducts = async () => {
  const data = await Products.findAll()
  return data
}



const createProduct = async (data) => {
  const newProduct = await Products.create({
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price, 
    isAvailable: data.isAvailable
  })
  return newProduct
}

const getProductById = async (id) => {
  const data = await Products.findOne({
    where: {
      id
    }
  })
  return data
}




const editProduct = async (id, data) => {
  const response = await Products.update(data, {
    where: {
      id
    }
  })
  return response
}

const destroyProduct = async (id) => {
  const data = await Products.destroy({
    where: {
      id
    }
  })
  return data
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  destroyProduct
}