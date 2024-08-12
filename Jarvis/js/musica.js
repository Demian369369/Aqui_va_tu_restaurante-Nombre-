document.addEventListener('DOMContentLoaded', loadItems);

function toggleSection(id) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        if (id === 'all') {
            section.classList.toggle('hidden');
        } else if (section.id === id) {
            section.classList.toggle('hidden');
        }
    });
}

function saveItem(type) {
    let value;
    if (type === 'lyrics') {
        value = document.getElementById('lyrics-input').value;
        document.getElementById('lyrics-input').value = '';
    } else if (type === 'audio') {
        const fileInput = document.getElementById('audio-input');
        value = URL.createObjectURL(fileInput.files[0]);
        fileInput.value = '';
    } else if (type === 'chords') {
        value = document.getElementById('chords-input').value;
        document.getElementById('chords-input').value = '';
    }

    if (value) {
        const items = JSON.parse(localStorage.getItem(type)) || [];
        items.push(value);
        localStorage.setItem(type, JSON.stringify(items));
        loadItems();
    }
}

function loadItems() {
    ['lyrics', 'audio', 'chords'].forEach(type => {
        const list = document.getElementById(`${type}-list`);
        list.innerHTML = '';
        const items = JSON.parse(localStorage.getItem(type)) || [];
        items.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('item');
            if (type === 'audio') {
                const audio = document.createElement('audio');
                audio.src = item;
                audio.controls = true;
                div.appendChild(audio);
            } else {
                div.innerHTML = `<p>${item}</p>`;
            }
            div.innerHTML += `<button onclick="editItem('${type}', ${index})">Editar</button><button onclick="deleteItem('${type}', ${index})">Eliminar</button>`;
            list.appendChild(div);
        });
    });
}

function editItem(type, index) {
    const items = JSON.parse(localStorage.getItem(type));
    let newValue = prompt('Edita el contenido:', items[index]);
    if (newValue) {
        items[index] = newValue;
        localStorage.setItem(type, JSON.stringify(items));
        loadItems();
    }
}

function deleteItem(type, index) {
    const items = JSON.parse(localStorage.getItem(type));
    items.splice(index, 1);
    localStorage.setItem(type, JSON.stringify(items));
    loadItems();
}
