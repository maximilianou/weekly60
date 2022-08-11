# weekly60

React Typescript Nextjs web3 ipfs decentralized distributed linux onboarding learning sample

------

```
npm install -D hardhat
npm install -D ts-node
```

> tsconfig.json
```tsx
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "CommonJS",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

```
npx hardhat compile // option hardhat empty config file
```

> hardhat.config.js
```
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};
```

> Local Environment configured! for Solidity Smart Contracts
```
npx hardhat compile
Nothing to compile
```

> contracts/Box.sol
```tsx
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
```

```
npm install -D @openzeppelin/contracts
```

```
npx hardhat compile
Compiled 3 Solidity files successfully
```

------

> contracts/GovernanceToken.sol
```tsx
// contracts/GovernanceToken.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
contract GovernanceToken is ERC20Votes {
  uint256 public s_maxSupply = 1000000000000000000000000;
  constructor() 
    ERC20("GovernanceToken","GT")
    ERC20Permit("GovernanceToken"){
    _mint(msg.sender, s_maxSupply);
  }
  // overrides
  function _afterTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override {
    super._afterTokenTransfer(from, to, amount);
  }
  function _mint(
    address to,
    uint256 amount
  ) internal override(ERC20Votes) {
    super._mint(to, amount);
  }
  function _burn(
    address account, 
    uint256 amount
    ) internal override(ERC20Votes) {
    super._burn(account, amount);
  }
}
```
> GovernanceToken Solidity compiled!
```
yarn hardhat compile
yarn run v1.22.15
$ /home/debian/projects/weekly60/blog5/node_modules/.bin/hardhat compile
Compiled 14 Solidity files successfully
Done in 3.07s.
```


```
npm install -D typescript typechain ts-node @typechain/ethers-v5 @typechain/hardhat @types/chai @types/node
```

> hardhat.config.ts
```tsx
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};
```

> This command will show deploy because /deploy/<tasks> directory with each file a task to execute.
```tsx
npx hardhat --help
...
  deploy                Deploy contracts
...

```


> Error ! Good to know
```
Compiled 38 Solidity files successfully
An unexpected error occurred:

Error: ERROR processing /home/debian/projects/weekly60/blog5/deploy/01-deploy-governor.ts:
TypeError: deployScript.func is not a function
```
> Solution: export default deployGovernanceToken
```tsx
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types'; 

const deployGovernanceToken: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  console.log(`[Doing] Deploy Script task execute with npx hardhat deploy ( npx hardhat --help )`);
  console.log(" --- This file was touched to have Environment Config in place ;)");
  console.log("> hardhat.config.ts");
  console.log("```tsx");
  console.log("import 'hardhat-deploy';");
  console.log("import '@nomiclabs/hardhat-ethers';");
  console.log("import '@typechain/hardhat';");
  console.log("/** @type import('hardhat/config').HardhatUserConfig */");
  console.log("module.exports = {");
  console.log('  solidity: "0.8.9",');
  console.log("};");
  console.log("```");
  console.log(" --- ");
};

export default deployGovernanceToken;
```

> OK executed deploy task over hardhat 
```tsx
npx hardhat deploy 
Nothing to compile
No need to generate any newer typings.
[Doing] Deploy Script task execute with npx hardhat deploy ( npx hardhat --help )
 --- This file was touched to have Environment Config in place ;)
> hardhat.config.ts

import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};
```

-----
> hardhat.config.ts Add Network and selection Account 0
```tsx
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
import { HardhatUserConfig } from 'hardhat/config';
/** @type import('hardhat/config').HardhatUserConfig */
//module.exports = {
//  solidity: "0.8.9",
//};
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  }
}
export default config;
```

> Node Hardhat execution, run tasks, then create accounts and network *This accounts are just for local development*
```tsx
npx hardhat node
Nothing to compile
No need to generate any newer typings.
[Doing] Deploy Script task execute with npx hardhat deploy ( npx hardhat --help )
 --- This file was touched to have Environment Config in place ;)
> hardhat.config.ts
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};
 --- 
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
...
```

---------

> deploy/01-deploy-governor.ts
```tsx
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
```

> Successfuly deployed! and address of deployed contract
```tsx
 npx hardhat deploy
Nothing to compile
No need to generate any newer typings.
[Doing] Deploy Script task execute with npx hardhat deploy ( npx hardhat --help )
 --- This file was touched to have Environment Config in place ;)
> hardhat.config.ts

import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};

 --- 
Deploying Govenance Token...
deploying "GovernanceToken" (tx: 0xc45413a5060243c08fb5576746a2647ae92a39bfa5c523dfaa016ec504a2caa7)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 3326223 gas
Deployed governance token to address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

