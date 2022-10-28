export function IntersectionObserverManager(
  callback: Function,
  options?: IntersectionObserverInit
): void {
  this.observer = null;

  if (IntersectionObserver && !this.observer) {
    this.observer = new IntersectionObserver(handleIntersect, options);
  }

  function handleIntersect(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void {
    entries.forEach(function (entry: IntersectionObserverEntry) {
      if (typeof callback === "function") {
        callback(entry, observer);
      }
    });
  }

  this.observe = function (element: HTMLElement): void {
    if (this.observer) this.observer.observe(element);
  };
}
