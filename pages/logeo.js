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

console.log(users)


let nombre = document.querySelector('#nombre')
  nombre.addEventListener('keyup', function () {

   console.log(nombre.value)

})

let apellido = document.querySelector('#apellido')

 apellido.addEventListener('keyup', function () {

     console.log(apellido.value)

 })

let mail = document.querySelector('#mail')

 mail.addEventListener('keyup', function () {

     console.log(Number(mail.value))

 })

 let pass = document.querySelector('#pass')

 pass.addEventListener('keyup', function () {

     console.log(Number(pass.value))

 })



let btn = document.querySelector('#Registrarme')

btn.addEventListener('click', function (event) {
  event.preventDefault()

    let user = {

      nombre: nombre.value,
      apellido: apellido.value,
      mail: mail.value,
      pass: pass.value,

    }

    users.push(user)
    saveInLocalStorage('users', users)

})

