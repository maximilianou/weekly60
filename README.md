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



------
REFERENCES: Patrick Collins <https://www.youtube.com/watch?v=AhJtmUqhAqg>

-------

