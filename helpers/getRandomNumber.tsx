// export default function getRandomNumber(start, stop) {
//   const output = Math.floor(Math.random() * stop + start);
//   return output;
// }

export default function getRandomNumber(
  minInclusive: number,
  maxInclusive: number
): number {
  const offSet1IfMin0 = minInclusive === 0 ? 1 : 0;
  const delta = maxInclusive - minInclusive;
  return Math.floor(Math.random() * (delta + offSet1IfMin0)) + minInclusive;
}
