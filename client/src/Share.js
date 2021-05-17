import React, { Component } from "react";
import SecureShareContract from "./contracts/SecureShare.json";
import getWeb3 from "./getWeb3";



import ipfs from './ipfs';

class Share extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SecureShareContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SecureShareContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {

    var file;
    var bufferedFile;
    var fileId;
    var selectedReceiver;


    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    console.log('opfs',ipfs);

    // Update state with the result.
    // this.setState({ storageValue: response });
    var selectReceiver =document.getElementById("select-receiver");
    var chooseButton =document.getElementById("choose");
    var uploadButton =document.getElementById("upload");


    contract.getPastEvents("AddedUser",{
      fromBlock:0,
      toBlock:'latest'
    }).then((val)=>{
      console.log(val);

      var size= val.length;

      for(var index =0 ;index<size ; index++){
        var name = val[index].returnValues.name;
        var address = val[index].returnValues.accountAddress;
  

        console.log(name);
        console.log(address);
        console.log('---------------------');

        selectReceiver.innerHTML+=
        `<option value=${address}>${name}</option>`
      }
      

    })


    selectReceiver.addEventListener('change',()=>{
      selectedReceiver=selectReceiver.options[selectReceiver.selectedIndex].value;
      console.log(selectedReceiver);
    })



    chooseButton.addEventListener('change',(event)=>{
      event.preventDefault();
  
      console.log('capture');
      console.log(event);
      file = event.target.files[0];
      console.log(file.name);
  
      const reader = new window.FileReader();
  
      reader.readAsArrayBuffer(file);
  
      reader.onloadend=()=>{
          bufferedFile = Buffer.from(reader.result);
          console.log(bufferedFile);
      }
  })


  uploadButton.addEventListener('click',(event)=>{
    event.preventDefault();
    
    var d = new Date().toLocaleString();
    console.log('time',d);

    
        console.log(bufferedFile);
    
        console.log(contract);
        console.log(accounts[0]);
    
    
    
        var fileName = file.name;
        var receiver = selectedReceiver;
     
    
        
        ipfs.files.add(bufferedFile,(err,res)=>{
        if(err){
            return console.log('Error',err);
        }
            
            console.log("Sexcess");
            console.log(res[0].hash);
    
            contract.methods.uploadHash(res[0].hash,fileName,accounts[0],receiver,d).send({from:accounts[0]}).then(
                (data) =>{
                    console.log(data);
                    console.log('added');
    
                   
                      contract.methods.getFileId(receiver).call().then(
                        (val)=>{
                          fileId=val;
                          console.log('board dash hctib',fileId);
                          contract.methods.getFile(fileId-1,receiver).call().then((res)=>{
                          console.log(res);
                          })
                        }
                      )
                  
                      
                }
            )
        })
    
    })
    
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (

    <div className='App'>
    
    <h1 id="heading">
      Share your Health Records safely using<br></br>
    <span id="secure-share">Secure Share</span>
      </h1>


    <select id="select-receiver">
        <option value="address">Select the Receiver</option>
       
    </select>
        
    <div id="select-file">

      <input id="choose" type="file" name="fileUpload" />

    </div>

    <div id="upload-file">

    <input type="button" value="Upload to IPFS" id="upload" name="upload-btn"/>

    <label for="upload">
      <span id="file-upload-btn" class="btn">Share your File</span>
    </label>

  </div>

    </div>
      
   

    );
  }
}

export default Share;