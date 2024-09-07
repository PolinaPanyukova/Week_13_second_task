// ***дублирование текста из readme для удобства:

//Декомпозируем задачу на две функции:
// 1) Получаем значения из полей, проверяем их, создаем элемент комментария.
// 2) Проверяем и заменяем введенное значение 'viagra' или 'xxx' на '***'.

// 1. Прописываем функцию антиспам с двумя значениями (в этом случае мы используем функцию выше из-за hoisting).
// 2. Создаем функцию для добавления нового комментария:
// - Получаем значения из полей ввода.
// - Преобразуем имя: удаляем лишние пробелы и делаем первую букву заглавной.
// - Проверяем, что все поля заполнены.
// - Проверяем сообщение на наличие спама, используя функцию антиспам.
// - Создаем новый элемент комментария.
// - Очищаем поля ввода после добавления комментария.


//функция антиспам с двумя значениями
function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.replace(/viagra|xxx/gi, '***');
}
//цикл добавления нового комментария
function addComment() {
    let name = document.querySelector('#name').value.trim();
    const avatar = document.querySelector('#avatar').value.trim();
    let message = document.querySelector('.comment-form__textarea').value.trim();

    // удаляем лишние пробелы и делаем первую букву заглавной
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    // все поля заполнены?
    if (name === '' || avatar === '' || message === '') {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    // проверка антиспам
    message = checkSpam(message);

    // Создаем комментарий

    //контейнер комментариев
    const commentSection = document.querySelector('.comments-section'); 
   
    // Создаем новый комментарий(контейнер)
    const commentDiv = document.createElement('div'); 
    commentDiv.className = 'comment'; 
    //создаем контейнер с текстом для контейнера с новым комментариев
    const commentContent = document.createElement('div'); 
    commentContent.className = 'comment-content';

    //avatar
    const avatarImg = document.createElement('img');
    avatarImg.src = avatar;
    avatarImg.alt = 'Avatar';
    console.log(avatar);

    //name
    const nameElement = document.createElement('strong');
    nameElement.textContent = `${name}:`;
    //message
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    
    //обьединение  контента
    commentContent.append(nameElement, messageElement);
              ///обьединение в контейнер изображения и контента
    commentDiv.append(avatarImg, commentContent);
              ///добавление контейнера с комментарием в общий контейнер 
    commentSection.append(commentDiv); //ДОМ

    
    document.querySelector('#name').value = '';
    document.querySelector('#avatar').value = '';
    document.querySelector('#message').value = '';
}