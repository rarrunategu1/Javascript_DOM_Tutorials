/*Lesson 4 -

const wmf =document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

var books = document.querySelector('#book-list li .name');
//console.log(books);

var books = document.querySelectorAll('#book-list li .name');
//console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
// })

Lesson 5

var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent += (' (book title)');
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...<h2>';
bookList.innerHTML += '<p>This is how you add HTML<p>';*/

/*Lesson 6

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true); //true gives us all the nested content including the children
console.log(clonedBanner);*/

/*Lesson 7

const booklist = document.querySelector('#book-list'); //gets a reference to the booklist
console.log('the parent node is:', booklist.parentNode);
console.log('the parent element is:', booklist.parentElement.parentElement);

console.log(booklist.children);*/

//Lesson 8

const bookList = document.querySelector('#book-list');
console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML +='<br/>Too cool for everyone else';