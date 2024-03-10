const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// CONSIGNA 1 -- Mostrar en consola las pizzas que tengan un id impar.

console.log('-------------------------------------------------------')
console.log('  ')
console.log('Consigna 1: Mostrar en consola las pizzas que tengan un id impar:')
console.log('  ')

for(let i = 0; i < pizzas.length; i++){
  if (pizzas[i].id % 2 !== 0){
    console.log(pizzas[i].nombre + ' cuenta con un id impar ('+pizzas[i].id+')')
  }
}

console.log('  ')
console.log('-------------------------------------------------------')
console.log('  ')
console.log('Consigna 2: Responder: ¿Hay alguna pizza que valga menos de $600?')
console.log('  ')

for(let i = 0; i < pizzas.length; i++){
  if (pizzas[i].precio < 600){
    console.log(pizzas[i].nombre +' Es una pizza que vale menos de $600')
  }
}

console.log('  ')
console.log('-------------------------------------------------------')
console.log('  ')
console.log('Consigna 3: El nombre de cada pizza con su respectivo precio.')
console.log('  ')

console.log('Nuestra carta cuenta con las siguientes pizzas para degustar:')
for(let i = 0; i < pizzas.length; i++){
    console.log(pizzas[i].nombre + ': cuenta con un valor de $'+pizzas[i].precio)
}

console.log('  ')
console.log('-------------------------------------------------------')
console.log('  ')
console.log('Consigna 4: Mostrar todos los ingredientes de cada pizza')
console.log('  ')

console.log('Nuestras pizzas poseen los siguientes ingredientes:')

for(let i = 0; i < pizzas.length; i++){
  console.log(pizzas[i].nombre+' cuenta con:')
    for(let z = 0; z < pizzas[i].ingredientes.length; z++){
      console.log('--'+pizzas[i].ingredientes[z])
    }
}

console.log('  ')
console.log('-------------------------------------------------------')
console.log('  ')


