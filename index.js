
/**
 * Agregar animación de entrada al desplazarse
 * 
 * @param {Array} productList - Coge todos los .product. 
 * @param {Function} observer - Función que coge las entradas. 
 * @returns {Boolean} - Si es cierto se ejecutará. 
 */
const productList = document.querySelectorAll('.product');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
            entry.target.classList.add('visible');
        }
    });
})