// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract SimpleStorage {
  uint storedData;

  uint myData;

  function set(uint x) public {
    storedData = x;
  }

  function setMyData(uint x) public {
    myData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
