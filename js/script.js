const app = new Vue({
    el: '#root',


    // ***** DATA *****
    data:{
        postcards: [
            {
                country:'Svezia',
                contrySubheading:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                image:'img/01.jpg',
            },
            {
                country:'Svizzera',
                contrySubheading:'Lorem ipsum',
                image:'img/02.jpg',
            },
            {
                country:'Gran Bretagna',
                contrySubheading:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                image:'img/03.jpg',
            },
            {
                country:'Germania',
                contrySubheading:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                image:'img/04.jpg',
            },
            {
                country:'Paradise',
                contrySubheading:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                image:'img/05.jpg',
            },
        ],

        currentImg: 0

    },


    // ***** METHODS *****
    methods:{



    }
});



// //Popolare la sezione con la sequenza di immagini
// const imgWithText = document.querySelector('.imgWithText');
// const imgSequence = document.querySelector('.imgSequence');
// const country = document.querySelector('.country')


// for(let i = 0; i < items.length; i++){

//     country.innerHTML+=
//     `<div class="nameCountry">${title[i]}</div>
//     <div class="description">${text[i]}</div>`;

//     imgWithText.innerHTML += 
//     `<div class="box">
//         <img src="${items[i]}" alt="">
//     </div>`;

//     imgSequence.innerHTML += 
//     `<div class="boxList opacityon">
//         <img src="${items[i]}" alt="">
//     </div>`;
// }


// // Rendiamo attive le immagini centrali
// const centralImg = document.getElementsByClassName('box');
// const sequencelImg = document.getElementsByClassName('boxList');
// const titleCountry = document.getElementsByClassName('nameCountry');
// const textCountry = document.getElementsByClassName('description');

// let activeObject = 0;

// centralImg[activeObject].classList.add('active');
// sequencelImg[activeObject].classList.remove('opacityon');
// titleCountry[activeObject].classList.add('active');
// textCountry[activeObject].classList.add('active');


// const up = document.querySelector('.arrowUp');
// const down = document.querySelector('.arrowDown');


// //Click verso il basso
// down.addEventListener("click", function(){
    
//     centralImg[activeObject].classList.remove('active');
//     titleCountry[activeObject].classList.remove('active');
//     textCountry[activeObject].classList.remove('active');
//     sequencelImg[activeObject].classList.add('opacityon');

//     if(activeObject < centralImg.length - 1){
//          activeObject++;
//     } else {activeObject = 0;}

//          centralImg[activeObject].classList.add('active');
//          titleCountry[activeObject].classList.add('active');
//          textCountry[activeObject].classList.add('active');
//          sequencelImg[activeObject].classList.remove('opacityon');
         
// });

// // Click verso l'alto
// up.addEventListener("click", function(){
        
//     centralImg[activeObject].classList.remove('active');
//     titleCountry[activeObject].classList.remove('active');
//     textCountry[activeObject].classList.remove('active');
//     sequencelImg[activeObject].classList.add('opacityon');
    
//     if(activeObject <= 0){
//         activeObject = centralImg.length - 1;
//     } else{activeObject--;}

//         centralImg[activeObject].classList.add('active');
//         titleCountry[activeObject].classList.add('active');
//         textCountry[activeObject].classList.add('active');
//         sequencelImg[activeObject].classList.remove('opacityon');   
// });