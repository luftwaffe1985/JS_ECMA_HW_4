"use strict";

// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
// Работа должна быть выполнена с API: https://reqres.in/

const url = "https://reqres.in/api/users/2";
function getUserData(inputId) {
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        return console.log("Error");
      } else {
        return response.json();
      }
    })
    .then((users) => {
      console.log(users);
      if (users.length < inputId) {
        console.log("Such id not found");
      } else {
        for (let i = 0; i < users.length; i++) {
          if (users[i].id == inputId) {
            console.log(users[i]);
          }
        }
      }
    });
}
getUserData(2);

// Задание 2. Отправка данных на сервер

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// Пример использования функции
// const user = {
//     "name": "John Doe",
//     "job": "unknown"
//   };

//   saveUserData(user)
//     .then(() => {
//       console.log('User data saved successfully');
//     })
//     .catch(error => {
//       console.log(error.message);
//     });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.
// Работа должна быть выполнена с API: https://reqres.in/

const user = {
  name: "John Doe",
  job: "unknown",
};
const url1 = "https://reqres.in/api/users";
function saveUserData(user) {
  fetch(url1, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.status !== 201) {
        return console.log("Error");
      } else {
        console.log("User data saved successfully");
        return response.json();
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
}

saveUserData(user);

// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM)

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

function changeStyleDelayed(element, delay) {
  setTimeout(
    () => (
      (element.style.backgroundColor = "green"),
      (element.style.border = "red solid 2px"),
      (element.style.display = "flex"),
      (element.style.justifyContent = "center"),
      (element.style.marginTop = "60px")
    ),
    delay
  );
}
const myElement = document.querySelector(".myElement");
changeStyleDelayed(myElement, 2000);

// SEMINAR 3

// Задание 1 ()
