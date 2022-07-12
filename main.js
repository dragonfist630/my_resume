function openNav() {
  document.getElementById("mySidenav").style.width = "74vw";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0vw";
}
// dynamically creating circle progressbar
const circle_progressbar_container = document.querySelector("[data-circle-progressbar-container]");
const circle_progressbar = document.querySelector("[data-circle-progressbar]");

var arr_circle_progressbar_data = [
  {
    name: "English",
    fill: 77,
  },
  {
    name: "Hindi",
    fill: 90,
  },
  {
    name: "Marathi",
    fill: 95,
  },
];

for (let i = 0; i < 3; i++) {
  const circle_progressbar_card = circle_progressbar.content.cloneNode(true).children[0];
  const enter_language = circle_progressbar_card.querySelector("[data-language]");
  enter_language.textContent = arr_circle_progressbar_data[i].name;
  const enter_circle_fill = circle_progressbar_card.querySelector("[data-number-in-circle]");
  enter_circle_fill.style = `--value:${arr_circle_progressbar_data[i].fill}`;
  circle_progressbar_container.append(circle_progressbar_card);
}
//dynamically creating inline progressbar
const inline_progressbar_container = document.querySelector("[data-inlineprogress-bar-continer]");
const inline_progressbar = document.querySelector("[data-inline-progressbar-card]");

var arr_inline_progressbar = [
  {
    name: "HTML5",
    fill: 70,
  },
  {
    name: "CSS3",
    fill: 75,
  },
  {
    name: "JavaScript",
    fill: 60,
  },
  {
    name: "ReactJS",
    fill: 30,
  },
  {
    name: "SQL",
    fill: 30,
  },
];

for (let i = 0; i < arr_inline_progressbar.length; i++) {
  var inline_progressbar_card = inline_progressbar.content.cloneNode(true).children[0];
  const enter_c_language = inline_progressbar_card.querySelector("[data-inline-progressbar-name]");
  enter_c_language.textContent = arr_inline_progressbar[i].name;
  const enter_c_percentage = inline_progressbar_card.querySelector("[data-inline-progressbar-percentage]");
  enter_c_percentage.textContent = `${arr_inline_progressbar[i].fill}%`;
  const insert_fill = inline_progressbar_card.querySelector("[data-inline-progressbar-fill]");
  insert_fill.style = `width:${arr_inline_progressbar[i].fill}%`;
  inline_progressbar_container.append(inline_progressbar_card);
}
//dynamically creating work ex card
const Wex_continer = document.querySelector("[data-Wex-container]");
const Wex = document.querySelector("[data-Wex-card]");

var arr_Wex_card_data = [
  {
    title: "Associate Software Engineer",
    c_name: "Since Sept 21, @TORRY HARRIS BUSINESS SOLUTION",
    desc: "Building beginners level websites with the help of new technologies by attending training provided by the company.",
  },
  {
    title: "Business Associate",
    c_name: "From April 21 - Aug 21, @STELLAR ORGANISATION",
    desc: "Stellar organization is a marketing & sales acceleration firm for charities like UNICEF, Save the Children, CRY, HelpAge. My Responsibility as Business Associate is to generate sales through Face to Face and Telemarketing for our Clients.",
  },
];

for (let i = 0; i < arr_Wex_card_data.length; i++) {
  const Wex_card = Wex.content.cloneNode(true).children[0];
  // console.log(Wex_card);
  const insert_title = Wex_card.querySelector("[data-Wex-title]");
  insert_title.textContent = arr_Wex_card_data[i].title;
  const insert_c_name = Wex_card.querySelector("[data-Wex-c-name]");
  insert_c_name.textContent = arr_Wex_card_data[i].c_name;
  const insert_summary = Wex_card.querySelector("[data-Wex-desc]");
  insert_summary.textContent = arr_Wex_card_data[i].desc;
  Wex_continer.append(Wex_card);
}
//dynamically creating projects card
const project_continer = document.querySelector("[data-project-container]");
const project = document.querySelector("[data-project-card]");

const arr_project = [
  {
    p_title: "Social Voting application.(Ballot)",
    duration: "From MAR 22",
    img: ["react","materialUi","nodejs","mongodb"],
    descr: "Developed a simple web application where each user can share there  opinion by voiting on different queries.(Admin credintials: Email:nayangadhari@gmail.com, Password: Password@123 )",
    link: "https://ballotfe.herokuapp.com/",
  },
  {
    p_title: "Train Tiket Booking website",
    duration: "From Dec 21 - Dec 21",
    img: ["html", "css", "nodejs","mongodb"],
    descr: "Created fullstack website for booking train ticket using express framework and mongose library.",
    link: "https://dragonfist630.github.io/t1/src/templates/index.html",
  },
  {
    p_title: "Fitness website",
    duration: "From June 19 - July 19",
    img: ["html", "css"],
    descr: "Built a front end for gym with few animation.",
    link: "#",
  },
];

for (let i = 0; i < arr_project.length; i++) {
  const project_card = project.content.cloneNode(true).children[0];
  const insert_project_title = project_card.querySelector("[data-project-title]");
  insert_project_title.textContent = arr_project[i].p_title;
  const insert_project_duration = project_card.querySelector("[data-project-duration]");
  insert_project_duration.textContent = arr_project[i].duration;
  const logo_container = project_card.querySelector("[data-logo-wrap]");
  for (let j = 0; j < arr_project[i].img.length; j++) {
    const create_img = document.createElement("img");
    create_img.src = `./img/${arr_project[i].img[j]}.svg`;
    logo_container.append(create_img);
  }
  const project_desc = project_card.querySelector("[data-project-desc]");
  project_desc.textContent = arr_project[i].descr;
  const insert_project_link = project_card.querySelector("[data-explore-link]");
  insert_project_link.href = arr_project[i].link;
  project_continer.append(project_card);
}
