const { Schema, model } = require("mongoose");
const { genHash } = require("../lib/passwordUtils");

const CarritoItem = new Schema({
  product: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    default: 1,
  },
});

const CarritoItemModel = model("Carrito", CarritoItem);

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  salt: {
    type: String,
  },
  carrito: {
    type: [CarritoItem],
    default: [],
  },
  price: {
    type: Number,
    default: null,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    default: "",
  },
});

UserSchema.pre("save", async function () {
  const saltHash = await genHash(this.password);
  const { salt, hash } = saltHash;

  this.password = hash;
  this.salt = salt;
});

const UserModel = model("User", UserSchema);

module.exports = { UserModel, CarritoItemModel };