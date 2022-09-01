window.addEventListener('scroll', () => {
    if(scrollY >= 80)
        document.querySelector('.jumbotron').style.padding = "0rem 2rem"
    else if(scrollY <= 80)
    document.querySelector('.jumbotron').style.padding = "4rem 2rem"
})