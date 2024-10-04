const fs = require('fs');

// Read the ABI and bytecode
const abi = fs.readFileSync('SimpleStorage.abi', 'utf8');
const bytecode = fs.readFileSync('SimpleStorage.bin', 'utf8');

// Create the PEM content
const pemContent = `-----BEGIN SMART CONTRACT-----
{
    "hrp": "moa",
    "contract": "SimpleStorage",
    "bytecode": "${bytecode}",
    "abi": ${abi}
}
-----END SMART CONTRACT-----`;

// Write the PEM file
fs.writeFileSync('genesisSmartContract.pem', pemContent);
console.log('genesisSmartContract.pem generated successfully!');
