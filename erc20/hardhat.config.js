require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
const { PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 1337,
        },
        backstopTestnet1: {
            url: 'https://testnet.rpc.backstop.technology/',
            accounts: [`0x${PRIVATE_KEY}`],
        },
    },
    solidity: {
        version: "0.8.20",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    etherscan: {
        apiKey: {
            backstopTestnet1: 'any',
        },
        customChains: [
            {
                network: 'backstopTestnet1',
                chainId: 88558801,
                urls: {
                    apiURL: 'https://api.testnet.explorer.backstop.technology/api',
                    browserURL: 'https://testnet.explorer.backstop.technology/',
                },
            },
        ],

    },
};
