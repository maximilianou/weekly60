// deploy/05-deploy-box.ts
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
const deployBox: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  log("Deploying Box...");
  const box = await deploy("Box", {
    from: deployer,
    args: [],
    log: true,
  });
  const boxContract = await ethers.getContract("Box", box.address);
  const timeLock = await ethers.getContract("TimeLock");
  const transferOwnerTx = await boxContract.transferOwnership(
    timeLock.address
  );
  await transferOwnerTx.wait(1);
  log(`Deployed! Box Ownership timelock!!`);
};
export default deployBox;