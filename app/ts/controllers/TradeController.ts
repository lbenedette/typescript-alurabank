import TradeView from "../views/TradeView";
import AlertView from "../views/AlertView";
import Trades from "../models/Trades";
import Trade from "../models/Trade";

export default class TradeController {
  
  private _inputDate: JQuery;
  private _inputQuantity: JQuery;
  private _inputValue: JQuery;

  private _tradesView = new TradeView('#tradesView');
  private _alertView = new AlertView('#alertView');

  //private _trades: Trades = new Trades();
  private _trades = new Trades();

  constructor() {
    this._inputDate = $('#data');
    this._inputQuantity = $('#quantidade');
    this._inputValue = $('#valor');

    this._tradesView.update(this._trades);
  }

  add(event: Event) {
    event.preventDefault();

    const date = new Date(this._inputDate.val().replace('/-/g', '/'));
    if (!this.isBusinessDay(date)) {
      this._alertView.update("Only trades on business day!");
      return
    }

    const trade = new Trade(
      date,
      parseInt(this._inputQuantity.val()),
      parseFloat(this._inputValue.val())
    );

    this._trades.add(trade);
    this._tradesView.update(this._trades);
    this._alertView.update("Trade added with success!");
  }

  private isBusinessDay(date: Date) {
    return date.getDay() != WeekDay.Saturday && date.getDay() != WeekDay.Sunday;
  }
}

enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}