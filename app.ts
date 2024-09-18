import { ObserverApp } from "./patterns/observer/index";
import { SingletonApp } from "./patterns/singleton/index";

const app = new SingletonApp();
// const app = new ObserverApp();

app.run();
