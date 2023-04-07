// Singleton Pattern
class AppState {
    constructor() {
      if (AppState.instance) {
        return AppState.instance;
      }
      AppState.instance = this;
  
      this.cart = [];
    }
  
    addToCart(product) {
      this.cart.push(product);
    }
  }
  
  // Factory Method Pattern
  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ElectronicsProduct extends Product {}
  class ClothingProduct extends Product {}
  
  class ProductFactory {
    createProduct(type, name, price) {
      if (type === 'Electronics') {
        return new ElectronicsProduct(name, price);
      } else if (type === 'Clothing') {
        return new ClothingProduct(name, price);
      }
    }
  }
  
  // Abstract Factory Pattern
  class Laptop extends ElectronicsProduct {}
  class Smartphone extends ElectronicsProduct {}
  class Shirt extends ClothingProduct {}
  class Pants extends ClothingProduct {}
  
  class AbstractProductFactory {
    createProductA() {}
    createProductB() {}
  }
  
  class ElectronicsFactory extends AbstractProductFactory {
    createProductA() {
      return new Laptop("Laptop", 3500);
    }
    createProductB() {
      return new Smartphone("Smartphone", 2500);
    }
  }
  
  class ClothingFactory extends AbstractProductFactory {
    createProductA() {
      return new Shirt("Shirt", 150);
    }
    createProductB() {
      return new Pants("Pants", 200);
    }
  }
  
  // Builder Pattern
  class ProductBuilder {
    constructor() {
      this.name = '';
      this.price = 0;
    }
  
    setName(name) {
      this.name = name;
      return this;
    }
  
    setPrice(price) {
      this.price = price;
      return this;
    }
  
    build() {
      return new Product(this.name, this.price);
    }
  }
  
  // Utilizăm Abstract Factory pentru a crea produse
  const electronicsFactory = new ElectronicsFactory();
  const clothingFactory = new ClothingFactory();
  
  const products = [
    electronicsFactory.createProductA(),
    electronicsFactory.createProductB(),
    clothingFactory.createProductA(),
    clothingFactory.createProductB(),
  ];
  
  // Afișăm produsele în interfața HTML
  const productsContainer = document.querySelector('.products');
  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.price} lei</p>
    `;
    productsContainer.appendChild(productDiv);
  });
  
  // Utilizăm Singleton pentru a gestiona starea aplicației
  const appState = new AppState();
  
  // Adăugăm produse în coș
  document.getElementById('addToCart').addEventListener('click', () => {
    const productFactory = new ProductFactory();
    const newProduct = productFactory.createProduct('Electronics', 'Laptop', 3500);
    appState.addToCart(newProduct);
  });
  