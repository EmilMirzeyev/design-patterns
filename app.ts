import { AdapterApp } from "./patterns/adapter/index";
import { BuilderApp } from "./patterns/builder/index";
import { FacadeApp } from "./patterns/facade/index";
import { ObserverApp } from "./patterns/observer/index";
import { SingletonApp } from "./patterns/singleton/index";
import { StateApp } from "./patterns/state/index";

// const app = new SingletonApp();
// const app = new ObserverApp();
// const app = new FacadeApp();
// const app = new StateApp();
// const app = new AdapterApp();
const app = new BuilderApp();

app.run();
