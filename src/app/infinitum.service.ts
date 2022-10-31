import { Injectable } from '@angular/core';
import { ethers } from 'ethers'
import bigNumberToETHString from '../helpers/bigNumberToETHString'
import * as ContractAddressesJSON from '../assets/contracts/contracts.json'
import * as InfinitumFarmJSON from '../assets/contracts/infinitumFarm-contract/InfinitumFarm.json'
import * as InfinitumTokenJSON from '../assets/contracts/infinitumToken-contract/infinitumToken.json'
import currentEpoch from 'src/helpers/currentEpoch';

@Injectable({
  providedIn: 'root'
})
export class InfinitumService {
  currentAccount: string;
  isLoggedIn: Boolean;
  contractOwner: string;
  infinitumFarmContractAddress: string;
  infinitumTokenContractAddress: string;

  contractAddressesJSON {
    infinitumFarmContractAddress: string,
    infinitumTokenContractAddress: string
  }
  infinitumFarmContractJSON: any
  infinitumTokenContractJSON: any

  provider: ethers.providers.BaseProvider

  constructor() {
    this.currentAccount: "";
    this. ///continue here

   }
}
