import View from "./View";
import Trades from "../models/Trades";

export default class TradeView extends View<Trades> {

  template(model: Trades): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
          </tr>
      </thead>

      <tbody>
        ${model.toArray().map(trade => (
           `
            <tr>
              <td>${trade.date.getDate()}/${trade.date.getMonth() + 1}/${trade.date.getFullYear()}</td>
              <td>${trade.quantity}</td>
              <td>${trade.value}</td>
              <td>${trade.volume}</td>
            </tr>
          `
        )).join('')}
      </tbody>

      <tfoot>
      </tfoot>
    </table> 
    `
  }
}