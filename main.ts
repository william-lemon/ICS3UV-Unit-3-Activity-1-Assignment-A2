/**
 * @author William Lemon
* @version 1.0.0
 * @date 2025-11-11
 * @fileoverview Calculate the side length (length, width, height) of a cube given its volume.
 */

// intialize volume in cubic millimeters (mm³)
const VOLUME: number = 1000;

// PROCESS
// calculate cube root: The side length is the cube root of the volume.
// Math.cbrt() is used for accurate cube root calculation.
let sideLength: number = Math.cbrt(VOLUME);

// OUTPUT 
console.log(
  "The length and width and height of a cube with a volume of " +
  VOLUME +
  " mm³ is " +
  sideLength +
  " mm."
);

console.log("\nDone.");