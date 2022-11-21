
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


/* ===================================================================== */

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};

/* ===================================================================== */

// SPDX-License-Identifier: UNLICENSED
/* pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
//LOck
contract Lock {
    uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
 */


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({color,title,icons,subtitle}) => {
    <div className="flex flex-row justify-center items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center item-center ${color}`}>
            {icons}
        </div>
    </div>
}

const Services = () => {
    return(
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start  ">
                    <h1  className="text-white text-3xl sm:text-5x py-2 text-gradient">
                        Services that We
                        <br />
                        Continue to improve 
                    </h1>
                </div>
            
            <div className="flex-1 flex flex-col justify-start items-center ">
                <ServiceCard 
                    color="bg-[#2952E3]"
                    title="Security Guaranted"
                    icons={<BsShieldFillCheck fontSize={21} className="text-white"/>}
                    subtitle="Security is guaranted. We always maintain privacy."
                />
            </div>
            </div>
        </div>
    );
}

export default Services;