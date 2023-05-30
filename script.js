"use strict"

const accordian = document.getElementsByClassName('content-container');
console.log(accordian)

for(let i=0; i<accordian.length; i++){
    accordian[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};
