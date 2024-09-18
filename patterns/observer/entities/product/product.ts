import { ProductCategoryEnum } from "./enum/product_enum";

export class Product {
  id: number;
  name: string;
  category: ProductCategoryEnum;

  constructor({ id, name, category }) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}
