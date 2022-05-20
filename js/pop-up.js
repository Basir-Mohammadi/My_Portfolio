const projects = [
  {
    title: "Tonic",
    roles: { company: "Canopy", position: ["Back End Dev", "2015"] },
    image: "snapshootportfolio.svg",
    alt: "Canopy project screenshot",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ["html", "css", "javascript"],
    skillsModal: ["html", "css", "javascript", "github", "ruby", "Bootstraps"],
    livelink: { link: "#", text: "See live" },
    seesource: { link: "#", text: "See Source" },
    seeproject: "See Project",
    htmlClass: {
      article: ["grid-item", "card"],
      cardImage: ["card-image"],
      cardDescription: ["card-description"],
    },
  },

  {
    title: "Multi-Post Stories",
    roles: { company: "Facebook", position: ["Full Stack Dev", "2015"] },
    image: "project-4.svg",
    alt: "Multi-Post stories project screenshot",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    skills: ["html", "Ruby on rails", "css", "javascript"],
    skillsModal: ["html", "css", "javascript", "github", "ruby", "Bootstraps"],
    livelink: { link: "#", text: "See live" },
    seesource: { link: "#", text: "See Source" },
    seeproject: "See Project",
    htmlClass: {
      article: ["grid-item", "card", "hide-ruby"],
      cardImage: ["card-image", "flex-item-2"],
      cardDescription: ["card-description", "flex-item-1"],
    },
  },

  {
    title: "Facebook 360",
    roles: { company: "Facebook", position: ["Full Stack Dev", "2015"] },
    image: "tonic.svg",
    alt: "Facebook 360 project screenshot",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    skills: ["html", "Ruby on rails", "css", "javascript"],
    skillsModal: ["html", "css", "javascript", "github", "ruby", "Bootstraps"],
    livelink: { link: "#", text: "See live" },
    seesource: { link: "#", text: "See Source" },
    seeproject: "See Project",
    htmlClass: {
      article: ["grid-item", "card", "flex-item-2", "hide-ruby"],
      cardImage: ["card-image"],
      cardDescription: ["card-description"],
    },
  },

  {
    title: "Uber Navigation",
    roles: { company: "Uber", position: ["Lead Developer", "2018"] },
    image: "multi-stories-post.svg",
    alt: "Uber Navigation project screenshot",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car..",
    skills: ["html", "Ruby on rails", "css", "javascript"],
    skillsModal: ["html", "css", "javascript", "github", "ruby", "Bootstraps"],
    livelink: { link: "#", text: "See live" },
    seesource: { link: "#", text: "See Source" },
    seeproject: "See Project",
    htmlClass: {
      article: [
        "grid-item",
        "card",
        "flex-item-3",
        "flex-item-last",
        "hide-ruby",
      ],
      cardImage: ["card-image", "flex-item-2"],
      cardDescription: ["card-description", "flex-item-1"],
    },
  },
];

const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.";
const mobileText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

const listItems = (items) => {
  let list = "";
  items.forEach((element) => {
    list += `<li>${element}</li>`;
  });

  return list;
};

const createImageButton = (project, dest, srcLink) => {
  const link = document.createElement("a");
  link.className = "btn";
  link.textContent = `${dest.text} `;
  link.href = dest.link;
  const img = document.createElement("img");
  img.src = srcLink;
  img.alt = `${dest.text} Icon`;
  link.appendChild(img);

  return link;
};

const modalFooter = (project) => {
  const modalButtons = document.createElement("div");
  modalButtons.className = "show";
  const seeSourceButton = createImageButton(
    project,
    project.livelink,
    "Icon.svg"
  );
  modalButtons.appendChild(seeSourceButton);
  const seeLiveButton = createImageButton(
    project,
    project.seesource,
    "sourcecode.svg"
  );
  modalButtons.appendChild(seeLiveButton);

  return modalButtons;
};

const createRoles = (project) => {
  const cardRoleWrapper = document.createElement("div");
  cardRoleWrapper.className = "project-role-wrapper";

  const cardRoleCompany = document.createElement("span");
  cardRoleCompany.textContent = project.roles.company;

  cardRoleWrapper.appendChild(cardRoleCompany);

  const cardRolePosition = document.createElement("ul");
  cardRolePosition.className = "project-role";
  cardRolePosition.innerHTML = listItems(project.roles.position);

  cardRoleWrapper.appendChild(cardRolePosition);

  return cardRoleWrapper;
};

