// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 <=0.8.3;

contract HashStorage {
  string storedHash;

  function uploadHash(string memory x) public {
    storedHash = x;
  }

  function getHash() public view returns (string memory) {
    return storedHash;
  }
}
