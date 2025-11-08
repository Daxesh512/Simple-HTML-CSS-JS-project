const words = [
    'awesome',
    'remarkable',
    'exciting',
    'inspiring',
];

let counter = 1;

let internal = setInterval(() =>{
    if(counter >= words.length){
        counter = 0;
    }
    
    const nextWord = words[counter];
    
    document.startViewTransition(() => {
        document.querySelector('.word').innerHTML = nextWord;
    });
    
    counter++;
},1500)