------


> deploy/01-deploy-governor.ts - Create Delegate Function
```tsx
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types'; 
import { ethers } from 'hardhat';
const deployGovernanceToken: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
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

  await delgate(governanceToken.address, deployer);
  log(`Delegated!`);
};
const delgate = async (governanceTokenAddress: string, delgatedAccount: string) => {
  const governanceToken = await ethers.getContractAt(
    "GovernanceToken", governanceTokenAddress
  );
  const tx = await governanceToken.delegate( delgatedAccount );
  await tx.wait(1);
  console.log(
    `Checkpoints ${await governanceToken.numCheckpoints(delgatedAccount)}`
  );
}
export default deployGovernanceToken;
```
> Ok execute 
```tsx
npx hardhat deploy
Nothing to compile
No need to generate any newer typings.
Deploying Govenance Token...
deploying "GovernanceToken" (tx: 0xc45413a5060243c08fb5576746a2647ae92a39bfa5c523dfaa016ec504a2caa7)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 3326223 gas
Deployed governance token to address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Checkpoints 1
Delegated!
```
------

### Deploy GovernorContract

> Contract Too Large - Lets look in hardhat for solution ;)
```
Deploying governor..
An unexpected error occurred:

Error: ERROR processing /home/debian/projects/weekly60/blog5/deploy/03-deploy-governor-contract.ts:
Error: Transaction reverted: trying to deploy a contract whose code is too large
    at GovernorContract.constructor (contracts/governance_standard/GovernorContract.sol:18)
    at async EthModule._estimateGasAction (/home/debian/projects/weekly60/blog5/node_modules/hardhat/src/internal/hardhat-network/provider/modules/eth.ts:429:7)
```

> google.com [ Error: Transaction reverted: trying to deploy a contract whose code is too large ]

<https://github.com/NomicFoundation/hardhat/issues/1430#issuecomment-1175863046>

```
 dzmitry-lahoda commented on Jul 6

https://hardhat.org/hardhat-network/reference#allowunlimitedcontractsize
```

<https://hardhat.org/hardhat-network/docs/reference#allowunlimitedcontractsize>

> allowUnlimitedContractSize
>
> An optional boolean that disables the contract size limit imposed by the EIP 170
> . Default value: false

> hardhat.config.ts
```tsx
// hardhat.config.ts
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
import { HardhatUserConfig } from 'hardhat/config';
/** @type import('hardhat/config').HardhatUserConfig */
//module.exports = {
//  solidity: "0.8.9",
//};
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true
    },
    localhost: {
      chainId: 31337,
      allowUnlimitedContractSize: true
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  },
}
export default config;
```

> helper-hardhat-config.ts
```tsx
// helper-hardhat-config.ts
export const MIN_DELAY = 3600;
export const VOTING_PERIOD = 5;
export const VOTING_DELAY = 1;
export const QUORUM_PERCENTAGE = 4;
```

> deploy/03-deploy-governor-contract.ts
```tsx
// deploy/03-deploy-governor-contract.ts
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { 
  VOTING_DELAY, 
  VOTING_PERIOD, 
  QUORUM_PERCENTAGE } from '../helper-hardhat-config';
const deployGovernorContract: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
  ) => {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const governanceToken = await get("GovernanceToken");
  const timelock = await get("TimeLock");
  log('Deploying governor..');
  const governorContract = await deploy("GovernorContract", {
    from: deployer,
    args: [
      governanceToken.address,
      timelock.address, 
      VOTING_DELAY,
      VOTING_PERIOD,
      QUORUM_PERCENTAGE,
    ],
    log: true
  });
};
export default deployGovernorContract;
```

