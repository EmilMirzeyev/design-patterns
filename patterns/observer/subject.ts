import { Product } from "./entities/product/product";
import { Observer } from "./interfaces/observer";
import { Subject } from "./interfaces/subject";

export class Shop implements Subject {
  private observers: Set<Observer> = new Set();
  public products: Product[] = [];

  public subscribe(observer: Observer): void {
    if (this.observers.has(observer)) {
      console.log("User already subscribed");
      return;
    }
    this.observers.add(observer);
    console.log("User successfully subscribed");
  }

  public unsubscribe(observer: Observer): boolean {
    if (!this.observers.has(observer)) {
      console.log("User not subscribed");
      return false;
    }
    this.observers.delete(observer);
    console.log("User successfully unsubscribed");
    return true;
  }

  public notify(product: Product): void {
    console.log("Notifying observers");
    for (const observer of this.observers) {
      observer.update(product);
    }
  }

  public setProduct(product: Product): void {
    this.products.push(product);
    this.notify(product);
  }
}
