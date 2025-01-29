import { hitEnter } from "./hitKeys";
import { prefersReducedMotion } from "./prefers-reduced-motion";

makeSectionsCollapsibleByH2s();

function makeSectionsCollapsibleByH2s() {
  const taglineH2 = document.querySelector("h2.tagline");
  const nonTaglineH2sAndMore = document.querySelectorAll(
    "h2:not(.tagline), .collapsible-heading"
  );

  taglineH2.setAttribute("tabindex", "0");
  taglineH2.setAttribute("role", "button");
  taglineH2.setAttribute("aria-controls", "tagline_details");
  const taglineDetails: HTMLElement =
    taglineH2.parentElement.querySelector(".tagline-details");
  taglineDetails.style.maxHeight = "";
  if (!prefersReducedMotion()) {
    taglineDetails.style.transition = "max-height 0.2s";
  }
  taglineDetails.style.overflow = "hidden";
  taglineH2.setAttribute("aria-expanded", "true");
  function toggleTaglineH2() {
    if (taglineDetails.style.maxHeight === "") {
      taglineDetails.style.maxHeight = "0px";
      taglineDetails.style.padding = "0px";
      taglineDetails.parentElement.style.minHeight = "0px";
      taglineH2.setAttribute("aria-expanded", "false");
    } else {
      taglineDetails.style.maxHeight = "";
      taglineDetails.style.padding = "";
      taglineDetails.parentElement.style.minHeight = "50vh";
      taglineH2.setAttribute("aria-expanded", "true");
    }
  }
  taglineH2.addEventListener("click", () => {
    toggleTaglineH2();
  });
  taglineH2.addEventListener("keyup", (event: KeyboardEvent) => {
    // detecting spacebar triggers scroll
    if (hitEnter(event)) {
      toggleTaglineH2();
    }
  });

  const bigMaxHeightToAllowAnimation = "5000vh";
  nonTaglineH2sAndMore.forEach((x, i) => {
    const isLastSection = i === nonTaglineH2sAndMore.length - 1;
    const isExtraCollapsibleHeading = x.classList.contains(
      "collapsible-heading"
    );
    x.setAttribute("tabindex", "0");
    x.setAttribute("role", "button");
    x.setAttribute("aria-controls", "collapsible_section_" + (i + 1));
    const section = x.parentElement;
    section.style.maxHeight = bigMaxHeightToAllowAnimation;
    if (!prefersReducedMotion()) {
      section.style.transition = "max-height 0.2s";
    }
    section.style.overflow = "hidden";
    x.setAttribute("aria-expanded", x.getAttribute("aria-expanded") || "true");
    const startCollapsed = x.getAttribute("aria-expanded") === "false";
    if (startCollapsed) toggleH2();
    function toggleH2() {
      const directChildDivs = [...section.children].filter(
        (x) => x.tagName.toLowerCase() === "div"
      );
      if (section.style.maxHeight === bigMaxHeightToAllowAnimation) {
        const factor = isExtraCollapsibleHeading ? 1.7 : 1;
        section.style.maxHeight = x.clientHeight * factor + "px";
        if (!isLastSection) {
          section.style.marginBlockEnd = "0px";
        }
        directChildDivs.map((x) => x.setAttribute("inert", "true"));
        x.setAttribute("aria-expanded", "false");
      } else {
        section.style.maxHeight = bigMaxHeightToAllowAnimation;
        if (!isLastSection && !isExtraCollapsibleHeading) {
          section.style.marginBlockEnd = "var(--size-12)";
        }
        directChildDivs.map((x) => x.removeAttribute("inert"));
        x.setAttribute("aria-expanded", "true");
      }
    }
    x.addEventListener("click", () => {
      toggleH2();
    });
    x.addEventListener("keyup", (event: KeyboardEvent) => {
      // detecting spacebar triggers scroll
      if (hitEnter(event)) {
        toggleH2();
      }
    });
  });
}
