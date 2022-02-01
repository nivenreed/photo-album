

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
      imagesDesc.textContent = images.description;
      imagesDesc.style.visibility ='hidden';  
    imagesLi.appendChild(imagesImg);
    imagesLi.appendChild(imagesDesc);
    imagesUl.appendChild(imagesLi);
}
album.images.forEach(logImages);

document.body.appendChild(imagesUl);




// adding hover event listner for discription overlay
// const butts = document.querySelector('.photo');

// function handleHover(event) {
//     imagesDesc.style.visibility = 'visable';
//    console.log('you clicked'); 
//    console.log(event.currentTarget);
// }

// butts.addEventListener('mouseover', handleHover); 

// const photoHover = document.querySelectorAll('.photo');

// photoHover.forEach(function (hover) {
//     console.log('hover');
//     hover.addEventListener('mouseover', handleHover)
// }); 