// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";
contract Box is Ownable {
  uint256 private value;
  // Emitted when the stored value changes
  event ValueChanged(uint256 newValue);
  // Stores a new value in the Instance of the Contract
  function store(uint256 newValue) public onlyOwner {
    value = newValue;
    emit ValueChanged(newValue);
  }
  // Read the latest stored value in the Instance of the Contract
  function retrieve() public view returns (uint256){
    return value;
  }
}
