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
// for this part, I created a copy of part2 contract in my Remix. 
