const completedCommand = (cmdName) =>
  `<p class="terminal-text terminal-cmd-entry">jovanhyc07@gmail.com: <span style="color: var(--cyan)">~</span> > <span class="typer">${cmdName}</span> </p>`;

const terminal = document.getElementById("terminal");
const responseContainer = document.getElementById("res-section");
const typer = document.getElementById("typer");
const terminalWindow = document.getElementById("terminal-window");
const terminalWindowBody = document.getElementById("terminal-window-body");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderHelp = () => `
  <p class="command m-1">whoami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="res">Who is Jovan? Background & skills.</span></p>
  <p class="command m-1">projects&nbsp;&nbsp;&nbsp;<span class="res">View completed and ongoing coding projects.</span></p>
  <p class="command m-1">experience&nbsp;<span class="res">View work experience & education.</span></p>
  <p class="command m-1">email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="res">Mailto my email.</span></p>
  <p class="command m-1">help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="res">List all available commands.</span></p>
  <p class="command m-1">clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="res">Clears the terminal screen.</span></p>
`;

const renderCertificationCard = (certification) => `
  <article
    class="card clickable-card cert-card"
    role="button"
    tabindex="0"
    data-modal-type="certification"
    data-modal-id="${certification.id}"
  >
    <img src="${certification.image}" alt="${escapeHtml(
  certification.title
)} certificate" class="card-image" />
    <div class="card-body">
      <h4 class="card-title">${certification.title}</h4>
      <p class="card-subtitle">${certification.subtitle}</p>
    </div>
  </article>
`;

const renderProjectLinks = (project) => {
  const links = project?.links;
  if (!links || typeof links !== "object" || Array.isArray(links)) return "";

  return Object.entries(links)
    .map(([label, href]) => {
      if (!href) return "";
      const externalAttrs = !String(href).startsWith("#")
        ? ' target="_blank" rel="noopener noreferrer"'
        : "";
      return `<a href="${escapeHtml(href)}"${externalAttrs} class="card-btn d-inline">${escapeHtml(label)}</a>`;
    })
    .join("");
};

const renderProjectCard = (project) => {
  const tags = Array.isArray(project.subtitle)
    ? project.subtitle.filter(Boolean)
    : (project.subtitle || "").split("|").filter(Boolean);
  return `
  <article class="card project-card">
    ${project.image
      ? `<div class="card-image-wrap">
      <img src="${project.image}" alt="${escapeHtml(project.title)}" class="card-image" loading="lazy" />
    </div>`
      : ""
    }
    <div class="card-body">
      <h3 class="card-title">${escapeHtml(project.title)}</h3>
      ${project.authors
      ? `<p class="card-authors"><span class="authors-label">Authors:</span> ${escapeHtml(project.authors)}</p>`
      : ""
    }
      <div class="card-tags">
        ${tags.map((tag) => `<span class="badge">${escapeHtml(tag.trim())}</span>`).join("")}
      </div>
      ${project.description
      ? `<p class="card-description">${escapeHtml(project.description)}</p>`
      : ""
    }
      <div class="card-footer-actions">
        <div class="card-links-left">
          ${renderProjectLinks(project)}
        </div>
      </div>
    </div>
  </article>
`;
};

const renderExperienceTimeline = () => `
  <div class="timeline">
    ${workExperiences
    .map(
      (experience) => `
          <article class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <p class="timeline-period">${experience.period}${experience.duration ? ` &middot; ${experience.duration}` : ""
        }</p>
              <h4 class="timeline-role">${experience.role}</h4>
              <p class="timeline-company">${experience.company}${experience.type ? ` &middot; ${experience.type}` : ""
        }</p>
              <p class="timeline-location">${experience.location}</p>
              ${experience.skills?.length
          ? `<p class="timeline-skills">${experience.skills.join(
            " | "
          )}</p>`
          : ""
        }
              ${(experience.details || [])
          .map((detail) => `<p class="timeline-detail">${detail}</p>`)
          .join("")}
            </div>
          </article>
        `
    )
    .join("")}
  </div>
`;

const renderWhoami = () => `
  <p class="res">Hi, I am Jovan :)</p>
  <p class="res">
    I started coding when I was 13 and took a deep passion in it.
  </p>
  <p class="res">
    I am currently studying for a <b>Diploma of Applied Artificial Intelligence and Analytics</b> at <b>Singapore Polytechnic</b> and interning as a <b>Research Assistant at A*STAR Center for Frontier AI Research (CFAR)</b>.
  </p>
  <p class="res">Core Technical Focus Areas:</p>
  <ul>
    <li>
      Python & AI Research
      <ul>
        <li>PyTorch, Keras, Scikit-learn</li>
        <li>Vision Models, Generation Models, Privacy</li>
      </ul>
    </li>
    <li>
      Full Stack Engineering
      <ul>
        <li>JavaScript / TypeScript, React, Next.js</li>
        <li>Node.js, Express, MySQL, MongoDB, RESTful APIs</li>
      </ul>
    </li>
  </ul>
  ${renderExperienceTimeline()}
  <h3 class="res">Certifications</h3>
  <div class="card-container" id="qualifications-row">
    ${certifications.map(renderCertificationCard).join("")}
  </div>
`;

