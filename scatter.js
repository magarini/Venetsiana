// const enhance = () => {
//     document.querySelectorAll(".word").forEach((word) => {
//       const letters = word.innerText.split("");
//       word.innerHTML = null;
//       letters.forEach((letter) => {
//         word.innerHTML += `<span class="letter">${letter}</span>`;
//       });
//     });
//   };
//   enhance();



let str = document.querySelector('.textMsg')
let words = str.innerHTML.split(' ').filter(w => w !== '');
console.log(words)
str.innerHTML = '';
words.forEach((word) => {
    str.innerHTML+= `<span class="word">${word}</span>`;
})

console.log(str.innerHTML);


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
