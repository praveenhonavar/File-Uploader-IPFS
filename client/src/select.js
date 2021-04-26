var ethAdd = document.getElementById('ethereum-address');
var proceedArrow = document.getElementById("proceed-arrow");

window.addEventListener('load',()=>{
    console.log('fefefefefe');
    proceedArrow.style.display='none';
    getAddress();
})

// // Initialize Firebase
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
    console.log(firebase);

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


}
// }

ethAdd.addEventListener('change',()=>{
    dispAddress();
})

function dispAddress() {
    // var ethAdd = document.getElementById('ethereum-address');
    var displayedAddress = ethAdd.options[ethAdd.selectedIndex];
    var actualAddress = displayedAddress.text;
    console.log(actualAddress);
    
    storeAddress(actualAddress);

    // localStorage.setItem("ethAdd",actualAddress);

    var lp = document.getElementById("fName")
    console.log(lp);
    // export default actualAddress;

    proceedArrow.style.display='block';


}

    // export default ponu;

function  storeAddress(selectedAddress) {
    var storeAddress = firebase.database();
    console.log(storeAddress);

    storeAddress.ref('selectedAddress').set({
        selectedAddress : selectedAddress
        
    })
    console.log("added to firebase");
 
}




