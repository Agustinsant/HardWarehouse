import axios from "axios"

export const allProductsService = async () => {
  const allProducts = await axios({
    method: "GET",
    withCredentials: true,
    url: 'http://localhost:3001/products/showProducts/'
  })
  return allProducts.data.docs
}

export const singleProductService = async id => {
  const singleProduct = await axios({
    method: 'GET',
    withCredentials: true,
    url: `http://localhost:3001/products/showOne/${id}`
  })
  return singleProduct.data
}

export const categoriesProductService = async category => {
  const categoryProducts = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
  return categoryProducts.data
}

export const saleProductsService = async () => {
  const saleProducts = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
  return saleProducts.data
}

export const postProductService = async (product) => {
  const postProduct = await axios({
    method: "POST",
    data: {
    title: product.title,
    author: product.author,
    category: product.category,
    stock: product.stock,
    price: product.price,
    image: product.image,
    details: product.details,
    tags: product.tags
    },
    withCredentials: true,
    url: `http://localhost:3001/products/add`
  })
  return postProduct.data
}

export const searchProductsByTag = async (tag) => {
  const searchedProducts =  await axios.get(`http://localhost:3001/search/?q=tags=${tag}`)
  return searchedProducts.data
}

export const searchProductsByTitle = async ({title}) => {
  const searchedProducts =  await axios({
    method: "GET",
    withCredentials: true,
    url: `http://localhost:3001/products/searchByTitle/${title}`,
  })
  return searchedProducts.data.docs
}

export const deleteProductService = async (id) => {
  const deleteProduct = await axios({
    method: "DELETE",
    withCredentials: true,
    url: `http://localhost:3001/products/delete/${id}`
  })
  return id
}