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
let galleryAlbums = [];
/**
 * helper functions
 */
 
// the main page back button
function albumBackBtn() {
  const backBtn = document.getElementsByClassName('back');
  backBtn[0].addEventListener('click', () => {
    if (imagesUl.classList == 'thumbnails') {
      handleCloseButton();
      updateSingleUrlHash();
    } else {
      removeGalleryPhotos();
      removeGalleryList();
      addingGalleryList();
      hashRemove();
    }
  });
}

// create the account drop down elements /
function accountDropDownElements() {
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

  accountBtn[0].addEventListener('click', () => {
    toggleAccountShow(accountDropDown);
  });
}

// show acoount drop down menu
function toggleAccountShow(element) {
  element.classList.toggle('show');
}

// closes account dropdown when clicking anywhere on page
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

// gets the image close button icon and the click event
function closeMainImage() {
  const closeButton = document.getElementsByClassName('closeBtn');
  closeButton[0].addEventListener('click', handleCloseButton);
}

// closes the single image view and returns back to the album
function handleCloseButton() {
  imagesUl.classList.remove('thumbnails');
  imagesUl.classList.add('galleryImages');
  mainImage.removeChild(image);
  mainImage.removeChild(mainImageNav);
  window.location.hash = `/${galleryAlbums[currentAlbumIndex].fields.slug}`;
}

// set up the multiple ablum collection list DOM elements
function setupAlbumListElements() {
  albumList = document.createElement('div');
  albumList.classList.add('albumList');
  albumListUl = document.createElement('ul');
  albumListUl.classList.add('list');
  albumList.appendChild(albumListUl);
  document.body.appendChild(albumList);
}

// set setup the single album DOM elements
function setupPageElements() {
  albumH1 = document.createElement('h1');
  albumH1.classList.add('albumTitle');
  const description = document.createElement('p');
  const picture = document.createElement('img');

  const myAlbum = document.createElement('div');
  myAlbum.classList.add('album');
  myAlbum.appendChild(albumH1);
  myAlbum.appendChild(picture);
  myAlbum.appendChild(description);

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
}
// sets the url hash location for the single image view
function updateUrlHash() {
  window.location.hash = `/${galleryAlbums[currentAlbumIndex].fields.slug}/photo/${currentImageIndex}`;
}

// sets the url hash location for the album view
function updateSingleUrlHash() {
  window.location.hash = `/${galleryAlbums[currentAlbumIndex].fields.slug}`;
}

// adding the single image view DOM elements
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
  closeMainImage();
  forwardButtClick();
  backButtClick();
}

function changePageTitle() {
  if (window.location.hash.includes('/photo/')) {
    document.title = `${galleryAlbums[currentAlbumIndex].fields.title} - ${galleryAlbums[currentAlbumIndex].fields.images[currentImageIndex].fields.title}`;
  } else {
    document.title = `${galleryAlbums[currentAlbumIndex].fields.title}`;
  }
}

// making the single image next/previous button visable or not
function removeNextButt() {
  if (currentImageIndex === 0) {
    backButt.style.visibility = 'hidden';
  } else {
    backButt.style.visibility = 'visible';
  }
  if (
    currentImageIndex ===
    galleryAlbums[currentAlbumIndex].fields.images.length - 1
  ) {
    forwardButt.style.visibility = 'hidden';
  } else {
    forwardButt.style.visibility = 'visible';
  }
}

// sets the single image file location
function updateSingleImage() {
  singleImage.src = `https://${galleryAlbums[currentAlbumIndex].fields.images[currentImageIndex].fields.file.url}`;
  removeNextButt();
  updateUrlHash();
  changePageTitle();
}

// rests the url hash
function hashRemove() {
  window.location.hash = '';
}

// removes the current album view photos
function removeGalleryPhotos() {
  const photos = document.querySelectorAll('.photo');
  photos.forEach((i) => i.remove());
}

// looping over all the album photos to add them the page
function addGalleryPhotos(newGalleryIndex) {
  currentAlbumIndex = newGalleryIndex;
  galleryAlbums[currentAlbumIndex].fields.images.forEach(loadAlbumImages);
}

