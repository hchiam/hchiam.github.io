export default function scrollToRef(ref) {
  console.log(ref);
  return window.scrollTo(0, ref.current.offsetTop);
}
