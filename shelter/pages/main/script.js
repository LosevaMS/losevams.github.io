function toPets(){
    document.location.href ='../pets/pets.html';
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function disableScrolling(y){
  window.scrollTo(0, y);
  document.getElementById('body').style.overflow = 'hidden';
}

function enableScrolling(){
  document.getElementById('body').style.overflow = 'scroll';
}

var randomArray = [4,0,2];
const min = 0;
const max = 8;

async function consumingFunc () {
  let response = await fetch('pets.json')
  return response.json();
}

let data = consumingFunc();

function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}

function nextSlide(){
  unfade(document.getElementById("image-1"));
  unfade(document.getElementById("image-2"));
  unfade(document.getElementById("image-3"));
  unfade(document.getElementById("name-1"));
  unfade(document.getElementById("name-2"));
  unfade(document.getElementById("name-3"));
  
  var currentArray = [].concat(randomArray);

  for (let i=0; i<3; i++){
    let random = getRandomInt(min,max);
    while (randomArray.includes(random)||currentArray.includes(random)){
      random = getRandomInt(min,max);
    }
    randomArray[i]=random;
  }

  data.then( function f2(result) {
    document.getElementById("image-1").src=result[randomArray[0]].img;
    document.getElementById("image-2").src=result[randomArray[1]].img;
    document.getElementById("image-3").src=result[randomArray[2]].img;
    document.getElementById("name-1").innerHTML=result[randomArray[0]].name;
    document.getElementById("name-2").innerHTML=result[randomArray[1]].name;
    document.getElementById("name-3").innerHTML=result[randomArray[2]].name;
 })
}
var y = document.querySelector('.Pets').getBoundingClientRect()['y'];

var elem1 = document.getElementById('elem-1');
var elem2 = document.getElementById('elem-2');
var elem3 = document.getElementById('elem-3');

function OpenPopup(elem){
  let popup = document.querySelector('.popup');
  popup.style.display = "flex";
  data.then( function f2(result) {

    result.forEach(element => {
      let name = elem.children[1].textContent;
      if (element.name == name){
        document.querySelector('.pet-name').innerHTML = element.name;
        document.querySelector('.type-breed').innerHTML = `${element.type} - ${element.breed}`;
        document.querySelector('.description').innerHTML = element.description;
        document.getElementById('popup-age').innerHTML = element.age;
        document.getElementById('popup-inoculations').innerHTML = element.inoculations;
        document.getElementById('popup-diseases').innerHTML = element.diseases;
        document.getElementById('popup-parasites').innerHTML = element.parasites;
        document.querySelector(".pet-image").src=element.img;
      }
    });
  });
  if (window.innerWidth>=1280){
    disableScrolling(y+100);
  }
  if (window.innerWidth>=768 && window.innerWidth<1280){
    disableScrolling(y+220);
  }
  if (window.innerWidth<768){
    disableScrolling(y+150);
  }

  let closeBtn = document.querySelector('.close-btn');
  closeBtn.onclick = function(){
    popup.style.display = "none";
    enableScrolling();
  }
  window.onclick = function(e){
    if (e.target == popup){
    popup.style.display = "none";
    enableScrolling();
    }
  }
}

elem1.onclick = function(){
  OpenPopup(elem1);
};

elem2.onclick = function(){
  OpenPopup(elem2);
};

elem3.onclick = function(){
  OpenPopup(elem3);
};

function HoverCloseBtn(){
  document.querySelector('.close-btn').style.backgroundColor = '#F1CDB3';
}
function CancelHover(){
  document.querySelector('.close-btn').style.backgroundColor = '#f1cdb300';
}

var checkBox = document.getElementById("menu__toggle");
var checkFlag = false;
checkBox.onclick = function(){
  checkFlag = !checkFlag;
  if (checkFlag==true){
    disableScrolling(0);
  } else {
    enableScrolling();
  }
}