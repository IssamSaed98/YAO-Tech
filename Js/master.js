let landingPage = document.querySelector('.landing-page');
let Setiing1 =document.querySelector('.setting-box');
let SettingIcon = document.querySelector('.setting-box .bi');
let imgArray =['01.avif','02.avif','03.avif','04.avif','06.avif','16.jpg'];
const selectColor = document.querySelectorAll('.colors-list li');
let main_color = localStorage.getItem("color_option");
let ourGallary =document.querySelectorAll('.gallary img');




document.querySelector('.toggle-setting .bi').onclick = function(){
    this.classList.toggle("fa-spin");
    document.querySelector('.setting-box').classList.toggle("open");
    }

/*etInterval( ()=>{
    let randomNumber =Math.floor(Math.random() * imgArray.length);
    if(randomNumber >0){ 
    landingPage.style.backgroundImage = `url("0${randomNumber}.avif")`;}
    
    //landingPage.style.backgroundImage = 'url("../image/' +  imgArray[randomNumber]+")';
},1800)*/


if(main_color !== null){
    document.documentElement.style.setProperty('--main-color',main_color);
}

selectColor.forEach(li =>{
    li.addEventListener('click',(e)=>{
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem('color_option',e.target.dataset.color)
    })
})


let ourSkills = document.querySelector('.skills');
window.onscroll=function(){
    let skillsOffSetTop = ourSkills.offsetTop;

    let skillsOuterHeight = ourSkills.offsetHeight;
   
    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;
  
    if(skillsOffSetTop >(skillsOffSetTop + skillsOuterHeight - windowHeight)){ 
    let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
allSkills.forEach(skills =>{
    skills.style.width=skills.dataset.progress;
})
}
}


 /*async function get(){
    const response  = await fetch("https://www.breakingbadapi.com/api/characters/1");
    const data = await response.json();
    console.log(data)
}
get();*/

ourGallary.forEach(img =>{

    img.addEventListener('click',(e) =>{
        let overLay = document.createElement('div');
        overLay.className = 'popup-overlay';

        document.body.appendChild(overLay);

        let popupBox = document.createElement('div');
        popupBox.className='popup-box';

        let popupImage = document.createElement('img');
        popupImage.src = img.src;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox)

    })
})






