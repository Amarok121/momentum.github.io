const quotes=[
    {
        quote: "Life is an agg.",
        author: "France is Bacon.",
    },
    {
        quote: "이보시오, 이보시오! 의사 양반!",
        author: "Sim-Young",
    },
    {
        quote: "여기 있었구만, 심영이. 나 두한이야.",
        author: "Kim-Du-Han",
    },
    {
        quote: "얼음여왕(Queen)의 매혹적인 향기☆(Seductive Peroro)",
        author: "Shirasu-Azusa",
    },
    {
        quote: "자진 입대를 환영한다, 아쎄이!!",
        author: "황근출"
    }
]

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;