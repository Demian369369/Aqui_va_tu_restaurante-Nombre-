window.onscroll = () => {
    document.querySelector(".mountains").style.marginBottom = -scrollY + "px";

    document.querySelector(".stars").style.marginTop = scrollY + "px";

    document.querySelector(".stars").style.marginRight = scrollY * 1.3 + "px";

    document.querySelector(".stars").style.opacity = (500 - scrollY) / 500;

    document.querySelector(".light").style.opacity = scrollY / 150;

    document.querySelector(".Home h1").style.marginTop = scrollY + "px";

    document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;

};

function actualizarReloj() {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
    const ahora = new Date();
    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    
    let horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12; // El '0' se convierte en '12'
    
    const horaActual = `${horas}:${minutos} ${ampm}`;
    const fechaActual = `${diaSemana}, ${dia} de ${mes} del ${año}`;
    
    document.getElementById('reloj').innerHTML = `${fechaActual} - ${horaActual}`;
    }

    setInterval(actualizarReloj, 1000); 
    actualizarReloj();