import type { Product } from "../entities/product/product";
import type { Observer } from "./observer";

export interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(product?: Product): void;
}
