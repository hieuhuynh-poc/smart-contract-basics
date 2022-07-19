// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

contract HelloWorld {
    string private name;


    function get() public view returns (string memory){
        return name;
    }

    function set(string memory newName) public {
        name = newName;
    }

}
