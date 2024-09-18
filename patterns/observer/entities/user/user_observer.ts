import { Observer } from "../../interfaces/observer";
import { ProductCategoryEnum } from "../product/enum/product_enum";
import type { Product } from "../product/product";
import type { User } from "./user";

export class UserObserver implements Observer {
  constructor(private user: User, private interests: ProductCategoryEnum[]) {}

  public update(product: Product): void {
    if (this.interests.includes(product.category)) {
      console.log(
        `${this.user.name} is interested in ${product.name} (${product.category})`
      );
    }
  }
}
