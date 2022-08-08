import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types'; 

const deployGovernanceToken: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  console.log(`[Doing] Deploy Script task execute with npx hardhat deploy ( npx hardhat --help )`);
  console.log(" --- This file was touched to have Environment Config in place ;)");
  console.log("> hardhat.config.ts");
  console.log("import 'hardhat-deploy';");
  console.log("import '@nomiclabs/hardhat-ethers';");
  console.log("import '@typechain/hardhat';");
  console.log("/** @type import('hardhat/config').HardhatUserConfig */");
  console.log("module.exports = {");
  console.log('  solidity: "0.8.9",');
  console.log("};");
  console.log(" --- ");

  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("Deploying Govenance Token...");
  const governanceToken = await deploy("GovernanceToken",{
    from: deployer,
    args: [],
    log: true,
  });
  // verify
  log(`Deployed governance token to address: ${governanceToken.address}`);


};

export default deployGovernanceToken;