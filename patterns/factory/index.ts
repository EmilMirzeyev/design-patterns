import { AdapterApp } from "../adapter/index";
import { BuilderApp } from "../builder/index";
import { DecoratorApp } from "../decorator/index";
import { FacadeApp } from "../facade/index";
import { ObserverApp } from "../observer/index";
import { SingletonApp } from "../singleton/index";
import { StateApp } from "../state/index";
import { PatternType } from "./enums/app_enum";

export class PatternFactory {
  private static patternMap: { [key in PatternType]: any } = {
    [PatternType.Adapter]: AdapterApp,
    [PatternType.Builder]: BuilderApp,
    [PatternType.Decorator]: DecoratorApp,
    [PatternType.Facade]: FacadeApp,
    [PatternType.Observer]: ObserverApp,
    [PatternType.Singleton]: SingletonApp,
    [PatternType.State]: StateApp,
  };

  static createApp(patternType: PatternType) {
    const AppClass = this.patternMap[patternType];

    if (!AppClass) {
      throw new Error(`Invalid pattern type: ${patternType}`);
    }

    return new AppClass();
  }
}
