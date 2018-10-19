// Challenge 1: 
// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const articleHeader = document.querySelector('.article__header');
articleHeader.textContent = "Welcome to the Bryan Blog";

// Challenge 2: 
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

let artHeader = document.querySelectorAll('.article__header');
for (let i = 0; i < artHeader.length; i++) {
    artHeader[i].classList.add("important")
}
console.log(artHeader)


// Challenge 2: (refactored using .foreach and fat arrow)
let articleHeaders = document.querySelectorAll('.article__header');

articleHeaders.forEach( article => {
    //  with for each, "article" acts as [i]
    article.classList.add("important")
});
console.log("after for each: ", articleHeaders) 


// Challenge 3: 
// Obtain a reference the element with a class of dashed and remove it.
const dashedEl = document.querySelector('.dashed');
dashedEl.classList.remove("dashed");
console.log(dashedEl)

// Challenge 4:
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const artFooterEl = document.querySelector('.article__footer');
artFooterEl.classList.add("goldenrod");