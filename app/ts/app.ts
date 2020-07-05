import TradeController from "./controllers/TradeController";

const controller = new TradeController();

$('.form').submit(controller.add.bind(controller));