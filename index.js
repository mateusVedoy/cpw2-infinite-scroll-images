urlImgs = [
    'https://cdn.create.vista.com/api/media/medium/461241316/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://cdn.create.vista.com/api/media/medium/461234632/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://cdn.create.vista.com/api/media/medium/461200140/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://t4.ftcdn.net/jpg/01/03/94/75/360_F_103947575_519LFZXhvqB507L8Y5FEMAvUPzMkUD7Q.jpg',
    'https://cdn.create.vista.com/api/media/medium/461241316/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://cdn.create.vista.com/api/media/medium/461234632/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://cdn.create.vista.com/api/media/medium/461200140/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://t4.ftcdn.net/jpg/01/03/94/75/360_F_103947575_519LFZXhvqB507L8Y5FEMAvUPzMkUD7Q.jpg',
    'https://cdn.create.vista.com/api/media/medium/461241316/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://cdn.create.vista.com/api/media/medium/461234632/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://cdn.create.vista.com/api/media/medium/461200140/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://t4.ftcdn.net/jpg/01/03/94/75/360_F_103947575_519LFZXhvqB507L8Y5FEMAvUPzMkUD7Q.jpg',
    'https://cdn.create.vista.com/api/media/medium/461241316/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://cdn.create.vista.com/api/media/medium/461234632/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://cdn.create.vista.com/api/media/medium/461200140/stock-photo-creative-prismatic-background-polygonal-pattern',
    'https://cdn.create.vista.com/api/media/medium/461200140/stock-photo-creative-prismatic-background-polygonal-pattern'
];

window.addEventListener('load', () => {
    // urlImgs.forEach(image => {
    //     let img = document.createElement('img');
    //     img.setAttribute('src', `${image}`);
    //     img.setAttribute('class', 'randomImgs');
    //     document.getElementsByTagName('body')[0].appendChild(img);
    // });

    for (let i = 0; i < urlImgs.length; i++) {
        let img = document.createElement('img');
        img.setAttribute('src', `${urlImgs[getRamdomIndex(urlImgs.length - 1)]}`);
        img.setAttribute('class', 'randomImgs');
        document.getElementsByTagName('body')[0].appendChild(img);
    }
});

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        for (let i = 0; i < urlImgs.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', `${urlImgs[getRamdomIndex(urlImgs.length - 1)]}`);
            img.setAttribute('class', 'randomImgs');
            document.getElementsByTagName('body')[0].appendChild(img);
        }
    }
});

function getRamdomIndex(max) {
    return Math.floor(Math.random() * (max - 0)) + 0;
}