// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <=0.8.3;

contract HashStorage {


uint fileId=0;

struct SharedData{
    
    string storedHash;
    string fileName;
    address sender;
    address receiver;
    
}

mapping(address => mapping(uint => SharedData))  SharedDataMapping;


  event ShareFile(
    string ipfsValue,
    string fileName,
    address sender,
    address receiver
  );
  
  mapping(address=>uint) public fileKey;
  
  function uploadHash(string memory storedHash,string memory fileName,address sender,address receiver) public {
     
    fileId=fileKey[receiver]; 
   
    SharedDataMapping[receiver][fileId] = SharedData(storedHash,fileName,msg.sender,receiver);
    
    fileKey[receiver]+=1;
    
    emit ShareFile(storedHash,fileName,sender,receiver);
    
  }
  
  function getFile(uint fileId,address receiver) public view returns(string memory,string memory,address,address){
      
      return (SharedDataMapping[receiver][fileId].storedHash,SharedDataMapping[receiver][fileId].fileName,
      SharedDataMapping[receiver][fileId].sender,SharedDataMapping[receiver][fileId].receiver);
  }
  
}
