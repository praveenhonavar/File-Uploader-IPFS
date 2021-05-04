// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <=0.8.4;

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
  
  mapping(address=>uint) fileKey;
  
  function uploadHash(string memory storedHash,string memory fileName,address sender,address receiver) public {
     
    fileId=fileKey[receiver]; 
   
    SharedDataMapping[receiver][fileId] = SharedData(storedHash,fileName,msg.sender,receiver);
    
    fileKey[receiver]+=1;
    
    emit ShareFile(storedHash,fileName,sender,receiver);
    
  }
  
  function getFile(uint fId,address receiver) public view returns(string memory,string memory,address,address){
      
      return (SharedDataMapping[receiver][fId].storedHash,SharedDataMapping[receiver][fId].fileName,
      SharedDataMapping[receiver][fId].sender,SharedDataMapping[receiver][fId].receiver);
  }
  
  function getFileId(address receiver) public view returns(uint){
    return fileKey[receiver];
  }

}
