let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]
/**
 * ispis niz: Izabrani dino, Kupac, Napomena, Cena
 */

const form = document.querySelector('#forma');
const select = document.querySelector('#select-dino');
const inputKupac = document.querySelector('#kupac');
const textArea = document.querySelector('#textArea')
const itemContainer = document.querySelector('#item-container');
const btnAll = document.querySelector('#btn-all'); 

const porudzbine = [];


dinos.forEach((dino, i) => { 
    let option = document.createElement('option')
    option.textContent = dino.name;
    option.value = dino.id;
    select.appendChild(option)    
})

forma.addEventListener('submit', (e) =>{
    e.preventDefault(); 

    if(inputKupac.value.trim() !== '' && inputKupac.value.trim().length >4){
        const izabraniObj = dinos.find(dino =>{
            return dino.id === Number(select.value)
        })

        if(textArea.value === ''){
            textArea.value = '/'
        }

        const porudzbina = {
            dinosaurus: izabraniObj.name,
            kupac: inputKupac.value,
            napomena: textArea.value,
            cena: izabraniObj.cena
        }

        porudzbine.push(porudzbina);

        const div = document.createElement('div');
        div.className = 'item'
        itemContainer.appendChild(div)

        const p1 = document.createElement('p');
        p1.innerHTML = `<span>Napomena: <span> ${porudzbina.kupac}`
        div.appendChild(p1);

        const p2 = document.createElement('p');
        p2.innerHTML = `<span>Napomena: <span> ${porudzbina.napomena}`
        div.appendChild(p2);

        const p5 = document.createElement('p')
        p5.innerHTML = `<span>Dinosaurus: </span>${porudzbina.dinosaurus}`
        div.appendChild(p5);


        const p3 = document.createElement('p');
        p3.innerHTML = `<span>Napomena: <span> ${porudzbina.cena}`
        div.appendChild(p3);

        const p4 = document.createElement('p');
        div.appendChild(p4);
        const btndelete = document.createElement('button');
        btndelete.textContent = 'DELETE'
        p4.appendChild(btndelete);

        btndelete.addEventListener('click', e =>{
            btndelete.parentElement.parentElement.remove();
            porudzbine.pop();
        })
    } else {
        console.log('greska');
    }
}) 

btnAll.addEventListener('click', e => {
    console.log(porudzbine)
})


