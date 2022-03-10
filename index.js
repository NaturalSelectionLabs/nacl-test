import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';

const msg = `'[["_id",[["$oid","61c54ec1a3bae407078a1a68"]]],["content",[["_pass",[["assets",[["0",[["id","EVM+-0x000000000A38444e0a6E37d3b630d7e855a7cb13-Polygon.NFT-0xb4d21caf1cc3dadec5eecf753f5fc23094ddfb65.736"]]],["1",[["id","EVM+-0x000000000A38444e0a6E37d3b630d7e855a7cb13-Polygon.NFT-0xb766abf815d9e60a79ed96eac1093fbe46f31655.95314"],["order",1]]],["2",[["hide",true],["id","EVM+-0x000000000A38444e0a6E37d3b630d7e855a7cb13-Polygon.NFT-0xdf9293c820d5ac290b97fa62b449a9c790014296.1473"]]],["3",[["hide",true],["id","EVM+-0x000000000A38444e0a6E37d3b630d7e855a7cb13-Polygon.NFT-0x3c7174c46f6aeca7f485665a8ccfa29047f880e8.29"]]],["4",[["hide",true],["id","EVM+-0x000000000A38444e0a6E37d3b630d7e855a7cb13-Polygon.NFT-0x1fdf97e5bee48893eef28116973ca81166e4ec02.884"]]]]]]],["agent_id","NItLuV6qn0hybnExRU4Q42/ISGqYMpI2VHmbRcPdka0="],["assets",[["list_auto","0x000000000A38444e0a6E37d3b630d7e855a7cb13-list-assets.auto-0"]]],["backlinks",[]],["date_created","2021-12-20T15:56:03.737Z"],["date_updated","2021-12-25T07:57:34.114Z"],["id","0x000000000A38444e0a6E37d3b630d7e855a7cb13"],["items",[["list_auto","0x000000000A38444e0a6E37d3b630d7e855a7cb13-list-items.auto-0"]]],["profile",[["avatar",[["0","https://infura-ipfs.io/ipfs/QmcK8FSTtLQVydLEDKLv1hEacLxZgi7j2i4mkQQMyKxv6k"]]],["bio","Just a lazy man =U=<SITE#watertim.dev/>"],["name","WaterTim"]]],["version","rss3.io/version/v0.3.1"]]],["path","0x000000000A38444e0a6E37d3b630d7e855a7cb13"]]'`;

// const pair = nacl.sign.keyPair();
const pair = {
    secretKey: naclUtil.decodeBase64('Z/YJB+0ZmJMCvL6t3QCaPVrHrB6hOm9STgZPp/HqEsMxDitEXBsxrwE2x/yv6v+YItPWqJmi1ZprKr/+Ix1sNw=='),
    publicKey: naclUtil.decodeBase64('MQ4rRFwbMa8BNsf8r+r/mCLT1qiZotWaayq//iMdbDc='),
};

console.log(pair);

const generated = {
    privateKey: naclUtil.encodeBase64(pair.secretKey),
    publickKey: naclUtil.encodeBase64(pair.publicKey),
};

console.log(generated);

const signature = nacl.sign.detached(
    new TextEncoder().encode(msg),
    naclUtil.decodeBase64(generated.privateKey),
);

const sig = naclUtil.encodeBase64(signature);

console.log(sig);

const res = nacl.sign.detached.verify(
    new TextEncoder().encode(msg),
    naclUtil.decodeBase64(sig),
    naclUtil.decodeBase64(generated.publickKey),
);

console.log(res);
