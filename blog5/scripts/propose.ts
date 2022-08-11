// scripts/propose.ts
// @ts-ignore
import { ethers } from 'hardhat';
import { NEW_STORE_VALUE, FUNC, PROPOSAL_DESCRIPTION } from '../helper-hardhat-config';
export async function propose(
  args: any[], 
  functionToCall: string,
  proposalDescription: string
  ){
  const governor = await ethers.getContract("GovernorContracts");
  const box = await ethers.getContract("Box");
  const encodedFunctionCall = box.interface.encodeFunctionData(
    functionToCall,
    args
  );
  console.log(`Proposing ${functionToCall} on ${box.address} with ${args}`);
  console.log(`Proposal description: ${proposalDescription}`);
  // TODO: fix the deployment problem of address, or nothing will run anyway.
};

propose([NEW_STORE_VALUE], FUNC, PROPOSAL_DESCRIPTION)
  .then( () => process.exit(0))
  .catch( err => { 
    console.error(err);
    process.exit(-1);
  });

