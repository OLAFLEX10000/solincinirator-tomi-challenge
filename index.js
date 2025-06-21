
const checkedEl = document.getElementById('checked-el')
const arrowEl = document.querySelector('.arrow-el')
const arrowEl1 = document.querySelector('.arrow-el-1')
const arrowEl2 = document.querySelector('.arrow-el-2')
const arrowEl3 = document.querySelector('.arrow-el-3')
const arrowEl4 = document.querySelector('.arrow-el-4')
const arrowEl5 = document.querySelector('.arrow-el-5')
const arrowEl6 = document.querySelector('.arrow-el-6')
const arrowEl7 = document.querySelector('.arrow-el-7')
const arrowEl8 = document.querySelector('.arrow-el-8')
const arrowEl9 = document.querySelector('.arrow-el-9')
const arrowEl10 = document.querySelector('.arrow-el-10')
const arrowEl11= document.querySelector('.arrow-el-11')
const arrowEl12 = document.querySelector('.arrow-el-12')
const arrowEl13 = document.querySelector('.arrow-el-13')
const arrowEl14 = document.querySelector('.arrow-el-14')
const checkedEl1 = document.getElementById('checked-el-1')
const checkedEl2 = document.getElementById('checked-el-2')
const checkedEl3 = document.getElementById('checked-el-3')
const checkedEl4 = document.getElementById('checked-el-4')
const checkedEl5 = document.getElementById('checked-el-5')
const checkedEl6 = document.getElementById('checked-el-6')
const checkedEl7 = document.getElementById('checked-el-7')
const checkedEl8 = document.getElementById('checked-el-8')
const checkedEl9 = document.getElementById('checked-el-9')
const checkedEl10 = document.getElementById('checked-el-10')
const checkedEl11= document.getElementById('checked-el-11')
const checkedEl12 = document.getElementById('checked-el-12')
const checkedEl13 = document.getElementById('checked-el-13')
const checkedEl14 = document.getElementById('checked-el-14')
const checkedEl15 = document.getElementById('checked-el-15')
const footerSwitch = document.getElementById('footer-switch')
const modalContent = document.getElementById("modal-content");
const modalContainer = document.getElementById("modal-container")
const androidPhantom = document.getElementById("android-phantom")



function txtEl(){
    checkedEl.classList.toggle('checked')
    arrowEl.classList.toggle('opposite-arrow')
}
function txtEl1(){
    checkedEl1.classList.toggle('checked')
    arrowEl1.classList.toggle('opposite-arrow')
}
function txtEl2(){
    checkedEl2.classList.toggle('checked')
    arrowEl2.classList.toggle('opposite-arrow')
}
function txtEl3(){
    checkedEl3.classList.toggle('checked')
    arrowEl3.classList.toggle('opposite-arrow')
}
function txtEl4(){
    checkedEl4.classList.toggle('checked')
    arrowEl4.classList.toggle('opposite-arrow')
}
function txtEl5(){
    checkedEl5.classList.toggle('checked')
    arrowEl5.classList.toggle('opposite-arrow')
}
function txtEl6(){
    checkedEl6.classList.toggle('checked')
    arrowEl6.classList.toggle('opposite-arrow')
}
function txtEl7(){
    checkedEl7.classList.toggle('checked')
    arrowEl7.classList.toggle('opposite-arrow')
}

function txtEl8(){
    checkedEl8.classList.toggle('checked')
    arrowEl8.classList.toggle('opposite-arrow')
}
function txtEl9(){
    checkedEl9.classList.toggle('checked')
    arrowEl9.classList.toggle('opposite-arrow')
}
function txtEl10(){
    checkedEl10.classList.toggle('checked')
    arrowEl10.classList.toggle('opposite-arrow')
}
function txtEl11(){
    checkedEl11.classList.toggle('checked')
    arrowEl11.classList.toggle('opposite-arrow')
}
function txtEl12(){
    checkedEl12.classList.toggle('checked')
    arrowEl12.classList.toggle('opposite-arrow')
}
function txtEl13(){
    checkedEl13.classList.toggle('checked')
    arrowEl13.classList.toggle('opposite-arrow')
}
function txtEl14(){
    checkedEl14.classList.toggle('checked')
    arrowEl14.classList.toggle('opposite-arrow')
}
function toggleSwitch(){
    const toggle = document.getElementById("toggle");
    toggle.classList.toggle("active")
    
}
function walletClick(){
    
    modalContainer.style.display = 'block'
}
function closeModal(){
    modalContainer.style.display = 'none'
}
window.onclick = (event) =>{
    if (event.target === modalContainer){
        modalContainer.style.display = 'none'
    }
}
function phantomWallet(){
    androidPhantom.style.display ='block'
}
function cancelPhantom(){
    androidPhantom.style.display = 'none'
}