import { Common } from './Common';

export default class Trade implements Common<Trade> {
  constructor(
    readonly date: Date,
    readonly quantity: number,
    readonly value: number) {}

  get volume() {
    return this.quantity * this.value;
  }

  log(): void {
    console.log(`
      date: ${this.date}
      quantity: ${this.quantity}
      value: ${this.value}
    `)
  }

  isEqual(trade: Trade): boolean {
    return this.date.getDate() == trade.date.getDate()
      && this.date.getMonth() == trade.date.getMonth()
      && this.date.getFullYear() == this.date.getFullYear()
      && this.quantity == trade.quantity
      && this.value == trade.value;
  }
}