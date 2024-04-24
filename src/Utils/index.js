//Funcion que recibe un array como parametro y calcula el precio total de la nueva compra.
export  const totalPrice = (products) => {
let sum = 0;
products.forEach(product => {sum += product.price});
return sum
}

