import { Measure } from "../measure/numberMeasure";
import { point } from "./base";
import { Paper } from "./quantities";

export const paperIn: Paper = Measure.of(72, point, "in");
export const paperMm: Paper = Measure.of(72 / 25.4, point, "mm");
export const paperCm: Paper = Measure.of(72 / 2.54, point, "cm");
export const paperPx: Paper = Measure.of(0.75, point, "px");
export const paperPc: Paper = Measure.of(72 / 0.039, point, "pc");
