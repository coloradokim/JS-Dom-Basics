console.log(firstParagraph);
var firstParagraph = document.getElementById('main');


var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

var getListItems = document.getElementsByTagName('li');
console.log(getListItems);

for (var i = 0; i <getListItems.length; i++) {
  console.log(getListItems[i]);
}

for (var i = 0; i < getListItems.length; i++) {
  console.log('LOOK AT THIS! ' + getListItems[i].innerHTML);
}


var evenElements = document.getElementsByClassName('even');
console.log(evenElements);

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement);

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstOddElement = document.getElementsByClassName('odd')[1];
console.log(firstOddElement);

firstOddElement.style.fontSize = "100px";


for (var i = 0 ; i < oddElements.length; i++) {
  console.log(oddElements[i]);
}

var main = document.querySelector('#main')
console.log(main);

//change the background color of the #main
document.getElementById('main').style.backgroundColor = "peachpuff";

var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);

firstOddElement.style.backgroundColor = "purple";
firstOddElement.style.color = "#fff";


var oddAndEvenElements= document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

var listNode = document.getElementById('list')
console.log(listNode);
