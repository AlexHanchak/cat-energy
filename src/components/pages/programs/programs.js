import React from "react";

import "./programs.sass";

const Programs = () => {
  return (
    <div className="programMain">
      <div className="programFirst">
        <h1>Подбор программы</h1>
        <p id="topp">
          ЗАПОЛНИТЕ АНКЕТУ И МЫ ПОДБЕРЕМ ПРОГРАММУ ПИТАНИЯ ДЛЯ ВАШЕГО КОТА
        </p>
        <form>
          <div className="row" id="topForm">
            <div className="col">
              <label>
                ИМЯ:*
                <input id="name" placeholder="Barsick" />
              </label>
              <label>
                ВЕС:(КГ)*
                <input id="weight" placeholder="7" />
              </label>
              <label>
                ВОЗРАСТ:(ЛЕТ)*
                <input id="age" placeholder="7" />
              </label>
            </div>
            <div>
              <label>
                <input type="radio" checked="true" />
                ПОХУДЕНИЕ
              </label>
              <label>
                <input type="radio" />
                НАБОР МАССЫ
              </label>
              <label>
                <input type="radio" />
                НЕ ЗНАЮ(НУЖЕН ВАШ СОВЕТ)
              </label>
            </div>
          </div>
          <div id="cData">
            <h3>Контактные данные(Владельца кота)</h3>
            <div>
              <div>
                <label>
                  E-MAIL:*
                  <input type="email" placeholder="kuklachev@gmail.com" />
                </label>
              </div>
              <div>
                <label>
                  ТЕЛЕФОН:*
                  <input type="phone" placeholder="8 (099) 999 99 99" />
                </label>
              </div>
            </div>
          </div>
          <div id="comm">
            <h3>Коментарий</h3>
            <textarea placeholder="РАССКАЖИТЕ ОБО ВСЕХ ПОВАДКАХ КОТА" />
          </div>
          <div id="more">
            <h3>Дополнительно</h3>
            <label>
              <input type="checkbox" />
              САХАРОЗАМЕНИТЕЛЬ
            </label>
            <label>
              <input type="checkbox" />
              ПИТЬЕВАЯ ВОДА
            </label>
            <label>
              <input type="checkbox" />
              МОЛОКО
            </label>
            <label>
              <input type="checkbox" />
              ВИТАМИНЫ
            </label>
          </div>
          <div>
            <button className="b1">ОТПРАВИТЬ ЗАЯВКУ</button>
            <p>*— Обязательные поля</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Programs;
