// 1 - отримай body елемент і виведи його в консоль;
const bodyElem = document.querySelector(`body`);
console.log(bodyElem);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleElem = document.querySelector(`#title`);
console.log(titleElem);

// 3 - отримай елемент class="list" і виведи його в консоль;
const listElem = document.querySelector(`.list`);
console.log(listElem);

//  4 - отримай всі елементи з атрибутом data-topic і виведи їх
const topicAllElem = document.querySelectorAll(`[data-topic]`);
console.log(topicAllElem);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstTopicElem = document.querySelector(`[data-topic]`);
console.log(firstTopicElem);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const lastTopicElem = topicAllElem[topicAllElem.length - 1];
console.log(lastTopicElem);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
//! const nextElem = document.querySelector(`#title`);
//! console.log(nextElem.nextElementSibling);
console.log(titleElem.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const allHThirdElem = document.querySelectorAll(`h3`);
console.log(allHThirdElem);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
allHThirdElem.forEach((el) => el.classList.add(`active`));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const topicNavElem = document.querySelector(`li[data-topic="navigation"]`);
console.log(topicNavElem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
topicNavElem.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const pNavElem = topicNavElem.querySelector(`p`);
pNavElem.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const currentElem = document.querySelector(`li[data-topic=${currentTopic}]`);
console.log(currentElem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

currentElem.style.backgroundColor = `rgb(122, 85, 208)`;

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedElem = document.querySelector(`.completed`);
console.log(completedElem);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
completedElem.parentNode.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const newPElem = document.createElement(`p`);
newPElem.textContent = "Об'єктна модель документа (Document Object Model)";
titleElem.insertAdjacentElement(`afterend`, newPElem);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const newLiElem = document.createElement(`li`);
const titleHThriElem = document.createElement(`h3`);
titleHThriElem.textContent = "Властивість innerHTML";
const newDescr = document.createElement(`p`);
newDescr.textContent = `Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу`;
newLiElem.appendChild(titleHThriElem);
newLiElem.appendChild(newDescr);
listElem.appendChild(newLiElem);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const adbjHtml = `<li>
          <h3>Властивість innerHTML</h3>
          <p>
            Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
            використовувати рядки з тегами і дозволити браузеру зробити всю
            важку роботу
          </p>
        </li>`;
listElem.insertAdjacentHTML(`beforeend`, adbjHtml);

// 20 - очисти список
listElem.innerHTML = "";
