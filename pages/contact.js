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


let fname = document.querySelector('#fname')
  fname.addEventListener('keyup', function () {

   console.log(fname.value)

})



let mail = document.querySelector('#mail')

 mail.addEventListener('keyup', function () {

     console.log(Number(mail.value))

 })




let button = document.querySelector('button')

button.addEventListener('click', function (evento) {
  evento.preventDefault()

    let user = {

      fname: fname.value,
      mail: mail.value,
      

    }

    users.push(user)
    saveInLocalStorage('users', users)

})