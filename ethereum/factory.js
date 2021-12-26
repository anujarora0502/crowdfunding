import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

//require('dotenv').config();

//const deployedContractAddress = process.env.deployedContractAddress;
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x42B1179Dac24B4DEFb7474000b635b9f1490c47f"
);

export default instance;