> contracts/governance_standard/GovernorContract.sol
```tsx
// contracts/governance_standard/GovernorContract.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
contract GovernorContract is
    Governor,
    GovernorSettings,
    GovernorCountingSimple,
    GovernorVotes,
    GovernorVotesQuorumFraction,
    GovernorTimelockControl
  {
    constructor(
      IVotes _token,
      TimelockController _timelock,
      uint256 _quorumPercentage,
      uint256 _votingPeriod,
      uint256 _votingDelay
    )
      Governor("GovernorContract")
      GovernorSettings(
        _votingDelay,
        _votingPeriod,
        0
      )
      GovernorVotes(_token)
      GovernorVotesQuorumFraction(_quorumPercentage)
      GovernorTimelockControl(_timelock)
    { }
    function votingDelay(
    ) public view override(IGovernor, GovernorSettings) returns(uint256){
      return super.votingDelay();
    }
    function votingPeriod(
    ) public view override(IGovernor, GovernorSettings) returns(uint256){
      return super.votingPeriod();
    }
    function quorum(uint256 blockNumber
    ) public view override(IGovernor, GovernorVotesQuorumFraction) returns(uint256){
      return super.quorum(blockNumber);
    }
    function getVotes(address account, uint256 blockNumber
    ) public view override(IGovernor, Governor) returns(uint256){
      return super.getVotes(account, blockNumber);
    }
    function state(
      uint256 proposalId
      ) public view override(Governor, GovernorTimelockControl) returns(ProposalState) {
      return super.state(proposalId);
    }
    function propose(
      address[] memory targets,
      uint256[] memory values,
      bytes[] memory calldatas,
      string memory description
    ) public override(Governor, IGovernor) returns(uint256) {
      return super.propose(targets, values, calldatas, description);
    }
    function proposalThreshold(      
    ) public view override(Governor, GovernorSettings) returns(uint256) {
      return super.proposalThreshold();
    }
    function _execute(
      uint256 proposalId,
      address[] memory targets,
      uint256[] memory values,
      bytes[] memory calldatas,
      bytes32 descriptionHash
    ) internal override(Governor, GovernorTimelockControl) {
      super._execute(proposalId, targets, values, calldatas, descriptionHash);
    }
    function _cancel(
      address[] memory targets,
      uint256[] memory values,
      bytes[] memory calldatas,
      bytes32 descriptionHash
    ) internal override(Governor, GovernorTimelockControl) returns(uint256) {
      return super._cancel(targets, values, calldatas, descriptionHash);
    }
    function _executor(
    ) internal view override(Governor, GovernorTimelockControl) returns (address){
      return super._executor();
    }
    function supportsInterface(bytes4 interfaceId
    ) public view override(Governor, GovernorTimelockControl) returns(bool){
      return super.supportsInterface(interfaceId);
    }
}
```

> [OK] Deployed Successfuly!!
```tsx
npx hardhat deploy
Nothing to compile
No need to generate any newer typings.
[Doing] Deploy Script task execute with npx hardhat deploy ( npx hardhat --help )
Deploying Govenance Token...
deploying "GovernanceToken" (tx: 0xc45413a5060243c08fb5576746a2647ae92a39bfa5c523dfaa016ec504a2caa7)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 3326223 gas
Deployed governance token to address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Checkpoints 1
Delegated!
Deploying TimeLock...
deploying "TimeLock" (tx: 0x1d49df6810f840f2b349c37b0cc34b2312509a2230de92dfaa706bc2a8dde4f1)...: deployed at 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 with 3054354 gas
Deploying governor..
deploying "GovernorContract" (tx: 0xeeda6d0679ee1e7b2409823834b7ae5f5ccf98fdb8ea3d223a2c369b97906e74)...: deployed at 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 with 6193548 gas
```

----

> Here I have a Problem, address === address in some place is different
> 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853 === 0xa513e6e4b8f2a923d98304ec87f64353c4d5c853
> InvalidInputError: unknown account 0xa513e6e4b8f2a923d98304ec87f64353c4d5c853
```
Deploying Box...
deploying "Box" (tx: 0xdb0cc86e3bc598908c15beb28ca9bfe0bb11e629d20177986100d7767dec7416)...: deployed at 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853 with 398257 gas
An unexpected error occurred:

Error: ERROR processing /home/debian/projects/weekly60/blog5/deploy/05-deploy-box.ts:
InvalidInputError: unknown account 0xa513e6e4b8f2a923d98304ec87f64353c4d5c853
    at HardhatNode.getSignedTransaction (/home/debian/projects/weekly60/blog5/node_modules/hardhat/src/internal/hardhat-network/provider/node.ts:433:11)
```
<https://docs.ethers.io/v5/api/utils/address/#utils-getAddress>
>Address
>
>An Address is a DataHexString of 20 bytes (40 nibbles), with optional mixed case.
>
>If the case is mixed, it is a Checksum Address, which uses a specific pattern of uppercase and >lowercase letters within a given address to reduce the risk of errors introduced from typing an >address or cut and paste issues.
>
>All functions that return an Address will return a Checksum Address.

---------



