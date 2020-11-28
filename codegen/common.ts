export interface CommonSpec {
    minExponent: number;
    maxExponent: number;
}

export interface CodeGenSpec extends CommonSpec {
    operators: PartialOperatorSpec[];
}

export interface PartialOperatorSpec {
    fileNamePrefix: string;
    uncurriedTypeNamePrefix: string;
    curriedTypeNamePrefix: string;
    specialCases: { [left: number]: string };
    compute: (left: number, right: number) => number;
}

export interface OperatorSpec extends CommonSpec, PartialOperatorSpec {}

export interface ExponentSpec {
    value: number;
    type: string;
}

export function getExponents({ minExponent, maxExponent }: CommonSpec): ExponentSpec[] {
    const exponents: ExponentSpec[] = [];
    for (let value = minExponent; value <= maxExponent; value++) {
        exponents.push(getExponent(value));
    }
    return exponents;
}

export function getExponent(value: number): ExponentSpec {
    return { value, type: `"${value}"` };
}

export function isExponent(exponent: number, { minExponent, maxExponent }: CommonSpec): boolean {
    return exponent >= minExponent && exponent <= maxExponent && exponent === Math.floor(exponent);
}

export function genFileHeader(): string[] {
    return ["// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.", ""];
}

export function genImport(symbol: string, source: string): string[] {
    return [`import { ${symbol} } from "${source}";`, ""];
}

export function genUncurriedTypeName(spec: OperatorSpec, left?: string | number, right?: string | number): string {
    const args = left !== undefined && right !== undefined ? `<${left}, ${right}>` : "";
    return `${spec.uncurriedTypeNamePrefix}Exponents${args}`;
}

export function genExponentName({ value }: ExponentSpec): string {
    if (value === 0) {
        return "Zero";
    }
    const sign = value < 0 ? "Neg" : "Pos";
    return `${sign}${Math.abs(value)}`;
}
