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
    x=letter.style.top;
    letter.addEventListener('mouseover', () => {
        letter.style.position = "absolute";
        letter.style.top = `${Math.random(100)}px`;
        console.log(x);
    })
})
