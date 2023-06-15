document.querySelectorAll(".scatterIntro").forEach((msg) => {
    let msgWords = msg.innerHTML.split(' ').filter(w => w !== '');
    msg.innerHTML = '';
    msgWords.forEach((msgWord) => {
        msg.innerHTML += `<span class="word">${msgWord}</span> `;
    })

})



const enhance = () => {
    document.querySelectorAll(".scatterIntro .word").forEach((word) => {
        const letters = word.innerText.split("");
        word.innerHTML = null;
        letters.forEach((letter) => {
            word.innerHTML += `<span class="letter">${letter}</span>`;

        });
    });
};
enhance();


document.querySelectorAll('.scatterIntro .letter').forEach((letter) => {
    // let randomNumber=Math.random(-20,20)
    let letterPos = letter.getBoundingClientRect();
    console.log('initialPos', letterPos)
    // letter.style.left = `${letterPos.left}px`;
    // letter.style.bottom = `${letterPos.bottom}px`;
    // letter.style.right = `${letterPos.right}px`;
letter.style.transition="all 0.2s"


          
    letter.addEventListener('mouseover', () => {

        if (letterPos.x< window.innerWidth-100 && letterPos.x> 0 && letterPos.y > 0 && letterPos.y < window.innerHeight-100) {
            letter.style.position = "absolute";
            letter.style.left = `${letterPos.left + Math.floor(Math.random(-50, 50) * 100)}px`;
            letter.style.bottom = `${letterPos.bottom / 10 + Math.floor(Math.random(-50, 50) * 100)}px`;
            letter.style.right = `${letterPos.right + Math.floor(Math.random(-50, 50) * 100)}px`;
            // letter.style.top = `${letterPos.top / 10 + Math.floor(Math.random(-50, 50) * 100)}px`;
            console.log('initialPosLeft', letterPos.left, letter.style.left)
        
        }
    })
})

