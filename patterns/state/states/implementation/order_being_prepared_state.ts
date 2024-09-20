import { IOrder } from "../../entities/order/abstraction/i_order";
import { OrderLogger } from "../../helpers/order_logger";
import { IState } from "../abstraction/i_state";

export class OrderBeingPrepared implements IState {
  cancelOrder(order: IOrder) {
    OrderLogger.logAction(
      "Cancelling your order. You will be refunded.",
      "OrderBeingPrepared"
    );
    order.setState(order.cancelledOrderState);
  }

  verifyPayment(order: IOrder) {
    OrderLogger.logAction("Payment is already verified.", "OrderBeingPrepared");
  }

  shipOrder(order: IOrder) {
    OrderLogger.logAction("Shipping your order now...", "OrderBeingPrepared");
    order.setState(order.orderShippedState);
  }
}
