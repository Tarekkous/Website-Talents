let counter = document.querySelector('.counter_1');
let countertwo = document.querySelector('.counter_2');
let counterthree = document.querySelector('.counter_3');
let counterfour = document.querySelector('.counter_4');
let counterfive = document.querySelector('.counter_5');

// Nombre de sourires échangés

var firstcountfour = 0;
var newcountfour = 5000;
let observerfour = new IntersectionObserver ((entries)=>{
    entries.forEach(e => {
        console.log(e.isIntersecting);
        console.log(e.intersectionRatio);
        if (e.isIntersecting && firstcountfour<newcountfour) {
            let countupfour = setInterval(() => {
               firstcountfour++
               counterfour.innerHTML = firstcountfour;
               if (firstcountfour >= newcountfour) {
                clearInterval(countupfour);
               } 
            }, 0.01);
        }
        
    });
},{threshold : 0.2});
observerfour.observe(counterfour)


// Fonction compteur 

function countUp(firstcount,newcount,element) {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            console.log(e.isIntersecting)
            console.log(e.intersectionRatio)
            if (e.isIntersecting && firstcount < newcount) {
                let countup = setInterval(() => {
                    firstcount++;
                    element.innerHTML = firstcount;
                    if (firstcount >= newcount) {
                        clearInterval(countup);
                    }
                }, 20);
            
            }
        })
    
    }, { threshold: 0.2 });
    observer.observe(element);
    
}

countUp(0,126,counter);
countUp(0,7,countertwo);
countUp(0,80,counterthree);
countUp(0,600,counterfive);

// let polathree = document.querySelector('.third-white');

// polathree.addEventListener('click', function () {
//     polathree.classList.toggle("active")
// });