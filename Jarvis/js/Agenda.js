let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
let selectedDate = new Date();
const taskList = document.getElementById('taskList');
const displayDate = document.getElementById('displayDate');
const taskPercentage = document.getElementById('completionPercentage');
//localStorage.clear();
document.getElementById('monthPicker').addEventListener('change', (event) => {
    const [year, month] = event.target.value.split("-");
    renderCalendar(year, month);
});

function renderCalendar(year, month) {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = "";

    const weekDays = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    weekDays.forEach(day => {
        calendar.innerHTML += `<div class="calendar-day-header">${day}</div>`;
    });

    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendar.innerHTML += `<div class="calendar-day"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        calendar.innerHTML += `<div class="calendar-day" onclick="selectDate(${year}, ${month}, ${day})">${day}</div>`;
    }
}


function selectDate(year, month, day) {
    selectedDate = new Date(year, month - 1, day);
    displayDate.innerText = selectedDate.toLocaleDateString();
    document.querySelectorAll('.calendar-day').forEach(day => day.classList.remove('selected'));
    event.target.classList.add('selected');
    renderTasksForSelectedDate();
}
const DefinedTasks = {
    "lunes": [
        { id: 1, text: "Levantarse", time: "05:30", completed: false, isPredefined: true },
        { id: 2,text: "Pasear Perros", time: "5:45", completed: false, isPredefined: true },
        { id: 3,text: "Prepararme para el gym", time: "5:50", completed: false, isPredefined: true },
        { id: 4,text: "Gym", time: "7:00", completed: false, isPredefined: true },
        { id: 5,text: "Desayunar", time: "7:40", completed: false, isPredefined: true },
        { id: 6,text: "Dientes y Trastes", time: "7:50", completed: false, isPredefined: true },
        { id: 7,text: "Bathroom", time: "8:05", completed: false, isPredefined: true },
        { id: 8,text: "Meditar", time: "8:30", completed: false, isPredefined: true },
        { id: 9,text: "Perros(limpiar y comida)", time: "8:55", completed: false, isPredefined: true },
        { id: 10,text: "Derevo/Comer, Dientes y pasear perros", time: "14:00", completed: false, isPredefined: true },
        { id: 11,text: "Derevo", time: "16:00", completed: false, isPredefined: true },
        { id: 12,text: "UDG/Logica Matematica", time: "19:00", completed: false, isPredefined: true },
        { id: 13,text: "UDG/FundamentosProgramacion", time: "21:00", completed: false, isPredefined: true },
        { id: 14,text: "Cenar y Dientes", time: "22:00", completed: false, isPredefined: true },
        { id: 15,text: "Rachas", time: "22:30", completed: false, isPredefined: true },
        { id: 16,text: "Dormir", time: "23:30", completed: false, isPredefined: true },
    ],
    "martes": [
        { id: 51, text: "Levantarse", time: "05:30", completed: false, isPredefined: true },
        { id: 52,text: "Pasear Perros", time: "5:45", completed: false, isPredefined: true },
        { id: 53,text: "Prepararme para el gym", time: "5:50", completed: false, isPredefined: true },
        { id: 54,text: "Gym", time: "7:00", completed: false, isPredefined: true },
        { id: 55,text: "Desayunar", time: "7:40", completed: false, isPredefined: true },
        { id: 56,text: "Dientes y Trastes", time: "7:50", completed: false, isPredefined: true },
        { id: 57,text: "Bathroom", time: "8:05", completed: false, isPredefined: true },
        { id: 58,text: "Meditar", time: "8:30", completed: false, isPredefined: true },
        { id: 59,text: "Perros(limpiar y comida)", time: "8:55", completed: false, isPredefined: true },
        { id: 60,text: "Derevo/Comer, Dientes y pasear perros", time: "14:00", completed: false, isPredefined: true },
        { id: 61,text: "Derevo", time: "16:00", completed: false, isPredefined: true },
        { id: 62,text: "UDG/IntroduccionIngenieria", time: "19:00", completed: false, isPredefined: true },
        { id: 63,text: "UDG/EticaYLegislacion", time: "21:00", completed: false, isPredefined: true },
        { id: 64,text: "Cenar y Dientes", time: "22:00", completed: false, isPredefined: true },
        { id: 65,text: "Rachas", time: "22:30", completed: false, isPredefined: true },
        { id: 66,text: "Dormir", time: "23:30", completed: false, isPredefined: true },
    ],
    "miércoles": [
        { id: 101, text: "Levantarse", time: "05:30", completed: false, isPredefined: true },
        { id: 102,text: "Pasear Perros", time: "5:45", completed: false, isPredefined: true },
        { id: 103,text: "Prepararme para el gym", time: "5:50", completed: false, isPredefined: true },
        { id: 104,text: "Gym", time: "7:00", completed: false, isPredefined: true },
        { id: 105,text: "Desayunar", time: "7:40", completed: false, isPredefined: true },
        { id: 106,text: "Dientes y Trastes", time: "7:50", completed: false, isPredefined: true },
        { id: 107,text: "Bathroom", time: "8:05", completed: false, isPredefined: true },
        { id: 108,text: "Meditar", time: "8:30", completed: false, isPredefined: true },
        { id: 109,text: "Perros(limpiar y comida)", time: "8:55", completed: false, isPredefined: true },
        { id: 110,text: "Derevo/Comer, Dientes y pasear perros", time: "14:00", completed: false, isPredefined: true },
        { id: 111,text: "Derevo", time: "16:00", completed: false, isPredefined: true },
        { id: 112,text: "ProblemasGlobalesXXI", time: "19:00", completed: false, isPredefined: true },
        { id: 113,text: "FundamentosProgramacion", time: "21:00", completed: false, isPredefined: true },
        { id: 114,text: "Cenar y Dientes", time: "22:00", completed: false, isPredefined: true },
        { id: 115,text: "Rachas", time: "22:30", completed: false, isPredefined: true },
        { id: 116,text: "Dormir", time: "23:30", completed: false, isPredefined: true },
    ],
    "jueves": [
        { id: 150, text: "Levantarse", time: "05:30", completed: false, isPredefined: true },
        { id: 151,text: "Pasear Perros", time: "5:45", completed: false, isPredefined: true },
        { id: 152,text: "Prepararme para el gym", time: "5:50", completed: false, isPredefined: true },
        { id: 153,text: "Gym", time: "7:00", completed: false, isPredefined: true },
        { id: 154,text: "Desayunar", time: "7:40", completed: false, isPredefined: true },
        { id: 155,text: "Dientes y Trastes", time: "7:50", completed: false, isPredefined: true },
        { id: 156,text: "Bathroom", time: "8:05", completed: false, isPredefined: true },
        { id: 157,text: "Meditar", time: "8:30", completed: false, isPredefined: true },
        { id: 158,text: "Perros(limpiar y comida)", time: "8:55", completed: false, isPredefined: true },
        { id: 159,text: "Derevo/Comer, Dientes y pasear perros", time: "14:00", completed: false, isPredefined: true },
        { id: 160,text: "Derevo", time: "16:00", completed: false, isPredefined: true },
        { id: 161,text: "Precalculo(Estudiar)", time: "19:00", completed: false, isPredefined: true },
        { id: 162,text: "EticaYLegislacion", time: "21:00", completed: false, isPredefined: true },
        { id: 163,text: "Cenar y Dientes", time: "22:00", completed: false, isPredefined: true },
        { id: 164,text: "Rachas", time: "22:30", completed: false, isPredefined: true },
        { id: 165,text: "Dormir", time: "23:30", completed: false, isPredefined: true },
    ],
    "viernes": [
        { id: 200, text: "Levantarse", time: "05:30", completed: false, isPredefined: true },
        { id: 201,text: "Pasear Perros", time: "5:45", completed: false, isPredefined: true },
        { id: 202,text: "Prepararme para el gym", time: "5:50", completed: false, isPredefined: true },
        { id: 203,text: "Gym", time: "7:00", completed: false, isPredefined: true },
        { id: 204,text: "Desayunar", time: "7:40", completed: false, isPredefined: true },
        { id: 205,text: "Dientes y Trastes", time: "7:50", completed: false, isPredefined: true },
        { id: 206,text: "Bathroom", time: "8:05", completed: false, isPredefined: true },
        { id: 207,text: "Meditar", time: "8:30", completed: false, isPredefined: true },
        { id: 208,text: "Perros(limpiar y comida)", time: "8:55", completed: false, isPredefined: true },
        { id: 209,text: "Derevo/Comer, Dientes y pasear perros", time: "14:00", completed: false, isPredefined: true },
        { id: 210,text: "Derevo", time: "16:00", completed: false, isPredefined: true },
        { id: 211,text: "Precalculo(Estudiar)", time: "19:00", completed: false, isPredefined: true },
        { id: 212,text: "Tareas", time: "21:00", completed: false, isPredefined: true },
        { id: 213,text: "Cenar y Dientes", time: "22:00", completed: false, isPredefined: true },
        { id: 214,text: "Rachas", time: "22:30", completed: false, isPredefined: true },
        { id: 215,text: "Dormir", time: "22:30", completed: false, isPredefined: true },
    ],
    "sábado": [
        { id: 250, text: "Levantarse", time: "05:30", completed: false, isPredefined: true },
        { id: 251,text: "Hacer Desayuno", time: "5:45", completed: false, isPredefined: true },
        { id: 252,text: "Dientes", time: "5:50", completed: false, isPredefined: true },
        { id: 253,text: "Precalculo", time: "11:00", completed: false, isPredefined: true },
        { id: 254,text: "Desayunar", time: "?", completed: false, isPredefined: true },
        { id: 256,text: "Bathroom", time: "?", completed: false, isPredefined: true },
        { id: 257,text: "Dientes", time: "12:00", completed: false, isPredefined: true },
        { id: 258,text: "Meditar", time: "13:00", completed: false, isPredefined: true },
        { id: 259,text: "Perros(limpiar y comida)", time: "13:30", completed: false, isPredefined: true },
        { id: 260,text: "Comer, Dientes y pasear perros", time: "14:00", completed: false, isPredefined: true },
        { id: 261,text: "Tareas Precalculo", time: "16:00", completed: false, isPredefined: true },
        { id: 262,text: "Precalculo(Estudiar)", time: "19:00", completed: false, isPredefined: true },
        { id: 263,text: "Tareas", time: "21:00", completed: false, isPredefined: true },
        { id: 264,text: "Cenar y Dientes", time: "22:00", completed: false, isPredefined: true },
        { id: 265,text: "Rachas", time: "22:30", completed: false, isPredefined: true },
        { id: 266,text: "Editar Videos", time: "23:30", completed: false, isPredefined: true },
    ],
    "domingo": [
        { id: 300, text: "Levantarse", time: "10:00", completed: false, isPredefined: true },
        { id: 301, text: "Meditar", time: "11:00", completed: false, isPredefined: true },  
        { id: 302,text: "Desayunar", time: "11:30", completed: false, isPredefined: true },
        { id: 303,text: "Dientes y trastes", time: "11:40", completed: false, isPredefined: true },
        { id: 304,text: "Instrumento Semanal", time: "12:00", completed: false, isPredefined: true },
        { id: 305,text: "Produccion Musical o Edicion De Videos", time: "13:00", completed: false, isPredefined: true },
        { id: 306,text: "Perros(limpiar y comida)", time: "13:30", completed: false, isPredefined: true },
        { id: 307,text: "Comer, Dientes y pasear perros", time: "14:00", completed: false, isPredefined: true },
        { id: 308,text: "Tareas", time: "16:00", completed: false, isPredefined: true },
        { id: 309,text: "Precalculo(Estudiar)", time: "19:00", completed: false, isPredefined: true },
        { id: 310,text: "Platzi", time: "21:00", completed: false, isPredefined: true },
        { id: 311,text: "Cenar y Dientes", time: "22:00", completed: false, isPredefined: true },
        { id: 312,text: "Rachas", time: "22:30", completed: false, isPredefined: true },
        { id: 313,text: "Dormir", time: "23:30", completed: false, isPredefined: true },   ]
};

function renderTasksForSelectedDate() {
    const dateKey = selectedDate.toDateString();
    const weekday = selectedDate.toLocaleDateString('es-MX', { weekday: 'long' }).toLowerCase();  // Obtener el día de la semana en minúsculas
    const formattedDate = selectedDate.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });

    displayDate.innerText = `${weekday}, ${formattedDate}`;

    taskList.innerHTML = "";
    let dailyTasks = tasks[dateKey] || [];
    if (DefinedTasks[weekday]) {
        DefinedTasks[weekday].forEach(preTask => {
            const taskExists = dailyTasks.some(task => task.text === preTask.text && task.time === preTask.time);
            if (!taskExists) {
                dailyTasks.push(preTask);
            }
        });
    }

    dailyTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${task.text} (${task.time})
            <button onclick="deleteTask(${index})">Eliminar</button>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
        `;
        taskList.appendChild(taskItem);
    });

    calculateTaskCompletion(dailyTasks);

    tasks[dateKey] = dailyTasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




