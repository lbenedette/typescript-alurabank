import Trade from "./Trade";

export default class Trades {
  // private _trades: Array<Trade> = []
  constructor(private _trades: Trade[] = []) {}

  add(trade: Trade) {
    this._trades.push(trade);
  }

  toArray(): Trade[] {
    return ([] as Trade[]).concat(this._trades);
  }
}