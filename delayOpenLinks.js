
document.querySelectorAll('.project').forEach((project)=> {
    project.addEventListener('click', (e)=>{
        e.preventDefault();
            let link = project.getAttribute("href");
            setTimeout(function () {
                window.location.href = link;
            }, 500);
            console.log('clickeddd')

    });
    console.log('clickeddd')
})