const video = document.getElementById('video');
const videoTitle = document.getElementById('videoTitle');
const prevVideo = document.getElementById('prevVideo');
const nextVideo = document.getElementById('nextVideo');
const videoButtons = document.querySelectorAll('.video-button');

const videos = [
    { id: 'sBtJ9_zTqdE', title: 'Jalon de espalda con Polea Agarre' },
    { id: 'M7lc1UVf-VE', title: 'Título del Video 2' },
    { id: '9bZkp7q19f0', title: 'Título del Video 3' },
];

let currentVideoIndex = 0;

function loadVideo(index) {
    const videoData = videos[index];
    video.src = `https://www.youtube.com/embed/${videoData.id}`;
    videoTitle.textContent = videoData.title;
}

prevVideo.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    loadVideo(currentVideoIndex);
});

nextVideo.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo(currentVideoIndex);
});

videoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-video-id');
        const videoTitleText = button.getAttribute('data-title');
        video.src = `https://www.youtube.com/embed/${videoId}`;
        videoTitle.textContent = videoTitleText;
        currentVideoIndex = videos.findIndex(video => video.id === videoId);
    });
});

loadVideo(currentVideoIndex);


const gymRoutinesButton = document.getElementById('gym-routines-button');
const daysButtons = document.getElementById('days-buttons');
const routineContainer = document.getElementById('routine-container');
const closeRoutineButton = document.getElementById('close-routine');
const routineContent = document.getElementById('routine-content');
const routineElements = document.querySelectorAll('.routine-content');
gymRoutinesButton.addEventListener('click', () => {
    daysButtons.classList.toggle('hidden');

daysButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const day = e.target.getAttribute('data-day');
        const routineElement = document.getElementById(`routine-${day}`);
        
        routineElements.forEach(element => element.classList.add('hidden'));
        
        if (routineElement) {
            routineContent.innerHTML = routineElement.innerHTML;
            routineContainer.classList.remove('hidden');
        }
    }
});

closeRoutineButton.addEventListener('click', () => {
    routineContainer.classList.add('hidden');
    routineContent.innerHTML = '';
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