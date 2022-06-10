// export default function getRandomNumber(start, stop) {
//   const output = Math.floor(Math.random() * stop + start);
//   return output;
// }

export default function getRandomNumber(
  minInclusive: number,
  maxInclusive: number
): number {
  const delta = maxInclusive - minInclusive;
  return Math.floor(Math.random() * (delta + 1)) + minInclusive;
}
