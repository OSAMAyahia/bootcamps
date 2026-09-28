// Page edits that need DOM (see custom.css for the rest). Runs only after React has hydrated,
// so the server HTML still matches what React expects.
(function () {
  var PDF = "/custom/cybersecurity-curriculum.pdf";

  function hydrated(el) {
    return Object.keys(el).some(function (k) { return k.indexOf("__reactFiber") === 0; });
  }

  function curriculumHead() {
    var sections = document.querySelectorAll(".agentic-headings > section");
    var s = sections[3];
    return s && s.firstElementChild && s.firstElementChild.querySelector(":scope > h2") ? s.firstElementChild : null;
  }

  function addDownloadButton() {
    var head = curriculumHead();
    if (!head || head.querySelector(":scope > .cx-download")) return;
    var a = document.createElement("a");
    a.href = PDF;
    a.download = "CODED-Cybersecurity-Curriculum.pdf";
    a.className = "cx-download coded-btn inline-flex w-fit cursor-pointer items-center justify-center rounded-full px-6 py-2.5 text-[15px] font-semibold";
    a.style.cssText = "--btn-bg:#2d4bfd;--btn-bg-hover:#4661fd;--btn-fg:#ffffff;--btn-fg-hover:#ffffff";
    a.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg><span>Download Curriculum</span>';
    head.querySelector(":scope > h2").insertAdjacentElement("afterend", a);
  }

  function relabelApplyBar() {
    document.querySelectorAll("a.coded-btn-host").forEach(function (a) {
      var label = "Apply Now — Get Your Free Consultation";
      if (a.getAttribute("aria-label") !== label) a.setAttribute("aria-label", label);
    });
  }

  function apply() {
    addDownloadButton();
    relabelApplyBar();
  }

  function waitForHydration() {
    var head = curriculumHead();
    if (head && hydrated(head)) {
      apply();
      // Re-apply if React re-renders these parts (e.g. the sticky bar mounting later).
      new MutationObserver(apply).observe(document.body, { childList: true, subtree: true });
      return;
    }
    setTimeout(waitForHydration, 100);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", waitForHydration);
  else waitForHydration();
})();
