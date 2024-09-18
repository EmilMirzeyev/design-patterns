import { ProductCategoryEnum } from "./entities/product/enum/product_enum";
import { Product } from "./entities/product/product";
import { User } from "./entities/user/user";
import { UserObserver } from "./entities/user/user_observer";
import { Shop } from "./subject";

export class ObserverApp {
  private shop = new Shop();

  run() {
    this.setupUsers();
    this.addProducts();
  }

  private setupUsers() {
    const user1 = new User({ id: 1, name: "John", age: 26 });
    const user2 = new User({ id: 2, name: "Marie", age: 32 });

    const observer1 = new UserObserver(user1, [
      ProductCategoryEnum.PHONE,
      ProductCategoryEnum.TV,
    ]);
    const observer2 = new UserObserver(user2, [ProductCategoryEnum.COMPUTER]);

    this.shop.subscribe(observer1);
    this.shop.subscribe(observer2);
  }

  private addProducts() {
    const phoneProduct = new Product({
      id: 1,
      name: "Iphone",
      category: ProductCategoryEnum.PHONE,
    });

    const computerProduct = new Product({
      id: 2,
      name: "Macbook",
      category: ProductCategoryEnum.COMPUTER,
    });

    this.shop.setProduct(phoneProduct);
    this.shop.setProduct(computerProduct);
  }
}

// const telecom = new Shop();

// const user1 = new User({ id: 1, name: "John", age: 26 });
// const user2 = new User({ id: 2, name: "Marie", age: 32 });

// const observer1 = new UserObserver(user1, [
//   ProductCategoryEnum.PHONE,
//   ProductCategoryEnum.TV,
// ]);
// const observer2 = new UserObserver(user2, [ProductCategoryEnum.COMPUTER]);

// telecom.subscribe(observer1);
// telecom.subscribe(observer2);

// const phoneProduct = new Product({
//   id: 1,
//   name: "Iphone",
//   category: ProductCategoryEnum.PHONE,
// });
// telecom.setProduct(phoneProduct);

// const computerProduct = new Product({
//   id: 2,
//   name: "Macbook",
//   category: ProductCategoryEnum.COMPUTER,
// });
// telecom.setProduct(computerProduct);
