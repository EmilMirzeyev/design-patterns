import type { IOrder } from "../../entities/order/abstraction/i_order";

export interface IState {
  cancelOrder(order: IOrder): void;
  verifyPayment(order: IOrder): void;
  shipOrder(order: IOrder): void;
}
