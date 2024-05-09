function validationsatu() {
    console.log('Good');
}
document.getElementById('button-home').addEventListener('click' , () => validationsatu ())
document.getElementById('button-package').addEventListener('click' , () => validationsatu ())
document.getElementById('button-call').addEventListener('click' , () => validationsatu ())

function validation(){
    let username = document.getElementById('input-name-left').value;
    console.log;(username);
    if(username == "" || username == 'null'){
        alert ('inputan anda kosong, silahkan cek kembali')
    }
    else{
        alert('welcome '+ username)
        console.log(username);
    }
} 

let indexSlide = 1;
showSlide(1);

function nextSlide(n){
    console.log('nextSlide' + n);
    showSlide(indexSlide += n);
}

function showSlide(index){
    let listImage = document.getElementsByClassName('bener-item');
    console.log(listImage)
    console.log('banyaknya image:' + listImage.length);

    if(index > listImage.length ) indexSlide = 1;
    let i = 0;
    while(i < listImage.length){
        listImage[i].style.display ='none';      
        i++
    }
    listImage[indexSlide - 1].style.display = 'block'
    console.log('showSlide' + index);
}
setInterval(()=> nextSlide(1), 2000)

document.getElementById('send-btn').addEventListener('click' , () => nextSlide(1))







