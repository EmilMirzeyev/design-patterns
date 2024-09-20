import type { IOrder } from "../../entities/order/abstraction/i_order";
import { OrderLogger } from "../../helpers/order_logger";
import type { IState } from "../abstraction/i_state";

export class PaymentPendingState implements IState {
  cancelOrder(order: IOrder) {
    OrderLogger.logAction(
      "Cancelling your unpaid order...",
      "PaymentPendingState"
    );
    order.setState(order.cancelledOrderState);
  }

  verifyPayment(order: IOrder) {
    OrderLogger.logAction(
      "Payment verified! Shipping soon.",
      "PaymentPendingState"
    );
    order.setState(order.orderBeingPrepared);
  }

  shipOrder(order: IOrder) {
    OrderLogger.logAction(
      "Cannot ship order when payment is pending!",
      "PaymentPendingState"
    );
  }
}
