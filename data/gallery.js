// const { array } = require("prop-types");

const album = {
  title: `Bali`,
  description: `Trip to Bali for Will & Erin's Wedding`,
  images: [
    {
      title: `Photo 1`,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/IMG_0945.JPG`,
      created: 1507109400,
      description: `Walking down the aisle `,
    },
    {
      title: `Photo 2`,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/IMG_0950.JPG`,
      created: 1507109400,
      description: `Saying I Do`,
    },
    {
      title: `Photo 3`,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/IMG_0973.JPG`,
      created: 1507109400,
      description: `After Party`,
    },
    {
      title: `Photo 4`,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/IMG_0980.JPG`,
      created: 1507109400,
      description: `After Party`,
    },
    {
      title: `Photo 5`,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/IMG_0981.JPG`,
      created: 1507109400,
      description: `After Party`,
    },
    {
      title: `Photo 6`,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/IMG_0988.JPG`,
      created: 1507109400,
      description: `After Party`,
    },
    {
      title: `Photo 7`,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/IMG_0990.jpg`,
      created: 1507109400,
      description: `After Party`,
    },
    {
      title: `Photo `,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/g0100804.JPG`,
      created: 1507109400,
      description: `After Party`,
    },
  ],
};

const albumH1 = document.createElement('h1');
albumH1.textContent = album.title;
const description = document.createElement('p');
description.textContent = album.description;
const picture = document.createElement('img');

const myAlbum = document.createElement('div');
myAlbum.classList.add('album');
myAlbum.appendChild(albumH1);
myAlbum.appendChild(picture);
myAlbum.appendChild(description);

const accountBtn = document.getElementsByClassName('accountBtn');
const accountDropDown = document.createElement('div');
const signIn = document.createElement('a');
const profile = document.createElement('a');
profile.setAttribute('href', '#');
profile.innerHTML = 'Profile';
const settings = document.createElement('a');
settings.setAttribute('href', '#');
settings.innerHTML = 'Settings';
const logOut = document.createElement('a');
logOut.setAttribute('href', '#');
logOut.innerHTML = 'Log Out';
accountDropDown.classList.add('dropDownContent');
signIn.setAttribute('href', '/index.html');
signIn.innerHTML = 'Sign In';
accountDropDown.appendChild(profile);
accountDropDown.appendChild(settings);
accountDropDown.appendChild(signIn);
accountDropDown.appendChild(logOut);
document.querySelector('.accountBtn').appendChild(accountDropDown);

document.body.appendChild(myAlbum);

let currentImageIndex = 0;

const gallery = document.createElement('div');
gallery.classList.add('gallery');

const imagesUl = document.createElement('ul');
imagesUl.classList.add('galleryImages');

const mainImage = document.createElement('div');
const image = document.createElement('div');
const singleImage = document.createElement('img');
const closeBtn = document.createElement('button');
const mainImageNav = document.createElement('div');
const backButt = document.createElement('button');
const forwardButt = document.createElement('button');
document.body.appendChild(mainImage);

function myFunction() {
  accountDropDown.classList.toggle('show');
}

accountBtn[0].addEventListener('click', myFunction);

