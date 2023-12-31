import React from "react";
import Banner from "../components/Banner.js";
import "./css/style.css";
import background from "./img/Home_Pic.jpg";

//style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", 
//      height:500 ,width:1500}}
function Home() {
  return (
      <div style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", height:800}}>
        <Banner title="Главная" subtitle="Добро пожаловать!" />
        <div className="container1">
            <article className="Art_Home">
  <h2>Представляем вашему вниманию красивые места на Дальнем Востоке России</h2>
  <p style={{fontSize:"20px"}}>
  На краю света, там, где восходит солнце, живет и процветает красавец Дальний Восток.
  Сложно найти хоть один регион в мире, который способен совместить в себе такое богатство флоры и фауны.
  Именно здесь можно увидеть бескрайние степи и густые леса, заснеженные вершины гор и жаркие пляжи, песчаные массивы и побережье океана.
  В регионе водятся камчатские медведи, гренландские киты, амурские тигры, дальневосточные леопарды и другие уникальные представители животного мира.</p>
        <p style={{fontSize:"20px"}}>
        Дальний Восток славится не только природными пейзажами: вулканами, сопками, озерами и морями, но и богатым культурным наследием.
        Именно здесь русские традиции смешиваются с азиатскими: японскими, китайскими, корейскими. Регион буквально дышит историей.
        Дальневосточники бережно относятся к своему прошлому. Здесь открывают новые музеи, облагораживают территории национальных парков и заповедников.
        </p>
        </article>
        </div>
      </div>
    );
}
export default Home;
