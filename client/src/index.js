// import getWeb3 from "./getWeb3";
import Web3 from "web3";

import ipfs from "./ipfs";

import swal from 'sweetalert';

import HashStorageContract from "./contracts/HashStorage.json";

// import nosu from "./select";

// console.log('olololollllo',nosu);


// var pd = require('./select.js').default;

// console.log('dldlpdpd',pd);


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


var kppd = localStorage.getItem('ethAdd');

console.log(kppd);

var file;
var contract;
var account;

var bufferedFile;

var chooseButton =document.getElementById('choose');
var uploadButton =document.getElementById('upload');

var fileAddedIcon = document.getElementById("file-added");
var uploadIcon = document.getElementById("upload-icon");


var loader = document.getElementById("loader");
var pw = document.getElementById("pw");
var beforeAdd = document.getElementById('before-add');
var afterAdd = document.getElementById('after-add');

// var doc1 = document.getElementById("doc1");

// console.log(doc1);

// var sel = document.getElementById("sel");
// console.log(sel);



window.addEventListener("load",async () => {

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

  function selectedAddress() {

    
    // Initialize Firebase
      
    
    // Set database variable
    var storedAddress = firebase.database().ref("selectedAddress");
    console.log(storedAddress);

    storedAddress.on('value',(data)=>{
        console.log(data.val());
    })

  }



chooseButton.addEventListener('change',(event)=>{
    event.preventDefault();

    var rAdd = selectedAddress();
    console.log(rAdd);

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

    console.log(bufferedFile);

    console.log(contract);
    console.log(account[0]);

    fileAddedIcon.style.display='none';
    afterAdd.innerText='';

    loader.style.display='block';
    pw.style.display='block';

    var fileName = file.name;
    var receiver = '0x7Df61A1514aa8A8ABF66866f34B410Ee5150274C';

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

                

                swal({
                    title: "File Shared Successfully !",
                    text: `Your file is uploded to IPFS with the following Hash Value
                            ${res[0].hash}`,
                    icon: "success",
                    button: "Done!",
                  });
                contract.methods.getHash().call().then(
                    (val)=>{
                        console.log('innn',val);
                    }
                )

            }
        )
    })

})
