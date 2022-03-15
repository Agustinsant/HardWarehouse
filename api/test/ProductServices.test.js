const  mongoose = require("mongoose");


const ProductsServices = require("../services/Products")


describe("Se espera que", () => {

    beforeAll(async () => {

        
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/Hard-warehouse-test")

      });
    

    const product_1 = {
        title: "Ryzen 5 3600x",
        author: "Santiago Orlando",
        category: "procesadores",
        stock: 5,
        price: 200,
        tags: [ 'procesador', 'amd', 'serie 3000' ]
    }

    const product_2 = {
        title: "Ryzen 5 3600x",
        author: "Fernando LeonHart",
        category: "procesadores",
        stock: 15,
        price: 200,
        tags: ["procesador", "amd", "serie 3000"]
    }

    const product_3 = {
        title: "Ryzen 7 3700x",
        author: "Santiago Orlando",
        category: "procesadores",
        stock: 5,
        price: 200,
        tags: ["procesador", "amd", "serie 3000"]
    }

    const product_4 = {
        title: "Ryzen 5 5600x",
        author: "Santiago Orlando",
        category: "procesadores",
        stock: 5,
        price: 200,
        tags: ["procesador", "amd", "serie 5000"]
    }

    test("el metodo newProduct cree un producto", async () => {

        const { response } = await ProductsServices.newProduct(product_1)
        
        expect(response.title).toBe(product_1.title)
        expect(response.author).toBe(product_1.author)
        expect(response.category).toBe(product_1.category)
        expect(response.stock).toBe(product_1.stock)
        expect(response.price).toBe(product_1.price)
        expect(response.tags[0]).toBe(product_1.tags[0])
    })

    test("el metodo getProduct debe traer un producto con su id", async () => {

        const { response } = await ProductsServices.newProduct(product_2)
        const producto = await ProductsServices.getProduct(response.id)
        
        expect(producto.response.id).toBe(response.id)
    })

    test("el metodo getProducts debe traer un muchos productos dentro de docs", async () => {

        const { response } = await ProductsServices.getProducts()

        expect(response.docs.length).toBeGreaterThanOrEqual(2)
    })

    test("el metodo searchByTitle debe traer productos que contengan la palabra pasada", async () => {

        const product3 = await ProductsServices.newProduct(product_3)
        const ryzenProducts = await ProductsServices.searchByTitle(1,"Ryzen")
        const nvidiaProducts = await ProductsServices.searchByTitle(1,"Nvidia")

        expect(ryzenProducts.response.docs.length).toBeGreaterThanOrEqual(3)
        expect(nvidiaProducts.response.docs.length).toBeGreaterThanOrEqual(0)
    })

    test("el metodo updateProduct debe traer un producto con sus respectivos cambios", async () => {

        const { response } = await ProductsServices.newProduct(product_4)
        let producto4 = await ProductsServices.getProduct(response.id)
        producto4.response.price = 250
        const producto4Updated = await ProductsServices.updateProduct(response.id, producto4.response)
        
        expect(producto4Updated.response.price).toBe(250)
    })

    test("el metodo deleteProduct debe retornar un objeto error en false", async () => {
        
        const { response } = await ProductsServices.newProduct(product_1)
        const { error } = await ProductsServices.deleteProduct(response.id)
        const producto4 = await ProductsServices.getProduct(response.id)

        expect(error).toBe(false)
        expect(producto4.response).toBe(null)
    })
})