// import getWeb3 from "./getWeb3";
import Web3 from "web3";

import ipfs from "./ipfs";

import HashStorageContract from "./contracts/HashStorage.json";

var contract;
var account;



var bufferedFile;

var chooseButton =document.getElementById('choose');
var uploadButton =document.getElementById('upload');

window.addEventListener("load",async () => {
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


chooseButton.addEventListener('change',(event)=>{
    event.preventDefault();
    console.log('capture');
    console.log(event);
    const file = event.target.files[0];

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

    // var fileName = document.getElementById("fileName").value;
    // console.log(fileName);
    var fileName="pd";
    
    ipfs.files.add(bufferedFile,(err,res)=>{
    if(err){
        return console.log('Error',err);
    }
        console.log("Sexcess");
        console.log(res[0].hash);

        contract.methods.uploadHash(res[0].hash,fileName).send({from:account[0]}).then(
            (data) =>{
                console.log(data);
                console.log('added');
                contract.methods.getHash().call().then(
                    (val)=>{
                        console.log('innn',val);
                    }
                )

            }
        )

    
    })

})
