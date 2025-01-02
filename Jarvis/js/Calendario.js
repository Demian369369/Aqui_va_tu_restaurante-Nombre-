const taskColors = {
    'Nada': 'bg-white',
    'Cosas importantes': 'bg-red-200',
    'Obligatorias': 'bg-pink-400',
    'Opcionales': 'bg-lime-200',
    'Extras': 'bg-green-200',
    'Trabajo': 'bg-blue-200',
    'Escuela': 'bg-purple-200',
    'Tareas': 'bg-cyan-200' 
};

const DefinedTasks = {
    "lunes": [
    { id: 0, text: "Dormir", startTime: "12:00 AM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" },
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:31 AM", isPredefined: true, type: "Obligatorias" },
    { id: 2, text: "Diario nocturno", startTime: "05:31 AM", endTime: "05:35 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Pasear perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Extras" },
    { id: 4, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 5, text: "Pre entreno para gym", startTime: "5:49 AM", endTime: "5:50 AM", isPredefined: true, type: "Extras" },
    { id: 6, text: "Ir al gym", startTime: "5:50 AM", endTime: "6:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 7, text: "Rutina del gym", startTime: "6:00 AM", endTime: "6:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 8, text: "Bañarse", startTime: "6:50 AM", endTime: "7:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 9, text: "Regresar a casa", startTime: "7:00 AM", endTime: "7:10 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Lavarme dientes", startTime: "7:30 AM", endTime: "7:35 AM", isPredefined: true, type: "Obligatorias" },
    { id: 12, text: "Lavar trastes", startTime: "7:35 AM", endTime: "7:40 AM", isPredefined: true, type: "Opcionales" },
    { id: 13, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 14, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 15, text: "Perros(limpiarles y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 16, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 17, text: "Comer", startTime: "14:00 PM", endTime: "14:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 18, text: "Lavar trastes", startTime: "14:30 PM", endTime: "14:40 PM", isPredefined: true, type: "Extras" },
    { id: 19, text: "Lavarme dientes", startTime: "14:40 PM", endTime: "14:45 PM", isPredefined: true, type: "Extras" },
    { id: 20, text: "Pasear perros", startTime: "14:45 PM", endTime: "14:55 PM", isPredefined: true, type: "Extras" },
    { id: 21, text: "Ir al Cucei", startTime: "15:40 PM", endTime: "15:40 PM", isPredefined: true, type: "Obligatorias" },
    { id: 22, text: "UDG", startTime: "17:00 PM", endTime: "19:00 PM", isPredefined: true, type: "Escuela" },
    { id: 23, text: "UDG", startTime: "19:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Escuela" },
    { id: 25, text: "Regresar a casa", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 24, text: "Cenar", startTime: "22:00 PM", endTime: "22:20 PM", isPredefined: true, type: "Obligatorias" },
    { id: 25, text: "Lavar trastes", startTime: "22:20 PM", endTime: "22:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 26, text: "Lavarme dientes", startTime: "22:30 PM", endTime: "22:45 PM", isPredefined: true, type: "Obligatorias" },
    { id: 27, text: "Ponerme la pijama", startTime: "22:45 PM", endTime: "22:55 PM", isPredefined: true, type: "Obligatorias" },
    { id: 28, text: "Rachas", startTime: "23:00 PM", endTime: "23:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 29, text: "Dormir", startTime: "23:30 PM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" }
],
"martes": [
    { id: 0, text: "Dormir", startTime: "12:00 AM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" },
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:31 AM", isPredefined: true, type: "Obligatorias" },
    { id: 2, text: "Diario nocturno", startTime: "05:31 AM", endTime: "05:35 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Pasear perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Extras" },
    { id: 4, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 5, text: "Pre entreno para gym", startTime: "5:49 AM", endTime: "5:50 AM", isPredefined: true, type: "Extras" },
    { id: 6, text: "Ir al gym", startTime: "5:50 AM", endTime: "6:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 7, text: "Rutina del gym", startTime: "6:00 AM", endTime: "6:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 8, text: "Bañarse", startTime: "6:50 AM", endTime: "7:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 9, text: "Regresar a casa", startTime: "7:00 AM", endTime: "7:10 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Lavarme dientes", startTime: "7:30 AM", endTime: "7:35 AM", isPredefined: true, type: "Obligatorias" },
    { id: 12, text: "Lavar trastes", startTime: "7:35 AM", endTime: "7:40 AM", isPredefined: true, type: "Opcionales" },
    { id: 13, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 14, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 15, text: "Perros(limpiarles y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 16, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 17, text: "Comer", startTime: "14:00 PM", endTime: "14:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 18, text: "Lavar trastes", startTime: "14:30 PM", endTime: "14:40 PM", isPredefined: true, type: "Extras" },
    { id: 19, text: "Lavarme dientes", startTime: "14:40 PM", endTime: "14:45 PM", isPredefined: true, type: "Extras" },
    { id: 20, text: "Pasear perros", startTime: "14:45 PM", endTime: "14:55 PM", isPredefined: true, type: "Extras" },
    { id: 21, text: "Ir al Cucei", startTime: "15:40 PM", endTime: "15:40 PM", isPredefined: true, type: "Obligatorias" },
    { id: 22, text: "UDG", startTime: "17:00 PM", endTime: "19:00 PM", isPredefined: true, type: "Escuela" },
    { id: 23, text: "UDG", startTime: "19:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Escuela" },
    { id: 25, text: "Regresar a casa", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 24, text: "Cenar", startTime: "22:00 PM", endTime: "22:20 PM", isPredefined: true, type: "Obligatorias" },
    { id: 25, text: "Lavar trastes", startTime: "22:20 PM", endTime: "22:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 26, text: "Lavarme dientes", startTime: "22:30 PM", endTime: "22:45 PM", isPredefined: true, type: "Obligatorias" },
    { id: 27, text: "Ponerme la pijama", startTime: "22:45 PM", endTime: "22:55 PM", isPredefined: true, type: "Obligatorias" },
    { id: 28, text: "Rachas", startTime: "23:00 PM", endTime: "23:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 29, text: "Dormir", startTime: "23:30 PM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" }
    
],
"miércoles": [
    { id: 0, text: "Dormir", startTime: "12:00 AM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" },
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:31 AM", isPredefined: true, type: "Obligatorias" },
    { id: 2, text: "Diario nocturno", startTime: "05:31 AM", endTime: "05:35 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Pasear perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Extras" },
    { id: 4, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 5, text: "Pre entreno para gym", startTime: "5:49 AM", endTime: "5:50 AM", isPredefined: true, type: "Extras" },
    { id: 6, text: "Ir al gym", startTime: "5:50 AM", endTime: "6:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 7, text: "Rutina del gym", startTime: "6:00 AM", endTime: "6:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 8, text: "Bañarse", startTime: "6:50 AM", endTime: "7:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 9, text: "Regresar a casa", startTime: "7:00 AM", endTime: "7:10 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Lavarme dientes", startTime: "7:30 AM", endTime: "7:35 AM", isPredefined: true, type: "Obligatorias" },
    { id: 12, text: "Lavar trastes", startTime: "7:35 AM", endTime: "7:40 AM", isPredefined: true, type: "Opcionales" },
    { id: 13, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 14, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 15, text: "Perros(limpiarles y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 16, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 17, text: "Comer", startTime: "14:00 PM", endTime: "14:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 18, text: "Lavar trastes", startTime: "14:30 PM", endTime: "14:40 PM", isPredefined: true, type: "Extras" },
    { id: 19, text: "Lavarme dientes", startTime: "14:40 PM", endTime: "14:45 PM", isPredefined: true, type: "Extras" },
    { id: 20, text: "Pasear perros", startTime: "14:45 PM", endTime: "14:55 PM", isPredefined: true, type: "Extras" },
    { id: 21, text: "Ir al Cucei", startTime: "15:40 PM", endTime: "15:40 PM", isPredefined: true, type: "Obligatorias" },
    { id: 22, text: "UDG", startTime: "17:00 PM", endTime: "19:00 PM", isPredefined: true, type: "Escuela" },
    { id: 23, text: "UDG", startTime: "19:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Escuela" },
    { id: 25, text: "Regresar a casa", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 24, text: "Cenar", startTime: "22:00 PM", endTime: "22:20 PM", isPredefined: true, type: "Obligatorias" },
    { id: 25, text: "Lavar trastes", startTime: "22:20 PM", endTime: "22:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 26, text: "Lavarme dientes", startTime: "22:30 PM", endTime: "22:45 PM", isPredefined: true, type: "Obligatorias" },
    { id: 27, text: "Ponerme la pijama", startTime: "22:45 PM", endTime: "22:55 PM", isPredefined: true, type: "Obligatorias" },
    { id: 28, text: "Rachas", startTime: "23:00 PM", endTime: "23:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 29, text: "Dormir", startTime: "23:30 PM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" }
    
],
"jueves": [
    { id: 0, text: "Dormir", startTime: "12:00 AM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" },
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:31 AM", isPredefined: true, type: "Obligatorias" },
    { id: 2, text: "Diario nocturno", startTime: "05:31 AM", endTime: "05:35 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Pasear perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Extras" },
    { id: 4, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 5, text: "Pre entreno para gym", startTime: "5:49 AM", endTime: "5:50 AM", isPredefined: true, type: "Extras" },
    { id: 6, text: "Ir al gym", startTime: "5:50 AM", endTime: "6:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 7, text: "Rutina del gym", startTime: "6:00 AM", endTime: "6:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 8, text: "Bañarse", startTime: "6:50 AM", endTime: "7:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 9, text: "Regresar a casa", startTime: "7:00 AM", endTime: "7:10 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Lavarme dientes", startTime: "7:30 AM", endTime: "7:35 AM", isPredefined: true, type: "Obligatorias" },
    { id: 12, text: "Lavar trastes", startTime: "7:35 AM", endTime: "7:40 AM", isPredefined: true, type: "Opcionales" },
    { id: 13, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 14, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 15, text: "Perros(limpiarles y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 16, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 17, text: "Comer", startTime: "14:00 PM", endTime: "14:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 18, text: "Lavar trastes", startTime: "14:30 PM", endTime: "14:40 PM", isPredefined: true, type: "Extras" },
    { id: 19, text: "Lavarme dientes", startTime: "14:40 PM", endTime: "14:45 PM", isPredefined: true, type: "Extras" },
    { id: 20, text: "Pasear perros", startTime: "14:45 PM", endTime: "14:55 PM", isPredefined: true, type: "Extras" },
    { id: 21, text: "Ir al Cucei", startTime: "15:40 PM", endTime: "15:40 PM", isPredefined: true, type: "Obligatorias" },
    { id: 22, text: "UDG", startTime: "17:00 PM", endTime: "19:00 PM", isPredefined: true, type: "Escuela" },
    { id: 23, text: "UDG", startTime: "19:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Escuela" },
    { id: 25, text: "Regresar a casa", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 24, text: "Cenar", startTime: "22:00 PM", endTime: "22:20 PM", isPredefined: true, type: "Obligatorias" },
    { id: 25, text: "Lavar trastes", startTime: "22:20 PM", endTime: "22:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 26, text: "Lavarme dientes", startTime: "22:30 PM", endTime: "22:45 PM", isPredefined: true, type: "Obligatorias" },
    { id: 27, text: "Ponerme la pijama", startTime: "22:45 PM", endTime: "22:55 PM", isPredefined: true, type: "Obligatorias" },
    { id: 28, text: "Rachas", startTime: "23:00 PM", endTime: "23:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 29, text: "Dormir", startTime: "23:30 PM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" }
    
],
"viernes": [
    { id: 0, text: "Dormir", startTime: "12:00 AM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" },
    { id: 1, text: "Levantarse", startTime: "05:30 AM", endTime: "05:31 AM", isPredefined: true, type: "Obligatorias" },
    { id: 2, text: "Diario nocturno", startTime: "05:31 AM", endTime: "05:35 AM", isPredefined: true, type: "Opcionales" },
    { id: 3, text: "Pasear perros", startTime: "5:35 AM", endTime: "5:45 AM", isPredefined: true, type: "Extras" },
    { id: 4, text: "Prepararme para el gym", startTime: "5:45 AM", endTime: "5:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 5, text: "Pre entreno para gym", startTime: "5:49 AM", endTime: "5:50 AM", isPredefined: true, type: "Extras" },
    { id: 6, text: "Ir al gym", startTime: "5:50 AM", endTime: "6:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 7, text: "Rutina del gym", startTime: "6:00 AM", endTime: "6:50 AM", isPredefined: true, type: "Obligatorias" },
    { id: 8, text: "Bañarse", startTime: "6:50 AM", endTime: "7:00 AM", isPredefined: true, type: "Obligatorias" },
    { id: 9, text: "Regresar a casa", startTime: "7:00 AM", endTime: "7:10 AM", isPredefined: true, type: "Obligatorias" },
    { id: 10, text: "Desayunar", startTime: "7:10 AM", endTime: "7:30 AM", isPredefined: true, type: "Obligatorias" },
    { id: 11, text: "Lavarme dientes", startTime: "7:30 AM", endTime: "7:35 AM", isPredefined: true, type: "Obligatorias" },
    { id: 12, text: "Lavar trastes", startTime: "7:35 AM", endTime: "7:40 AM", isPredefined: true, type: "Opcionales" },
    { id: 13, text: "Bathroom", startTime: "7:50 AM", endTime: "8:00 AM", isPredefined: true, type: "Opcionales" },
    { id: 14, text: "Meditar", startTime: "8:00 AM", endTime: "8:30 AM", isPredefined: true, type: "Extras" },
    { id: 15, text: "Perros(limpiarles y comida)", startTime: "8:35 AM", endTime: "8:50 AM", isPredefined: true, type: "Opcionales" },
    { id: 16, text: "Derevo", startTime: "9:00 AM", endTime: "18:00 PM", isPredefined: true, type: "Trabajo" },
    { id: 17, text: "Comer", startTime: "14:00 PM", endTime: "14:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 18, text: "Lavar trastes", startTime: "14:30 PM", endTime: "14:40 PM", isPredefined: true, type: "Extras" },
    { id: 19, text: "Lavarme dientes", startTime: "14:40 PM", endTime: "14:45 PM", isPredefined: true, type: "Extras" },
    { id: 20, text: "Pasear perros", startTime: "14:45 PM", endTime: "14:55 PM", isPredefined: true, type: "Extras" },
    { id: 21, text: "Ir al Cucei", startTime: "15:40 PM", endTime: "15:40 PM", isPredefined: true, type: "Obligatorias" },
    { id: 22, text: "UDG", startTime: "17:00 PM", endTime: "19:00 PM", isPredefined: true, type: "Escuela" },
    { id: 23, text: "UDG", startTime: "19:00 PM", endTime: "21:00 PM", isPredefined: true, type: "Escuela" },
    { id: 25, text: "Regresar a casa", startTime: "21:00 PM", endTime: "22:00 PM", isPredefined: true, type: "Obligatorias" },
    { id: 24, text: "Cenar", startTime: "22:00 PM", endTime: "22:20 PM", isPredefined: true, type: "Obligatorias" },
    { id: 25, text: "Lavar trastes", startTime: "22:20 PM", endTime: "22:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 26, text: "Lavarme dientes", startTime: "22:30 PM", endTime: "22:45 PM", isPredefined: true, type: "Obligatorias" },
    { id: 27, text: "Ponerme la pijama", startTime: "22:45 PM", endTime: "22:55 PM", isPredefined: true, type: "Obligatorias" },
    { id: 28, text: "Rachas", startTime: "23:00 PM", endTime: "23:30 PM", isPredefined: true, type: "Obligatorias" },
    { id: 29, text: "Dormir", startTime: "23:30 PM", endTime: "4:59 AM", isPredefined: true, type: "Obligatorias" }
    
],
"sábado": [
    
   
],
"domingo": [
   
    
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
    cell.className = 'border border-gray-200 p-1 task-cell';

    const tasks = getTasksForDayAndHour(day, hour);

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `${taskColors[task.type] || 'bg-gray-100'} p-1 mb-1 rounded task`;
        taskElement.textContent = task.text;
        taskElement.title = `${task.text} - ${task.startTime} a ${task.endTime}`;
        cell.appendChild(taskElement);
    });

    if (tasks.length > 1) {
        cell.style.height = `${Math.max(4, tasks.length * 3)}rem`; 
        cell.classList.add('overflow-y-auto'); 
    } else {
        cell.style.height = '4rem'; 
    }

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
function toggleBulletJournal() {
    const container = document.getElementById('bullet-journal-container');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}
let habits = {
    daily: [
        { text: "Dormir", days: [false, false, false, false, false, false, false] },
        { text: "Levantarme", days: [false, false, false, false, false, false, false] },
        { text: "Diario Nocturno", days: [false, false, false, false, false, false, false] },
        { text: "Pasear Perros", days: [false, false, false, false, false, false, false] },
        { text: "Prepararme para el gym", days: [false, false, false, false, false, false, false] },
        { text: "Pre entreno gym", days: [false, false, false, false, false, false, false] },
        { text: "ir al GYM", days: [false, false, false, false, false, false, false] },
        { text: "Rutina Diaria GYM", days: [false, false, false, false, false, false, false] },
        { text: "Bañarse", days: [false, false, false, false, false, false, false] },
        { text: "Regresar a casa", days: [false, false, false, false, false, false, false] },
        { text: "Desayunar", days: [false, false, false, false, false, false, false] },
        { text: "Lavarme los dientes", days: [false, false, false, false, false, false, false] },
        { text: "Lavar trastes", days: [false, false, false, false, false, false, false] },
        { text: "Bathroom", days: [false, false, false, false, false, false, false] },
        { text: "Meditar", days: [false, false, false, false, false, false, false] },
        { text: "Perros(limpiarles, comida, agua)", days: [false, false, false, false, false, false, false] },
        { text: "Derevo", days: [false, false, false, false, false, false, false] },
        { text: "Comer", days: [false, false, false, false, false, false, false] },
        { text: "Lavar trastes", days: [false, false, false, false, false, false, false] },
        { text: "Lavarme los dientes", days: [false, false, false, false, false, false, false] },
        { text: "Pasear perros", days: [false, false, false, false, false, false, false] },
        { text: "Ir al Cucei", days: [false, false, false, false, false, false, false] },
        { text: "Regresar a casa", days: [false, false, false, false, false, false, false] },
        { text: "Cenar", days: [false, false, false, false, false, false, false] },
        { text: "Lavar trastes", days: [false, false, false, false, false, false, false] },
        { text: "Lavarme los dientes", days: [false, false, false, false, false, false, false] },
        { text: "Ponerme la pijama", days: [false, false, false, false, false, false, false] },
        { text: "Rachas", days: [false, false, false, false, false, false, false] },
        { text: "1 Clase Platzi", days: [false, false, false, false, false, false, false] },
        { text: "Duolingo 3 Desafios Diarios", days: [false, false, false, false, false, false, false] },
        { text: "3 Lecciones Mimo", days: [false, false, false, false, false, false, false] },
        { text: "5 Minutos Islandes", days: [false, false, false, false, false, false, false] },
        { text: "Problema diario de Ajedrez y 2 Partidas", days: [false, false, false, false, false, false, false] },
        { text: "3 Lecciones Matematicas", days: [false, false, false, false, false, false, false] },
        { text: "Estudiar 1 Hora", days: [false, false, false, false, false, false, false] },
        { text: "Escuchar AudioLibros", days: [false, false, false, false, false, false, false] },

    ],
    weekly: [
        { text: "Limpiar Mi Cuarto", progress: 0 },
        { text: "Jugar con perros", progress: 0 },
        { text: "Higiene en general", progress: 0 },
        { text: "Hacer Tareas UDG", progress: 0 },
        { text: "Avanzar en derevo", progress: 0 },
        { text: "Practicar calculo mental", progress: 0 },
        { text: "Componer musica", progress: 0 },
        { text: "Financiamiento Personal", progress: 0 },

    ],
    important: [
        { text: "Mejorar Mi Fisico", days: [false, false, false, false, false, false, false] },
        { text: "Generar Ingresos Pasivos", days: [false, false, false, false, false, false, false] },
        { text: "Financiamiento Personal", days: [false, false, false, false, false, false, false] },
        { text: "Teoria Musical", days: [false, false, false, false, false, false, false] },
        { text: "Podcast", days: [false, false, false, false, false, false, false] },
        { text: "UDG y Derevo", days: [false, false, false, false, false, false, false] },
        { text: "Marie", days: [false, false, false, false, false, false, false] },


    ]
};

let monsters = {
    daily: 100,
    weekly: 100,
    important: 100
};

function saveData() {
    localStorage.setItem('bulletJournalData', JSON.stringify({ habits, monsters }));
}

function loadData() {
    const savedData = localStorage.getItem('bulletJournalData');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        habits = parsedData.habits;
        monsters = parsedData.monsters;
    }
}

function renderHabits() {
    renderHabitList('daily-habits', habits.daily, createDailyHabitElement);
    renderHabitList('weekly-habits', habits.weekly, createWeeklyHabitElement);
    renderHabitList('important-habits', habits.important, createWeeklyHabitElement);
    updateMonsterHealth();
}

function renderHabitList(elementId, habitList, createElementFunction) {
    const list = document.getElementById(elementId);
    list.innerHTML = '';
    habitList.forEach((habit, index) => {
        list.appendChild(createElementFunction(habit, index, elementId));
    });
}

function createDailyHabitElement(habit, index, listId) {
    const li = document.createElement('li');
    li.className = 'habit-item';
    li.innerHTML = `
        <span class="habit-text">${habit.text}</span>
        <div class="day-buttons">
            ${['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'].map((day, i) => `
                <button class="day-button ${habit.days[i] ? 'active' : ''}" onclick="updateDailyHabit('${listId}', ${index}, ${i})">${day}</button>
            `).join('')}
        </div>
    `;
    return li;
}

function createWeeklyHabitElement(habit, index, listId) {
    const li = document.createElement('li');
    li.className = 'habit-item';
    li.innerHTML = `
        <span class="habit-text">${habit.text}</span>
        <div class="progress-container">
            <div class="progress-bar">
                <div class="progress" style="width: ${habit.progress}%"></div>
            </div>
            <button onclick="updateWeeklyProgress('${listId}', ${index})">Actualizar</button>
        </div>
    `;
    return li;
}

function updateDailyHabit(listId, habitIndex, dayIndex) {
    const habitList = habits.daily;
    const prevState = habitList[habitIndex].days[dayIndex];
    habitList[habitIndex].days[dayIndex] = !prevState;
    
    const today = new Date().getDay();
    const adjustedToday = today === 0 ? 6 : today - 1; // Ajuste para que el domingo sea 6 y el lunes 0
    const totalDailyHabits = habitList.length;
    const completedToday = habitList.filter(habit => habit.days[adjustedToday]).length;
    
    monsters.daily = 100 - (completedToday / totalDailyHabits * 100);
    
    saveData();
    renderHabits();
}

function resetDailyMonster() {
    const now = new Date();
    const lastReset = new Date(localStorage.getItem('lastDailyReset') || 0);
    
    if (now.getDate() !== lastReset.getDate() || now.getMonth() !== lastReset.getMonth() || now.getFullYear() !== lastReset.getFullYear()) {
        monsters.daily = 100;
        const today = now.getDay();
        const adjustedToday = today === 0 ? 6 : today - 1; // Ajuste para que el domingo sea 6 y el lunes 0
        habits.daily.forEach(habit => {
            habit.days = habit.days.map((_, index) => index === adjustedToday ? false : habit.days[index]);
        });
        localStorage.setItem('lastDailyReset', now.toISOString());
        saveData();
        renderHabits();
    }
}
function updateWeeklyProgress(listId, index) {
    const habitList = listId === 'weekly-habits' ? habits.weekly : habits.important;
    const monsterType = listId === 'weekly-habits' ? 'weekly' : 'important';
    const prevProgress = habitList[index].progress;
    
    habitList[index].progress += 15;
    if (habitList[index].progress > 105) {
        habitList[index].progress = 0;
    }
    
    const progressDiff = habitList[index].progress - prevProgress;
    monsters[monsterType] -= progressDiff / habitList.length;
    monsters[monsterType] = Math.max(0, Math.min(100, monsters[monsterType]));
    
    saveData();
    renderHabits();
}

function addHabit() {
    const newHabitText = document.getElementById('new-habit').value;
    const habitType = document.getElementById('habit-type').value;
    
    if (newHabitText) {
        if (habitType === 'daily') {
            habits.daily.push({ text: newHabitText, days: [false, false, false, false, false, false, false] });
        } else {
            habits.weekly.push({ text: newHabitText, progress: 0 });
        }
        document.getElementById('new-habit').value = '';
        saveData();
        renderHabits();
    }
}

function addImportantHabit() {
    const newHabitText = document.getElementById('new-important-habit').value;
    if (newHabitText) {
        habits.important.push({ text: newHabitText, progress: 0 });
        document.getElementById('new-important-habit').value = '';
        saveData();
        renderHabits();
    }
}

function toggleImportantHabits() {
    const container = document.getElementById('important-habits-container');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
}

function updateMonsterHealth() {
    document.getElementById('daily-monster-health').style.width = `${monsters.daily}%`;
    document.getElementById('weekly-monster-health').style.width = `${monsters.weekly}%`;
    document.getElementById('important-monster-health').style.width = `${monsters.important}%`;
}

function resetDailyMonster() {
    const now = new Date();
    const lastReset = new Date(localStorage.getItem('lastDailyReset') || 0);
    
    if (now.getDate() !== lastReset.getDate() || now.getMonth() !== lastReset.getMonth() || now.getFullYear() !== lastReset.getFullYear()) {
        monsters.daily = 100;
        habits.daily.forEach(habit => habit.days = [false, false, false, false, false, false, false]);
        localStorage.setItem('lastDailyReset', now.toISOString());
        saveData();
        renderHabits();
    }
}

function resetWeeklyMonster() {
    const now = new Date();
    const lastReset = new Date(localStorage.getItem('lastWeeklyReset') || 0);
    
    if (now.getDay() === 0 && (now - lastReset) >= 7 * 24 * 60 * 60 * 1000) {
        monsters.weekly = 100;
        habits.weekly.forEach(habit => habit.progress = 0);
        localStorage.setItem('lastWeeklyReset', now.toISOString());
        saveData();
        renderHabits();
    }
}

function resetImportantMonster() {
    const now = new Date();
    const lastReset = new Date(localStorage.getItem('lastImportantReset') || 0);
    
    if (now.getDay() === 0 && (now - lastReset) >= 7 * 24 * 60 * 60 * 1000) {
        monsters.important = 100;
        habits.important.forEach(habit => habit.progress = 0);
        localStorage.setItem('lastImportantReset', now.toISOString());
        saveData();
        renderHabits();
    }
}

loadData();
renderHabits();
setInterval(resetDailyMonster, 60000); 
setInterval(resetWeeklyMonster, 60000); 
setInterval(resetImportantMonster, 60000); 
function resetAllProgress() {
    if (confirm("¿Estás seguro de que quieres borrar todo tu progreso? Esta acción no se puede deshacer.")) {
        habits.daily.forEach(habit => habit.days = [false, false, false, false, false, false, false]);
        habits.weekly.forEach(habit => habit.progress = 0);
        habits.important.forEach(habit => habit.progress = 0);
        monsters.daily = 100;
        monsters.weekly = 100;
        monsters.important = 100;
        localStorage.clear();
        saveData();
        renderHabits();
        alert("Todo el progreso ha sido borrado. ¡Es hora de un nuevo comienzo!");
    }
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
//localStorage.clear();
