import ipfs from "./ipfs";
import HashStorageContract from "./contracts/HashStorage.json";
import getWeb3 from "./getWeb3";


var bufferedFile;
var chooseButton =document.getElementById('choose');
var uploadButton =document.getElementById('upload');


window.addEventListener('load',async ()=>{

    try{

        const web3 =  await getWeb3();
        
        console.log('ppppp');

        console.log(web3);
    
        // const accounts =  web3.eth.getAccounts();
    
        // console.log(accounts);
    }
   
    catch(err){
        console.log('nooooooooo');
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

    
    ipfs.files.add(bufferedFile,(err,res)=>{
    if(err){
        return console.log('Error',err);
    }
        console.log("Sexcess");
        console.log(res[0].hash);
    
    })

})
