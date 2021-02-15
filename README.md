**Sincere Systems test task**


Для разработки были испольовано React, Redux, Bootstrap, SASS.
В папке src в корневом файле store.js создаётся Store c вложенным reducer.

В файле index.js папки reducers инициализируется изначальное состояние данных хранилища. +Сам reducer.

В папке components находятся все View components (App, Footer, Header, Login, Logo, Main, News, Profile).

Компонент App является контейнером для всех компонентов, в котором с помощью Provider подключается store, 
a BrowserRouter подключает роутинг.

В Компоненте Login в локальном state сохраняются имя и пароль пользователся, которые отправляются в store после нажатия кнопки 'Войти'.
Реализовано сохранене логина и пароля в localStorage.

