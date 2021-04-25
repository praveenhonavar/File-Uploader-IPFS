

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

// var rAdd = document.getElementById("rAdd");

// window.addEventListener("load",()=>{
//     var storedAddress = firebase.database().ref("selectedAddress");
//     console.log(storedAddress);

//     storedAddress.on('value',(data)=>{
//     console.log(data.val());

//     var info = data.val();

//     var k = Object.keys(data.val());

//     console.log('maal',k);

//     var ass = info[k];

//     console.log('storedAddress',ass);

//     rAdd.innerHTML=ass;

//     localStorage.setItem(adrs,ass);


    
// })
// });

// console.log('pfekfpe');

// const http = require('http');

// const fs = require('fs');

// http.createServer((req,res)=>{

// res.writeHead(200,{'Content-Type':'text/html'})
// const html = fs.readFileSync('../public/testValue.html');
// res.end(html);

// }).listen(3000,()=>{
//     console.log('runnndin');
// })

// var pp = document.getElementById('file-name');
// console.log('kokok',pp);

var firebase = require('firebase');
var fs = require('fs');
const { stringify } = require('querystring');

var firebaseConfig = {
    apiKey: "AIzaSyB_vhcD4mYoLPdUHdYmzXQ-eMuIbGlGKUk",
    authDomain: "test-fb-afced.firebaseapp.com",
    projectId: "test-fb-afced",
    storageBucket: "test-fb-afced.appspot.com",
    messagingSenderId: "623756959006",
    appId: "1:623756959006:web:2e2c6f17e3b79f70163d0f"
  };


// console.log(firebase);

firebase.initializeApp(firebaseConfig);

var storedAddress = firebase.database().ref("selectedAddress");
// console.log(storedAddress);

    storedAddress.on('value',(data)=>{
    
    console.log("dlspdlsp",data.val());


    var info = data.val();

    var k = Object.keys(data.val());

    console.log('maal',k);


    var ass = info[k];

    // var aObj ={
    //     "receiver":"pd"
    // }

    // res = JSON.parse(aObj);

    // console.log('storedAddress',res);
        // console.log(ass);

    var res = JSON.stringify(info);

    fs.writeFile("./test.json",res,(err)=>{
            if(err){
                throw err
            }
            else{
                console.log('adeded to file');
            }
    })
})



    // rAdd.innerHTML=ass;

    // localStorage.setItem(adrs,ass);






