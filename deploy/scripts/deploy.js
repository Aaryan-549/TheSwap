const hre = require("hardhat");

async function main() {
  const CustomDex = await hre.ethers.getContractFactory("CustomDex");
  const customDex = await CustomDex.deploy();

  await customDex.deployed();
  console.log(` CustomDex: ${customDex.address}`);
}

//npx hardhat run scripts/deploy.js --network sepolia

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
