function getLocalStorage(key) {

     return JSON.parse(localStorage.getItem(key))
 }

function saveInLocalStorage(key, item) {

     let stringifiedItem = JSON.stringify(item)
     localStorage.setItem(key, stringifiedItem)

 }

let users = []

if (getLocalStorage('users')) {

     users = getLocalStorage('users')

 }


	let apellido = document.querySelector('#fname')

 	apellido.addEventListener('keyup', function () {

    console.log(apellido.value)

 })

let mail = document.querySelector('#mail')

 	mail.addEventListener('keyup', function () {

    console.log(Number(mail.value))

 })


let btn = document.querySelector('#formEnviar')

btn.addEventListener('click', function (event) {
  event.preventDefault()

    let user = {

      
      apellido: apellido.value,
      mail: mail.value,
      

    }

    users.push(user)
    saveInLocalStorage('users', users)

})


let button =document.querySelector('#formEnviar')

button.addEventListener('click', handleClick)


function handleClick(){
	event.preventDefault()

	let mensjCont = []
	if (getLocalStorage('users')) {

     users = getLocalStorage('users')
     

 	}


  const URLGET = "https://jsonplaceholder.typicode.com/posts"
  const infoPost ={apellido: "Perez", mail:"example@gmail.com"}

  $("body").prepend('<button id="formEnviar"></button>');

  $("formEnviar").click( () =>{
      $.post(URLGET,infoPost, (respuesta,estado)=>{
        if(estado==="sucess"){

          $("body").prepend(`<div>Guardado:${respuesta.apellido}</div>`);
          alert("Comentario con exito");
        } else{
          $("body").prepend(`<di>Response:${respuesta}</di>`);
          alert("Error");

        }
      })






  });

}


