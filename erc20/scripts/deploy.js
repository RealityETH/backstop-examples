const hre = require("hardhat");
const fs = require("fs");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deployer address:", deployer.address);
    const token = await hre.ethers.deployContract("ExampleToken");
    await token.waitForDeployment();
    const contractAddress = token.target;
    console.log("Contract Address:", contractAddress);
    const tokenArtifact = require("../artifacts/contracts/ExampleToken.sol/ExampleToken.json");
    const tokenAbi = tokenArtifact.abi;
    const contractData = {
        address: contractAddress,
        abi: tokenAbi,
    };
    fs.writeFileSync("./abi/ExampleToken.json", JSON.stringify(contractData, null, 2));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

