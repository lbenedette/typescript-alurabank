import { Printable } from './Printable'

export default class Trade implements Printable {
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
}