// import getWeb3 from "./getWeb3";
import Web3 from "web3";

import ipfs from "./ipfs";

import Swal from 'sweetalert2';


import HashStorageContract from "./contracts/HashStorage.json";

import receiverAddress from './test.json';

console.log(receiverAddress);

// var firebase = require('firebase');
// var fs = require('fs');

// var firebaseConfig = {
//     apiKey: "AIzaSyB_vhcD4mYoLPdUHdYmzXQ-eMuIbGlGKUk",
//     authDomain: "test-fb-afced.firebaseapp.com",
//     projectId: "test-fb-afced",
//     storageBucket: "test-fb-afced.appspot.com",
//     messagingSenderId: "623756959006",
//     appId: "1:623756959006:web:2e2c6f17e3b79f70163d0f"
//   };


// // console.log(firebase);

// firebase.initializeApp(firebaseConfig);

// var storedAddress = firebase.database().ref("selectedAddress");
// // console.log(storedAddress);

//     storedAddress.on('value',(data)=>{
//     console.log(data.val());


//     var info = data.val();

//     var k = Object.keys(data.val());

//     console.log('maal',k);


//     var ass = info[k];

//     console.log('storedAddress',ass);

//     fs.writeFile("../public/assets/pd.txt",ass,(err)=>{
//             if(err){
//                 throw err
//             }
//             else{
//                 console.log('adeded');
//             }
//     })



//     })


var file;
var contract;
var account;

var bufferedFile;

var logo = document.getElementById('logo');

var chooseButton =document.getElementById('choose');
var uploadButton =document.getElementById('upload');

var fileAddedIcon = document.getElementById("file-added");
var uploadIcon = document.getElementById("upload-icon");


var loader = document.getElementById("loader");
var pw = document.getElementById("pw");
var beforeAdd = document.getElementById('before-add');
var afterAdd = document.getElementById('after-add');
// var fileName = document.querySelector("#document");
var fileName = document.getElementById("file-name");


console.log(fileName);

// var doc1 = document.getElementById("doc1");

// console.log(doc1);

// var sel = document.getElementById("sel");
// console.log(sel);




window.addEventListener("load", async () => {

    // console.log('wlpflwpflwfwpfw',firebase);
    fileAddedIcon.style.display='none';
    loader.style.display='none';
    pw.style.display='none';

    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      console.log(window.web3.eth.getAccounts());
      console.log('llllll');
      account = await window.web3.eth.getAccounts();
      console.log(account);

      const networkId = await window.web3.eth.net.getId();
      console.log(networkId);

      const deployedNetwork = HashStorageContract.networks[networkId];

      console.log(deployedNetwork);

      contract = new window.web3.eth.Contract(
        HashStorageContract.abi,
        deployedNetwork && deployedNetwork.address,

      );

      console.log(contract);


    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      console.log('fefefefefeqf');
    }
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  })

  // function selectedAddress() {

    
  //   // Initialize Firebase
      
    
  //   // Set database variable
  //   var storedAddress = firebase.database().ref("selectedAddress");
  //   console.log(storedAddress);

  //   storedAddress.on('value',(data)=>{
  //       console.log(data.val());

  //       var info = data.val();

  //       var k = Object.keys(data.val());

  //       console.log('maal',k);

  //       var ass = info[k];
  //       console.log('storedAddress',ass);
  //   })

  // }



chooseButton.addEventListener('change',(event)=>{
    event.preventDefault();

    // var rAdd = selectedAddress();
    // console.log(rAdd);

    console.log('capture');
    console.log(event);
    file = event.target.files[0];
    console.log(file.name);

    // console.log(uploadIcon);
    fileAddedIcon.style.display='block';
    uploadIcon.style.display='none';
    beforeAdd.style.display='none';

    afterAdd.innerText=`Your have selected the file ${file.name}\n
    Click on Share to Proceed`;

    // var fileUplodedIcon = document.getElementById("added-icon");
    // fileUplodedIcon.style.color = "#ffffff";

    const reader = new window.FileReader();

    reader.readAsArrayBuffer(file);

    reader.onloadend=()=>{
        bufferedFile = Buffer.from(reader.result);
        console.log(bufferedFile);
    }
})

uploadButton.addEventListener('click',(event)=>{
event.preventDefault();

    // var fn = fileName.value;

    // console.log(fn);

    


 
  // selectedAddress();

    console.log(bufferedFile);

    console.log(contract);
    console.log(account[0]);

    fileAddedIcon.style.display='none';
    afterAdd.innerText='';

    loader.style.display='block';
    pw.style.display='block';

    var fileName = file.name;
    var receiver = receiverAddress.selectedAddress;

    // var fileName = document.getElementById("fileName").value;
    // console.log(fileName);
    // var fileName = "pd";
    // document.getElementsByClassName()


    
    ipfs.files.add(bufferedFile,(err,res)=>{
    if(err){
        return console.log('Error',err);
    }
        
        console.log("Sexcess");
        console.log(res[0].hash);

        contract.methods.uploadHash(res[0].hash,fileName,account[0],receiver).send({from:account[0]}).then(
            (data) =>{
                console.log(data);
                console.log('added');

                loader.style.display='none';
                pw.style.display='none';

                uploadIcon.style.display='block';
                beforeAdd.style.display='block';

                

                Swal.fire({
                    title: "File Shared Successfully !",
                    text: `Your file is uploded to IPFS with the following Hash Value
                            ${res[0].hash}`,
                    icon: "success",
                    button: "Done!",
                  });
                  
                contract.methods.getFile(0,receiver).call().then(
                    (val)=>{
                        console.log('Dashboard hctib',val);

                    }
                )

            }
        )
    })

})

