import { PatternType } from "./patterns/factory/enums/app_enum";
import { PatternFactory } from "./patterns/factory/index";

const app = PatternFactory.createApp(PatternType.Decorator);

app.run();
