const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll('.input-box');

createBtn.addEventListener("click", () => {
    // Создаём контейнер для заметки (div)
    const noteContainer = document.createElement("div");
    noteContainer.className = "note";

    // Создаём редактируемый текст
    const inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = "Новая заметка..."; // Добавляем текст по умолчанию

    // Создаём кнопку удаления
    const deleteBtn = document.createElement("img");
    deleteBtn.src = "image/delete.webp";
    deleteBtn.alt = "Удалить заметку";
    deleteBtn.className = "delete-btn";

    // Обработчик удаления заметки
    deleteBtn.addEventListener("click", () => {
        noteContainer.remove();
    });

    // Собираем структуру: контейнер → текст + кнопка
    noteContainer.appendChild(inputBox);
    noteContainer.appendChild(deleteBtn);

    // Добавляем заметку в общий контейнер
    notesContainer.appendChild(noteContainer);
});
