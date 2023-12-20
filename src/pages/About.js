import React from "react";
import Banner from "../components/Banner.js";
import "./css/style.css";
function About() {
     return (
      <div style={{backgroundColor: "rgb(244, 198, 255)"}}>
       
        <Banner
          title="О нашем сайте"
          subtitle="Заказывайте экскурсии у нас!"
        />
        <div className="container3">
         <article>
<p style={{fontSize:"20px"}}>Вы можете заказать экскурсии по перечисленным местам на сайте.</p>
<p style={{fontSize:"20px"}}>Количество мест на экскурсии ограничено. Просим вас отнестись к этому с пониманием.</p>
<p style={{fontSize:"20px"}}>Дата создания сайта организации: 14 декабря 2023 года</p>
<p style={{fontSize:"20px"}}>Место нахождения офиса: г. Уссурийск, ул. Карбышево, д. 25а</p>
<h4>Режим и график работы:</h4>
<p style={{fontSize:"20px"}}>- службы: пн-пт, 10:00 - 18:00 (мск)</p>
<p style={{fontSize:"20px"}}>Контактный телефон/факс: +7(3247) 255-436, 12-85-98</p>
<p style={{fontSize:"20px"}}>Адрес электронной почты: Puteshesvie@mail.ru</p>
</article>
        </div>
      </div>
    );
}

export default About;
