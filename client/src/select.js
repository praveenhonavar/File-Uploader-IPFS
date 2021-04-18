// var address ='0x7Df61A1514aa8A8ABF66866f34B410Ee5150274C';

window.addEventListener('load',()=>{
    getAddress();
})

  // Initialize Firebase
function getAddress(){
console.log('pkpfkpe');

    var firebaseConfig = {
        apiKey: "AIzaSyB_vhcD4mYoLPdUHdYmzXQ-eMuIbGlGKUk",
        authDomain: "test-fb-afced.firebaseapp.com",
        projectId: "test-fb-afced",
        storageBucket: "test-fb-afced.appspot.com",
        messagingSenderId: "623756959006",
        appId: "1:623756959006:web:2e2c6f17e3b79f70163d0f"
      };


    firebase.initializeApp(firebaseConfig);

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
                selectTab.innerHTML += `<option>${name}&nbsp &nbsp ${ethAddress}</option>`
            
        }

    })

}


// Set database variable

// function get() {
//     var username = document.getElementById('username').value
  
//     var user_ref = database.ref('users/' + username)
//     user_ref.on('value', function(snapshot) {
//       var data = snapshot.val()
  
//       console.log(data.address);
  
//     })
//   }

 












