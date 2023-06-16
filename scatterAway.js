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

    let letterPos = letter.getBoundingClientRect();

    letter.addEventListener('mouseover', () => {
        if (letterPos.x < window.innerWidth - 100 && letterPos.x > 0 && letterPos.y > 0 && letterPos.y < window.innerHeight - 100) {
            letter.style.position = "relative";
            letter.style.left = `${Math.floor(Math.random(-5, 5) * 100)}px`;
            letter.style.bottom = `${Math.floor(Math.random(-5, 5) * 100)}px`;
            letter.style.right = `${Math.floor(Math.random(-5, 5) * 100)}px`;
            letter.style.transform = `rotate(${Math.floor(Math.random(-90, 90)*100)}deg)`
            letter.style.mozTransform= `rotate(${Math.floor(Math.random(-90, 90)*100)}deg)`
            letter.style.webkitTransform= `rotate(${Math.floor(Math.random(-90, 90)*100)}deg)`
        }
    })
})

document.addEventListener('click', () => {
    document.querySelectorAll('.scatterIntro .letter').forEach((letter) => {
        letter.style.left = `0px`;
        letter.style.bottom = `0px`;
        letter.style.right="0px"
        // letter.style.right = `${Math.floor(Math.random(-5, 5) * 100)}px`;
    })
})

