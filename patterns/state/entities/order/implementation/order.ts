import type { IState } from "../../../states/abstraction/i_state";
import { CancelledOrderState } from "../../../states/implementation/cancelled_order_state";
import { OrderBeingPrepared } from "../../../states/implementation/order_being_prepared_state";
import { OrderShippedState } from "../../../states/implementation/order_shipped_state";
import { PaymentPendingState } from "../../../states/implementation/payment_pending_state";
import type { IOrder } from "../abstraction/i_order";

export class Order implements IOrder {
  public cancelledOrderState: IState;
  public paymentPendingState: IState;
  public orderShippedState: IState;
  public orderBeingPrepared: IState;

  public currentState: IState;

  constructor() {
    this.cancelledOrderState = new CancelledOrderState();
    this.paymentPendingState = new PaymentPendingState();
    this.orderShippedState = new OrderShippedState();
    this.orderBeingPrepared = new OrderBeingPrepared();

    this.setState(this.paymentPendingState);
  }

  public setState(state: IState) {
    this.currentState = state;
  }

  public getCurrentState(): IState {
    return this.currentState;
  }

  public cancelOrder() {
    this.currentState.cancelOrder(this);
  }

  public verifyPayment() {
    this.currentState.verifyPayment(this);
  }

  public shipOrder() {
    this.currentState.shipOrder(this);
  }
}
