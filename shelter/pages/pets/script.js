function ToMain(){
    document.location.href ='../main/main.html';
}



function disableScrolling(y){
  window.scrollTo(0, y);
  document.getElementById('body').style.overflow = 'hidden';
}

function enableScrolling(){
  document.getElementById('body').style.overflow = 'scroll';
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

async function consumingFunc () {
    let response = await fetch('pets.json')
    return response.json();
  }
  
let data = consumingFunc();
   
var elem1 = document.getElementById('elem-1');
var elem2 = document.getElementById('elem-2');
var elem3 = document.getElementById('elem-3');
var elem4 = document.getElementById('elem-4');
var elem5 = document.getElementById('elem-5');
var elem6 = document.getElementById('elem-6');
var elem7 = document.getElementById('elem-7');
var elem8 = document.getElementById('elem-8');

var y = document.querySelector('.Pets').getBoundingClientRect()['y'];

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
    disableScrolling(y+250);
  }
  if (window.innerWidth>=768 && window.innerWidth<1280){
    disableScrolling(y+550);
  }
  if (window.innerWidth<768){
    disableScrolling(y+560);
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
elem4.onclick = function(){
  OpenPopup(elem4);
};
elem5.onclick = function(){
  OpenPopup(elem5);
};
elem6.onclick = function(){
  OpenPopup(elem6);
};
elem7.onclick = function(){
  OpenPopup(elem7);
};
elem8.onclick = function(){
  OpenPopup(elem8);
};

function HoverCloseBtn(){
  document.querySelector('.close-btn').style.backgroundColor = '#F1CDB3';
}
function CancelHover(){
  document.querySelector('.close-btn').style.backgroundColor = '#f1cdb300';
}

var arr = new Array(48);
var arr8 = [0,1,2,3,4,5,6,7];
arr8.sort(function(){
  return Math.random() - 0.5;
});
var k=0;
for (let i = 0; i < arr.length; i++){
  if (k>7){
    k=0;
    arr8.sort(function(){
      return Math.random() - 0.5;
    });
  }
  if (i<8){
    arr[i]=arr8[k];
    k++;
  }
  if (i>7 && i<16){
    arr[i]=arr8[k];
    k++;
  }
  if (i>15 && i<24){
    arr[i]=arr8[k];
    k++;
  }
  if (i>23 && i<32){
    arr[i]=arr8[k];
    k++;
  }
  if (i>31 && i<40){
    arr[i]=arr8[k];
    k++;
  }
  if (i>39 && i<48){
    arr[i]=arr8[k];
    k++;
  }
}

var arr1280 = [
  [arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]],
  [arr[8],arr[9],arr[10],arr[11],arr[12],arr[13],arr[14],arr[15]],
  [arr[16],arr[17],arr[18],arr[19],arr[20],arr[21],arr[22],arr[23]],
  [arr[24],arr[25],arr[26],arr[27],arr[28],arr[29],arr[30],arr[31]],
  [arr[32],arr[33],arr[34],arr[35],arr[36],arr[37],arr[38],arr[39]],
  [arr[40],arr[41],arr[42],arr[43],arr[44],arr[45],arr[46],arr[47]]
];

var arr768 = [
  [arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]],
  [arr[6],arr[7],arr[8],arr[9],arr[10],arr[11]],
  [arr[12],arr[13],arr[14],arr[15],arr[16],arr[17]],
  [arr[18],arr[19],arr[20],arr[21],arr[22],arr[23]],
  [arr[24],arr[25],arr[26],arr[27],arr[28],arr[29]],
  [arr[30],arr[31],arr[32],arr[33],arr[34],arr[35]],
  [arr[36],arr[37],arr[38],arr[39],arr[40],arr[41]],
  [arr[42],arr[43],arr[44],arr[45],arr[46],arr[47]]
];

var arr320 = [
  [arr[0],arr[1],arr[2]],
  [arr[3],arr[4],arr[5]],
  [arr[6],arr[7],arr[8]],
  [arr[9],arr[10],arr[11]],
  [arr[12],arr[13],arr[14]],
  [arr[15],arr[16],arr[17]],
  [arr[18],arr[19],arr[20]],
  [arr[21],arr[22],arr[23]],
  [arr[24],arr[25],arr[26]],
  [arr[27],arr[28],arr[29]],
  [arr[30],arr[31],arr[32]],
  [arr[33],arr[34],arr[35]],
  [arr[36],arr[37],arr[38]],
  [arr[39],arr[40],arr[41]],
  [arr[42],arr[43],arr[44]],
  [arr[45],arr[46],arr[47]]
];

