class ProductManager {
  constructor() {
    this.Products = [];
  }

  vCode(code) {
    for (const product of this.Products) {
      if (product.code === code) {
        return false;
      }
    }
    return true;
  }

  addProducts(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Por favor complete todos los campos");
      return;
    }
    if (!this.vCode(code)) {
      console.error("El código ya existe en el objeto de productos");
      return;
    }
    const id =
      this.Products.length === 0
        ? 1
        : this.Products[this.Products.length - 1].id + 1;

    const newProduct = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.Products.push(newProduct);
  }
  getProductById(idSearchProduct) {
    const product = this.Products.find(
      (product) => product.id === idSearchProduct
    );
    if (!product) {
      console.log("Not found");
    } else {
      return product;
    }
  }
}
const idSearchProduct = 2;
const product1 = new ProductManager();

product1.addProducts(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
product1.addProducts(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc1234",
  25
);

console.log(product1.getProductById(idSearchProduct));

