import type { Product } from "../entities/product/product";

export interface Observer {
  update(product: Product): void;
}
