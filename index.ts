// mathUtils.ts

/**
 * Adds two numbers.
 * @param a First number
 * @param b Second number
 * @returns Sum of a and b
 */
export function add(a: number, b: number): number {
  validateNumbers(a, b);
  return a + b;
}

/**
 * Subtracts second number from the first.
 * @param a First number
 * @param b Second number
 * @returns Result of a - b
 */
export function subtract(a: number, b: number): number {
  validateNumbers(a, b);
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param a First number
 * @param b Second number
 * @returns Product of a and b
 */
export function multiply(a: number, b: number): number {
  validateNumbers(a, b);
  return a * b;
}

/**
 * Divides first number by the second.
 * @param a Dividend
 * @param b Divisor
 * @returns Result of a / b
 * @throws Error if division by zero
 */
export function divide(a: number, b: number): number {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

/**
 * Finds the remainder of division (modulo)
 * @param a Dividend
 * @param b Divisor
 * @returns Remainder of a % b
 * @throws Error if division by zero
 */
export function remainder(a: number, b: number): number {
  validateNumbers(a, b);
  if (b === 0) {
    throw new Error("Cannot perform modulus operation with zero.");
  }
  return a % b;
}

/**
 * Validates that both inputs are valid numbers.
 * @param a First number
 * @param b Second number
 * @throws Error if inputs are invalid
 */
function validateNumbers(a: number, b: number): void {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both inputs must be numbers.");
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Inputs must not be NaN.");
  }
}

