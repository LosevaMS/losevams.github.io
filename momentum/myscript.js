const time = document.querySelector('.time'),
  date = document.querySelector('.date'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function get_hours(time_string) {
    return new Date("2000-01-01 " + time_string).getHours() 
}

function isEmpty(str) {
    if (str.trim() == '') 
      return true;
      
    return false;
  }

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    month = today.getMonth(),
    day = today.getDay(),
    dayNum = today.getDate();

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
  date.innerHTML = `${weekday[day]}, ${dayNum} ${monthName[month]}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage =
      "url('assets/images/morning/04.jpg')";
    greeting.textContent = 'Good Morning, ';
    document.body.style.color = 'white';
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      "url('assets/images/day/03.jpg')";
    greeting.textContent = 'Good Afternoon, ';
    document.body.style.color = 'white';
  } else if (hour < 24){
    document.body.style.backgroundImage =
      "url('assets/images/evening/07.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundImage =
      "url('assets/images/night/01.jpg')";
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
  } 
}

var enterName = document.getElementById('name');

enterName.onclick = function(){
    name.innerHTML = '&nbsp;';
}

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
  if (isEmpty(localStorage.getItem('name').toString())==true){
    name.textContent = '[Enter Name]';
    localStorage.setItem('name', null);
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
  if (isEmpty(localStorage.getItem('name').toString())==true){
      name.textContent = '[Enter Name]';
      localStorage.setItem('name', null);
  }
}

var enterFocus = document.getElementById('focus');

enterFocus.onclick = function(){
    focus.innerHTML = '&nbsp;';
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
  if (isEmpty(localStorage.getItem('focus').toString())==true){
    focus.textContent = '[Enter Focus]';
    localStorage.setItem('focus', null);
  }
}

function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
  if (isEmpty(localStorage.getItem('focus').toString())==true){
    focus.textContent = '[Enter Focus]';
    localStorage.setItem('focus', null);
}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');

async function getQuote() {  
    var randomNum = getRandomInt(0,1643);
    const url = `https://type.fit/api/quotes`;
    const res = await fetch(url);
    const data = await res.json(); 
    blockquote.textContent = data[randomNum].text;
    figcaption.textContent = data[randomNum].author;
  }
  document.addEventListener('DOMContentLoaded', getQuote);
