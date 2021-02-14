export default function getRandomNumber(start, stop) {
  const output = Math.floor(Math.random() * stop + start);
  return output;
}
