const fs = require('fs');
const solc = require('solc');


const source = fs.readFileSync('SimpleStorage.sol', 'utf8');


const input = {
    language: 'Solidity',
    sources: {
        'SimpleStorage.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contractName = 'SimpleStorage';
const abi = output.contracts['SimpleStorage.sol'][contractName].abi;
const bytecode = output.contracts['SimpleStorage.sol'][contractName].evm.bytecode.object;

// Write the ABI and bytecode to files
fs.writeFileSync('SimpleStorage.abi', JSON.stringify(abi, null, 2));
fs.writeFileSync('SimpleStorage.bin', bytecode);
console.log('Compiled successfully!');