function addTask() {
    const taskText = document.getElementById('newTask').value;
    const taskTime = document.getElementById('taskTime').value;

    if (taskText && taskTime) {
        const dateKey = selectedDate.toDateString();
        tasks[dateKey] = tasks[dateKey] || [];
        tasks[dateKey].push({ text: taskText, time: taskTime, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderTasksForSelectedDate();
    }
}
function deleteTask(index) {
    const dateKey = selectedDate.toDateString();
    let dailyTasks = tasks[dateKey] || [];

    dailyTasks.splice(index, 1);

    tasks[dateKey] = dailyTasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasksForSelectedDate();
}

function toggleTask(index) {
    const dateKey = selectedDate.toDateString();
    tasks[dateKey][index].completed = !tasks[dateKey][index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasksForSelectedDate();
}

function calculateTaskCompletion(dailyTasks) {
    const completedTasks = dailyTasks.filter(task => task.completed).length;
    const totalTasks = dailyTasks.length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    taskPercentage.innerText = `${percentage}%`;
}

const now = new Date();
renderCalendar(now.getFullYear(), now.getMonth() + 1);

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockElement.innerText = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock(); 

const gymvideoRoutinesButton = document.getElementById('gymvideo-routines-button');
gymvideoRoutinesButton.addEventListener('click', function() {
  window.location.href = 'video.html'; 
});

//localStorage.clear();
