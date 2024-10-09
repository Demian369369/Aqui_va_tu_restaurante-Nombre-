const taskColors = {
    'Nada': 'bg-white',
    'Cosas importantes': 'bg-pink-200',
    'Obligatorias': 'bg-red-400',
    'Opcionales': 'bg-lime-200',
    'Extras': 'bg-yellow-200',
    'Trabajo': 'bg-blue-200',
    'Escuela': 'bg-purple-200',
    'Tareas': 'bg-cyan-200' 
};

const DefinedTasks = {
    "lunes": [
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:35 AM", isPredefined: true, type: "Extras" },
    { id: 2, text: "Pasear Perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 4, text: "Gym", startTime: "6:00 AM", endTime: "7:00 AM", isPredefined: true, type: "Extras" },
    { id: 5, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 6, text: "Dientes y Trastes", startTime: "7:30 AM", endTime: "7:50 AM", isPredefined: true, type: "Cosas importantes" },
    { id: 7, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 8, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 9, text: "Perros(limpiar y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Comer, Dientes y pasear perros", startTime: "14:00 PM", endTime: "15:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 17, text: "Ir a Cucei", startTime: "15:40 PM", endTime: "15:40 PM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 12, text: "UDG/Logica Matematica", startTime: "17:00 PM", endTime: "19:00 PM", isPredefined: true, type: "Escuela" },
    { id: 13, text: "UDG/FundamentosProgramacion", startTime: "19:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Escuela" },
    { id: 14, text: "Cenar y Dientes", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 15, text: "Rachas", startTime: "22:00 PM", endTime: "22:30 PM", isPredefined: true, type: "Extras" },
    { id: 16, text: "Dormir", startTime: "22:30 PM", endTime: "23:30 AM", isPredefined: true, type: "Extras" }
],
"martes": [
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:35 AM", isPredefined: true, type: "Extras" },
    { id: 2, text: "Pasear Perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 4, text: "Gym", startTime: "6:00 AM", endTime: "7:00 AM", isPredefined: true, type: "Extras" },
    { id: 5, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 6, text: "Dientes y Trastes", startTime: "7:30 AM", endTime: "7:50 AM", isPredefined: true, type: "Cosas importantes" },
    { id: 7, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 8, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 9, text: "Perros(limpiar y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 78, text: "Ir con pedro", startTime: "8:50 AM", endTime: "9:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Comer, Dientes y pasear perros", startTime: "14:00 PM", endTime: "15:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 17, text: "Ir a Cucei", startTime: "15:40 PM", endTime: "15:40 PM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 62, text: "UDG/IntroduccionIngenieria", startTime: "17:00 PM", endTime: "19:00 PM", isPredefined: true, type: "Escuela" },
    { id: 63, text: "UDG/EticaYLegislacion", startTime: "19:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Escuela" },
    { id: 14, text: "Cenar y Dientes", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 15, text: "Rachas", startTime: "22:00 PM", endTime: "22:30 PM", isPredefined: true, type: "Extras" },
    { id: 16, text: "Dormir", startTime: "22:30 PM", endTime: "23:30 AM", isPredefined: true, type: "Extras" }
],
"miércoles": [
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:35 AM", isPredefined: true, type: "Extras" },
    { id: 2, text: "Pasear Perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 4, text: "Gym", startTime: "6:00 AM", endTime: "7:00 AM", isPredefined: true, type: "Extras" },
    { id: 5, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 6, text: "Dientes y Trastes", startTime: "7:30 AM", endTime: "7:50 AM", isPredefined: true, type: "Cosas importantes" },
    { id: 7, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 8, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 9, text: "Perros(limpiar y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Comer, Dientes y pasear perros", startTime: "14:00 PM", endTime: "15:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 112, text: "UDG/ProblemasGlobalesXXI", startTime: "17:00 PM", endTime: "19:00 PM", isPredefined: true, type: "Escuela" },
    { id: 113, text: "Estudio/Tareas", startTime: "19:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Tareas" },
    { id: 14, text: "Cenar y Dientes", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 15, text: "Rachas", startTime: "22:00 PM", endTime: "22:30 PM", isPredefined: true, type: "Extras" },
    { id: 16, text: "Dormir", startTime: "22:30 PM", endTime: "23:30 AM", isPredefined: true, type: "Extras" }
],
"jueves": [
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:35 AM", isPredefined: true, type: "Extras" },
    { id: 2, text: "Pasear Perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 4, text: "Gym", startTime: "6:00 AM", endTime: "7:00 AM", isPredefined: true, type: "Extras" },
    { id: 5, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 6, text: "Dientes y Trastes", startTime: "7:30 AM", endTime: "7:50 AM", isPredefined: true, type: "Cosas importantes" },
    { id: 7, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 8, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 9, text: "Perros(limpiar y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 78, text: "Ir con pedro", startTime: "8:50 AM", endTime: "9:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Comer, Dientes y pasear perros", startTime: "14:00 PM", endTime: "15:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 113, text: "Estudio/Tareas", startTime: "18:00 PM", endTime: "19:00 PM", isPredefined: true, type: "Tareas" },
    { id: 162, text: "UDG/EticaYLegislacion", startTime: "19:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Escuela" },
    { id: 14, text: "Cenar y Dientes", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 15, text: "Rachas", startTime: "22:00 PM", endTime: "22:30 PM", isPredefined: true, type: "Extras" },
    { id: 16, text: "Dormir", startTime: "22:30 PM", endTime: "23:30 AM", isPredefined: true, type: "Extras" }
],
"viernes": [
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:35 AM", isPredefined: true, type: "Extras" },
    { id: 2, text: "Pasear Perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 4, text: "Gym", startTime: "6:00 AM", endTime: "7:00 AM", isPredefined: true, type: "Extras" },
    { id: 5, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 6, text: "Dientes y Trastes", startTime: "7:30 AM", endTime: "7:50 AM", isPredefined: true, type: "Cosas importantes" },
    { id: 7, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 8, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 9, text: "Perros(limpiar y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Comer, Dientes y pasear perros", startTime: "14:00 PM", endTime: "15:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 113, text: "Estudio/Tareas", startTime: "18:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Tareas" },
    { id: 14, text: "Cenar y Dientes", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 15, text: "Rachas", startTime: "22:00 PM", endTime: "22:30 PM", isPredefined: true, type: "Extras" },
    { id: 16, text: "Dormir", startTime: "22:30 PM", endTime: "23:30 AM", isPredefined: true, type: "Extras" }
],
"sábado": [
    { id: 250, text: "Levantarse", startTime: "05:30 AM", endTime: "05:35 AM", isPredefined: true, type: "Obligatorias" },
    { id: 251, text: "Hacer Desayuno", startTime: "5:35 AM", endTime: "5:40 AM", isPredefined: true, type: "Obligatorias" },
    { id: 252, text: "Dientes", startTime: "5:40 AM", endTime: "5:50 AM", isPredefined: true, type: "Cosas importantes" },
    { id: 17, text: "Ir a Cucei", startTime: "5:55 AM", endTime: "6:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 253, text: "UDG/Precalculo", startTime: "7:00 AM", endTime: "11:00 AM", isPredefined: true, type: "Escuela" },
    { id: 254, text: "Desayunar", startTime: "7:45 AM", endTime: "8:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 256, text: "Bathroom", startTime: "9:00 AM", endTime: "9:15 AM", isPredefined: true, type: "Obligatorias" },
    { id: 257, text: "Dientes", startTime: "12:00 PM", endTime: "12:15 PM", isPredefined: true, type: "Cosas importantes" },
    { id: 258, text: "Meditar", startTime: "1:00 PM", endTime: "1:30 PM", isPredefined: true, type: "Extras" },
    { id: 259, text: "Perros(limpiar y comida)", startTime: "1:30 PM", endTime: "1:45 PM", isPredefined: true, type: "Obligatorias" },
    { id: 260, text: "Comer, Dientes y pasear perros", startTime: "14:00 PM", endTime: "15:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 14, text: "Cenar y Dientes", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 15, text: "Rachas", startTime: "22:00 PM", endTime: "22:30 PM", isPredefined: true, type: "Extras" },
    { id: 266, text: "Editar Videos", startTime: "23:30 PM", endTime: "00:30 AM", isPredefined: true, type: "Extras" }
],
"domingo": [
    { id: 300, text: "Levantarse", startTime: "10:00 AM", endTime: "10:05 AM", isPredefined: true, type: "Obligatorias" },
    { id: 301, text: "Meditar", startTime: "11:00 AM", endTime: "11:30 AM", isPredefined: true, type: "Extras" },
    { id: 302, text: "Desayunar", startTime: "11:30 AM", endTime: "12:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 303, text: "Dientes y trastes", startTime: "11:40 AM", endTime: "12:00 PM", isPredefined: true, type: "Nada" },
    { id: 304, text: "Instrumento Semanal", startTime: "12:00 PM", endTime: "13:00 PM", isPredefined: true, type: "Extras" },
    { id: 305, text: "Produccion Musical o Edicion De Videos", startTime: "13:00 PM", endTime: "14:00 PM", isPredefined: true, type: "Extras" },
    { id: 306, text: "Perros(limpiar y comida)", startTime: "13:30 PM", endTime: "14:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 307, text: "Comer, Dientes y pasear perros", startTime: "14:00 PM", endTime: "15:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 14, text: "Cenar y Dientes", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 15, text: "Rachas", startTime: "22:00 PM", endTime: "22:30 PM", isPredefined: true, type: "Extras" },
    { id: 16, text: "Dormir", startTime: "22:30 PM", endTime: "23:30 AM", isPredefined: true, type: "Extras" }
]



};

const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i % 12 || 12;
    const ampm = i < 12 ? 'AM' : 'PM';
    return `${hour}:00 ${ampm}`;
});

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
let currentDate = new Date();

function updateCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    calendar.appendChild(createEmptyCell());
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'text-center font-bold p-2 bg-gray-200';
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });

    hours.forEach(hour => {
        const hourCell = createHourCell(hour);
        calendar.appendChild(hourCell);

        daysOfWeek.forEach(day => {
            const taskCell = createTaskCell(day, hour);
            calendar.appendChild(taskCell);
        });
    });

    updateWeekDisplay();
}

function createEmptyCell() {
    const cell = document.createElement('div');
    cell.className = 'col-span-1';
    return cell;
}

function createHourCell(hour) {
    const cell = document.createElement('div');
    cell.className = 'text-right pr-2 py-1 text-sm';
    cell.textContent = hour;
    return cell;
}

function createTaskCell(day, hour) {
    const cell = document.createElement('div');
    cell.className = 'border border-gray-200 p-1 h-16 overflow-y-auto';

    const tasks = getTasksForDayAndHour(day, hour);

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `${taskColors[task.type] || 'bg-gray-100'} p-1 mb-1 rounded task`;
        taskElement.textContent = task.text;
        taskElement.title = `${task.text} - ${task.startTime} a ${task.endTime}`;
        cell.appendChild(taskElement);
    });

    return cell;
}

function getTasksForDayAndHour(day, hour) {
    const dayTasks = DefinedTasks[day.toLowerCase()] || [];
    const currentHourInMinutes = convertTimeToMinutes(hour);

    return dayTasks.filter(task => {
        const taskStart = convertTimeToMinutes(task.startTime);
        const taskEnd = convertTimeToMinutes(task.endTime);
        
        return taskStart >= currentHourInMinutes && taskStart < currentHourInMinutes + 60 ||
               taskStart < currentHourInMinutes && taskEnd > currentHourInMinutes;
    });
}


function convertTimeToMinutes(time) {
    const [hourMinute, period] = time.split(' '); 
    let [hour, minute] = hourMinute.split(':').map(Number);
    
    if (period === 'PM' && hour < 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0; 

    return hour * 60 + minute; 
}

function updateWeekDisplay() {
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay() + 1);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentWeek').textContent = `Semana del ${weekStart.toLocaleDateString('es-ES', options)} al ${weekEnd.toLocaleDateString('es-ES', options)}`;
}

document.getElementById('prevWeek').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 7);
    updateCalendar();
});

document.getElementById('nextWeek').addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 7);
    updateCalendar();
});
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'America/Mexico_City' };
    const formattedDate = now.toLocaleString('es-MX', options);
}
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

setInterval(updateDateTime, 1000);
updateDateTime(); 

updateCalendar();
