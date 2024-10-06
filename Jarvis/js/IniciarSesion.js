document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("loginName").value;
      const password = document.getElementById("loginPassword").value;
  
      if (localStorage.getItem(username) === password) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "Inicio.html"; 
      } else {
        alert("Nombre de usuario o contraseña incorrectos.");
      }
    });
  });
  
  
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