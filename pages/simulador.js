let button =document.getElementById('btnSimulador')

button.addEventListener('click', handleClick)

function handleClick(){

	class Producto{
	constructor (id, name, price, stock){
		this.id=id
		this.name=name
		this.price=price
		this.stock=stock

	}

	getId= function(){
		return this.id
	}

	getTotal= function (qty){
		return this.price*qty
	}

	}




	const producto1 = new Producto(1, 'Teclado MarvoScorpion',3500, 12)
	const producto2 = new Producto(2, 'Mouse Logitech MX Anyw',4500, 5)
	const producto3 = new Producto(3, 'Mouse XPGamer',3500, 2)
	const producto4 = new Producto(4, 'Auriculares Gamemax G200',4000, 10)
	const producto5 = new Producto(5, 'Microfono HyperX QuadCast',8500, 15)
	const producto6 = new Producto(6, 'Teclado Redragon K552 Kumara',9500, 8)



	let userName= prompt("Ingrese nombre");
	let userLastName= prompt("Ingrese apellido");
	let id= Number(prompt("Ingrese su ID"));
	let totalprecio=0;
	let precioprod;

	let productoN=Number(prompt("Ingrese el producto que desea comprar. 0 Para finalizar\n Producto 1:Teclado MarvoScorpion \nProducto 2: Mouse Logitech MX Anyw \nProducto 3: Mouse XPGamer \nProducto 4: Auriculares Gamemax G200 \nProducto 5: Microfono HyperX QuadCast \nProducto 6: Teclado Redragon K552 Kumara"));


while(productoN != 0){

	switch(productoN){
		case 1:

			console.log(producto1)
			cart.push(producto1)
			break;
		case 2:
			console.log(producto2)
			cart.push(producto2)
			break;
		case 3:
			console.log(producto3)
			cart.push(producto3)
			break;
		case 4:
			console.log(producto4)
			cart.push(producto4)
			break;
		case 5:
			console.log(producto5)
			cart.push(producto5)
			break;
		case 6:
			console.log(producto6)
			cart.push(producto6)
			break;

		default:

			alert("Ingrese su opcion");
			break;


	}
	productoN=Number(prompt("Ingrese el producto que desea comprar. 0 Para finalizar"));


}


console.log(cart)


	let cant=Number(prompt("Ingrese la cantidad de productos para sumar."));
	alert("Cantidad de productos a sumar: "+ cant);
	alert("Si su compra supera los $15000, recibira una promocion.");


	for(let i=1; i<=cant; i++){

		let precioprod=Number(prompt("Ingrese el precio del producto N°: "+ i));
		totalprecio=totalprecio+precioprod;
	
	}
	alert("El costo total de su compra sera: $"+totalprecio);


	promo();



function promo(){
	if(totalprecio>=15000){
		alert("Recibe promocion");
	}
	else{
		alert("No alcanza para la promocion");
	}
}






























}






