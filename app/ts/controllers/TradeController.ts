import TradeView from "../views/TradeView";
import AlertView from "../views/AlertView";
import Trades from "../models/Trades";
import Trade from "../models/Trade";
import { domInject } from "../helpers/decorators/domInject";
import PartialTrade from "../models/PartialTrade";

export default class TradeController {

  // Lazy loading
  @domInject('#data')
  private _inputDate: JQuery;
  @domInject('#quantidade')
  private _inputQuantity: JQuery;
  @domInject('#valor')
  private _inputValue: JQuery;

  private _tradesView = new TradeView('#tradesView');
  private _alertView = new AlertView('#alertView');

  //private _trades: Trades = new Trades();
  private _trades = new Trades();

  constructor() {
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

  importData() {

    function isOk(response: Response) {
      if (response.ok) {
        return response
      } else {
        throw new Error(response.statusText);
      }
    }

    fetch('http://localhost:8080/dados')
      .then(response => isOk(response))
      .then(response => response.json())
      .then((dados: PartialTrade[]) => {
        dados
          .map(dado => new Trade(new Date(), dado.vezes, dado.montante))
          .forEach(trade => this._trades.add(trade))

        this._tradesView.update(this._trades);
        this._alertView.update("Import completed with success!");
      })
      .catch(err => console.log(err));
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