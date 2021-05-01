// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <=0.8.3;

contract HashStorage {


  uint fileId=0;

  string storedHash;
  string fileName;
  address sender;
  address receiver;

  event ShareFile(
    uint fileId,
    string ipfsValue,
    string fileName,
    address sender,
    address receiver
  );

  function uploadHash(string memory x,string memory y,address a,address b) public {
    fileId+=1; 
    storedHash = x;
    fileName = y;
    sender  = a;
    receiver = b;
    emit ShareFile(fileId,storedHash,fileName,sender,receiver);
  }

  function getHash() public view returns (string memory) {
    return storedHash;
  }



  


}
