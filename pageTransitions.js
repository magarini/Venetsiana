let links=document.querySelectorAll('a');
if(links){
    links.forEach((link)=>{
        link.onclick=(e)=>{
            let body=document.querySelector('body');
            e.preventDefault();
            setTimeout(function(){
                if(body.classList.contains('fade-out')){
                    console.log('navigating...');
                    if(!e.target.parentElement.href){
                        window.location=e.target.href;

                    }else{
                        window.location=e.target.parentElement.href;
                    }
                }else{
                    console.log('whoops',e.target);
                }
            },500);
            body.classList.add('fade-out');
        }
    })
}