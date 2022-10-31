import { Injectable } from '@angular/core';
import { ethers, BigNumber } from 'ethers'
import bigNumberToETHString from '../helpers/bigNumberToETHString'
import * as ContractAddressesJSON from '../assets/contracts/contracts.json'

@Injectable({
  providedIn: 'root'
})
export class InfinitumService {

  constructor() { }
}
