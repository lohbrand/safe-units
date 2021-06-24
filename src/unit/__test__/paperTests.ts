import { Measure } from "../../measure/numberMeasure";
import { paperIn, paperMm } from "../paper";

const targetTable = {
  'ptin': 0.013889,
  'ptmm': 0.352778,
  'ptpx': 1.333333,
  'mmpt': 2.834646,
  'mmin': 0.03937,
  'mmpx': 3.779528,
  'pxin': 0.010417,
  'pxpt': 0.75,
  'pxmm': 0.264583,
  'inmm': 25.4,
  'inpx': 96,
  'inpt': 72
}
describe("Paper", () => {

  it("check paper converting",()=>{
    const incomeInch = Measure.of(1,paperIn)
    const incomeMm = Measure.of(1,paperMm)

    expect(incomeInch.toString()).toEqual(`${targetTable.inpt} pt`)
    expect(incomeMm.value.toFixed(6)).toEqual(`${targetTable.mmpt}`)
  })
    // const QuantityNames = Object.keys(Quantity);

    // function forEachQuantity(fn: (quantity: Measure<any>, name: string) => void): void {
    //     QuantityNames.forEach(name => {
    //         fn((Quantity as any)[name], name);
    //     });
    // }

    // it("no two quantities should have the same dimensions", () => {
    //     forEachQuantity((a, aName) => {
    //         forEachQuantity((b, bName) => {
    //             if (aName === bName) {
    //                 return;
    //             }
    //             try {
    //                 expect(a.unit).not.toEqual(b.unit);
    //             } catch (e) {
    //                 console.log(`Quantities '${aName}' and '${bName}' are the same.`);
    //                 throw e;
    //             }
    //         });
    //     });
    // });

    // it("all quantities should be normalized", () => {
    //     forEachQuantity(quantity => {
    //         expect(quantity.value).toBe(1);
    //     });
    // });
});