function Pagination1280(){
  
  var currentPage = 0;
  
  data.then(function f2(result) {
    
    document.querySelector('.Katrine img').src = result[arr1280[currentPage][0]].img;
    document.querySelector('.Jennifer img').src = result[arr1280[currentPage][1]].img;
    document.querySelector('.Woody img').src = result[arr1280[currentPage][2]].img;
    document.querySelector('.Sophia img').src = result[arr1280[currentPage][3]].img;
    document.querySelector('.Timmy img').src = result[arr1280[currentPage][4]].img;
    document.querySelector('.Charly img').src = result[arr1280[currentPage][5]].img;
    document.querySelector('.Scarlett img').src = result[arr1280[currentPage][6]].img;
    document.querySelector('.Freddie img').src = result[arr1280[currentPage][7]].img;
  
    document.querySelector('.Katrine span').innerHTML = result[arr1280[currentPage][0]].name;
    document.querySelector('.Jennifer span').innerHTML = result[arr1280[currentPage][1]].name;
    document.querySelector('.Woody span').innerHTML = result[arr1280[currentPage][2]].name;
    document.querySelector('.Sophia span').innerHTML = result[arr1280[currentPage][3]].name;
    document.querySelector('.Timmy span').innerHTML = result[arr1280[currentPage][4]].name;
    document.querySelector('.Charly span').innerHTML = result[arr1280[currentPage][5]].name;
    document.querySelector('.Scarlett span').innerHTML = result[arr1280[currentPage][6]].name;
    document.querySelector('.Freddie span').innerHTML = result[arr1280[currentPage][7]].name;
    
  });
  
  document.querySelector('.pag-btn1').disabled=true;
  document.querySelector('.pag-btn1 a').classList.add('.inactive-btn');
  
  document.querySelector('.pag-btn2').disabled=true;
  document.querySelector('.pag-btn2 a').classList.add('.inactive-btn');
  
  var nextPage = document.querySelector('.pag-btn4');
  
  nextPage.onclick = function(){
  
    document.querySelector('.pag-btn1').disabled=false;
    document.querySelector('.pag-btn1 a').classList.remove('.inactive-btn');
  
    document.querySelector('.pag-btn2').disabled=false;
    document.querySelector('.pag-btn2 a').classList.remove('.inactive-btn');
  
  
    if (currentPage!==5){
  
      currentPage++;
      document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
      data.then(function f2(result) {
  
        unfade(document.querySelector('.Katrine img'));
        unfade(document.querySelector('.Jennifer img'));
        unfade(document.querySelector('.Woody img'));
        unfade(document.querySelector('.Sophia img'));
        unfade(document.querySelector('.Timmy img'));
        unfade(document.querySelector('.Charly img'));
        unfade(document.querySelector('.Scarlett img'));
        unfade(document.querySelector('.Freddie img'));
      
        document.querySelector('.Katrine img').src = result[arr1280[currentPage][0]].img;
        document.querySelector('.Jennifer img').src = result[arr1280[currentPage][1]].img;
        document.querySelector('.Woody img').src = result[arr1280[currentPage][2]].img;
        document.querySelector('.Sophia img').src = result[arr1280[currentPage][3]].img;
        document.querySelector('.Timmy img').src = result[arr1280[currentPage][4]].img;
        document.querySelector('.Charly img').src = result[arr1280[currentPage][5]].img;
        document.querySelector('.Scarlett img').src = result[arr1280[currentPage][6]].img;
        document.querySelector('.Freddie img').src = result[arr1280[currentPage][7]].img;
      
        document.querySelector('.Katrine span').innerHTML = result[arr1280[currentPage][0]].name;
        document.querySelector('.Jennifer span').innerHTML = result[arr1280[currentPage][1]].name;
        document.querySelector('.Woody span').innerHTML = result[arr1280[currentPage][2]].name;
        document.querySelector('.Sophia span').innerHTML = result[arr1280[currentPage][3]].name;
        document.querySelector('.Timmy span').innerHTML = result[arr1280[currentPage][4]].name;
        document.querySelector('.Charly span').innerHTML = result[arr1280[currentPage][5]].name;
        document.querySelector('.Scarlett span').innerHTML = result[arr1280[currentPage][6]].name;
        document.querySelector('.Freddie span').innerHTML = result[arr1280[currentPage][7]].name;
      });
    }
    if (currentPage===5){
      document.querySelector('.pag-btn4').disabled=true;
      document.querySelector('.pag-btn4 a').classList.add('.inactive-btn');
  
      document.querySelector('.pag-btn5').disabled=true;
      document.querySelector('.pag-btn5 a').classList.add('.inactive-btn');
    }
    
  };
  
  var prevPage = document.querySelector('.pag-btn2');
  
  prevPage.onclick = function(){
  
    document.querySelector('.pag-btn4').disabled=false;
    document.querySelector('.pag-btn4 a').classList.remove('.inactive-btn');
  
    document.querySelector('.pag-btn5').disabled=false;
    document.querySelector('.pag-btn5 a').classList.remove('.inactive-btn');
  
      if (currentPage!==0){
  
        currentPage--;
        document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
        data.then(function f2(result) {
  
          unfade(document.querySelector('.Katrine img'));
          unfade(document.querySelector('.Jennifer img'));
          unfade(document.querySelector('.Woody img'));
          unfade(document.querySelector('.Sophia img'));
          unfade(document.querySelector('.Timmy img'));
          unfade(document.querySelector('.Charly img'));
          unfade(document.querySelector('.Scarlett img'));
          unfade(document.querySelector('.Freddie img'));
      
          document.querySelector('.Katrine img').src = result[arr1280[currentPage][0]].img;
          document.querySelector('.Jennifer img').src = result[arr1280[currentPage][1]].img;
          document.querySelector('.Woody img').src = result[arr1280[currentPage][2]].img;
          document.querySelector('.Sophia img').src = result[arr1280[currentPage][3]].img;
          document.querySelector('.Timmy img').src = result[arr1280[currentPage][4]].img;
          document.querySelector('.Charly img').src = result[arr1280[currentPage][5]].img;
          document.querySelector('.Scarlett img').src = result[arr1280[currentPage][6]].img;
          document.querySelector('.Freddie img').src = result[arr1280[currentPage][7]].img;
        
          document.querySelector('.Katrine span').innerHTML = result[arr1280[currentPage][0]].name;
          document.querySelector('.Jennifer span').innerHTML = result[arr1280[currentPage][1]].name;
          document.querySelector('.Woody span').innerHTML = result[arr1280[currentPage][2]].name;
          document.querySelector('.Sophia span').innerHTML = result[arr1280[currentPage][3]].name;
          document.querySelector('.Timmy span').innerHTML = result[arr1280[currentPage][4]].name;
          document.querySelector('.Charly span').innerHTML = result[arr1280[currentPage][5]].name;
          document.querySelector('.Scarlett span').innerHTML = result[arr1280[currentPage][6]].name;
          document.querySelector('.Freddie span').innerHTML = result[arr1280[currentPage][7]].name;
        });
      } 
      if (currentPage===0) {
        document.querySelector('.pag-btn2').disabled=true;
        document.querySelector('.pag-btn2 a').classList.add('.inactive-btn');
  
        document.querySelector('.pag-btn1').disabled=true;
      document.querySelector('.pag-btn1 a').classList.add('.inactive-btn');
      }
      
  };
  
  var lastPage = document.querySelector('.pag-btn5');
  
  lastPage.onclick = function(){
  
    document.querySelector('.pag-btn1').disabled=false;
    document.querySelector('.pag-btn1 a').classList.remove('.inactive-btn');
    
    document.querySelector('.pag-btn2').disabled=false;
    document.querySelector('.pag-btn2 a').classList.remove('.inactive-btn');
    
    document.querySelector('.pag-btn4').disabled=true;
    document.querySelector('.pag-btn4 a').classList.add('.inactive-btn');
  
    document.querySelector('.pag-btn5').disabled=true;
    document.querySelector('.pag-btn5 a').classList.add('.inactive-btn');
  
    currentPage = 5;
    document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
    data.then(function f2(result) {
  
      unfade(document.querySelector('.Katrine img'));
      unfade(document.querySelector('.Jennifer img'));
      unfade(document.querySelector('.Woody img'));
      unfade(document.querySelector('.Sophia img'));
      unfade(document.querySelector('.Timmy img'));
      unfade(document.querySelector('.Charly img'));
      unfade(document.querySelector('.Scarlett img'));
      unfade(document.querySelector('.Freddie img'));
    
      document.querySelector('.Katrine img').src = result[arr1280[currentPage][0]].img;
      document.querySelector('.Jennifer img').src = result[arr1280[currentPage][1]].img;
      document.querySelector('.Woody img').src = result[arr1280[currentPage][2]].img;
      document.querySelector('.Sophia img').src = result[arr1280[currentPage][3]].img;
      document.querySelector('.Timmy img').src = result[arr1280[currentPage][4]].img;
      document.querySelector('.Charly img').src = result[arr1280[currentPage][5]].img;
      document.querySelector('.Scarlett img').src = result[arr1280[currentPage][6]].img;
      document.querySelector('.Freddie img').src = result[arr1280[currentPage][7]].img;
    
      document.querySelector('.Katrine span').innerHTML = result[arr1280[currentPage][0]].name;
      document.querySelector('.Jennifer span').innerHTML = result[arr1280[currentPage][1]].name;
      document.querySelector('.Woody span').innerHTML = result[arr1280[currentPage][2]].name;
      document.querySelector('.Sophia span').innerHTML = result[arr1280[currentPage][3]].name;
      document.querySelector('.Timmy span').innerHTML = result[arr1280[currentPage][4]].name;
      document.querySelector('.Charly span').innerHTML = result[arr1280[currentPage][5]].name;
      document.querySelector('.Scarlett span').innerHTML = result[arr1280[currentPage][6]].name;
      document.querySelector('.Freddie span').innerHTML = result[arr1280[currentPage][7]].name;
    });
  
  };
  
  var firstPage = document.querySelector('.pag-btn1');
  
  firstPage.onclick = function(){
    
    document.querySelector('.pag-btn5').disabled=false;
    document.querySelector('.pag-btn5 a').classList.remove('.inactive-btn');
  
    document.querySelector('.pag-btn4').disabled=false;
    document.querySelector('.pag-btn4 a').classList.remove('.inactive-btn');
    
    document.querySelector('.pag-btn2').disabled=true;
    document.querySelector('.pag-btn2 a').classList.add('.inactive-btn');
  
    document.querySelector('.pag-btn1').disabled=true;
    document.querySelector('.pag-btn1 a').classList.add('.inactive-btn');
  
    currentPage = 0;
    document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
    data.then(function f2(result) {
  
      unfade(document.querySelector('.Katrine img'));
      unfade(document.querySelector('.Jennifer img'));
      unfade(document.querySelector('.Woody img'));
      unfade(document.querySelector('.Sophia img'));
      unfade(document.querySelector('.Timmy img'));
      unfade(document.querySelector('.Charly img'));
      unfade(document.querySelector('.Scarlett img'));
      unfade(document.querySelector('.Freddie img'));
    
      document.querySelector('.Katrine img').src = result[arr1280[currentPage][0]].img;
      document.querySelector('.Jennifer img').src = result[arr1280[currentPage][1]].img;
      document.querySelector('.Woody img').src = result[arr1280[currentPage][2]].img;
      document.querySelector('.Sophia img').src = result[arr1280[currentPage][3]].img;
      document.querySelector('.Timmy img').src = result[arr1280[currentPage][4]].img;
      document.querySelector('.Charly img').src = result[arr1280[currentPage][5]].img;
      document.querySelector('.Scarlett img').src = result[arr1280[currentPage][6]].img;
      document.querySelector('.Freddie img').src = result[arr1280[currentPage][7]].img;
    
      document.querySelector('.Katrine span').innerHTML = result[arr1280[currentPage][0]].name;
      document.querySelector('.Jennifer span').innerHTML = result[arr1280[currentPage][1]].name;
      document.querySelector('.Woody span').innerHTML = result[arr1280[currentPage][2]].name;
      document.querySelector('.Sophia span').innerHTML = result[arr1280[currentPage][3]].name;
      document.querySelector('.Timmy span').innerHTML = result[arr1280[currentPage][4]].name;
      document.querySelector('.Charly span').innerHTML = result[arr1280[currentPage][5]].name;
      document.querySelector('.Scarlett span').innerHTML = result[arr1280[currentPage][6]].name;
      document.querySelector('.Freddie span').innerHTML = result[arr1280[currentPage][7]].name;
    });
  
  };
}
function Pagination768(){
  
  var currentPage = 0;
  
  document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
  data.then(function f2(result) {
    
    document.querySelector('.Katrine img').src = result[arr768[currentPage][0]].img;
    document.querySelector('.Jennifer img').src = result[arr768[currentPage][1]].img;
    document.querySelector('.Woody img').src = result[arr768[currentPage][2]].img;
    document.querySelector('.Sophia img').src = result[arr768[currentPage][3]].img;
    document.querySelector('.Timmy img').src = result[arr768[currentPage][4]].img;
    document.querySelector('.Charly img').src = result[arr768[currentPage][5]].img;
  
    document.querySelector('.Katrine span').innerHTML = result[arr768[currentPage][0]].name;
    document.querySelector('.Jennifer span').innerHTML = result[arr768[currentPage][1]].name;
    document.querySelector('.Woody span').innerHTML = result[arr768[currentPage][2]].name;
    document.querySelector('.Sophia span').innerHTML = result[arr768[currentPage][3]].name;
    document.querySelector('.Timmy span').innerHTML = result[arr768[currentPage][4]].name;
    document.querySelector('.Charly span').innerHTML = result[arr768[currentPage][5]].name;
    
  });
  
  document.querySelector('.pag-btn1').disabled=true;
  document.querySelector('.pag-btn1 a').classList.add('.inactive-btn');
  
  document.querySelector('.pag-btn2').disabled=true;
  document.querySelector('.pag-btn2 a').classList.add('.inactive-btn');

  document.querySelector('.pag-btn4').disabled=false;
  document.querySelector('.pag-btn4 a').classList.remove('.inactive-btn');
  
  document.querySelector('.pag-btn5').disabled=false;
  document.querySelector('.pag-btn5 a').classList.remove('.inactive-btn');
  
  var nextPage = document.querySelector('.pag-btn4');
  
  nextPage.onclick = function(){
  
    document.querySelector('.pag-btn1').disabled=false;
    document.querySelector('.pag-btn1 a').classList.remove('.inactive-btn');
  
    document.querySelector('.pag-btn2').disabled=false;
    document.querySelector('.pag-btn2 a').classList.remove('.inactive-btn');
  
  
    if (currentPage!==7){
  
      currentPage++;
      document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
      data.then(function f2(result) {
  
        unfade(document.querySelector('.Katrine img'));
        unfade(document.querySelector('.Jennifer img'));
        unfade(document.querySelector('.Woody img'));
        unfade(document.querySelector('.Sophia img'));
        unfade(document.querySelector('.Timmy img'));
        unfade(document.querySelector('.Charly img'));
      
        document.querySelector('.Katrine img').src = result[arr768[currentPage][0]].img;
        document.querySelector('.Jennifer img').src = result[arr768[currentPage][1]].img;
        document.querySelector('.Woody img').src = result[arr768[currentPage][2]].img;
        document.querySelector('.Sophia img').src = result[arr768[currentPage][3]].img;
        document.querySelector('.Timmy img').src = result[arr768[currentPage][4]].img;
        document.querySelector('.Charly img').src = result[arr768[currentPage][5]].img;
      
        document.querySelector('.Katrine span').innerHTML = result[arr768[currentPage][0]].name;
        document.querySelector('.Jennifer span').innerHTML = result[arr768[currentPage][1]].name;
        document.querySelector('.Woody span').innerHTML = result[arr768[currentPage][2]].name;
        document.querySelector('.Sophia span').innerHTML = result[arr768[currentPage][3]].name;
        document.querySelector('.Timmy span').innerHTML = result[arr768[currentPage][4]].name;
        document.querySelector('.Charly span').innerHTML = result[arr768[currentPage][5]].name;
      });
    }
    if (currentPage===7){
      document.querySelector('.pag-btn4').disabled=true;
      document.querySelector('.pag-btn4 a').classList.add('.inactive-btn');
  
      document.querySelector('.pag-btn5').disabled=true;
      document.querySelector('.pag-btn5 a').classList.add('.inactive-btn');
    }
    
  };
  
  var prevPage = document.querySelector('.pag-btn2');
  
  prevPage.onclick = function(){
  
    document.querySelector('.pag-btn4').disabled=false;
    document.querySelector('.pag-btn4 a').classList.remove('.inactive-btn');
  
    document.querySelector('.pag-btn5').disabled=false;
    document.querySelector('.pag-btn5 a').classList.remove('.inactive-btn');
  
      if (currentPage!==0){
  
        currentPage--;
        document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
        data.then(function f2(result) {
  
          unfade(document.querySelector('.Katrine img'));
          unfade(document.querySelector('.Jennifer img'));
          unfade(document.querySelector('.Woody img'));
          unfade(document.querySelector('.Sophia img'));
          unfade(document.querySelector('.Timmy img'));
          unfade(document.querySelector('.Charly img'));
      
          document.querySelector('.Katrine img').src = result[arr768[currentPage][0]].img;
          document.querySelector('.Jennifer img').src = result[arr768[currentPage][1]].img;
          document.querySelector('.Woody img').src = result[arr768[currentPage][2]].img;
          document.querySelector('.Sophia img').src = result[arr768[currentPage][3]].img;
          document.querySelector('.Timmy img').src = result[arr768[currentPage][4]].img;
          document.querySelector('.Charly img').src = result[arr768[currentPage][5]].img;
        
          document.querySelector('.Katrine span').innerHTML = result[arr768[currentPage][0]].name;
          document.querySelector('.Jennifer span').innerHTML = result[arr768[currentPage][1]].name;
          document.querySelector('.Woody span').innerHTML = result[arr768[currentPage][2]].name;
          document.querySelector('.Sophia span').innerHTML = result[arr768[currentPage][3]].name;
          document.querySelector('.Timmy span').innerHTML = result[arr768[currentPage][4]].name;
          document.querySelector('.Charly span').innerHTML = result[arr768[currentPage][5]].name;
        });
      } 
      if (currentPage===0) {
        document.querySelector('.pag-btn2').disabled=true;
        document.querySelector('.pag-btn2 a').classList.add('.inactive-btn');
  
        document.querySelector('.pag-btn1').disabled=true;
      document.querySelector('.pag-btn1 a').classList.add('.inactive-btn');
      }
      
  };
  
  var lastPage = document.querySelector('.pag-btn5');
  
  lastPage.onclick = function(){
  
    document.querySelector('.pag-btn1').disabled=false;
    document.querySelector('.pag-btn1 a').classList.remove('.inactive-btn');
    
    document.querySelector('.pag-btn2').disabled=false;
    document.querySelector('.pag-btn2 a').classList.remove('.inactive-btn');
    
    document.querySelector('.pag-btn4').disabled=true;
    document.querySelector('.pag-btn4 a').classList.add('.inactive-btn');
  
    document.querySelector('.pag-btn5').disabled=true;
    document.querySelector('.pag-btn5 a').classList.add('.inactive-btn');
  
    currentPage = 7;
    document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
    data.then(function f2(result) {
  
      unfade(document.querySelector('.Katrine img'));
      unfade(document.querySelector('.Jennifer img'));
      unfade(document.querySelector('.Woody img'));
      unfade(document.querySelector('.Sophia img'));
      unfade(document.querySelector('.Timmy img'));
      unfade(document.querySelector('.Charly img'));
    
      document.querySelector('.Katrine img').src = result[arr768[currentPage][0]].img;
      document.querySelector('.Jennifer img').src = result[arr768[currentPage][1]].img;
      document.querySelector('.Woody img').src = result[arr768[currentPage][2]].img;
      document.querySelector('.Sophia img').src = result[arr768[currentPage][3]].img;
      document.querySelector('.Timmy img').src = result[arr768[currentPage][4]].img;
      document.querySelector('.Charly img').src = result[arr768[currentPage][5]].img;
    
      document.querySelector('.Katrine span').innerHTML = result[arr768[currentPage][0]].name;
      document.querySelector('.Jennifer span').innerHTML = result[arr768[currentPage][1]].name;
      document.querySelector('.Woody span').innerHTML = result[arr768[currentPage][2]].name;
      document.querySelector('.Sophia span').innerHTML = result[arr768[currentPage][3]].name;
      document.querySelector('.Timmy span').innerHTML = result[arr768[currentPage][4]].name;
      document.querySelector('.Charly span').innerHTML = result[arr768[currentPage][5]].name;
    });
  
  };
  
  var firstPage = document.querySelector('.pag-btn1');
  
  firstPage.onclick = function(){
    
    document.querySelector('.pag-btn5').disabled=false;
    document.querySelector('.pag-btn5 a').classList.remove('.inactive-btn');
  
    document.querySelector('.pag-btn4').disabled=false;
    document.querySelector('.pag-btn4 a').classList.remove('.inactive-btn');
    
    document.querySelector('.pag-btn2').disabled=true;
    document.querySelector('.pag-btn2 a').classList.add('.inactive-btn');
  
    document.querySelector('.pag-btn1').disabled=true;
    document.querySelector('.pag-btn1 a').classList.add('.inactive-btn');
  
    currentPage = 0;
    document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
    data.then(function f2(result) {
  
      unfade(document.querySelector('.Katrine img'));
      unfade(document.querySelector('.Jennifer img'));
      unfade(document.querySelector('.Woody img'));
      unfade(document.querySelector('.Sophia img'));
      unfade(document.querySelector('.Timmy img'));
      unfade(document.querySelector('.Charly img'));
    
      document.querySelector('.Katrine img').src = result[arr768[currentPage][0]].img;
      document.querySelector('.Jennifer img').src = result[arr768[currentPage][1]].img;
      document.querySelector('.Woody img').src = result[arr768[currentPage][2]].img;
      document.querySelector('.Sophia img').src = result[arr768[currentPage][3]].img;
      document.querySelector('.Timmy img').src = result[arr768[currentPage][4]].img;
      document.querySelector('.Charly img').src = result[arr768[currentPage][5]].img;
    
      document.querySelector('.Katrine span').innerHTML = result[arr768[currentPage][0]].name;
      document.querySelector('.Jennifer span').innerHTML = result[arr768[currentPage][1]].name;
      document.querySelector('.Woody span').innerHTML = result[arr768[currentPage][2]].name;
      document.querySelector('.Sophia span').innerHTML = result[arr768[currentPage][3]].name;
      document.querySelector('.Timmy span').innerHTML = result[arr768[currentPage][4]].name;
      document.querySelector('.Charly span').innerHTML = result[arr768[currentPage][5]].name;
    });
  
  };
}
function Pagination320(){
  
  var currentPage = 0;
  document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
  data.then(function f2(result) {
    
    document.querySelector('.Katrine img').src = result[arr320[currentPage][0]].img;
    document.querySelector('.Jennifer img').src = result[arr320[currentPage][1]].img;
    document.querySelector('.Woody img').src = result[arr320[currentPage][2]].img;
  
    document.querySelector('.Katrine span').innerHTML = result[arr320[currentPage][0]].name;
    document.querySelector('.Jennifer span').innerHTML = result[arr320[currentPage][1]].name;
    document.querySelector('.Woody span').innerHTML = result[arr320[currentPage][2]].name;
    
  });
  
  document.querySelector('.pag-btn1').disabled=true;
  document.querySelector('.pag-btn1 a').classList.add('.inactive-btn');
  
  document.querySelector('.pag-btn2').disabled=true;
  document.querySelector('.pag-btn2 a').classList.add('.inactive-btn');
  
  document.querySelector('.pag-btn4').disabled=false;
  document.querySelector('.pag-btn4 a').classList.remove('.inactive-btn');
  
  document.querySelector('.pag-btn5').disabled=false;
  document.querySelector('.pag-btn5 a').classList.remove('.inactive-btn');
  
  var nextPage = document.querySelector('.pag-btn4');
  
  nextPage.onclick = function(){
  
    document.querySelector('.pag-btn1').disabled=false;
    document.querySelector('.pag-btn1 a').classList.remove('.inactive-btn');
  
    document.querySelector('.pag-btn2').disabled=false;
    document.querySelector('.pag-btn2 a').classList.remove('.inactive-btn');
  
  
    if (currentPage!==15){
  
      currentPage++;
      document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
      data.then(function f2(result) {
  
        unfade(document.querySelector('.Katrine img'));
        unfade(document.querySelector('.Jennifer img'));
        unfade(document.querySelector('.Woody img'));
      
        document.querySelector('.Katrine img').src = result[arr320[currentPage][0]].img;
        document.querySelector('.Jennifer img').src = result[arr320[currentPage][1]].img;
        document.querySelector('.Woody img').src = result[arr320[currentPage][2]].img;
      
        document.querySelector('.Katrine span').innerHTML = result[arr320[currentPage][0]].name;
        document.querySelector('.Jennifer span').innerHTML = result[arr320[currentPage][1]].name;
        document.querySelector('.Woody span').innerHTML = result[arr320[currentPage][2]].name;
      });
    }
    if (currentPage===15){
      document.querySelector('.pag-btn4').disabled=true;
      document.querySelector('.pag-btn4 a').classList.add('.inactive-btn');
  
      document.querySelector('.pag-btn5').disabled=true;
      document.querySelector('.pag-btn5 a').classList.add('.inactive-btn');
    }
    
  };
  
  var prevPage = document.querySelector('.pag-btn2');
  
  prevPage.onclick = function(){
  
    document.querySelector('.pag-btn4').disabled=false;
    document.querySelector('.pag-btn4 a').classList.remove('.inactive-btn');
  
    document.querySelector('.pag-btn5').disabled=false;
    document.querySelector('.pag-btn5 a').classList.remove('.inactive-btn');
  
      if (currentPage!==0){
  
        currentPage--;
        document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
        data.then(function f2(result) {
  
          unfade(document.querySelector('.Katrine img'));
          unfade(document.querySelector('.Jennifer img'));
          unfade(document.querySelector('.Woody img'));
      
          document.querySelector('.Katrine img').src = result[arr320[currentPage][0]].img;
          document.querySelector('.Jennifer img').src = result[arr320[currentPage][1]].img;
          document.querySelector('.Woody img').src = result[arr320[currentPage][2]].img;
        
          document.querySelector('.Katrine span').innerHTML = result[arr320[currentPage][0]].name;
          document.querySelector('.Jennifer span').innerHTML = result[arr320[currentPage][1]].name;
          document.querySelector('.Woody span').innerHTML = result[arr320[currentPage][2]].name;
        });
      } 
      if (currentPage===0) {
        document.querySelector('.pag-btn2').disabled=true;
        document.querySelector('.pag-btn2 a').classList.add('.inactive-btn');
  
        document.querySelector('.pag-btn1').disabled=true;
      document.querySelector('.pag-btn1 a').classList.add('.inactive-btn');
      }
      
  };
  
  var lastPage = document.querySelector('.pag-btn5');
  
  lastPage.onclick = function(){
  
    document.querySelector('.pag-btn1').disabled=false;
    document.querySelector('.pag-btn1 a').classList.remove('.inactive-btn');
    
    document.querySelector('.pag-btn2').disabled=false;
    document.querySelector('.pag-btn2 a').classList.remove('.inactive-btn');
    
    document.querySelector('.pag-btn4').disabled=true;
    document.querySelector('.pag-btn4 a').classList.add('.inactive-btn');
  
    document.querySelector('.pag-btn5').disabled=true;
    document.querySelector('.pag-btn5 a').classList.add('.inactive-btn');
  
    currentPage = 15;
    document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
    data.then(function f2(result) {
  
      unfade(document.querySelector('.Katrine img'));
      unfade(document.querySelector('.Jennifer img'));
      unfade(document.querySelector('.Woody img'));
    
      document.querySelector('.Katrine img').src = result[arr320[currentPage][0]].img;
      document.querySelector('.Jennifer img').src = result[arr320[currentPage][1]].img;
      document.querySelector('.Woody img').src = result[arr320[currentPage][2]].img;
    
      document.querySelector('.Katrine span').innerHTML = result[arr320[currentPage][0]].name;
      document.querySelector('.Jennifer span').innerHTML = result[arr320[currentPage][1]].name;
      document.querySelector('.Woody span').innerHTML = result[arr320[currentPage][2]].name;
    });
  
  };
  
  var firstPage = document.querySelector('.pag-btn1');
  
  firstPage.onclick = function(){
    
    document.querySelector('.pag-btn5').disabled=false;
    document.querySelector('.pag-btn5 a').classList.remove('.inactive-btn');
  
    document.querySelector('.pag-btn4').disabled=false;
    document.querySelector('.pag-btn4 a').classList.remove('.inactive-btn');
    
    document.querySelector('.pag-btn2').disabled=true;
    document.querySelector('.pag-btn2 a').classList.add('.inactive-btn');
  
    document.querySelector('.pag-btn1').disabled=true;
    document.querySelector('.pag-btn1 a').classList.add('.inactive-btn');
  
    currentPage = 0;
    document.querySelector('.pag-btn3 a').innerHTML = currentPage+1;
  
    data.then(function f2(result) {
  
      unfade(document.querySelector('.Katrine img'));
      unfade(document.querySelector('.Jennifer img'));
      unfade(document.querySelector('.Woody img'));
    
      document.querySelector('.Katrine img').src = result[arr320[currentPage][0]].img;
      document.querySelector('.Jennifer img').src = result[arr320[currentPage][1]].img;
      document.querySelector('.Woody img').src = result[arr320[currentPage][2]].img;
    
      document.querySelector('.Katrine span').innerHTML = result[arr320[currentPage][0]].name;
      document.querySelector('.Jennifer span').innerHTML = result[arr320[currentPage][1]].name;
      document.querySelector('.Woody span').innerHTML = result[arr320[currentPage][2]].name;
    });
  
  };
}

if (window.innerWidth>=1280){
  Pagination1280();
}
if (window.innerWidth>=768 && window.innerWidth<1280){
  Pagination768();
}
if (window.innerWidth<768){
  Pagination320();
}

var oldWidth = window.innerWidth;

window.onresize = function () {
	var newWidth = window.innerWidth;
	if (newWidth >= 1280 && oldWidth<1280) {
    Pagination1280();
    oldWidth = newWidth;
  }
  if (newWidth<1280 && newWidth>=768 && (oldWidth<768 || oldWidth>=1280)){
    Pagination768();
    oldWidth = newWidth;
  }
  if (newWidth<768 && (oldWidth>=768)){
    Pagination320();
    oldWidth = newWidth;
  }
};