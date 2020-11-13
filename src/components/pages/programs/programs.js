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
            <div className="col" id="tfl">
              <div>
                <label for="name">
                  ИМЯ:*
                  <input id="name" placeholder="Barsick" />
                </label>
              </div>
              <div>
                <label for="weight">ВЕС:(КГ)*</label>
                <input id="weight" placeholder="7" />
              </div>
              <div>
                <label for="age">ВОЗРАСТ:(ЛЕТ)*</label>
                <input id="age" placeholder="7" />
              </div>
            </div>
            <div className="col" id="tfr">
              <div className="col" id="tfrRadio">
                <label>
                  <input type="radio" />
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
          </div>
          <hr/>
          <div id="cData">
            <h3>Контактные данные(Владельца кота)</h3>
            <div id="conactD">
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
          <hr/>
          <div id="comm">
            <h3>Коментарий</h3>
            <textarea placeholder="РАССКАЖИТЕ ОБО ВСЕХ ПОВАДКАХ КОТА" />
          </div>
          <hr/>
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
