# creates https://github.com/Zoltu/deterministic-deployment-proxy at the standard 0x7A0D94F55792C434d74a40883C6ed8545E406D12
# deployer address is 0x4c8D290a1B368ac4728d83a9e8321fC3af2b39b1

curl --request POST \
     --url https://testnet.rpc.backstop.technology \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_sendRawTransaction",
  "params": [
    "0xf87e8085174876e800830186a08080ad601f80600e600039806000f350fe60003681823780368234f58015156014578182fd5b80825250506014600cf31ba02222222222222222222222222222222222222222222222222222222222222222a02222222222222222222222222222222222222222222222222222222222222222"
  ]
}
'
