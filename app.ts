import { FacadeApp } from "./patterns/facade/index";
import { ObserverApp } from "./patterns/observer/index";
import { SingletonApp } from "./patterns/singleton/index";

// const app = new SingletonApp();
// const app = new ObserverApp();
const app = new FacadeApp();

app.run();
