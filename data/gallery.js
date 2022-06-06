let forwardButt;
let backButt;
let closeBtn;
let mainImage;
let singleImage;
let image;
let mainImageNav;
let imagesUl;
let gallery;
let albumH1;
let imagesLi;
let imagesImg;
let imagesDesc;
let imagesTitle;
let hashArray;
let albumListLi;
let albumListImage;
let albumList;
let albumListUl;
let albumListText;
let currentImageIndex = 0;
let currentAlbumIndex = 0;

/**
 * helper functions
 */

function albumBackBtn() {
  const backBtn = document.getElementsByClassName('back');
  backBtn[0].addEventListener('click', () => {
    if (imagesUl.classList == 'thumbnails') {
      closeMainImage();
    }else{
    removeGalleryPhotos();
    removeGalleryist();
    addingGalleryList();
    hashRemove();
  }
  });
}

function closeMainImage() {
  imagesUl.classList.remove('thumbnails');
  imagesUl.classList.add('galleryImages');
  mainImage.removeChild(image);
  mainImage.removeChild(mainImageNav);
  window.location.hash = `/${galleryAlbums[currentAlbumIndex].slug}`;
}

function setupAlbumListElements() {
  albumList = document.createElement('div');
  albumList.classList.add('albumList');
  albumListUl = document.createElement('ul');
  albumListUl.classList.add('list');
  albumList.appendChild(albumListUl);
  document.body.appendChild(albumList);
}

function setupPageElements() {
  albumH1 = document.createElement('h1');
  albumH1.classList.add('albumTitle');
  const description = document.createElement('p');
  // description.textContent = album.description;
  description.textContent = galleryAlbums[currentAlbumIndex].description;
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
  // // create gallery list
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
  window.location.hash = `/${galleryAlbums[currentAlbumIndex].slug}/photo/${currentImageIndex}`;
}

function updateSingleUrlHash() {
  window.location.hash = `/${galleryAlbums[currentAlbumIndex].slug}`;
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
  if (window.location.hash.includes('/photo/')) {
    document.title = `${galleryAlbums[currentAlbumIndex].title} - ${galleryAlbums[currentAlbumIndex].images[currentImageIndex].title}`;
  } else {
    document.title = `${galleryAlbums[currentAlbumIndex].title}`;
  }
}

function removeNextButt() {
  if (currentImageIndex === 0) {
    backButt.style.visibility = 'hidden';
  } else {
    backButt.style.visibility = 'visible';
  }
  if (
    currentImageIndex ===
    galleryAlbums[currentAlbumIndex].images.length - 1
  ) {
    forwardButt.style.visibility = 'hidden';
  } else {
    forwardButt.style.visibility = 'visible';
  }
}

function updateSingleImage() {
  singleImage.src =
    galleryAlbums[currentAlbumIndex].images[currentImageIndex].src;
  removeNextButt();
  updateUrlHash();
  changePageTitle();
}

function hashRemove() {
  window.location.hash = '';
}

function removeGalleryPhotos() {
  const photos = document.querySelectorAll('.photo');
  photos.forEach((i) => i.remove());
}

function addGalleryPhotos(newGalleryIndex) {
  currentAlbumIndex = newGalleryIndex;
  galleryAlbums[currentAlbumIndex].images.forEach(loadAlbumImages);
}

function displayHash() {
  hashArray = window.location.hash.split('/');
  const newIndex = parseInt(hashArray[3]);
  const index = galleryAlbums.findIndex(
    (object) => object.slug === hashArray[1]
  );
  const newGalleryIndex = parseInt(index);
  if (
    window.location.hash.includes(`/${galleryAlbums[currentAlbumIndex].slug}`)
  ) {
    currentAlbumIndex = newGalleryIndex;
    removeGalleryPhotos();
    addGalleryPhotos(newGalleryIndex);
    return true;
  }

  if (
    window.location.hash.includes('/photo/') &&
    hashArray.length > 2 &&
    newIndex < galleryAlbums[currentAlbumIndex].images.length &&
    newIndex >= 0 &&
    newIndex !== ''
  ) {
    currentImageIndex = newIndex;
    removeGalleryPhotos();
    addGalleryPhotos(newGalleryIndex);
    updateSingleImage();
    addSingleImage();
    return true;
  }
  if (window.location.hash === '') {
    removeGalleryPhotos();
    removeGalleryist();
    addingGalleryList();
  }
  hashRemove();
}

const forwardButtClick = () => {
  if (currentImageIndex < galleryAlbums[currentAlbumIndex].images.length - 1) {
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

function addingGalleryListElements(images, index) {
  albumH1.textContent = '';
  albumListLi = document.createElement('li');
  albumListLi.classList.add('galleryList');
  albumListText = document.createElement('div');
  albumListText.classList.add('albumListText');
  albumListText.textContent = images.title;
  albumListImage = document.createElement('img');
  albumListImage.src = images.images[0].src;
  albumListImage.alt = images.images[0].title;
  albumListLi.appendChild(albumListImage);
  albumListLi.appendChild(albumListText);
  albumListUl.appendChild(albumListLi);
  albumListLi.addEventListener('click', () => {
    removeGalleryist();
    removeGalleryPhotos();
    addGalleryPhotos(index);
    updateSingleUrlHash();
  });
}

function loadAlbumImages(images, index) {
  albumH1.textContent = galleryAlbums[currentAlbumIndex].title;
  imagesLi = document.createElement('li');
  imagesLi.classList.add(`photo`);
  imagesImg = document.createElement('img');
  imagesImg.src = images.src;
  imagesImg.alt = images.title;
  imagesDesc = document.createElement('p');
  imagesDesc.classList.add('desc');
  imagesDesc.textContent = images.description;
  imagesTitle = document.createElement('h2');
  imagesTitle.textContent = images.title;
  const imagesDate = document.createElement('p');
  const date = new Date(images.created * 1000);
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

function addingGalleryList() {
  galleryAlbums.forEach(addingGalleryListElements);
}

function removeGalleryist() {
  const list = document.querySelectorAll('.galleryList');
  list.forEach((i) => i.remove());
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
setupAlbumListElements();
albumBackBtn();
document.body.appendChild(gallery);

/**
 * event listners
 */
window.addEventListener('hashchange', displayHash);
window.addEventListener('DOMContentLoaded', displayHash);
forwardButt.addEventListener('click', forwardButtClick);
backButt.addEventListener('click', backButtClick);
closeBtn.addEventListener('click', closeMainImage);
