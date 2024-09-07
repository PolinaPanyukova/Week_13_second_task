// напротив аватара и имени должна появляться дата когда и во сколько был написан комментарий;
// 
// под заголовком «Оставьте ваш комментарий» должен быть чекбокс, который даёт выбор показывать ваше имя в комментарии или нет;
// если пользователь не указал имя, то вместо имени должно появляться username ;
// если пользователь не ввел ссылку на аватар, то должна появляться стандартная аватарка. Стандартных аватаров должно быть больше пяти, они должны подставляться в рандомном порядке.

//функция антиспам с двумя значениями
function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.replace(/viagra|xxx/gi, '***');
}

function getRandomAvatar() {
    const defaultAvatars = [
        './assets/icons/ai-generated-8818682_640.jpg',
        './assets/icons/ai-generated-8861229_640.jpg',
        './assets/icons/second-life-1625903_640.jpg',
        './assets/icons/3d-cartoon-style-character.jpg',
        './assets/icons/cartoon-style.jpg',
        './assets/icons/3d-cartoon.jpg'
    ];
    const randomIndex = Math.floor(Math.random() * defaultAvatars.length);
    return defaultAvatars[randomIndex];
}


//цикл добавления нового комментария
function addComment() {
    let name = document.querySelector('#name').value.trim();
    let avatar = document.querySelector('#avatar').value.trim();
    let message = document.querySelector('.comment-form__textarea').value.trim();
   

    // удаляем лишние пробелы и делаем первую букву заглавной
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

     // Проверяем, если имя скрыто или не указано — выводим 'username'
     const showName = document.querySelector('#show-name').checked;
     name = showName ? (name || 'username') : 'username';

    // все поля заполнены?
    if ( message === '') {
        alert('Пожалуйста, введите сообщение');
        return;
    }

    // проверка антиспам
    message = checkSpam(message);


    // Если аватар не указан, выбираем случайный
    const avatarImage = avatar ? avatar : getRandomAvatar();

    // Текущая дата и время
    const currentDateTime = new Date().toLocaleString();

    

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
    avatarImg.src = avatarImage;
    avatarImg.alt = 'Avatar';
    console.log(avatarImage);

    //name
    const nameElement = document.createElement('strong');
    nameElement.textContent = `${name}:`;

      // Добавляем дату и время
      const timeElement = document.createElement('span');
      timeElement.textContent = ` (${currentDateTime})`;

    //message
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    
    //обьединение  контента
    commentContent.append(nameElement,timeElement,messageElement);
              ///обьединение в контейнер изображения и контента
    commentDiv.append(avatarImg, commentContent);
              ///добавление контейнера с комментарием в общий контейнер 
    commentSection.append(commentDiv); //ДОМ

    
    document.querySelector('#name').value = '';
    document.querySelector('#avatar').value = '';
    document.querySelector('#message').value = '';
}

