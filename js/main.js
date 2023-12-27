var Quote = [
    {
        'quote': "“Insanity is doing the same thing, over and over again, but expecting different results.”",
        'writer': "― Narcotics Anonymous"
    },


    {
        'quote': "It is better to be hated for what you are than to be loved for what you are not.",
        'writer': "― Andre Gide."
    },


    
    {
        'quote': "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        'writer': "H. Jackson Brown Jr."
    },



    
    {
        'quote': "It is better to be hated for what you are than to be loved for what you are not.",
        'writer': "― Andre Gide."
    },




    {
        'quote': "“Some people never go crazy. What truly horrible lives they must lead.”",
        'writer': "― Charles Bukowski"
    },
];

function getQuote() {
    var random = Math.floor(Math.random() * Quote.length);

    document.getElementById("quote").innerHTML = Quote[random].quote;
    document.getElementById("writer").innerHTML = Quote[random].writer;
}
