import React from "react";
import Banner from "../components/Banner.js";
import "./css/style.css";
function Contact() {
    return (
      <div style={{backgroundColor: "rgb(244, 198, 255)"}}>
       
        <Banner title="Регистрациия"/>
        <div className="container">
        <p>Спасибо за Ваш интерес! Сообщите о себе:</p>
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Имя</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Телефон</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Название достопримечательности</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  name="text"
                  placeholder="Where are we going?"
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Отправить
                </button>
              </div>
            </div>
          </form>
        </div>
       </div>
    );
}

export default Contact;
