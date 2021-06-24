import { Measure } from "../measure/numberMeasure";
import { pixel } from "./base";
import { Screen } from "./quantities";

export const cssInch: Screen = Measure.of(96, pixel, 'in')
export const cssMm: Screen = Measure.of(96/25.4, pixel, 'mm')
// export const pt:Screen = Measure.of(, pixel,)