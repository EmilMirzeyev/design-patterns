import type { IOrder } from "../../entities/order/abstraction/i_order";
import { OrderLogger } from "../../helpers/order_logger";
import type { IState } from "../abstraction/i_state";

export class CancelledOrderState implements IState {
  cancelOrder(order: IOrder) {
    OrderLogger.logAction("Order already cancelled", "CancelledOrderState");
  }

  verifyPayment(order: IOrder) {
    OrderLogger.logAction(
      "Cannot verify payment, order is cancelled",
      "CancelledOrderState"
    );
  }

  shipOrder(order: IOrder) {
    OrderLogger.logAction(
      "Cannot ship, order is cancelled",
      "CancelledOrderState"
    );
  }
}
