import { PartialTrade } from "../models/PartialTrade";
import Trade from "../models/Trade";

export class TradeService {
  getTrades(handler: HandlerFunction): Promise<Trade[]> {
    return fetch('http://localhost:8080/dados')
      .then(response => handler(response))
      .then(response => response.json())
      .then((dados: PartialTrade[]) =>
        dados.map(dado => new Trade(new Date(), dado.vezes, dado.montante))
      )
      .catch(err => console.log(err));
  }
}

export interface HandlerFunction {
  (response: Response): Response
}