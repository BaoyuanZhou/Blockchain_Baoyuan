// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

import "ibcp2.sol";

contract myContract{
    IBDevTaskPart2 public P2contract;
    constructor(address _P2address){
        P2contract=IBDevTaskPart2(_P2address);
    }
    function sendTask(string calldata message) public{
        P2contract.sendTask(message);
    }
}
// For this part, I created a copy of the part2 contract in Remix. 
// In my contract, I import P2 and create an instance of P2 and use it to call the sendTask function.
