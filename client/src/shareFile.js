async()=> {
    console.log('innnnn');
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
  
}
   