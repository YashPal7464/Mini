const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `- ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Something went wrong. Try again.";
    authorText.textContent = "";
  }
}

newQuoteBtn.addEventListener('click', getQuote);

// Load initial quote
getQuote();
