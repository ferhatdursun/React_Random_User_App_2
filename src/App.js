import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [user, setUser] = useState([]);
  const [text, setText] = useState("name");
  const [info, setInfo] = useState("");
  const [myuser, setMyuser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  const addUser = () => {
    if (!myuser.includes(user)) {
      setMyuser([...myuser, user]);
    } else {
      alert("Kisi listede mevcuttur.");
    }
  };

  console.log(user);

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img
            src={user.picture?.large}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {text} is</p>
          <p className="user-value">{info}</p>

          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={() => {
                setText("name");
                setInfo(
                  user.name?.title +
                    " " +
                    user.name?.first +
                    " " +
                    user.name?.last
                );
              }}
            >
              <img src={womanSvg} alt="user" id="iconImg" />
            </button>

            <button
              className="icon"
              data-label="email"
              onMouseOver={() => {
                setText("email");
                setInfo(user?.email);
              }}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>

            <button
              className="icon"
              data-label="age"
              onMouseOver={() => {
                setText("age");
                setInfo(user.dob?.age);
              }}
            >
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>

            <button
              className="icon"
              data-label="street"
              onMouseOver={() => {
                setText("street");
                setInfo(
                  user.location?.street.number +
                    " " +
                    user.location?.street.name
                );
              }}
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>

            <button
              className="icon"
              data-label="phone"
              onMouseOver={() => {
                setText("phone");
                setInfo(user.phone);
              }}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>

            <button
              className="icon"
              data-label="password"
              onMouseOver={() => {
                setText("password");
                setInfo(user.login.password);
              }}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>

          <div className="btn-group">
            <button className="btn" type="button" onClick={getUser}>
              new user
            </button>

            <button className="btn" type="button" onClick={addUser}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {myuser.map((i) => (
                <tr className="body-tr" key={i.email}>
                  <td>{i.name?.first}</td>
                  <td>{i.email}</td>
                  <td>{i.phone}</td>
                  <td>{i.dob?.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
