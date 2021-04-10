// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <=0.8.3;

contract HashStorage {


  string storedHash;
  string fileName;

  event ShareFile(
    uint id,
    string ipfsValue,
    string fileName,
    address receiver,
    address sender
  );

  function uploadHash(string memory x,string memory y) public {
    storedHash = x;
    fileName = y;
    emit ShareFile(1,storedHash,fileName,0xCd90395EF46b2de4410de9c189D6Cc90Badfd97b,0x7Df61A1514aa8A8ABF66866f34B410Ee5150274C);
  }

  function getHash() public view returns (string memory) {
    return storedHash;

  }


}
