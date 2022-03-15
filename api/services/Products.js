const { ProductModel } = require("../models/Products");

class ProductsServices {
  static async newProduct(data) {
    try {
      const response = await ProductModel(data).save();
      return {
        error: false,
        response,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async getProducts(page, filters) {
    try {
      const response = await ProductModel.paginate(filters, {
        page: page,
        limit: 12,
      });

      return {
        error: false,
        response,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async getProduct(id) {
    try {
      const response = await ProductModel.findById(id);
      return {
        error: false,
        response,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async searchByTitle(page, title) {
    try {
      const response = await ProductModel.paginate(
        {
          title: { $regex: title },
        },
        { page: page, limit: 12 }
      );
      return {
        error: false,
        response,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async updateProduct(id, data) {
    try {
      const options = { new: true, runValidators: true };
      const response = await ProductModel.findByIdAndUpdate(id, data, options);
      return {
        error: false,
        response,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }

  static async deleteProduct(id) {
    try {
      await ProductModel.findByIdAndDelete(id);
      return {
        error: false,
      };
    } catch (error) {
      return {
        error: true,
        response: error,
      };
    }
  }
}

module.exports = ProductsServices;