const renderProjects = () =>
  projectSections
    .map(
      (section) => `
        <h3 class="res section-inline-header">> ${section.title}</h3>
        <div class="card-container row">
          ${section.projects.map(renderProjectCard).join("")}
        </div>
      `
    )
    .join("");

const commandRenderers = {
  help: renderHelp,
  whoami: renderWhoami,
  projects: renderProjects,
  experience: renderExperienceTimeline,
  email: () =>
    `<p class="res">Opening Mailto: <a href="mailto:jovanhyc07@gmail.com" class="res" id="mailto-link">jovanhyc07@gmail.com</a></p>`,
};

const commands = commandData.map((command) => ({
  ...command,
  render: commandRenderers[command.type],
}));

const history = [];
let historyIndex = -1;

const INVALID_COMMAND_HTML = `<p class="res">Command not found. For a list of commands enter <span class="command">'help'</span>.</p>`;

const executeCommand = (rawCmd) => {
  const cmdName = (rawCmd || "").trim().toLowerCase();
  if (terminal) terminal.value = "";
  if (typer) typer.innerHTML = `<b class="cursor">&nbsp;</b>`;

  if (responseContainer) {
    responseContainer.insertAdjacentHTML(
      "beforeend",
      completedCommand(escapeHtml(cmdName))
    );
  }

  if (cmdName.length < 1) return;

  history.push(cmdName);
  historyIndex = history.length;

  if (["clear", "cls"].includes(cmdName)) {
    if (responseContainer) responseContainer.innerHTML = "";
    return;
  }

  const command = commands.find((cmd) =>
    [...cmd.alias, cmd.name].includes(cmdName)
  );

  if (command && responseContainer) {
    const outputHtml = command.render();
    responseContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="terminal-cmd-output">${outputHtml}</div>`
    );
    if (command.name === "email") {
      document.getElementById("mailto-link")?.click();
    }
  } else if (responseContainer) {
    responseContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="terminal-cmd-output">${INVALID_COMMAND_HTML}</div>`
    );
  }

  if (terminalWindowBody) {
    terminalWindowBody.scrollTop = terminalWindowBody.scrollHeight;
  }
};

const updateTyper = () => {
  if (typer && terminal) {
    typer.innerHTML = `${escapeHtml(terminal.value)}<b class="cursor">&nbsp;</b>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for in-page hash links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (ev) => {
      const targetId = anchor.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          ev.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
          history.pushState(null, "", targetId);
        }
      }
    });
  });

  // Quick Command Chips Click
  document.querySelectorAll(".cmd-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.dataset.cmd;
      if (cmd) {
        executeCommand(cmd);
        if (terminal) terminal.focus({ preventScroll: true });
      }
    });
  });

  // Certifications 'More' Toggle (shows/hides pre-loaded static certificates)
  const certsMoreBtn = document.getElementById("certifications-more-btn");
  const extraCertCards = document.querySelectorAll(".cert-card-extra");
  if (certsMoreBtn && extraCertCards.length > 0) {
    certsMoreBtn.addEventListener("click", () => {
      const isExpanded = certsMoreBtn.getAttribute("aria-expanded") === "true";
      const nextExpanded = !isExpanded;
      extraCertCards.forEach((card) => {
        card.classList.toggle("is-hidden", !nextExpanded);
      });
      certsMoreBtn.setAttribute("aria-expanded", String(nextExpanded));
      certsMoreBtn.innerHTML = nextExpanded ? "Less &uarr;" : "More &darr;";
    });
  }

  // Focus terminal when clicking inside the terminal area
  const terminalArea = document.getElementById("terminal-window") || document.getElementById("terminal-container");
  if (terminalArea && terminal) {
    terminalArea.addEventListener("click", (ev) => {
      if (!ev.target.closest("a, button, [role='button']")) {
        terminal.focus({ preventScroll: true });
      }
    });
  }
});

if (terminal) {
  terminal.addEventListener("input", updateTyper);
  terminal.addEventListener("keyup", updateTyper);
  terminal.addEventListener("paste", () => setTimeout(updateTyper, 0));

  terminal.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
      executeCommand(terminal.value);
      return;
    }

    if (ev.key === "ArrowUp") {
      if (history.length < 1) return;
      if (historyIndex > 0) historyIndex--;
      const lastCmd = history[historyIndex] || "";
      terminal.value = lastCmd;
      updateTyper();
    }

    if (ev.key === "ArrowDown") {
      if (history.length < 1) return;
      if (historyIndex < history.length - 1) {
        historyIndex++;
        const nextCmd = history[historyIndex] || "";
        terminal.value = nextCmd;
        updateTyper();
      } else {
        historyIndex = history.length;
        terminal.value = "";
        updateTyper();
      }
    }
  });
}

