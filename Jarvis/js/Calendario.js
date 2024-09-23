const taskColors = {
    'Nada': 'bg-white',
    'Cosas importantes': 'bg-pink-200',
    'Obligatorias': 'bg-red-200',
    'Opcionales': 'bg-lime-200',
    'Extras': 'bg-yellow-200',
    'Trabajo': 'bg-blue-200',
    'Libres': 'bg-purple-200'
};

const DefinedTasks = {
"lunes": [
{ id: 1, text: "Levantarse", time: "05:30 AM", isPredefined: true, type: "Nada" },
{ id: 2,text: "Pasear Perros", time: "5:45 AM",  isPredefined: true, type: "Obligatorias" },
{ id: 3,text: "Prepararme para el gym", time: "5:50 AM", isPredefined: true, type: "Obligatorias" },
{ id: 4,text: "Gym", time: "7:00 AM", completed: false, isPredefined: true, type: "Obligatorias" },
{ id: 5,text: "Desayunar", time: "7:40 AM", completed: false, isPredefined: true, type: "Obligatorias" },
{ id: 6,text: "Dientes y Trastes", time: "7:50 AM", completed: false, isPredefined: true, type: "Obligatorias" },
{ id: 7,text: "Bathroom", time: "8:05 AM", completed: false, isPredefined: true, type: "Obligatorias" },
{ id: 8,text: "Meditar", time: "8:30 AM", completed: false, isPredefined: true, type: "Obligatorias" },
{ id: 9,text: "Perros(limpiar y comida)", time: "8:55 AM", completed: false, isPredefined: true, type: "Obligatorias" },
{ id: 10,text: "Derevo/Comer, Dientes y pasear perros", time: "2:00 PM", completed: false, isPredefined: true, type: "Obligatorias" },
{ id: 11,text: "Derevo", time: "4:00 PM", completed: false, isPredefined: true, type: "Nada" },
{ id: 12,text: "UDG/Logica Matematica", time: "7:00 PM", completed: false, isPredefined: true, type: "Nada" },
{ id: 13,text: "UDG/FundamentosProgramacion", time: "9:00 PM", completed: false, isPredefined: true, type: "Nada" },
{ id: 14,text: "Cenar y Dientes", time: "10:00 PM", completed: false, isPredefined: true, type: "Nada" },
{ id: 15,text: "Rachas", time: "10:30 PM", completed: false, isPredefined: true, type: "Nada" },
{ id: 16,text: "Dormir", time: "11:30 PM", completed: false, isPredefined: true, type: "Nada" },
],
"martes": [
{ id: 51,text: "Levantarse", time: "05:30 AM", completed: false, isPredefined: true },
{ id: 52,text: "Pasear Perros", time: "5:45 AM", completed: false, isPredefined: true },
{ id: 53,text: "Prepararme para el gym", time: "5:50 AM", completed: false, isPredefined: true },
{ id: 54,text: "Gym", time: "7:00 AM", completed: false, isPredefined: true },
{ id: 55,text: "Desayunar", time: "7:40 AM", completed: false, isPredefined: true },
{ id: 56,text: "Dientes y Trastes", time: "7:50 AM", completed: false, isPredefined: true },
{ id: 57,text: "Bathroom", time: "8:05 AM", completed: false, isPredefined: true },
{ id: 58,text: "Meditar", time: "8:30 AM", completed: false, isPredefined: true },
{ id: 59,text: "Perros(limpiar y comida)", time: "8:55 AM", completed: false, isPredefined: true },
{ id: 60,text: "Derevo/Comer, Dientes y pasear perros", time: "2:00 PM", completed: false, isPredefined: true },
{ id: 61,text: "Derevo", time: "4:00 PM", completed: false, isPredefined: true },
{ id: 62,text: "UDG/IntroduccionIngenieria", time: "7:00 PM", completed: false, isPredefined: true },
{ id: 63,text: "UDG/EticaYLegislacion", time: "9:00 PM", completed: false, isPredefined: true },
{ id: 64,text: "Cenar y Dientes", time: "10:00 PM", completed: false, isPredefined: true },
{ id: 65,text: "Rachas", time: "10:30 PM", completed: false, isPredefined: true },
{ id: 66,text: "Dormir", time: "11:30 PM", completed: false, isPredefined: true },
],
"miércoles": [
{ id: 101, text: "Levantarse", time: "05:30 AM", completed: false, isPredefined: true },
{ id: 102,text: "Pasear Perros", time: "5:45 AM", completed: false, isPredefined: true },
{ id: 103,text: "Prepararme para el gym", time: "5:50 AM", completed: false, isPredefined: true },
{ id: 104,text: "Gym", time: "7:00 AM", completed: false, isPredefined: true },
{ id: 105,text: "Desayunar", time: "7:40 AM", completed: false, isPredefined: true },
{ id: 106,text: "Dientes y Trastes", time: "7:50 AM", completed: false, isPredefined: true },
{ id: 107,text: "Bathroom", time: "8:05 AM", completed: false, isPredefined: true },
{ id: 108,text: "Meditar", time: "8:30 AM", completed: false, isPredefined: true },
{ id: 109,text: "Perros(limpiar y comida)", time: "8:55 AM", completed: false, isPredefined: true },
{ id: 110,text: "Derevo/Comer, Dientes y pasear perros", time: "2:00 PM", completed: false, isPredefined: true },
{ id: 111,text: "Derevo", time: "4:00 PM", completed: false, isPredefined: true },
{ id: 112,text: "ProblemasGlobalesXXI", time: "7:00 PM", completed: false, isPredefined: true },
{ id: 113,text: "FundamentosProgramacion", time: "9:00 PM", completed: false, isPredefined: true },
{ id: 114,text: "Cenar y Dientes", time: "10:00 PM", completed: false, isPredefined: true },
{ id: 115,text: "Rachas", time: "10:30 PM", completed: false, isPredefined: true },
{ id: 116,text: "Dormir", time: "11:30 PM", completed: false, isPredefined: true },
],
"jueves": [
{ id: 150, text: "Levantarse", time: "05:30 AM", completed: false, isPredefined: true },
{ id: 151,text: "Pasear Perros", time: "5:45 AM", completed: false, isPredefined: true },
{ id: 152,text: "Prepararme para el gym", time: "5:50 AM", completed: false, isPredefined: true },
{ id: 153,text: "Gym", time: "7:00 AM", completed: false, isPredefined: true },
{ id: 154,text: "Desayunar", time: "7:40 AM", completed: false, isPredefined: true },
{ id: 155,text: "Dientes y Trastes", time: "7:50 AM", completed: false, isPredefined: true },
{ id: 156,text: "Bathroom", time: "8:05 AM", completed: false, isPredefined: true },
{ id: 157,text: "Meditar", time: "8:30 AM", completed: false, isPredefined: true },
{ id: 158,text: "Perros(limpiar y comida)", time: "8:55 AM", completed: false, isPredefined: true },
{ id: 159,text: "Derevo/Comer, Dientes y pasear perros", time: "2:00 PM", completed: false, isPredefined: true },
{ id: 160,text: "Derevo", time: "4:00 PM", completed: false, isPredefined: true },
{ id: 161,text: "Precalculo(Estudiar)", time: "7:00 PM", completed: false, isPredefined: true },
{ id: 162,text: "EticaYLegislacion", time: "9:00 PM", completed: false, isPredefined: true },
{ id: 163,text: "Cenar y Dientes", time: "10:00 PM", completed: false, isPredefined: true },
{ id: 164,text: "Rachas", time: "10:30 PM", completed: false, isPredefined: true },
{ id: 165,text: "Dormir", time: "11:30 PM", completed: false, isPredefined: true },
],
"viernes": [
{ id: 200, text: "Levantarse", time: "05:30 AM", completed: false, isPredefined: true },
{ id: 201,text: "Pasear Perros", time: "5:45 AM", completed: false, isPredefined: true },
{ id: 202,text: "Prepararme para el gym", time: "5:50 AM", completed: false, isPredefined: true },
{ id: 203,text: "Gym", time: "7:00 AM", completed: false, isPredefined: true },
{ id: 204,text: "Desayunar", time: "7:40 AM", completed: false, isPredefined: true },
{ id: 205,text: "Dientes y Trastes", time: "7:50 AM", completed: false, isPredefined: true },
{ id: 206,text: "Bathroom", time: "8:05 AM", completed: false, isPredefined: true },
{ id: 207,text: "Meditar", time: "8:30 AM", completed: false, isPredefined: true },
{ id: 208,text: "Perros(limpiar y comida)", time: "8:55 AM", completed: false, isPredefined: true },
{ id: 209,text: "Derevo/Comer, Dientes y pasear perros", time: "2:00 PM", completed: false, isPredefined: true },
{ id: 210,text: "Derevo", time: "4:00 PM", completed: false, isPredefined: true },
{ id: 211,text: "Precalculo(Estudiar)", time: "7:00 PM", completed: false, isPredefined: true },
{ id: 212,text: "Tareas", time: "9:00 PM", completed: false, isPredefined: true },
{ id: 213,text: "Cenar y Dientes", time: "10:00 PM", completed: false, isPredefined: true },
{ id: 214,text: "Rachas", time: "10:30 PM", completed: false, isPredefined: true },
{ id: 215,text: "Dormir", time: "11:30 PM", completed: false, isPredefined: true },
],
"sábado": [
{ id: 250, text: "Levantarse", time: "05:30 AM", completed: false, isPredefined: true },
{ id: 251,text: "Hacer Desayuno", time: "5:45 AM", completed: false, isPredefined: true },
{ id: 252,text: "Dientes", time: "5:50 AM", completed: false, isPredefined: true },
{ id: 253,text: "Precalculo", time: "11:00 AM", completed: false, isPredefined: true },
{ id: 254,text: "Desayunar", time: "?", completed: false, isPredefined: true },
{ id: 256,text: "Bathroom", time: "?", completed: false, isPredefined: true },
{ id: 257,text: "Dientes", time: "12:00 PM", completed: false, isPredefined: true },
{ id: 258,text: "Meditar", time: "1:00 PM", completed: false, isPredefined: true },
{ id: 259,text: "Perros(limpiar y comida)", time: "1:30 PM", completed: false, isPredefined: true },
{ id: 260,text: "Comer, Dientes y pasear perros", time: "2:00 PM", completed: false, isPredefined: true },
{ id: 261,text: "Tareas Precalculo", time: "4:00 PM", completed: false, isPredefined: true },
{ id: 262,text: "Precalculo(Estudiar)", time: "7:00 PM", completed: false, isPredefined: true },
{ id: 263,text: "Tareas", time: "9:00 PM", completed: false, isPredefined: true },
{ id: 264,text: "Cenar y Dientes", time: "10:00 PM", completed: false, isPredefined: true },
{ id: 265,text: "Rachas", time: "10:30 PM", completed: false, isPredefined: true },
{ id: 266,text: "Editar Videos", time: "11:30 PM", completed: false, isPredefined: true },
],
"domingo": [
{ id: 300, text: "Levantarse", time: "10:00 AM", completed: false, isPredefined: true },
{ id: 301, text: "Meditar", time: "11:00 AM", completed: false, isPredefined: true },  
{ id: 302,text: "Desayunar", time: "11:30 AM", completed: false, isPredefined: true },
{ id: 303,text: "Dientes y trastes", time: "11:40 AM", completed: false, isPredefined: true },
{ id: 304,text: "Instrumento Semanal", time: "12:00 PM", completed: false, isPredefined: true },
{ id: 305,text: "Produccion Musical o Edicion De Videos", time: "1:00 PM", completed: false, isPredefined: true },
{ id: 306,text: "Perros(limpiar y comida)", time: "1:30 PM", completed: false, isPredefined: true },
{ id: 307,text: "Comer, Dientes y pasear perros", time: "2:00 PM", completed: false, isPredefined: true },
{ id: 308,text: "Tareas", time: "4:00 PM", completed: false, isPredefined: true },
{ id: 309,text: "Precalculo(Estudiar)", time: "7:00 PM", completed: false, isPredefined: true },
{ id: 310,text: "Platzi", time: "9:00 PM", completed: false, isPredefined: true },
{ id: 311,text: "Cenar y Dientes", time: "10:00 PM", completed: false, isPredefined: true },
{ id: 312,text: "Rachas", time: "10:30 PM", completed: false, isPredefined: true },
{ id: 313,text: "Dormir", time: "11:30 PM", completed: false, isPredefined: true },   ]
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

    // Añadir encabezados de días
    calendar.appendChild(createEmptyCell());
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'text-center font-bold p-2 bg-gray-200';
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });

    // Añadir filas de horas y celdas de tareas
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
    
    // Ordenar las tareas por hora antes de añadirlas al DOM
    tasks.sort((a, b) => {
        const [aHour, aMinute] = a.time.split(' ')[0].split(':').map(Number);
        const [bHour, bMinute] = b.time.split(' ')[0].split(':').map(Number);
        const aPeriod = a.time.split(' ')[1];
        const bPeriod = b.time.split(' ')[1];

        const aTotalMinutes = (aPeriod === 'PM' ? aHour + 12 : aHour) * 60 + aMinute;
        const bTotalMinutes = (bPeriod === 'PM' ? bHour + 12 : bHour) * 60 + bMinute;

        return aTotalMinutes - bTotalMinutes;
    });

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `${taskColors[task.type] || 'bg-gray-100'} p-1 mb-1 rounded task`;
        taskElement.textContent = task.text;
        taskElement.title = `${task.text} - ${task.time}`;
        cell.appendChild(taskElement);
    });

    return cell;
}


function getTasksForDayAndHour(day, hour) {
    const dayTasks = DefinedTasks[day.toLowerCase()] || [];
    return dayTasks.filter(task => {
        const taskHourMinute = task.time.split(' '); // Dividir en hora y AM/PM
        const [taskTime, period] = taskHourMinute; // Separar tiempo y periodo (AM/PM)
        let [taskHour, taskMinute] = taskTime.split(':').map(Number); // Obtener hora y minutos

        // Convertir a 24 horas
        if (period === 'PM' && taskHour < 12) {
            taskHour += 12; // Convertir PM a formato de 24 horas
        }
        if (period === 'AM' && taskHour === 12) {
            taskHour = 0; // Convertir 12 AM a 0 horas
        }

        const taskTimeInMinutes = taskHour * 60 + taskMinute;
        const [cellHour] = hour.split(':').map(Number);
        const cellStartTime = cellHour * 60;
        const cellEndTime = cellStartTime + 60;

        return taskTimeInMinutes >= cellStartTime && taskTimeInMinutes < cellEndTime;
    });
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

updateCalendar();
