// const ponu = '0x7Df61A1514aa8A8ABF66866f34B410Ee5150274C';


var firebaseConfig = {
    apiKey: "AIzaSyB_vhcD4mYoLPdUHdYmzXQ-eMuIbGlGKUk",
    authDomain: "test-fb-afced.firebaseapp.com",
    projectId: "test-fb-afced",
    storageBucket: "test-fb-afced.appspot.com",
    messagingSenderId: "623756959006",
    appId: "1:623756959006:web:2e2c6f17e3b79f70163d0f"
  };

firebase.initializeApp(firebaseConfig);

console.log(firebase);


// window.addEventListener('load',()=>{
//     console.log('fefefefefe');
//     getAddress();
// })

// // Initialize Firebase
// function getAddress(){

// console.log('pkpfkpe');

// var firebaseConfig = {
//     apiKey: "AIzaSyB_vhcD4mYoLPdUHdYmzXQ-eMuIbGlGKUk",
//     authDomain: "test-fb-afced.firebaseapp.com",
//     projectId: "test-fb-afced",
//     storageBucket: "test-fb-afced.appspot.com",
//     messagingSenderId: "623756959006",
//     appId: "1:623756959006:web:2e2c6f17e3b79f70163d0f"
//   };

// firebase.initializeApp(firebaseConfig);
// console.log(firebase);




   

    var databaseUser = firebase.database().ref("users");

    databaseUser.on('value',(data)=>{
        console.log('looooo');
        var userInfo = data.val();
        console.log(userInfo);

        var userNames = Object.keys(userInfo);

        console.log('keys',userNames);

        for (let index = 0; index < userNames.length; index++) {
                var userName = userNames[index];
                var userDetails = userInfo[userName];

                var ethAddress = userDetails.address;
                var name = userDetails.username;
                console.log(ethAddress);

                var selectTab = document.getElementById("ethereum-address");
                // selectTab.innerHTML += `<option value=${index}>${name}&nbsp &nbsp ${ethAddress}</option>`
                selectTab.innerHTML += `<option value=${index}>${ethAddress}</option>`

        }

    
    })

// }


function dispAddress() {
    var ethAdd = document.getElementById('ethereum-address');
    var displayedAddress = ethAdd.options[ethAdd.selectedIndex];
    var actualAddress = displayedAddress.text;
    console.log(actualAddress);

    localStorage.setItem("ethAdd",actualAddress);
    
    // export default actualAddress;

}

    // export default ponu;








// // Set database variable

// // function get() {
// //     var username = document.getElementById('username').value
  
// //     var user_ref = database.ref('users/' + username)
// //     user_ref.on('value', function(snapshot) {
// //       var data = snapshot.val()
  
// //       console.log(data.address);
  
// //     })
// //   }

// var firebaseConfig = {
//     apiKey: "AIzaSyB_vhcD4mYoLPdUHdYmzXQ-eMuIbGlGKUk",
//     authDomain: "test-fb-afced.firebaseapp.com",
//     projectId: "test-fb-afced",
//     storageBucket: "test-fb-afced.appspot.com",
//     messagingSenderId: "623756959006",
//     appId: "1:623756959006:web:2e2c6f17e3b79f70163d0f"
//   };


// firebase.initializeApp(firebaseConfig);
// console.log(firebase);




// var kp = 'nosuuu';

// export default{firebaseConfig};

// export default ponu;







