import type { IOrder } from "../../entities/order/abstraction/i_order";
import { OrderLogger } from "../../helpers/order_logger";
import type { IState } from "../abstraction/i_state";

export class OrderShippedState implements IState {
  cancelOrder(order: IOrder) {
    OrderLogger.logAction(
      "You cannot cancel an order that has been shipped.",
      "OrderShippedState"
    );
  }

  verifyPayment(order: IOrder) {
    OrderLogger.logAction("Payment is already verified.", "OrderShippedState");
  }

  shipOrder(order: IOrder) {
    OrderLogger.logAction("Order is already shipped.", "OrderShippedState");
  }
}
