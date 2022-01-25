

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




