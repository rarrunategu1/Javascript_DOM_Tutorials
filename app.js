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

/*Lesson 8

const bookList = document.querySelector('#book-list');
console.log('book-list next sibling is:', bookList.nextSibling);
console.log('book-list next element sibling is:', bookList.nextElementSibling);
console.log('book-list previous element sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML +='<br/>Too cool for everyone else';*/

//Lesson 9

/*var h2 = document.querySelector('#book-list h2'); //this gets the h2 element in booklist
h2.addEventListener('click', function(event){ //first parameter is the event we're going to react to, second is a function which will be what happens when the event happens on a page
    console.log(event.target); // target will tell us which element was clicked
    console.log(event); //just here so we can browse through it.
});*/


var btn = document.querySelectorAll('#book-list .delete');

Array.from(btn).forEach(function(btn){
    btn.addEventListener('click', function(event){
        
        const li = event.target.parentElement; //this will grab the parent element of the delete button which is li
        
        li.parentNode.removeChild(li);  //from the parentNode of Li which is UL I want to remove a child.  that child is li.  
    });
});

const link = document.querySelector('#page-banner a');  //this will grab the a tag in page banner
link.addEventListener('click', function(event){  //this is listening to the event on it
    event.preventDefault();  //this will prevent the default action from occurring
    console.log('navigation to',event.target.textContent, 'was prevented');
})