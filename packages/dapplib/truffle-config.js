require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remind around hockey private success verb'; 
let testAccounts = [
"0xc7e43dd8367efb2fab1ac6826d2e204c806b62ec91d3f66a4d2e0399c98be6de",
"0x8e22793a3cb5649a4eb26d4114fdbd945b47f4d2afb3457a57af5f74585be955",
"0x460ba463c145a3723b47b8bdda5130ceddf189fb98050c835b6c3d63ac001959",
"0x16e2e163156f148af6bafaa9c3e0de4387f8a5dcee13a261bdb3d7acf05d7e08",
"0xc71559452bfe9820b4f94ec28b6df4e6f94711ea338d9c1fd023cde382d30dd1",
"0x86fb5812672e1a4ded1044bb202f87483a7efb1edcf1cc20b78ed392aad381fe",
"0x1495ab396a02ff3647818f42595c0e1ec9ae350104665512502ae6b0792d0f21",
"0x1a4c9d3c31b61719caf1e2145b33b130e834792247a959b78b74d7fd5cd37343",
"0x96e3be2c7aa8ed0aaa74a1acab6e13f7ef90116c1b3c1c981424b6306968ee61",
"0xa82b4ca8d1f7640baffa221ba41c72e96382dcab3efc6e9920337a98c0879773"
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

