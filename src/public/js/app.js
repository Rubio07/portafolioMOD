// indicador de menú
const menuLinks = document.querySelectorAll('.navbar a[href^="#"]');
const observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink= document.querySelector(`.navbar a[href="#${id}"]`);

        if(entry.isIntersecting){
            document.querySelector(".navbar a.active").classList.remove("active");
            menuLink.classList.add("active");
        }
    });
},{rootMargin: "-40% 0px -60% 0px"})

menuLinks.forEach(menuLink =>{
    const hash = menuLink.getAttribute("href");
    const target =document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
})

/* COSAS A METERLE
-https://www.youtube.com/watch?v=LWeCNkstWUg&pp=ygUObWlkdWRldiBzY3JvbGw%3D
 */