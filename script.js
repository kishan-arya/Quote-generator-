import { localQuotes } from "./quotes.js";

const container = document.getElementById("container");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const tweeterBtn = document.getElementById("tweeter");
const newQuoteBtn = document.getElementById("new-quote");



function nextQuote(){
    const nextQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    if (nextQuote.author){
            author.textContent=`~${nextQuote.author}`;
    }
    else{
        author.textContent="~Kishan Arya";
    }
    
    quote.textContent=`“${nextQuote.text}”`;
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}
newQuoteBtn.addEventListener('click',nextQuote);
tweeterBtn.addEventListener('click',tweetQuote);

