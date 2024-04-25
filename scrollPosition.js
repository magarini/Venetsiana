const scrollDemo = document.querySelector(".project");
        // const output = document.querySelector(".output");

        scrollDemo.addEventListener("scroll", event => {
            output.innerHTML = `scrollTop: ${scrollDemo.scrollTop} <br>
                                scrollLeft: ${scrollDemo.scrollLeft} `;
        }, { passive: true });