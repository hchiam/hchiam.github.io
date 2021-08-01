export default function scrollToRef(ref) {
  return window.scrollTo(0, ref.current.offsetTop);
}
