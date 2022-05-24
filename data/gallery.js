let forwardButt;
let backButt;
let closeBtn;
let mainImage;
let singleImage;
let image;
let mainImageNav;
let imagesUl;
let gallery;
let currentImageIndex = 0;

/**
 * helper functions
 */
function closeMainImage() {
  imagesUl.classList.remove('thumbnails');
  imagesUl.classList.add('galleryImages');
  mainImage.removeChild(image);
  mainImage.removeChild(mainImageNav);
  hashRemove();
}

function setupPageElements() {
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

  gallery = document.createElement('div');
  gallery.classList.add('gallery');

  imagesUl = document.createElement('ul');
  imagesUl.classList.add('galleryImages');

  mainImage = document.createElement('div');
  image = document.createElement('div');
  singleImage = document.createElement('img');
  closeBtn = document.createElement('button');
  mainImageNav = document.createElement('div');
  backButt = document.createElement('button');
  forwardButt = document.createElement('button');
  document.body.appendChild(mainImage);

  accountBtn[0].addEventListener('click', () => {
    toggleAccountShow(accountDropDown);
  });
}

function toggleAccountShow(element) {
  element.classList.toggle('show');
}

// closes dropdown if click anywhere on page
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

function changePageTitle() {
  if (window.location.hash.includes('photo/')) {
    document.title = `${album.title} - ${album.images[currentImageIndex].title}`;
  } else {
    document.title = `${album.title}`;
  }
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
  changePageTitle();
}

function hashRemove() {
  window.location.hash = '';
}

function displayHash() {
  const array = window.location.hash.split('/');
  const newIndex = parseInt(array[2]);
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
}

const forwardButtClick = () => {
  if (currentImageIndex < album.images.length - 1) {
    currentImageIndex += 1;
    updateSingleImage();
  }
};

const backButtClick = () => {
  if (currentImageIndex > 0) {
    currentImageIndex -= 1;
    updateSingleImage();
  }
};

function loadAlbumlbumIages(images, index) {
  const imagesLi = document.createElement('li');
  imagesLi.classList.add(`photo`);
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
    thumbnailClick(index);
  });
  imagesLi.addEventListener('mouseover', handleHover);
  imagesLi.addEventListener('mouseout', handleHoverOut);
  imagesUl.appendChild(imagesLi);
  gallery.appendChild(imagesUl);
}

function thumbnailClick(index) {
  currentImageIndex = index;
  updateSingleImage();
  addSingleImage();
  displayHash();
  updateUrlHash();
}
// adding hover event listner for discription overlay

function handleHover(li) {
  li.currentTarget.childNodes[1].style.visibility = 'visible';
  li.currentTarget.childNodes[1].classList.replace('overlayVis', 'overlay');
}
function handleHoverOut(li) {
  li.currentTarget.childNodes[1].style.visibility = 'hidden';
  li.currentTarget.childNodes[1].classList.replace('overlay', 'overlayVis');
}

/**
 * Run the page start here
 */
setupPageElements();
album.images.forEach(loadAlbumlbumIages);
document.body.appendChild(gallery);

/**
 * event listners
 */
window.addEventListener('hashchange', displayHash);
window.addEventListener('DOMContentLoaded', displayHash);
forwardButt.addEventListener('click', forwardButtClick);
backButt.addEventListener('click', backButtClick);
closeBtn.addEventListener('click', closeMainImage);
