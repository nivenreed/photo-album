

const album = {
    title: `Bali`,
    description: `Trirp to Bali for Will & Erin's Wedding`,
    images:[
        {
            title: `Photo 1`,
            src: `./gallery/IMG_0945.jpg`,
            created: 1507109400,
            description: `Waliking down the aisle `,
        },
        {
            title: `Photo 2`,
            src: `./gallery/IMG_0950.jpg`,
            created: 1507109400,
            description: `Sayiayng I Do`,
        },
        {
            title: `Photo 3`,
            src: `./gallery/IMG_0973.jpg`,
            created: 1507109400,
            description: `After Party`,
        },
        {
            title: `Photo 4`,
            src: `./gallery/IMG_0980.jpg`,
            created: 1507109400,
            description: `After Party`,
        },
        {
            title: `Photo 5`,
            src: `./gallery/IMG_0981.jpg`,
            created: 1507109400,
            description: `After Party`,
        },
        {
            title: `Photo 6`,
            src: `./gallery/IMG_0988.jpg`,
            created: 1507109400,
            description: `After Party`,
        },
        {
            title: `Photo 7`,
            src: `./gallery/IMG_0990.jpg`,
            created: 1507109400,
            description: `After Party`,
        }
    ]
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

function logImages(images){
    const imagesLi = document.createElement('li');
        imagesLi.classList.add (`photo`);
    //   imagesLi.textContent = images.title;
    const imagesImg = document.createElement('img');
      imagesImg.src = images.src;
      imagesImg.alt = images.title;
    const imagesDesc = document.createElement('p');
    //   imagesDesc.textContent = images.description;  
    imagesLi.appendChild(imagesImg);
    imagesLi.appendChild(imagesDesc);
    imagesUl.appendChild(imagesLi);
}
album.images.forEach(logImages);

document.body.appendChild(imagesUl);

// const imgHover = document.querySelectorAll('photo');

// function handleImgHover(){
//     console.log('You Are Hovering');
// }

// imgHover.forEach(function (photoHover) {
//     photoHover.addEventListener('onmousenter', handleImgHover);
// });

// const butts = document.querySelector('.photo');

// butts.addEventListener('mouseover', function () {
    
//     console.log('you clicked');
// });