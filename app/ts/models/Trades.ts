import Trade from "./Trade";
import { Printable } from "./Printable";

export default class Trades implements Printable {
  // private _trades: Array<Trade> = []
  constructor(private _trades: Trade[] = []) {}

  add(trade: Trade) {
    this._trades.push(trade);
  }

  toArray(): Trade[] {
    return ([] as Trade[]).concat(this._trades);
  }

  log(): void {
    console.log(JSON.stringify(this._trades));
  }
}