const commands = [
  {
    name: "help",
    alias: ['ls', 'h', 'dir'],
    html: `
     <p class="command m-1">whoami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="res">Who is Jovan?</span></p>
     <p class="command m-1">projects&nbsp;&nbsp;&nbsp;<span class="res">View completed and ongoing coding projects.</span></p>
     <p class="command m-1">email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="res">Mailto my email.</span></p>
     <p class="command m-1">help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="res">You know what this does.</span></p>
     <p class="command m-1">clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="res">Clears the terminal.</span></p>
    `,
  },
  {
    name: "whoami",
    alias: [],
    html: `
    <p class="res">Hi, I am Jovan 😊</p>
      <p class="res">
        I started coding when i was 13 and took an interest in it.
      </p>
      <p class="res">
        I am currently a <b>first year student of Singapore Polytechnic</b> and am
        studying for a <b>Diploma of Applied Artificial Intelligence and Analytics</b>
      </p>
      <p class="res">Some <strong>technical skills</strong> that i have</p>
      <ul>
        <li>
          Javascript (focusing on full stack web development)
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>Mysql</li>
            <li>Mongodb</li>
            <li>JWT</li>
          </ul>
        </li>
        <li>HTML</li>
        <li>CSS</li>
        <li>
          Python
          <ul>
            <li>Pandas</li>
            <li>Numpy</li>
            <li>Matplotlib</li>
            <li>Scikit-learn</li>
          </ul>
        </li>
      </ul>
    <h3 class="res">Experiences & Qualifications</h3>
    <div class="card-container" id="qualifications-row">
      <div class="card">
        <div class="card-image"></div>
        <img src="../imgs/Introduction_to_Cybersecurity_Badge20230728-28-upu8rm_page-0001.jpg" alt="" class="card-image" />
        <div class="card-body">
          <h1 class="card-title">Introduction to Cybersecurity</h1>
          <h3 class="card-subtitle">Cisco ~ 2022</h3>
        </div>
      </div>
      <div class="card">
        <div class="card-image"></div>
        <img src="../imgs/Introduction_to_Data_Science_Badge20230728-28-7eecj0_page-0001.jpg" alt="" class="card-image" />
        <div class="card-body">
          <h1 class="card-title">Introduction to Data Science </h1>
          <h3 class="card-subtitle">Cisco ~ 2022</h3>
        </div>
      </div>
      <div class="card">
        <div class="card-image"></div>
        <img src="../imgs/problem_solving_basic certificate_page-0001.jpg" alt="" class="card-image" />
        <div class="card-body">
          <h1 class="card-title">Problem Solving Basics</h1>
          <h3 class="card-subtitle">Hackerrank ~ 2023</h3>
        </div>
      </div>
      <div class="card">
        <div class="card-image"></div>
        <img src="../imgs/maritime hackathon_page-0001.jpg" alt="" class="card-image" />
        <div class="card-body">
          <h1 class="card-title">Maritime Hackathon</h1>
          <h3 class="card-subtitle">NUS ~ 2025</h3>
        </div>
      </div>
    </div>
    `,
  },
  {
    name: "projects", //eventually convert this into cards
    alias: ['p'],
    html: `
      <div class="card-container row">
      <div class="card">
        <div class="card-image veratu"></div>
        <img src="../imgs/discord-bot-banner.png" alt="" class="card-image" />
        <div class="card-body">
          <h1 class="card-title">Discord Bot</h1>
          <h3 class="card-subtitle">Discord.js|Javascript</h3>
          <p class="card-description">
            Built a <span class="res">Discord bot</span> to moderate users in
            a server
          </p>
          <a href="https://github.com/stupidbutsmart/Veratu" target="_blank" class="card-btn d-inline">Repository</a>
        </div>
      </div>
      <div class="card">
        <div class="card-image "></div>
        <img src="../imgs/social-share-banner.webp" alt="" class="card-image" />
        <div class="card-body">
          <h1 class="card-title">File Convert Website</h1>
          <h3 class="card-subtitle">ConvertApi|React</h3>
          <p class="card-description">
            Built a <span class="res">React website</span> 
            for file convertion with <span class="res">Convertapi.</span>
          </p>
          <a href="https://github.com/stupidbutsmart/File-Converter-Website" target="_blank" class="card-btn d-inline"
            >Repository</a
          >
          <a href="https://file-converter-ec1.pages.dev/" target="_blank" class="card-btn d-inline">Preview</a>
        </div>
      </div>
      <div class="card">
        <div class="card-image veratu"></div>
        <img src="../imgs/kpop-collective-banner.png" alt="" class="card-image" />
        <div class="card-body">
          <h1 class="card-title">Kpop Collective Store</h1>
          <h3 class="card-subtitle">FullStack Web Development</h3>
          <h3 class="card-subtitle">Express|React|Mysql|JWT</h3>
          <h3 class="card-subtitle in-progress">**Work In Progress**</h3>
        </div>
      </div>
      </div>
    `,
  },
  {
    name: "email",
    alias: ['mail', 'gmail'],
    html: `<p class="res">Opening Mailto: <a href="mailto:jovanhyc07@gmail.com" class="res">jovanhyc07@gmail.com</a></p>`,
  },
];
const INVALID_COMMAND_HTML = `<p class="res">Command not found. For a list of commands enter <span class="command">'help'</span>.</p>`;
const completedCommand = (cmdName) =>
  `<p class="terminal-text">jovanhyc07@gmail.com: <span style="color: rgb(0, 233, 233)">~</span> ❯ <span class="typer">${cmdName}</span> </p>`;

const terminal = document.getElementById("terminal");
const responseContainer = document.getElementById("res-section");
const typer = document.getElementById("typer");

document.addEventListener("DOMContentLoaded", () => terminal.focus());
document.addEventListener("click", () => terminal.focus());

terminal.addEventListener("keyup", () => {
  typer.innerHTML = terminal.value + `<b class="cursor">&nbsp;</b>`;
});

terminal.addEventListener("keydown", (ev) => {
  //handles commands
  if (ev.key == "Enter") {
    const cmdName = terminal.value.trim();
    terminal.value = "";
    typer.innerHTML = "";
    responseContainer.innerHTML += completedCommand(cmdName);
    if (cmdName.length < 1) return;
    //special commands
    if (["clear", "cls"].includes(cmdName)) {
      responseContainer.innerHTML = "";
      return;
    }
    //valid command
    for (let cmd of commands) {
      const aliases = [...cmd.alias, cmd.name]
      if (aliases.includes(cmdName)) {
        responseContainer.innerHTML += cmd.html;
        if (cmdName == "email") {
          const mail = document.querySelector("a");
          mail.click();
        }
        return;
      }
    }
    //invalid command
    responseContainer.innerHTML += INVALID_COMMAND_HTML;
    return;
  }
});
