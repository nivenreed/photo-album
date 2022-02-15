

const album = {
    title: `Bali`,
    description: `Trirp to Bali for Will & Erin's Wedding`,
    images:[
        {
            title: `Photo 1`,
            thumbnailSrc:'./thumbnail/IMG',
            src: `./gallery/IMG_0945.JPG`,
            created: 1507109400,
            description: `Waliking down the aisle `,
        },
        {
            title: `Photo 2`,
            thumbnailSrc:'./thumbnail/IMG',
            src: `./gallery/IMG_0950.JPG`,
            created: 1507109400,
            description: `Sayiayng I Do`,
        },
        {
            title: `Photo 3`,
            thumbnailSrc:'./thumbnail/IMG',
            src: `./gallery/IMG_0973.JPG`,
            created: 1507109400,
            description: `After Party`,
        },
        {
            title: `Photo 4`,
            thumbnailSrc:'./thumbnail/IMG',
            src: `./gallery/IMG_0980.JPG`,
            created: 1507109400,
            description: `After Party`,
        },
        {
            title: `Photo 5`,
            thumbnailSrc:'./thumbnail/IMG',
            src: `./gallery/IMG_0981.JPG`,
            created: 1507109400,
            description: `After Party`,
        },
        {
            title: `Photo 6`,
            thumbnailSrc:'./thumbnail/IMG',
            src: `./gallery/IMG_0988.JPG`,
            created: 1507109400,
            description: `After Party`,
        },
        {
            title: `Photo 7`,
            thumbnailSrc:'./thumbnail/IMG',
            src: `./gallery/IMG_0990.jpg`,
            created: 1507109400,
            description: `After Party`,
        },
        {
            title: `Photo `,
            thumbnailSrc:'./thumbnail/IMG',
            src: `./gallery/g0100804.JPG`,
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
      imagesDesc.classList.add ('desc');  
      imagesDesc.textContent = images.description;
    const imagesTitle = document.createElement('h2');
        imagesTitle.textContent = images.title;
    const imagesDate = document.createElement('p');
         const date = new Date(album.images[0].created * 1000);
             imagesDate.textContent = date.toLocaleString();
          
    const imagesOverlay = document.createElement('div');
        imagesOverlay.classList.add ('overlay');
        imagesOverlay.appendChild(imagesTitle);
        imagesOverlay.appendChild(imagesDesc);
        imagesOverlay.appendChild(imagesDate);
        imagesOverlay.style.visibility ='hidden';

    //   const imagesDesc = document.createElement('p');
    //   imagesDesc.classList.add ('descOverlay');  
    //   imagesDesc.textContent = images.description;
    //   imagesDesc.style.visibility ='hidden';      
      
    imagesLi.appendChild(imagesImg);
    imagesLi.appendChild(imagesOverlay);
    imagesUl.appendChild(imagesLi);
}
album.images.forEach(logImages);

document.body.appendChild(imagesUl);




// adding hover event listner for discription overlay

function handleHover(li) {
      li.currentTarget.childNodes[1].style.visibility = 'visible';
}
function handleHoverOut(li) { 
       li.currentTarget.childNodes[1].style.visibility = 'hidden';
 } 

const photoHover = document.querySelectorAll('.photo');

photoHover.forEach(function (hover) {
    hover.addEventListener('mouseover', handleHover);
    hover.addEventListener('mouseout', handleHoverOut)
}); 