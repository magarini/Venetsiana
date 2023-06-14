document.querySelectorAll(".scatterMsg").forEach((msg) => {
    let msgWords = msg.innerHTML.split(' ').filter(w => w !== '');
    msg.innerHTML = '';
    msgWords.forEach((msgWord) => {
        msg.innerHTML += `<span class="word">${msgWord}</span> `;
    })

})



const enhance = () => {
    document.querySelectorAll(".word").forEach((word) => {
        const letters = word.innerText.split("");
        word.innerHTML = null;
        letters.forEach((letter) => {
            word.innerHTML += `<span class="letter">${letter}</span>`;

        });
    });
};
enhance();


document.querySelectorAll('.letter').forEach((letter)=>{
    // let randomNumber=Math.random(-20,20)
    let letterPos=letter.getBoundingClientRect();
    console.log(letterPos.top)
    letter.addEventListener('mouseover', () => {
        letter.style.position = "absolute";
        letter.style.left = `${letterPos.left+ Math.floor(Math.random(-100,100)*100)}px`;
        
        letter.style.bottom = `${letterPos.top+ Math.floor(Math.random(-100,100)*100)}px`;
    })
})

