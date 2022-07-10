require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strategy dash muscle prosper gentle light army gesture'; 
let testAccounts = [
"0x38824e8d930e9f427b70a47386903804cdba962a26b6870d18d1f4030008f825",
"0x8dc8e29ae7d1f99d27abc46c20eac6396e1f2f9cb196d0cc9d308acf1dc93932",
"0x2e196c9bd622f6abd35b0fdca7ac28041333e65b67fe170adac0e1b7eed3870a",
"0xee871ece18040718b99b9a261c59aed5be5f7d9b22dedf12b9eee6c0f50270a2",
"0x6619194cca4873f3c82d491493418a41efb9e560816dd8512528bc1face6a0a2",
"0xba330462efb0970f3b2c18b6029f6ffb23b18ab394e61949cdcfaf82b5ad7faa",
"0x76394d840e51dfa0bf7d1a55ffe759b0c9ff0fe6921f56d6169e3ad26c35edae",
"0xb619d29b83bebd5eaac99002c7cc14b4ca38f14c95c2b3a4f24701f2dd70e3bc",
"0xdd8aba8807a963fa07ac15cd67fc0c56b2564e1bc67221ede073aaebab0e3e08",
"0xbea8846a87097633cc588763fcf119813e7d678eb4ca0c6ac93f9e54e056bd71"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

