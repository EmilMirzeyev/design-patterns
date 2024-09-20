import type { IState } from "../../../states/abstraction/i_state";

export interface IOrder {
  cancelledOrderState: IState;
  paymentPendingState: IState;
  orderShippedState: IState;
  orderBeingPrepared: IState;

  setState(state: IState): void;
  getCurrentState(): IState;

  cancelOrder(): void;
  verifyPayment(): void;
  shipOrder(): void;
}
