import {
  Address,
  Assets,
  Credential,
  Datum,
  DatumHash,
  Delegation,
  OutRef,
  ProtocolParameters,
  Provider,
  RewardAddress,
  Transaction,
  TxHash,
  Unit,
  UTxO,
} from "lucid-cardano";

export class HydraProvider implements Provider {
  apiUrl: string;

  constructor(apiUrl: string) {
    console.log("HydraProvider", apiUrl);
    this.apiUrl = apiUrl;
  }

  async getProtocolParameters(): Promise<ProtocolParameters> {
    const pp = await fetch(`${this.apiUrl}/protocol-parameters`).then((res) =>
      res.json(),
    );
    console.log(pp);
    return {
      minFeeA: pp.txFeeFixed,
      minFeeB: pp.txFeePerByte,
      maxTxSize: pp.maxTxSize,
      maxValSize: pp.maxValueSize,
      keyDeposit: pp.stakeAddressDeposit,
      poolDeposit: pp.stakePoolDeposit,
      priceMem: pp.executionUnitPrices.priceMemory,
      priceStep: pp.executionUnitPrices.priceSteps,
      maxTxExMem: pp.maxTxExecutionUnits.memory,
      maxTxExSteps: pp.maxTxExecutionUnits.steps,
      coinsPerUtxoByte: pp.utxoCostPerByte,
      collateralPercentage: pp.collateralPercentage,
      maxCollateralInputs: pp.maxCollateralInputs,
      costModels: pp.costModels,
    };
  }

  async getUtxos(addressOrCredential: Address | Credential): Promise<UTxO[]> {
    // TODO: implement
    return [];
  }

  async getUtxosWithUnit(
    addressOrCredential: Address | Credential,
    unit: Unit,
  ): Promise<UTxO[]> {
    // TODO: implement
    return [];
  }

  async getUtxoByUnit(unit: Unit): Promise<UTxO> {
    // TODO: implement
    throw new Error("not implemented");
  }

  async getUtxosByOutRef(outRefs: Array<OutRef>): Promise<UTxO[]> {
    // TODO: implement
    return [];
  }

  awaitTx(txHash: TxHash, checkInterval = 3000): Promise<boolean> {
    // TODO: implement
    throw new Error("not implemented");
  }

  async submitTx(tx: Transaction): Promise<TxHash> {
    // TODO: implement
    throw new Error("not implemented");
  }

  getDatum(datumHash: DatumHash): Promise<Datum> {
    // TODO: implement
    throw new Error("not implemented");
  }

  getDelegation(rewardAddress: string): Promise<Delegation> {
    // TODO: implement
    throw new Error("not implemented");
  }
}
