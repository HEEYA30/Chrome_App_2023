const quotes = [
    {
        quote: "Age is no guarantee of maturity.",
        author: "- Lawana Blackwell",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "- Nelson Mandela",
    },
    {
        quote: "This too shall pass.",
        author: "- Et hoc transibit",
    },
    {
        quote: "Life is unfair, get used to it.",
        author: "- Bill Gates",
    },
    {
        quote: "All you need in this life is ignorance and confidence, then success is sure.",
        author: "- Mark Twain",
    },
    {
        quote: "Nothing in more despicable than respect based on fear.",
        author: "- Albert camus",
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "- John D. Rockefeller",
    },
    {
        quote: "The less their ability, the more their conceit.",
        author: "- Ahad Ha-am",
    },
    {
        quote: "Study without desire spoils the memory, and it retains nothing that it takes in.",
        author: "- Leonardo da Vinci",
    },
    {
        quote: "You will never know until you try.",
        author: "- Anonymous",
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];



quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


// ceil round floor


