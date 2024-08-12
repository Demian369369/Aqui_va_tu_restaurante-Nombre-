const gymRoutinesButton = document.getElementById('gym-routines-button');
const routineContainer = document.getElementById('routine-container');


const closeRoutineButton = document.getElementById('close-routine');
const routineContent = document.getElementById('routine-content');
const routineElements = document.querySelectorAll('.routine-content');
gymRoutinesButton.addEventListener('click', () => {
    daysButtons.classList.toggle('hidden');


closeRoutineButton.addEventListener('click', () => {
    routineContainer.classList.add('hidden');
    routineContent.innerHTML = '';
    });




    const daysButtons = document.getElementById('days-buttons');
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