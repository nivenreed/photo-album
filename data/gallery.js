// const { array } = require("prop-types");

const album = {
  title: `Bali`,
  description: `Trirp to Bali for Will & Erin's Wedding`,
  images: [
    {
      title: `Photo 1`,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/IMG_0945.JPG`,
      created: 1507109400,
      description: `Waliking down the aisle `,
    },
    {
      title: `Photo 2`,
      thumbnailSrc: './thumbnail/IMG',
      src: `./gallery/IMG_0950.JPG`,
      created: 1507109400,
      description: `Sayiayng I Do`,
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

const myAlbum = document.createElement('div');
myAlbum.classList.add('album');
myAlbum.appendChild(albumH1);
myAlbum.appendChild(description);

document.body.appendChild(myAlbum);

const imagesUl = document.createElement('ul');
imagesUl.classList.add('galleryImages');

function logImages(images, index, array) {
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
  // function clearDom() {
  //   const domObject = document.getElementByClass('.galleryImages');
  //   domObject.remove();
  // }

  const imagesOverlay = document.createElement('div');
  imagesOverlay.classList.add('overlay');
  imagesOverlay.appendChild(imagesTitle);
  imagesOverlay.appendChild(imagesDesc);
  imagesOverlay.appendChild(imagesDate);
  imagesOverlay.style.visibility = 'hidden';

  imagesLi.appendChild(imagesImg);
  imagesLi.appendChild(imagesOverlay);
  imagesLi.addEventListener('click', () => {
    imagesUl.remove();
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('single');
    const image = document.createElement('img');
    image.src = images.src;
    image.alt = images.title;
    image.classList.add('singleImg');
    const forwardButt = document.createElement('img');
    forwardButt.classList.add('forwardButt');
    forwardButt.src = './assets/forward_arrow.svg';
    imageDiv.appendChild(image);
    imageDiv.appendChild(forwardButt);
    document.body.appendChild(imageDiv);
    // console.log(images);
    forwardButt.addEventListener('click', () => {
      image.src = array[index + 1].src;
      console.log(images);
      console.log(array[index + 1].src);
      // console.log(album.images.length);
      // images.src += 1;
      // function nextImage(next) {
      //   if (index >= 0 && index < index.length) {
      //     index++;
      //     image.src = ;
        }
      }
    });
  });
  imagesUl.appendChild(imagesLi);
}

album.images.forEach(logImages);

document.body.appendChild(imagesUl);

// adding hover event listner for discription overlay

function handleHover(li) {
  li.currentTarget.childNodes[1].style.visibility = 'visible';
  li.currentTarget.childNodes[1].classList.replace('overlayVis', 'overlay');
}
function handleHoverOut(li) {
  li.currentTarget.childNodes[1].style.visibility = 'hidden';
  li.currentTarget.childNodes[1].classList.replace('overlay', 'overlayVis');
}

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

const photoHover = document.querySelectorAll('.photo');
// const photoClick = document.querySelectorAll('.photo');

photoHover.forEach((hover) => {
  hover.addEventListener('mouseover', handleHover);
  hover.addEventListener('mouseout', handleHoverOut);
  // hover.addEventListener('click', handleClick);
});

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

// function loadSingleImage(images) {
//   const myImage = document.createElement('div');
//   myImage.classList.add('singleImage');
//   const imageImg = document.createElement('img');
//   imageImg.src = images.src;
//   imageImg.alt = images.title;

//   myImage.appendChild(imageImg);
//   imageDiv.appendChild(myImage);
// }
// album.images.forEach(loadSingleImage);

// document.body.appendChild(imageDiv);
