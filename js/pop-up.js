const projects = [
  {
    title: 'Tonic',
    roles: { company: 'Canopy', position: ['Back End Dev', '2015'] },
    image: 'imgs/availPortfolio.png',
    alt: 'Canopy project screenshot',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: '#', text: 'See live' },
    seesource: { link: '#', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: {
      article: ['grid-item', 'card'],
      cardImage: ['card-image'],
      cardDescription: ['card-description'],
    },
  },

  {
    title: 'Multi-Post Stories',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: './imgs/Facebook360.png',
    alt: 'Multi-Post stories project screenshot',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: '#', text: 'See live' },
    seesource: { link: '#', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: {
      article: ['grid-item', 'card', 'hide-ruby'],
      cardImage: ['card-image', 'flex-item-2'],
      cardDescription: ['card-description', 'flex-item-1'],
    },
  },

  {
    title: 'Facebook 360',
    roles: { company: 'Facebook', position: ['Full Stack Dev', '2015'] },
    image: './imgs/prof-port.png',
    alt: 'Facebook 360 project screenshot',
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: '#', text: 'See live' },
    seesource: { link: '#', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: {
      article: ['grid-item', 'card', 'flex-item-2', 'hide-ruby'],
      cardImage: ['card-image'],
      cardDescription: ['card-description'],
    },
  },
  {
    title: 'Uber Navigation',
    roles: { company: 'Uber', position: ['Back End Dev', '2018'] },
    image: './imgs/Snapshoot-Portfolio.jpg',
    alt: 'Uber Navigation project screenshot',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car..',
    skills: ['html', 'css', 'javascript'],
    skillsModal: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    livelink: { link: '#', text: 'See live' },
    seesource: { link: '#', text: 'See Source' },
    seeproject: 'See Project',
    htmlClass: {
      article: [
        'grid-item',
        'card',
        'flex-item-3',
        'flex-item-last',
        'hide-ruby',
      ],
      cardImage: ['card-image', 'flex-item-2'],
      cardDescription: ['card-description', 'flex-item-1'],
    },
  },
];

let data = '';
const section = document.querySelector('.projects');

projects.forEach((obj) => {
  data += `<section class="container-1" id="About">
  <div class="Pics" id="prof">
  <img src="${obj.image}" alt="Pics" />
</div>
<div class="contentright">
  <div class="tonic">
    <h1>${obj.title}</h1>
  </div>
  <div>
    <ul class="dates">
    <li class="canopy">
    <h4>${obj.roles.company}</h4>
  </li>
  <li class="dot1">
    <a href="#">
      <img src="imgs/Dot.png" alt="dot1" />
    </a>
  </li>
  <li class="backEnd">
    ${obj.roles.position[0]}
    </li>
    <li class="dot1">
    <a href="#">
      <img src="imgs/Dot.png" alt="dot1" />
    </a>
  </li>
  <li class="backEnd">
    ${obj.roles.position[1]}
  </li>
      </li>
    </ul>
  </div>
  <div class="content-details">
    <p>
     ${obj.description}
    </p>
  </div>
  <div class="prog-lists">
    <ul class="lists">
      <li>
        <a href="#">
        <h6>${obj.skills[0]}</h6>
        </a>
      </li>
      <li>
        <a href="#">
        <h6>${obj.skills[1]}</h6>
        </a>
      </li>
      <li>
        <a href="#">
        <h6>${obj.skills[2]}</h6>
        </a>
      </li>
    </ul>
  </div>

  <div class="button seeproject">
    <a href="#">
      <h4>${obj.seeproject}</h4>
    </a>
  </div>
</div>
</section>

`;
});
section.innerHTML = data;

// const open = document.createElement('.seeproject');

// open.addEventListener('click', () => {
//   let data = '';
//   const section = document.querySelector('.projects');
//   projects.forEach((obj) => {
//     data += `<section class="container-1" id="About">
//   <div class="Pics" id="prof">
//   <img src="${obj.image}" alt="Pics" />
// </div>
// <div class="contentright">
//   <div class="tonic">
//     <h1>${obj.title}</h1>
//   </div>
//   <div>
//     <ul class="dates">
//     <li class="canopy">
//     <h5>${obj.roles.company}</h5>
//   </li>
//   <li class="dot1">
//     <a href="#">
//       <img src="imgs/Dot.png" alt="dot1" />
//     </a>
//   </li>
//   <li class="backEnd">
//     <h5>${obj.roles.position}</h5>
//   </li>
//       </li>
//     </ul>
//   </div>
//   <div class="content-details">
//     <p>
//      ${obj.description}
//     </p>
//   </div>
//   <div class="prog-lists">
//     <ul class="lists">
//       <li>
//         <a href="#">
//         <h6>${obj.skills}</h6>
//         </a>
//       </li>
//     </ul>
//   </div>

//   <div class="button seeproject">
//     <a href="#">
//       <h4>${obj.seeproject}</h4>
//     </a>
//   </div>
// </div>
// </section>

// `;
//   });

//   section.innerHTML = data;
// });