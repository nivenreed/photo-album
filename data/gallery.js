

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
            src: `./gallery/IMG_`,
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
console.log(imagesUl);

// function imagesLi(album){
//     console.log(album);  
//     document.createElement('li');  
// }
//  album.images.forEach(imagesLi);

// const myImages =document.createElement('li');
// console.log(myImages);

// album.images.forEach(function(myAlbums) {
//     document.createElement('li');
//     console.log(myAlbums);
// }
// my)
function logImages(images){
    const imagesLi = document.createElement('li');
      imagesLi.textContent = images.title;
    const imagesImg = document.createElement('img');
      imagesImg.src = images.src;
    const imagesDesc = document.createElement('p');
      imagesDesc.textContent = images.description;  
    imagesLi.appendChild(imagesImg);
    imagesLi.appendChild(imagesDesc);
    imagesUl.appendChild(imagesLi);
    
    // document.body.appendChild(imagesLi);

    console.log(images);
}
album.images.forEach(logImages);

document.body.appendChild(imagesUl);


