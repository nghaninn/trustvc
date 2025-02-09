import { ethers } from 'ethers';
import { ethers as ethersV6 } from 'ethersV6';
import { describe, expect, it } from 'vitest';
import { fetchEndorsementChain } from '../../core';

const provider = new ethers.providers.JsonRpcProvider('https://rpc-amoy.polygon.technology');
const providerV6 = new ethersV6.JsonRpcProvider('https://rpc-amoy.polygon.technology');

const testCases = [
  {
    description: 'Token Registry V4 with Transfer, Surrender, Burnt events',
    tokenRegistryAddress: '0x71D28767662cB233F887aD2Bb65d048d760bA694',
    tokenId: '0x780e38c6345dac12cedb7aacc69492ff31cc5236cd60da46261aa1c27691141e',
    expected: [
      {
        type: 'INITIAL',
        transactionHash: '0x2d98ae3908f0edd095a871a0c56dd3c0e1cfd657b53f28f7c01b1cb83bebc28b',
        transactionIndex: 5,
        blockNumber: 6162747,
        owner: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        holder: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        remark: '',
        timestamp: 1713778879000,
      },
      {
        type: 'TRANSFER_HOLDER',
        transactionHash: '0x38df7d1bd50f89aefa3a4385afe12f4d9dd320bcdc24d9ff7a775193fa5b6178',
        transactionIndex: 4,
        blockNumber: 6164050,
        owner: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        holder: '0xd3DD13B7e8D7454F4Fdf0e1a630FDE4f9De84749',
        remark: '',
        timestamp: 1713782103000,
      },
      {
        type: 'TRANSFER_BENEFICIARY',
        transactionHash: '0x4a3be9573991980738e99a1f39485b9141c9012419076cbc1bd87038b3efd313',
        transactionIndex: 3,
        blockNumber: 6201774,
        owner: '0xB7F0Eb2b207E93D0aA4C90329F3227f6f599f885',
        holder: '0xd3DD13B7e8D7454F4Fdf0e1a630FDE4f9De84749',
        remark: '',
        timestamp: 1713866365000,
      },
      {
        type: 'TRANSFER_HOLDER',
        transactionHash: '0xff88596d7b86e99dfa2851bec90ed47acc30dbde0c7d4924501584809d657135',
        transactionIndex: 1,
        blockNumber: 6202088,
        owner: '0xB7F0Eb2b207E93D0aA4C90329F3227f6f599f885',
        holder: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        remark: '',
        timestamp: 1713867129000,
      },
      {
        type: 'TRANSFER_HOLDER',
        transactionHash: '0x888ef1ce5cd0455e9bfa50122d76e12d54da87d3b93c34460c2439116c582ca6',
        transactionIndex: 3,
        blockNumber: 6202133,
        owner: '0xB7F0Eb2b207E93D0aA4C90329F3227f6f599f885',
        holder: '0xB7F0Eb2b207E93D0aA4C90329F3227f6f599f885',
        remark: '',
        timestamp: 1713867225000,
      },
      {
        type: 'SURRENDERED',
        transactionHash: '0x21b804d9bbd9953310eaa62f0d6b0cf9a2821af86913bf252ea75958f84d7b17',
        transactionIndex: 5,
        blockNumber: 6203041,
        owner: '0xB7F0Eb2b207E93D0aA4C90329F3227f6f599f885',
        holder: '0xB7F0Eb2b207E93D0aA4C90329F3227f6f599f885',
        remark: '',
        timestamp: 1713869315000,
      },
      {
        type: 'SURRENDER_REJECTED',
        transactionHash: '0x611f48ddedeea93f470dd6a3ba96d2eeb9c896fc954e616c3fcb8811d92c3ea4',
        transactionIndex: 0,
        blockNumber: 6242100,
        owner: '0xB7F0Eb2b207E93D0aA4C90329F3227f6f599f885',
        holder: '0xB7F0Eb2b207E93D0aA4C90329F3227f6f599f885',
        remark: '',
        timestamp: 1713956826000,
      },
      {
        type: 'TRANSFER_OWNERS',
        transactionHash: '0xba94dbbd7905d706244fdd53121d41ec23c4d67ab08d2f0820287d07f4d03989',
        transactionIndex: 1,
        blockNumber: 6242178,
        owner: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        holder: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        remark: '',
        timestamp: 1713956992000,
      },
      {
        type: 'TRANSFER_HOLDER',
        transactionHash: '0xd95d77620c7916290fecd2a38277dec9010e63872dc96be05f3126767b39ba4e',
        transactionIndex: 3,
        blockNumber: 6242197,
        owner: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        holder: '0xB7F0Eb2b207E93D0aA4C90329F3227f6f599f885',
        remark: '',
        timestamp: 1713957044000,
      },
      {
        type: 'TRANSFER_HOLDER',
        transactionHash: '0xee5eb7953687e0d2e05be34091e4a59256de4dc7df18eaeaf1a65cbb833ba6a8',
        transactionIndex: 3,
        blockNumber: 6242545,
        owner: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        holder: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        remark: '',
        timestamp: 1713957840000,
      },
      {
        type: 'SURRENDERED',
        transactionHash: '0x039f729fe72d703a799bfbe6736f51f84639ec166632da8c9ea4e1995016fa95',
        transactionIndex: 1,
        blockNumber: 6242768,
        owner: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        holder: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        remark: '',
        timestamp: 1713958374000,
      },
      {
        type: 'SURRENDER_ACCEPTED',
        transactionHash: '0xcf6968ef91efe74b8ada1770fc31e811f15989f80b0d518a42e06d4ab5bac8bd',
        transactionIndex: 3,
        blockNumber: 6242791,
        owner: '0x0000000000000000000000000000000000000000',
        holder: '0x0000000000000000000000000000000000000000',
        remark: '',
        timestamp: 1713958422000,
      },
    ],
    timeout: 30000,
  },
  {
    description: 'Token Registry V5 with Transfer, Surrender, Burnt events',
    tokenRegistryAddress: '0x3781bd0bbd15Bf5e45c7296115821933d47362be',
    tokenId: '0xe3fa2bbdbfd093d2bb4e1555dde01338af25d5cf1d6d87bd0f22d7302f133f9a',
    expected: [
      {
        type: 'INITIAL',
        transactionHash: '0x1a81b333253e30d992660ba9708d9deb47eab9479acaffb464dc7252eb0bcbcd',
        transactionIndex: 0,
        blockNumber: 15012819,
        owner: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        holder: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        timestamp: 1732868913000,
        remark: '',
      },
      {
        blockNumber: 15068417,
        holder: '0xe0A71284EF59483795053266CB796B65E48B5124',
        owner: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        remark: 'Transfer Holdership',
        timestamp: 1732987077000,
        transactionHash: '0xd6438cbcf121295023be61b96a01d71e31b53018b03110899091cbb082cc9360',
        transactionIndex: 1,
        type: 'TRANSFER_HOLDER',
      },
      {
        blockNumber: 15068463,
        holder: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        owner: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        remark: 'Reject Holdership',
        timestamp: 1732987173000,
        transactionHash: '0x5010bf1c17b29f6c333c170b8293feadd7ea58be1d1098a33cbe2024b4d2a95f',
        transactionIndex: 1,
        type: 'REJECT_TRANSFER_HOLDER',
      },
      {
        blockNumber: 15068525,
        holder: '0xe0A71284EF59483795053266CB796B65E48B5124',
        owner: '0xe0A71284EF59483795053266CB796B65E48B5124',
        remark: 'Transfer of Ownership and Holdership',
        timestamp: 1732987305000,
        transactionHash: '0xedd28b262666c446354999c4f87f4b1eeaba61f5c95c6a41d80ccbf4059e51e1',
        transactionIndex: 0,
        type: 'TRANSFER_OWNERS',
      },
      {
        blockNumber: 15068663,
        holder: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        owner: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        remark: 'Reject Ownership and Holdership',
        timestamp: 1732987599000,
        transactionHash: '0x6710fef3f921de7e3a3e4c782e0fff9222c0fd737f37d8a997b6af133086a86d',
        transactionIndex: 1,
        type: 'REJECT_TRANSFER_OWNERS',
      },
      {
        blockNumber: 15068712,
        holder: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        owner: '0xe0A71284EF59483795053266CB796B65E48B5124',
        remark: 'Transfer Holdership',
        timestamp: 1732987703000,
        transactionHash: '0xadb9231bece27ae3aac4e2483752046014e983b80d54dfc490e3459da451dbfa',
        transactionIndex: 0,
        type: 'TRANSFER_HOLDER',
      },
      {
        blockNumber: 15068740,
        holder: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        owner: '0xe0A71284EF59483795053266CB796B65E48B5124',
        remark: 'Endorse Ownership',
        timestamp: 1732987763000,
        transactionHash: '0x3982f31d4dcb46e44df176d00ead1b388de8cab7edbc75fd4424918a8e3d48ec',
        transactionIndex: 0,
        type: 'TRANSFER_BENEFICIARY',
      },
      {
        blockNumber: 15068755,
        holder: '0xCA93690Bb57EEaB273c796a9309246BC0FB93649',
        owner: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        remark: 'Reject Ownership',
        timestamp: 1732987795000,
        transactionHash: '0x6352647f0ebba87639e79cc9667faba8e9ea7281b7d4981a2dbe9374406d6310',
        transactionIndex: 0,
        type: 'REJECT_TRANSFER_BENEFICIARY',
      },
      {
        blockNumber: 15069476,
        holder: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        owner: '0xe0A71284EF59483795053266CB796B65E48B5124',
        remark: 'Transfer Holder',
        timestamp: 1732989327000,
        transactionHash: '0x2d53578ffe1889dd82eecd5e923dabb06b57eb67a2d16e2c8b210e02b398c5c5',
        transactionIndex: 0,
        type: 'TRANSFER_HOLDER',
      },
      {
        blockNumber: 15069490,
        holder: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        owner: '0xe0A71284EF59483795053266CB796B65E48B5124',
        remark: 'Return To Issuer',
        timestamp: 1732989357000,
        transactionHash: '0x8e575e2a281d3bce5d6e4b6298e1e54b9c49bad0ef135ae9e68fc9d02ccc1ba1',
        transactionIndex: 0,
        type: 'RETURNED_TO_ISSUER',
      },
      {
        blockNumber: 15069501,
        holder: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        owner: '0xe0A71284EF59483795053266CB796B65E48B5124',
        remark: 'Reject Return To Issuer',
        timestamp: 1732989379000,
        transactionHash: '0x3bf456d1fa29e4b7cfc3cbfc3a568f5c2c4e1dd8454d25f8822eea3b65c66956',
        transactionIndex: 0,
        type: 'RETURN_TO_ISSUER_REJECTED',
      },
      {
        blockNumber: 15069511,
        holder: '0x433097a1C1b8a3e9188d8C54eCC057B1D69f1638',
        owner: '0xe0A71284EF59483795053266CB796B65E48B5124',
        remark: 'Return To Issuer',
        timestamp: 1732989401000,
        transactionHash: '0x99e56c4a1ddcf1a8031402a46eb41b4c41f1379f420287aaa57cad0e18ed85ce',
        transactionIndex: 2,
        type: 'RETURNED_TO_ISSUER',
      },
      {
        blockNumber: 15069519,
        holder: '0x0000000000000000000000000000000000000000',
        owner: '0x0000000000000000000000000000000000000000',
        remark: '',
        timestamp: 1732989417000,
        transactionHash: '0xbc9c0a07467310b45f4099578613b0531ab20975d52d1a3485c69e16901e3cb7',
        transactionIndex: 0,
        type: 'RETURN_TO_ISSUER_ACCEPTED',
      },
    ],
    timeout: 30000,
  },
  {
    description: 'Invalid Token Registry Version',
    tokenRegistryAddress: '0x96cc41e7007dee20eb409586e2e8206d5053219b',
    tokenId: '0xd97a8af5c38157b95c558b7801862f4b53171149926d76d0c5b2b279016eed0a',
    expectedError: 'Only Token Registry V4/V5 is supported',
    timeout: 30000,
  },
];

describe.concurrent('fetch endorsement chain', () => {
  testCases.forEach(
    ({ description, tokenRegistryAddress, tokenId, expected, expectedError, timeout }) => {
      it.concurrent.each([
        {
          provider,
          name: 'ethers v5 provider',
        },
        {
          provider: providerV6,
          name: 'ethers v6 provider',
        },
      ])(
        `should work correctly for ${description}, $name`,
        async ({ provider }) => {
          if (expectedError) {
            await expect(
              fetchEndorsementChain(tokenRegistryAddress, tokenId, provider),
            ).rejects.toThrow(expectedError);
          } else {
            const result = await fetchEndorsementChain(tokenRegistryAddress, tokenId, provider);
            expect(result).toBeTruthy();
            expect(result).toStrictEqual(expected);
          }
        },
        timeout,
      );
    },
  );
});
