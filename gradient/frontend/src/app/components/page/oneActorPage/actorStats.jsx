import React from "react";
import { validator } from "../../utils/validator";

const ActorStats = ({ actor }) => {
  // const stats = {
  //   "Возраст:": "age",
  //   "Город:": "town",
  //   "Рост:": "height",
  //   "Телосложение:": "body",
  //   "Цвет волос:": "hair_col",
  //   "Длина волос:": "hair_long",
  //   "Цвет глаз:": "eyes_col",
  //   "Тип внешности:": "person",
  //   "Размер одежды:": "dress",
  //   "Размер обуви:": "shoe",
  //   "Мерки:": "measurement",
  // };

  // function getStatList() {
  //   let statList = [];
  //   for (let i in stats) {
  //     if (i === "Рост:" && String(actor[stats[i]]).indexOf("см") === -1) {
  //       actor[stats[i]] = `${actor[stats[i]]} см`;
  //     }
  //     statList.push(
  //       <div key={i} className="stats-item">
  //         {i} {actor[stats[i]]}
  //       </div>
  //     );
  //   }
  //   return statList;
  // }

  let newEducation = new String(actor.education).split("\r\n");
  return (
    <div className="stats-andName ">
      <h2 className="actor-name">
        {actor.name} {actor.last_name}
      </h2>
      {/* <h2 className="actor-name">Ебать КАКОЕ ДЛИННОЕ ИМЯ</h2> */}
      <div className="stats-params">
        <h2 className="h2-mini dark">ПАРАМЕТРЫ:</h2>
        {/* {getStatList().map((i) => i)} */}
        <div>
          Возраст: {actor.age} {validator(actor.age)}
        </div>
        <div>Город: {actor.town}</div>
        <div>Рост: {actor.height} см</div>
        <div>Телосложение: {actor.body}</div>
        <div>Цвет волос: {actor.hair_col}</div>
        <div>Длина волос: {actor.hair_long}</div>
        <div>Цвет глаз: {actor.eyes_col}</div>
        <div>Тип внешности: {actor.person}</div>
        {actor.dress ? <div>Размер одежды: {actor.dress}</div> : null}
        {actor.shoe ? <div>Размер обуви: {actor.shoe}</div> : null}
        {actor.measurement ? <div>Мерки: {actor.measurement}</div> : null}
      </div>
      <div className="education">
        <h2 className="h2-mini dark">ОБРАЗОВАНИЕ:</h2>
        <div className="actor-education">
          {newEducation.map((e, index) => {
            return (
              <div className="educ" key={index}>
                {e}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActorStats;
