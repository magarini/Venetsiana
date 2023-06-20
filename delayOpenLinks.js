

// document.querySelectorAll('.project').forEach(project => {
//     project.addEventListener('click', delayFunction);
//     console.log('clickeddd')
// })

// function delayFunction(e) {
//     e.preventDefault();
//     let link = this.getAttribute("href");
//     setTimeout(function () {
//         window.location.href = link;
//     }, 5000);
// }




document.querySelectorAll('.project').forEach((project)=> {
    project.addEventListener('click', (e)=>{
        e.preventDefault();
            let link = project.getAttribute("href");
            setTimeout(function () {
                window.location.href = link;
            }, 100);
            console.log('clickeddd')

    });
    console.log('clickeddd')
})