window.onclick = function (e) {
  if (!e.target.matches('.accountBtn')) {
    const dropdowns = document.getElementsByClassName('dropDownContent');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function updateUrlHash() {
  window.location.hash = `/photo/${currentImageIndex}`;
}

function addSingleImage() {
  image.classList.add('image');
  mainImageNav.classList.add('mainImageNav');
  mainImage.classList.add('mainImage');
  singleImage.classList.add('singleImage');
  closeBtn.classList.add('closeBtn');
  mainImageNav.appendChild(closeBtn);
  closeBtn.innerHTML = '&#10006;';
  backButt.classList.add('backButt');
  backButt.innerHTML = '&#8249;';
  forwardButt.classList.add('forwardButt');
  forwardButt.innerHTML = '&#8250;';
  mainImageNav.appendChild(forwardButt);
  mainImageNav.appendChild(backButt);
  image.appendChild(singleImage);
  mainImage.appendChild(image);
  mainImage.appendChild(mainImageNav);
  imagesUl.classList.remove('galleryImages');
  imagesUl.classList.add('thumbnails');
}

function removeNextButt() {
  if (currentImageIndex === 0) {
    backButt.style.visibility = 'hidden';
  } else {
    backButt.style.visibility = 'visible';
  }
  if (currentImageIndex === album.images.length - 1) {
    forwardButt.style.visibility = 'hidden';
  } else {
    forwardButt.style.visibility = 'visible';
  }
}
function updateSingleImage() {
  singleImage.src = album.images[currentImageIndex].src;
  removeNextButt();
  updateUrlHash();
  // if (!initial) updateUrlHash();
}
function hashRemove() {
  window.location.hash = '';
}

function displayHash() {
  const array = window.location.hash.split('/');
  const newIndex = array[2];
  if (
    window.location.hash.includes('photo/') &&
    newIndex < album.images.length &&
    newIndex >= 0 &&
    newIndex !== ''
  ) {
    currentImageIndex = newIndex;
    updateSingleImage();
    addSingleImage();
    return true;
  }
  hashRemove();
  console.log('hash empty');
}

window.addEventListener('hashchange', () => {
  displayHash();
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event');
  displayHash();
});

const forwardButtClick = () => {
  if (currentImageIndex < album.images.length - 1) {
    currentImageIndex++;
    console.log(currentImageIndex);
    updateSingleImage();
    // displayHash();
  }
};
const backButtClick = () => {
  if (currentImageIndex > 0) {
    currentImageIndex -= 1;
    console.log(currentImageIndex);
    updateSingleImage();
  }
};

forwardButt.addEventListener('click', forwardButtClick);

backButt.addEventListener('click', backButtClick);

closeBtn.addEventListener('click', () => {
  imagesUl.classList.remove('thumbnails');
  imagesUl.classList.add('galleryImages');
  mainImage.removeChild(image);
  mainImage.removeChild(mainImageNav);
  hashRemove();
});

function logImages(images, index) {
  const imagesLi = document.createElement('li');
  imagesLi.classList.add(`photo`);
  //   imagesLi.textContent = images.title;
  const imagesImg = document.createElement('img');
  imagesImg.src = images.src;
  imagesImg.alt = images.title;
  const imagesDesc = document.createElement('p');
  imagesDesc.classList.add('desc');
  imagesDesc.textContent = images.description;
  const imagesTitle = document.createElement('h2');
  imagesTitle.textContent = images.title;
  const imagesDate = document.createElement('p');
  const date = new Date(album.images[0].created * 1000);
  imagesDate.textContent = date.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const imagesOverlay = document.createElement('div');
  imagesOverlay.classList.add('overlay');
  imagesOverlay.appendChild(imagesTitle);
  imagesOverlay.appendChild(imagesDesc);
  imagesOverlay.appendChild(imagesDate);
  imagesOverlay.style.visibility = 'hidden';

  imagesLi.appendChild(imagesImg);
  imagesLi.appendChild(imagesOverlay);
  imagesLi.addEventListener('click', () => {
    currentImageIndex = index;
    updateSingleImage();
    addSingleImage();
    displayHash();
    updateUrlHash();
  });

  imagesUl.appendChild(imagesLi);
  gallery.appendChild(imagesUl);
}

album.images.forEach(logImages);

document.body.appendChild(gallery);

// adding hover event listner for discription overlay

function handleHover(li) {
  li.currentTarget.childNodes[1].style.visibility = 'visible';
  li.currentTarget.childNodes[1].classList.replace('overlayVis', 'overlay');
}
function handleHoverOut(li) {
  li.currentTarget.childNodes[1].style.visibility = 'hidden';
  li.currentTarget.childNodes[1].classList.replace('overlay', 'overlayVis');
}
const photoHover = document.querySelectorAll('.photo');

photoHover.forEach((hover) => {
  hover.addEventListener('mouseover', handleHover);
  hover.addEventListener('mouseout', handleHoverOut);
});

/**
 * function Starts here
 */
// updateSingleImage();

/* Stuff I have Tried */

// function pageLoadView() {
//   if (value2 !== null) {
//     imagesUl.classList.remove('galleryImages');
//     imagesUl.classList.add(value2);
//     addSingleImage();
//   }
// }

// onload = function () {
//   pageLoadView();
// };

// function loadTumbnails() {
//   imagesUl.classList.remove('galleryImages');
//   imagesUl.classList.add(value);
// }

// imagesLi.addEventListener('click', () => {
//   imagesUl.remove();
//   const imageDiv = document.createElement('div');
//   imageDiv.classList.add('single');
//   const image = document.createElement('img');
//   image.src = images.src;
//   image.alt = images.title;
//   image.classList.add('singleImg');
//   const forwardButt = document.createElement('img');
//   forwardButt.classList.add('forwardButt');
//   forwardButt.src = './assets/forward_arrow.svg';
//   imageDiv.appendChild(image);
//   imageDiv.appendChild(forwardButt);
//   document.body.appendChild(imageDiv);
//   forwardButt.addEventListener('click', () => {
//     image.src = array[index + 1].src;

//     currentImageIndex = index;
//     console.log(index);
//   });
// });
// function handleClick(event) {
//   const imageDiv = document.createElement('div');
//   imageDiv.classList.add('single');
//   const image = document.createElement('img');
//   image.src = '';
//   image.alt = '';
//   imageDiv.appendChild(image);
//   document.body.appendChild(imageDiv);
//   console.log(event);
// }
// album.images.forEach(handleClick);

// const photoClick = document.querySelectorAll('.photo');

// photoClick.forEach((click) => {
//   click.addEventListener('click', () => {
//     console.log(Array.from(click).indexOf(click.currentTarget));
//   });
// });

// Displaying Sngle Image
// const imageSelect = document.querySelector('.photo');

// imageSelect.forEach((click) => {
//   click.addEventListener('click', handleClick);
// });
// imageSelect.addEventListener('click', handleClick);

// const imageDiv = document.createElement('div');
// imageDiv.classList.add('single');
// function singleImageLoad(images) {
//   const image = document.createElement('img');
//   image.src = images.src;
//   image.alt = images.title;
//   imageDiv.appendChild(image);
// }
// document.body.appendChild(imageDiv);

// function handleClick(li) {
//   const imageDiv = document.createElement('div');
//   imageDiv.classList.add('single');
//   const image = document.createElement('img');
//   image.src = li.currentTarget.childNodes[0];
// }

// const photoClick = document.querySelectorAll('.overlayVis');

// photoClick.forEach((click) => {
//   click.addEventListener('click', handleClick);
// });

// function (images) {
//   const myImage = document.createElement('div');
//   myImage.classList.add('singleImage');
//   const imageImg = document.createElement('img');
//   imageImg.src = images.src;
//   imageImg.alt = images.title;

//   myImage.appendChild(imageImg);
//   imageDiv.appendChild(myImage);
// }
// album.images.forEach();

// document.body.appendChild(imageDiv);
