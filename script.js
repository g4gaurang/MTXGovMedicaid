const domains = {
  member: {
    kicker: "MEMBER & SERVICE",
    title: "Make each interaction easier to understand and act on.",
    body: "Connect member profiles, authorized representatives, inquiries, correspondence and service history in a role-based workspace.",
    items: ["Longitudinal operational profile", "Inquiry, complaint and correspondence workflows", "Notices, outreach and preference management", "Next-action guidance with traceable handoffs"]
  },
  provider: {
    kicker: "PROVIDER NETWORK",
    title: "Give provider operations a shared source of work.",
    body: "Coordinate enrollment, screening, credentialing, revalidation, affiliations and directory quality through structured reviews.",
    items: ["Application and evidence intake", "Screening, review and approval routing", "Revalidation status and due-date queues", "Directory and network quality signals"]
  },
  program: {
    kicker: "PROGRAM ADMINISTRATION",
    title: "Translate program direction into controlled configuration.",
    body: "Manage policy versions, benefits, workflows, correspondence and plan oversight with visible effective dates and approval history.",
    items: ["Versioned benefit and policy rules", "Configurable workflows and correspondence", "Waiver and program change tracking", "Plan deliverables, issues and actions"]
  },
  payment: {
    kicker: "PAYMENT & INTEGRITY",
    title: "See where payment operations need attention.",
    body: "Bring claims and encounter signals, financial exceptions, recoveries and integrity work into traceable operating views.",
    items: ["Claims and encounter status visibility", "Adjustment and recovery workflows", "Review, referral and finding management", "Payment measures and exception queues"]
  },
  data: {
    kicker: "DATA & OVERSIGHT",
    title: "Connect data movement to program accountability.",
    body: "Monitor exchanges, validation, lineage, submissions and evidence so teams can identify issues and respond with context.",
    items: ["API, event and file exchange monitoring", "Data validation and lineage", "Regulatory submission workflows", "Outcome measures and certification evidence support"]
  }
};

document.querySelectorAll(".domain-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = domains[button.dataset.domain];
    document.querySelectorAll(".domain-tabs button").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", selected);
    });
    document.getElementById("panel-domain").setAttribute("aria-labelledby", button.id);
    document.getElementById("domain-kicker").textContent = content.kicker;
    document.getElementById("domain-title").textContent = content.title;
    document.getElementById("domain-body").textContent = content.body;
    document.getElementById("domain-list").innerHTML = content.items.map((item) => `<li>${item}</li>`).join("");
  });
});

const lenses = {
  experience: [
    ["FIRST-CONTACT RESOLUTION", "78%", "Example measure"],
    ["MEDIAN RESPONSE TIME", "1.8d", "Example measure"],
    ["DIGITAL NOTICE DELIVERY", "91%", "Example measure"],
    "Service request volume and resolution"
  ],
  network: [
    ["ENROLLMENT CYCLE", "14d", "Example measure"],
    ["REVALIDATION COMPLETE", "88%", "Example measure"],
    ["DIRECTORY COMPLETENESS", "94%", "Example measure"],
    "Provider enrollment and revalidation trend"
  ],
  payment: [
    ["FIRST-PASS PROCESSING", "92%", "Example measure"],
    ["PENDED ITEMS", "3.4%", "Example measure"],
    ["TIMELY PAYMENT", "96%", "Example measure"],
    "Payment exception and resolution trend"
  ],
  oversight: [
    ["DATA SUBMISSIONS", "97%", "Example measure"],
    ["CONTROL EXCEPTIONS", "42", "Example count"],
    ["EVIDENCE CURRENT", "89%", "Example measure"],
    "Oversight evidence and exception trend"
  ]
};

document.querySelectorAll(".insight-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".insight-tabs button").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", selected);
    });
    const lens = lenses[button.dataset.lens];
    for (let index = 0; index < 3; index += 1) {
      document.getElementById(`metric${index + 1}-label`).textContent = lens[index][0];
      document.getElementById(`metric${index + 1}-value`).textContent = lens[index][1];
      document.getElementById(`metric${index + 1}-note`).textContent = lens[index][2];
    }
    document.getElementById("chart-title").textContent = lens[3];
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
