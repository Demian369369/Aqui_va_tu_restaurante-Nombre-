document.addEventListener("DOMContentLoaded", function() {
    loadImportantThings();
    let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
    const calendarEl = document.getElementById('calendar');
    const tasksEl = document.getElementById('tasks');
    const addTaskBtn = document.getElementById('add-task-btn');
    const percentageEl = document.getElementById('percentage');
    const totalPointsEl = document.getElementById('total-points');
    const clockEl = document.createElement('div');
    clockEl.id = 'clock';
    document.body.appendChild(clockEl);
    const authModal = document.getElementById('auth-modal');
    const authContent = document.getElementById('auth-content');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const closeBtn = document.getElementsByClassName('close')[0];
    
    authModal.style.display = 'block';
    loginBtn.addEventListener('click', function() {
        authContent.style.display = 'none';
        loginForm.style.display = 'block';
    });
    signupBtn.addEventListener('click', function() {
        authContent.style.display = 'none';
        signupForm.style.display = 'block';
    });
    closeBtn.addEventListener('click', function() {
        authModal.style.display = 'none';
    });
    window.addEventListener('click', function(event) {
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
    });
    function login(username, password) {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
        if (username === savedUsername && password === savedPassword) {
            alert('Inicio de sesión exitoso');
            authModal.style.display = 'none';
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    }
    function signup(newUsername, newPassword) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        alert('Cuenta creada exitosamente');
        authModal.style.display = 'none';
    }
    document.getElementById('login-submit').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login(username, password);
    });
    document.getElementById('signup-submit').addEventListener('click', function() {
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
        signup(newUsername, newPassword);
    }); 
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }    
    let selectedDate = new Date();
    function renderCalendar() {
        const month = selectedDate.getMonth();
        const year = selectedDate.getFullYear();
        calendarEl.innerHTML = "";
        const calendarHeader = document.createElement("div");
        calendarHeader.className = "calendar-header";
        calendarHeader.innerHTML = `
            <button id="prev-month"><<</button>
            <span>${selectedDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</span>
            <button id="next-month">>></button>
        `;
        calendarEl.appendChild(calendarHeader);
        const daysContainer = document.createElement("div");
        daysContainer.className = "days-container";
        calendarEl.appendChild(daysContainer);
        const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        weekDays.forEach(day => {
            const dayEl = document.createElement("div");
            dayEl.className = "day";
            dayEl.textContent = day;
            daysContainer.appendChild(dayEl);
        });
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const offset = (firstDay === 0 ? 6 : firstDay - 1);
        for (let i = 0; i < offset; i++) {
            const emptyDay = document.createElement("div");
            emptyDay.className = "day empty";
            daysContainer.appendChild(emptyDay);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement("div");
            day.className = "day";
            day.textContent = i;
            const dateKey = new Date(year, month, i).toISOString().split('T')[0];
            if (tasks[dateKey]) {
                const dayTasks = tasks[dateKey];
                const completed = dayTasks.filter(task => task.completed).length;
                const percentage = dayTasks.length === 0 ? 0 : (completed / dayTasks.length) * 100;
                if (percentage > 50) {
                    day.classList.add('green');
                } else if (percentage <= 50 && dayTasks.length > 0) {
                    day.classList.add('red');
                }
            }
            if (i === selectedDate.getDate() && selectedDate.getMonth() === month && selectedDate.getFullYear() === year) {
                day.classList.add("selected-day");
            }
            day.addEventListener("click", function() {
                selectedDate.setDate(i);
                selectedDate.setMonth(month);
                selectedDate.setFullYear(year);
                renderCalendar();
                renderAgenda();
            });
            daysContainer.appendChild(day);
        }
        document.getElementById("prev-month").addEventListener("click", function() {
            selectedDate.setMonth(selectedDate.getMonth() - 1);
            renderCalendar();
        });
        document.getElementById("next-month").addEventListener("click", function() {
            selectedDate.setMonth(selectedDate.getMonth() + 1);
            renderCalendar();
        });
    }   
    function renderAgenda() {
        tasksEl.innerHTML = "";
        const dateHeader = document.createElement("h3");
        dateHeader.textContent = selectedDate.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        tasksEl.appendChild(dateHeader);
        const dateKey = selectedDate.toISOString().split('T')[0];
        if (!tasks[dateKey]) {
            tasks[dateKey] = [];
        }
        tasks[dateKey].forEach((task, index) => {
            addTaskElement(task.description, task.time, task.completed, task.points, dateKey, index);
        });
        updatePerformance();
        saveTasks();
    }
    function updatePerformance() {
        const dateKey = selectedDate.toISOString().split('T')[0];
        const dayTasks = tasks[dateKey] || [];
        const completed = dayTasks.filter(task => task.completed).length;
        const percentage = dayTasks.length === 0 ? 0 : (completed / dayTasks.length) * 100;
        const points = dayTasks.reduce((total, task) => total + task.points, 0);
        percentageEl.textContent = `Porcentaje de tareas completadas: ${percentage.toFixed(2)}%`;
        totalPointsEl.textContent = `Total de puntos: ${points}`;
        percentageEl.className = 'performance';
        if (percentage > 50) {
            percentageEl.classList.add('green');
        } else if (percentage <= 50 && percentage > 0) {
            percentageEl.classList.add('red');
        } else {
            percentageEl.classList.add('white');
        }
    }
    function addTaskElement(description, time, completed, points, dateKey, index) {
        const taskEl = document.createElement("div");
        taskEl.className = "task";
        const descInput = document.createElement("input");
        descInput.type = "text";
        descInput.value = description;
        descInput.addEventListener("input", function() {
            tasks[dateKey][index].description = this.value;
        });
        taskEl.appendChild(descInput);
        const timeInput = document.createElement("input");
        timeInput.type = "time";
        timeInput.value = time;
        timeInput.addEventListener("input", function() {
            tasks[dateKey][index].time = this.value;
        });
        taskEl.appendChild(timeInput);
        const statusEl = document.createElement("div");
        statusEl.className = "status";
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✓";
        completeBtn.addEventListener("click", function() {
            tasks[dateKey][index].completed = true;
            tasks[dateKey][index].points = 100;
            renderAgenda();
        });
        statusEl.appendChild(completeBtn);
        const notCompleteBtn = document.createElement("button");
        notCompleteBtn.textContent = "✗";
        notCompleteBtn.className = "not-done";
        notCompleteBtn.addEventListener("click", function() {
            tasks[dateKey][index].completed = false;
            tasks[dateKey][index].points = -100;
            renderAgenda();
        });
        statusEl.appendChild(notCompleteBtn);
        const pointsEl = document.createElement("span");
        pointsEl.className = "points";
        pointsEl.textContent = points;
        statusEl.appendChild(pointsEl);
        taskEl.appendChild(statusEl);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.className = "delete-task";
        deleteBtn.addEventListener("click", function() {
            tasks[dateKey].splice(index, 1);
            renderAgenda();
        });
        taskEl.appendChild(deleteBtn);

        tasksEl.appendChild(taskEl);
    }
    addTaskBtn.addEventListener("click", function() {
        const dateKey = selectedDate.toISOString().split('T')[0];
        tasks[dateKey].push({ description: "", time: "", completed: false, points: 0 });
        renderAgenda();
    });
    function updateClock() {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    setInterval(updateClock, 1000);
    updateClock();
    renderCalendar();
    renderAgenda();
});

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
    const addBtn = document.getElementById('addThingBtn');
    const input = document.getElementById('newThingInput');
    const list = document.querySelector('.important-things .list');

    addBtn.addEventListener('click', function() {
        const text = input.value.trim();
        if (text !== '') {
            addThingToList(text);
            input.value = '';
            saveImportantThings();
        }
    });

    function addThingToList(text) {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `
            <span>${text}</span>
            <span class="delete-btn" onclick="deleteThing(this)">Eliminar</span>
        `;
        list.appendChild(listItem);
    }

    window.deleteThing = function(element) {
        element.parentNode.remove();
        saveImportantThings();
    };
    

    function saveImportantThings() {
        const things = [];
        document.querySelectorAll('.important-things .list .list-item span:first-child').forEach(item => {
            things.push(item.textContent);
        });
        localStorage.setItem('importantThings', JSON.stringify(things));
    }

    function loadImportantThings() {
        const things = JSON.parse(localStorage.getItem('importantThings')) || [];
        things.forEach(thing => {
            addThingToList(thing);
        });
    }
    
    const gymvideoRoutinesButton = document.getElementById('gymvideo-routines-button');

    gymvideoRoutinesButton.addEventListener('click', function() {
      window.location.href = 'video.html'; 
    });