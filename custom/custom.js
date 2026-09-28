// Page edits that need DOM (see custom.css for the rest). Runs only after React has hydrated,
// so the server HTML still matches what React expects.
(function () {
  var PDF = "/custom/cybersecurity-curriculum.pdf";
  var PDF_NAME = "CODED-Cybersecurity-Curriculum.pdf";
  var COUNTRY_CODES = ["+965", "+966", "+971", "+973", "+968", "+974", "+962", "+961", "+20", "+964", "+90", "+1", "+44", "+91", "+92", "+63"];

  function hydrated(el) {
    return Object.keys(el).some(function (k) { return k.indexOf("__reactFiber") === 0; });
  }

  function curriculumHead() {
    var sections = document.querySelectorAll(".agentic-headings > section");
    var s = sections[3];
    return s && s.firstElementChild && s.firstElementChild.querySelector(":scope > h2") ? s.firstElementChild : null;
  }

  // ---------- Lead popup ----------
  var modal;

  function buildModal() {
    modal = document.createElement("div");
    modal.className = "cx-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "cx-modal-title");
    modal.setAttribute("data-lenis-prevent", "");
    modal.innerHTML =
      '<div class="cx-modal__card">' +
      '<button type="button" class="cx-modal__close" aria-label="Close">&times;</button>' +
      '<p class="cx-modal__eyebrow">Cybersecurity Bootcamp</p>' +
      '<h3 class="cx-modal__title" id="cx-modal-title">Get the Full Curriculum</h3>' +
      '<p class="cx-modal__sub">Tell us where to reach you and the curriculum PDF will download right away.</p>' +
      '<form novalidate>' +
      '<div class="cx-field"><label for="cx-name">Full name</label>' +
      '<input class="cx-input" id="cx-name" name="name" type="text" autocomplete="name" placeholder="Your full name" required></div>' +
      '<div class="cx-field"><label for="cx-phone">WhatsApp number</label>' +
      '<div class="cx-phone"><select name="code" aria-label="Country code">' +
      COUNTRY_CODES.map(function (c) { return "<option>" + c + "</option>"; }).join("") +
      '</select><input id="cx-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="5000 0000" required></div></div>' +
      '<p class="cx-error" aria-live="polite"></p>' +
      '<button type="submit" class="cx-submit coded-btn inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-2.5 font-semibold" ' +
      'style="--btn-bg:#2d4bfd;--btn-bg-hover:#4661fd;--btn-fg:#ffffff;--btn-fg-hover:#ffffff">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>' +
      "<span>Download Curriculum</span></button>" +
      "</form>" +
      '<p class="cx-modal__note">We’ll only use your number to follow up about the bootcamp.</p>' +
      '<div class="cx-modal__done">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></svg>' +
      '<p>Your download has started.<br>Didn’t get it? <a href="' + PDF + '" download="' + PDF_NAME + '">Download again</a></p></div>' +
      "</div>";
    document.body.appendChild(modal);

    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest(".cx-modal__close")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
    modal.querySelector("form").addEventListener("submit", onSubmit);
  }

  function openModal(e) {
    e.preventDefault();
    if (!modal) buildModal();
    modal.classList.remove("is-done");
    modal.querySelector(".cx-error").textContent = "";
    modal.classList.add("is-open");
    setTimeout(function () { modal.querySelector("#cx-name").focus(); }, 50);
  }

  function closeModal() {
    modal.classList.remove("is-open");
  }

  function startDownload() {
    var a = document.createElement("a");
    a.href = PDF;
    a.download = PDF_NAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function onSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var error = modal.querySelector(".cx-error");
    var name = form.elements.name.value.trim();
    var digits = form.elements.phone.value.replace(/[^\d]/g, "");
    if (name.length < 2) { error.textContent = "Please enter your full name."; form.elements.name.focus(); return; }
    if (digits.length < 7 || digits.length > 15) { error.textContent = "Please enter a valid WhatsApp number."; form.elements.phone.focus(); return; }
    error.textContent = "";

    var button = form.querySelector(".cx-submit");
    button.disabled = true;
    fetch("/api/curriculum-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, whatsapp: form.elements.code.value + digits, page: location.pathname + location.search }),
    })
      .then(function (r) { if (!r.ok) throw new Error(); })
      .then(function () {
        startDownload();
        modal.classList.add("is-done");
        form.reset();
      })
      .catch(function () { error.textContent = "Something went wrong. Please try again."; })
      .then(function () { button.disabled = false; });
  }

  // ---------- Curriculum button ----------
  function addDownloadButton() {
    var head = curriculumHead();
    if (!head || head.querySelector(":scope > .cx-download")) return;
    var a = document.createElement("a");
    a.href = PDF;
    a.className = "cx-download coded-btn inline-flex w-fit cursor-pointer items-center justify-center rounded-full px-6 py-2.5 text-[15px] font-semibold";
    a.style.cssText = "--btn-bg:#2d4bfd;--btn-bg-hover:#4661fd;--btn-fg:#ffffff;--btn-fg-hover:#ffffff";
    a.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg><span>Download Curriculum</span>';
    a.addEventListener("click", openModal);
    head.querySelector(":scope > h2").insertAdjacentElement("afterend", a);
  }

  function relabelApplyBar() {
    document.querySelectorAll("a.coded-btn-host").forEach(function (a) {
      var label = "Get Your Free Consultation — Apply Now";
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
