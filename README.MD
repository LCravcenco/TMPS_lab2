# Singleton Pattern
Singleton este un design pattern (model de proiectare) care se referă la crearea unei singure instanțe a unei clase și furnizarea accesului global la acea instanță din întreaga aplicație.

Acest pattern este util atunci când avem o clasă care trebuie să fie accesată de la nivel global și trebuie să aibă doar o singură instanță în întreaga aplicație. Un exemplu ar fi o clasă de configurare care să permită accesul la o singură instanță de fișier de configurare în întreaga aplicație.
 ```
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

const appState = new AppState();
```
În constructorul clasei AppState, verificăm dacă există deja o instanță a clasei. Dacă există, returnăm acea instanță. Dacă nu există, creăm o instanță nouă și o stocăm în proprietatea instance a clasei AppState.

Astfel, când creăm o instanță a clasei AppState, obținem întotdeauna aceeași instanță și putem accesa proprietățile și metodele acesteia de la nivel global în întreaga aplicație.

# Factory Method Pattern
Factory Method este un design pattern (model de proiectare) care permite crearea unui obiect fără a dezvălui logica exactă de creare a acestuia. Acesta este util în cazul în care avem nevoie să cream mai multe obiecte care au aceeași interfață, dar diferă în implementare sau tip.

Factory Method separă crearea obiectului de utilizarea acestuia, permițând astfel mai multă flexibilitate în crearea și gestionarea obiectelor.
```    
  class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ProductFactory {
  createProduct(name, price) {
    return new Product(name, price);
  }
}

const productFactory = new ProductFactory();
const newProduct = productFactory.createProduct('Laptop', 3500);
console.log(newProduct); // Output: Product { name: "Laptop", price: 3500 }
```
În exemplul de mai sus, avem clasa Product și clasa ProductFactory. Clasa Product are două proprietăți: name și price. Clasa ProductFactory are o metodă createProduct care primește numele și prețul produsului și returnează un obiect nou de tipul Product cu aceste proprietăți.

Când avem nevoie să creăm un nou produs, putem utiliza instanța clasei ProductFactory și apela metoda createProduct, furnizând numele și prețul produsului. Acest lucru ne permite să creăm mai multe produse cu aceeași interfață, dar cu implementări sau tipuri diferite, astfel încât să putem utiliza aceste produse în întreaga aplicație.

# Abstract Factory Pattern
Abstract Factory Pattern este implementat prin clasele AbstractProductFactory, ElectronicsFactory și ClothingFactory, care definesc o interfață pentru crearea de familii de produse conexe, fără a specifica clasele concrete ale acestora. În acest caz, clasa AbstractProductFactory definește metodele createProductA și createProductB, iar clasele ElectronicsFactory și ClothingFactory implementează aceste metode pentru a crea produse de tipuri diferite.
```
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
```
# Builder Pattern 
Builder Pattern este implementat prin clasa ProductBuilder, care oferă o modalitate de a construi obiecte complexe pas cu pas. În acest caz, clasa ProductBuilder permite setarea numelui și a prețului produsului, urmată de construirea efectivă a produsului prin apelarea metodei build. Cu toate acestea, nu este utilizat în mod explicit pentru a construi produsele din acest exemplu
```
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
```
Acest builder permite setarea atributelor name și price într-un mod fluent și, la final, construirea unui nou obiect Product. Acest pattern facilitează crearea de obiecte cu un număr mare de atribute și permite setarea explicită a atributelor dorite înainte de construirea efectivă a obiectului.
# Concluzie
În final pot sa zic ca acest cod utilizează patru patternuri de proiectare pentru a crea și gestiona produse într-o aplicație. Singleton Pattern este utilizat pentru a gestiona starea globală a aplicației, Factory Method Pattern și Abstract Factory Pattern sunt utilizate pentru a crea produse diferite în mod dinamic, iar Builder Pattern este utilizat pentru a construi obiecte complexe pas cu pas.