const createHeader = (project, titleElement) => {
  const cardHeader = document.createElement(titleElement);
  cardHeader.textContent = project.title;

  return cardHeader;
};

const createProjectCard = (project, position = null, isDesktop = true) => {
  const articleHolder = document.createElement("article");
  articleHolder.className = project.htmlClass.article.join(" ");
  const cardHeader = createHeader(project, "h2");
  const cardRoleWrapper = createRoles(project);

  if (!isDesktop) {
    articleHolder.appendChild(cardHeader);
    articleHolder.appendChild(cardRoleWrapper);
  }

  const cardImage = document.createElement("div");
  cardImage.className = project.htmlClass.cardImage.join(" ");
  const Image = document.createElement("img");

  if (isDesktop || document.documentElement.clientWidth <= 767) {
    Image.src = project.image;
    Image.alt = project.alt;
    cardImage.appendChild(Image);
  } else {
    cardImage.style.height = "568px";
    cardImage.style.backgroundImage = `url(${project.image})`;
    cardImage.style.backgroundRepeat = "no-repeat";
    cardImage.style.backgroundSize = "95%";
    cardImage.style.backgroundPositionY = "0";
    cardImage.style.backgroundPositionX = "18px";

    cardImage.classList.remove("flex-item-2");
  }
  articleHolder.appendChild(cardImage);

  const cardDescription = document.createElement("div");
  cardDescription.className = project.htmlClass.cardDescription.join(" ");

  const cardTagWrapper = document.createElement("div");
  cardTagWrapper.className = "tags-wrapper";

  const cardTagList = document.createElement("ul");
  cardTagList.className = "tags";

  const cardButton = document.createElement("a");
  cardButton.className = "btn btn-project";

  if (position) {
    cardButton.setAttribute("data-position", position - 1);
  }

  const cardText = document.createElement("p");
  cardText.textContent = project.description;

  cardTagList.innerHTML = listItems(project.skills);

  if (isDesktop) {
    cardDescription.appendChild(cardHeader);
    cardDescription.appendChild(cardRoleWrapper);
    cardText.textContent = project.description;
  } else if (document.documentElement.clientWidth <= 767) {
    cardText.textContent = mobileText;
  } else {
    cardText.textContent = dummyText;
    cardTagList.innerHTML = listItems(project.skillsModal);
  }
  cardTagWrapper.appendChild(cardTagList);
  cardDescription.appendChild(cardText);
  if (isDesktop) {
    cardButton.innerHTML = "See Project";
    cardTagWrapper.appendChild(cardButton);
  }
  cardDescription.appendChild(cardTagWrapper);
  articleHolder.appendChild(cardDescription);

  return articleHolder;
};

const articleContainer = document.createElement("div");
const cardContainer = document.querySelector("#port");

for (let i = 0; i < projects.length; i += 1) {
  const cardInstance = createProjectCard(projects[i], i + 1, true);
  articleContainer.appendChild(cardInstance);
}

cardContainer.appendChild(articleContainer);

const closePopup = () => {
  const Modal = document.querySelector(".Modal");
  Modal.style.display = "none";
  Modal.innerHTML = "";
  document.querySelector("body").classList.toggle("fixed");
};

const ModalCloseButton = () => {
  const ModalCloseBtn = document.createElement("img");
  ModalCloseBtn.className = "Modal-close";
  ModalCloseBtn.src = "Modal-close.svg";
  ModalCloseBtn.alt = "Close modal button";

  ModalCloseBtn.addEventListener("click", closePopup);

  return ModalCloseBtn;
};

function showPopupWindow() {
  const position = parseInt(this.getAttribute("data-position"), 10);
  const modalContent = createProjectCard(projects[position], false, false);

  const Modal = document.querySelector(".Modal");
  const ModalCloseBtn = ModalCloseButton();
  const modalButtons = modalFooter(projects[position]);

  Modal.innerHTML = "";

  Modal.appendChild(modalContent);
  const tagsWrapper = document.querySelector(".Modal .tags-wrapper");
  tagsWrapper.appendChild(modalButtons);
  Modal.childNodes[0].appendChild(ModalCloseBtn);

  Modal.style.display = "flex";
  document.querySelector("body").classList.toggle("fixed");
}

const btnProjects = document.querySelectorAll(".btn-project");

btnProjects.forEach((btnProject) => {
  btnProject.addEventListener("click", showPopupWindow);
});
