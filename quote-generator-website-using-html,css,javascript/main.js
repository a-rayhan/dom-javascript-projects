const quoteBox = document.getElementById('quote');
const authorBox = document.getElementById('author');

// const apiUrl = 'https://api.quotable.io/random';

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    quoteBox.innerHTML = data.content;
    authorBox.innerHTML = data.author;
}

getQuote(apiUrl)