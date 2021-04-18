var firebaseConfig = {
    apiKey: "AIzaSyB_vhcD4mYoLPdUHdYmzXQ-eMuIbGlGKUk",
    authDomain: "test-fb-afced.firebaseapp.com",
    projectId: "test-fb-afced",
    storageBucket: "test-fb-afced.appspot.com",
    messagingSenderId: "623756959006",
    appId: "1:623756959006:web:2e2c6f17e3b79f70163d0f"
  };

  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var username = document.getElementById('username').value
  var address = document.getElementById('address').value
  var phone = document.getElementById('phone').value

  database.ref('users/' + username).set({
    email : email,
    password : password,
    username : username,
    address : address,
    phone :phone
  })

  console.log('added');
  get();
}


function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    console.log(data.address);

  })

}

// function update() {
//   var username = document.getElementById('username').value
//   var email = document.getElementById('email').value
//   var password = document.getElementById('password').value

//   var updates = {
//     email : email,
//     password : password
//   }

//   database.ref('users/' + username).update(updates)

//   alert('updated')
// }

// function remove() {
//   var username = document.getElementById('username').value

//   database.ref('users/' + username).remove()

//   alert('deleted')
// }