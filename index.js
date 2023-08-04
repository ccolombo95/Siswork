const $form = document.getElementById("form_contacto");
    
$form.addEventListener("submit",  handleSumit);

async function handleSumit(event) {
    event.preventDefault();
    const form = new FormData(this);
    
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    })
    console.log(response)
    if (response.ok) {
        const respuesta = document.getElementById("form_estado");
        respuesta.textContent = `Gracias por contactarnos!`;
        respuesta.classList.toggle("active");
        this.reset()
    }

      
}
const menu = document.querySelector(".menu__desplegable");
const img = document.querySelector(".menu__img");
const list = document.querySelector(".menu__links");


menu.addEventListener("click", () => {
    list.classList.toggle("menu__links--show");
    img.classList.toggle("menu__img--show");
    img.addEventListener("click", () => {
        img.classList.toggle("menu__img");
    })
});

const Contenedores = document.querySelectorAll(".contenedor_elementos");

function triggerAnimation(entries){
    entries.forEach(entry => {
        const elementosspan = entry.target.querySelectorAll("span");
        const elementosimg = entry.target.querySelectorAll("img");
        
        elementosspan.forEach(elemento => {
            elemento.classList.toggle('unset', entry.isIntersecting);
        })
        elementosimg.forEach(elemento => {
            elemento.classList.toggle('unset', entry.isIntersecting);
        })
    })
};
const options = {
    root: null,
    rootMargin: "0px",
    threshold: .25,
}
const observer = new IntersectionObserver(triggerAnimation, options);
Contenedores.forEach(contenedor => {
    observer.observe(contenedor)
})