> deploy/04-setup-governor-contract.ts
```tsx
// deploy/04-setup-governor-contract.ts
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import { ADDRESS_ZERO } from '../helper-hardhat-config';
const setupContracts: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  const { getNamedAccounts, deployments }  = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const timeLock = await ethers.getContract("TimeLock", deployer);
  const governor = await ethers.getContract("GovernorContract", deployer);
  log("Setting up Roles..");
  const proposerRole = await timeLock.PROPOSER_ROLE();
  const executorRole = await timeLock.EXECUTOR_ROLE();
  const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE();
  const proposerTx = await timeLock.grantRole(proposerRole, governor.address);
  await proposerTx.wait(1);
  const executorTx = await timeLock.grantRole(executorRole, ADDRESS_ZERO);
  await executorTx.wait(1);
  const revokeTx = await timeLock.revokeRole(adminRole, deployer);
  await revokeTx.wait(1);
}
export default setupContracts;
```

> deploy/05-deploy-box.ts
```tsx
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
```
> contracts/governance_standard/TimeLock.sol
```tsx
// contracts/governance_standard/TimeLock.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/governance/TimelockController.sol";
contract TimeLock is TimelockController {
  constructor(
    uint256 minDelay,
    address[] memory proposers,
    address[] memory executors
  ) TimelockController(minDelay, proposers, executors) {
  }
}
```
> contracts/governance_standard/GovernorContract.sol
```tsx
// contracts/governance_standard/GovernorContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
contract GovernorContract is
    Governor,
    GovernorSettings,
    GovernorCountingSimple,
    GovernorVotes,
    GovernorVotesQuorumFraction,
    GovernorTimelockControl
  {
    constructor(
      IVotes _token,
      TimelockController _timelock,
      uint256 _quorumPercentage,
      uint256 _votingPeriod,
      uint256 _votingDelay
    )
      Governor("GovernorContract")
      GovernorSettings(
        _votingDelay,
        _votingPeriod,
        0
      )
      GovernorVotes(_token)
      GovernorVotesQuorumFraction(_quorumPercentage)
      GovernorTimelockControl(_timelock)
    { }
    function votingDelay(
    ) public view override(IGovernor, GovernorSettings) returns(uint256){
      return super.votingDelay();
    }
    function votingPeriod(
    ) public view override(IGovernor, GovernorSettings) returns(uint256){
      return super.votingPeriod();
    }
    function quorum(uint256 blockNumber
    ) public view override(IGovernor, GovernorVotesQuorumFraction) returns(uint256){
      return super.quorum(blockNumber);
    }
    function getVotes(address account, uint256 blockNumber
    ) public view override(IGovernor, Governor) returns(uint256){
      return super.getVotes(account, blockNumber);
    }
    function state(
      uint256 proposalId
      ) public view override(Governor, GovernorTimelockControl) returns(ProposalState) {
      return super.state(proposalId);
    }
    function propose(
      address[] memory targets,
      uint256[] memory values,
      bytes[] memory calldatas,
      string memory description
    ) public override(Governor, IGovernor) returns(uint256) {
      return super.propose(targets, values, calldatas, description);
    }
    function proposalThreshold(      
    ) public view override(Governor, GovernorSettings) returns(uint256) {
      return super.proposalThreshold();
    }
    function _execute(
      uint256 proposalId,
      address[] memory targets,
      uint256[] memory values,
      bytes[] memory calldatas,
      bytes32 descriptionHash
    ) internal override(Governor, GovernorTimelockControl) {
      super._execute(proposalId, targets, values, calldatas, descriptionHash);
    }
    function _cancel(
      address[] memory targets,
      uint256[] memory values,
      bytes[] memory calldatas,
      bytes32 descriptionHash
    ) internal override(Governor, GovernorTimelockControl) returns(uint256) {
      return super._cancel(targets, values, calldatas, descriptionHash);
    }
    function _executor(
    ) internal view override(Governor, GovernorTimelockControl) returns (address){
      return super._executor();
    }
    function supportsInterface(bytes4 interfaceId
    ) public view override(Governor, GovernorTimelockControl) returns(bool){
      return super.supportsInterface(interfaceId);
    }
}
```
> contracts/Box.sol
```tsx
// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
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
```
-------------

> scripts/propose.ts
```tsx
// scripts/propose.ts
// @ts-ignore
import { ethers } from 'hardhat';
import { NEW_STORE_VALUE, FUNC } from '../helper-hardhat-config';
export async function propose(args: any[], functionToCall: string){
  const governor = await ethers.getContract("GovernorContracts");
  const box = await ethers.getContract("Box");
  const encodedFunctionCall = box.interface.encodeFunctionData(
    functionToCall,
    args
  );
};

propose([NEW_STORE_VALUE], FUNC)
  .then( () => process.exit(0))
  .catch( err => { 
    console.error(err);
    process.exit(-1);
  });
```

```
npx hardhat node
```

```
npx hardhat run script/propose.ts --network localhost
```





------
REFERENCES: Patrick Collins <https://www.youtube.com/watch?v=AhJtmUqhAqg>

-------