function isPhotoInHash(newPhotoIndex, newAlbumIndex) {
  return (
    window.location.hash.includes('/photo/') &&
    hashArray.length > 2 &&
    newPhotoIndex < galleryAlbums[newAlbumIndex].fields.images.length &&
    newPhotoIndex >= 0 &&
    newPhotoIndex !== ''
  );
}

function isGalleryIndexInHash(newGalleryIndex) {
  return (
    newGalleryIndex >= 0 &&
    window.location.hash.includes(
      `#/${galleryAlbums[newGalleryIndex].fields.slug}`
    )
  );
}

// gets the album index and photo index from the url
function displayHash() {
  hashArray = window.location.hash.split('/');
  // set the photo id
  const newPhotoIndex = parseInt(hashArray[3]);

  const index = galleryAlbums.findIndex(
    (object) => object.fields.slug === hashArray[1]
  );
  const newGalleryIndex = parseInt(index);

  if (isPhotoInHash(newPhotoIndex, newGalleryIndex)) {
    currentImageIndex = newPhotoIndex;
    removeGalleryPhotos();
    addGalleryPhotos(newGalleryIndex);
    removeGalleryList();
    updateSingleImage();
    addSingleImage();
    return true;
  }
  if (isGalleryIndexInHash(newGalleryIndex)) {
    currentAlbumIndex = newGalleryIndex;
    removeGalleryPhotos();
    addGalleryPhotos(newGalleryIndex);
    return true;
  }

  if (window.location.hash === '') {
    removeGalleryPhotos();
    removeGalleryList();
    addingGalleryList();
  }
  hashRemove();
}

const forwardButtClick = () => {
  const forwardBtn = document.getElementsByClassName('forwardButt');
  forwardBtn[0].addEventListener('click', () => {
    if (
      currentImageIndex <
      galleryAlbums[currentAlbumIndex].fields.images.length - 1
    ) {
      currentImageIndex += 1;
      updateSingleImage();
    }
  });
};

const backButtClick = () => {
  const backBtn = document.getElementsByClassName('backButt');
  backBtn[0].addEventListener('click', () => {
    if (currentImageIndex > 0) {
      currentImageIndex -= 1;
      updateSingleImage();
    }
  });
};

// adding the list of multiple gallerys and adding the click to display the single album
function addingGalleryListElements(images, index) {
  albumH1.textContent = '';
  albumListLi = document.createElement('li');
  albumListLi.classList.add('galleryList');
  albumListText = document.createElement('div');
  albumListText.classList.add('albumListText');
  albumListText.textContent = images.fields.title;
  albumListImage = document.createElement('img');
  albumListImage.src = `https://${images.fields.images[0].fields.file.url}`;
  albumListImage.alt = images.fields.title;
  albumListLi.appendChild(albumListImage);
  albumListLi.appendChild(albumListText);
  albumListUl.appendChild(albumListLi);
  albumListLi.addEventListener('click', () => {
    removeGalleryList();
    removeGalleryPhotos();
    addGalleryPhotos(index);
    updateSingleUrlHash();
  });
}

// loading the single album data and adding the single image view click
function loadAlbumImages(images, index) {
  albumH1.textContent = galleryAlbums[currentAlbumIndex].fields.title;
  imagesLi = document.createElement('li');
  imagesLi.classList.add(`photo`);
  imagesImg = document.createElement('img');
  imagesImg.src = `https://${images.fields.file.url}`;
  imagesImg.alt = images.fields.title;
  imagesDesc = document.createElement('p');
  imagesDesc.classList.add('desc');
  imagesDesc.textContent = images.fields.description;
  imagesTitle = document.createElement('h2');
  imagesTitle.textContent = images.fields.title;
  const imagesDate = document.createElement('p');
  const date = new Date(images.sys.createdAt);
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
  displayHash();
  updateUrlHash();
}

function addingGalleryList() {
  galleryAlbums.forEach(addingGalleryListElements);
}

function removeGalleryList() {
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
albumBackBtn();
accountDropDownElements();

/**
 * event listners
 */

window.addEventListener('hashchange', displayHash);

client.getEntries({ content_type: 'album' }).then((entries) => {
  galleryAlbums = entries.items;
  setupPageElements();
  setupAlbumListElements();
  displayHash();
  document.body.appendChild(gallery);
});
