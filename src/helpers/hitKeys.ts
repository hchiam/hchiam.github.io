export function hitEnter(event: KeyboardEvent) {
  var key = event.key || event.code || event.keyCode || event.which || event;
  return key === "Enter" || key === "ENTER" || key === 13;
}

export function hitSpacebar(event: KeyboardEvent) {
  var key = event.key || event.code || event.keyCode || event.which || event;
  return key === " " || key === "Spacebar" || key === 32;
}
