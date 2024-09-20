import { Order } from "./entities/order/implementation/order";

export class StateApp {
  private order = new Order();

  run() {
    this.orderProduct();
    this.getOrderState();
  }

  private orderProduct() {
    this.order.verifyPayment();
    this.order.shipOrder();
    this.order.cancelOrder();
  }

  private getOrderState() {
    console.log(
      "Order state: " + this.order.getCurrentState().constructor.name
    );
  }
}
