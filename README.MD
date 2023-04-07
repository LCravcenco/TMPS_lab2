

Singleton Pattern: este implementat prin clasa AppState, care se asigură că o singură instanță a clasei este creată și utilizată în întreaga aplicație. Aceasta este garantată prin intermediul verificării instanțelor existente și crearea unei noi instanțe numai dacă nicio instanță nu există deja.

Factory Method Pattern: este implementat prin clasa ProductFactory, care permite crearea de obiecte de produs fără a specifica clasa concretă a produsului. În funcție de tipul produsului, se creează o instanță a clasei corespunzătoare.

Abstract Factory Pattern: este implementat prin clasele AbstractProductFactory, ElectronicsFactory și ClothingFactory, care definesc o interfață pentru crearea de familii de produse conexe, fără a specifica clasele concrete ale acestora. În acest caz, clasa AbstractProductFactory definește metodele createProductA și createProductB, iar clasele ElectronicsFactory și ClothingFactory implementează aceste metode pentru a crea produse de tipuri diferite.

Builder Pattern: este implementat prin clasa ProductBuilder, care oferă o modalitate de a construi obiecte complexe pas cu pas. În acest caz, clasa ProductBuilder permite setarea numelui și a prețului produsului, urmată de construirea efectivă a produsului prin apelarea metodei build. Cu toate acestea, nu este utilizat în mod explicit pentru a construi produsele din acest exemplu