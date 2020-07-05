import TradeController from "./controllers/TradeController";

const controller = new TradeController();

$('.form').submit(controller.add.bind(controller));
$('#import').click(controller.importData.bind(controller));