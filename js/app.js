const openMenu = document.querySelector('img .nav');
const closeMenu = document.querySelector('.mobile-menu .close-menu');
const menuItems = document.querySelectorAll('.menu-items a');

openMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('show');
});

closeMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('show');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.menu-items').classList.remove('show');
  });
});



const seemore=document.querySelector('.see-project');
seemore.addEventListener('click', () => {
    const mainBody=document.createElement('section');
    const popup=document.createElement('section');
    seemore.innerHTML= '
        <div class="Pics" id="prof">
            <img src="imgs/Facebook360.png" alt="Pics">
        </div>
        <div class="contentright">
            <div class="tonic">
            <h1>Tonic</h1>
            </div>
            <div>
            <ul class="dates">
                <li class="canopy"> 
                    <h5>CANOPY</h5>
                </li>
                <li class="dot1">
                <a href="#">
                    <img src="imgs/Dot.png" alt="dot1">
                </a>
                </li>
                <li class="backEnd">
                    <h5>Back End Dev</h5>
                </li>
                <li class="dot2">
                <a href="#">
                    <img src="imgs/Dot.png" alt="dot2">
                </a>
                </li>
                <li class="date">
                <h5>2015</h5>
                </li>
            </ul>
            </div>
            <div class="content-details">
            <p>
                A daily selection of privately personalized reads;
                no accounts or sign-ups required.
            </p>
            </div>
            <div class="prog-lists">
            <ul class="lists">
                <li>
                <a href="#"> <h6>html</h6></a>
                </li>
                <li>
                <a href="#"> <h6>Css</h6></a>
                </li>
                <li>
                <a href="#"> <h6>JavaScript</h6></a>
                </li>
            </ul>
            </div>
            <div class="button">
            <a class="close" href="https://github.com/basirking/">
                <h4>See Project</h4>
            </a>
            </div>
        </div> 

    ';

    mainBody.appendChild(popup);
    body.append(mainBody);
});
