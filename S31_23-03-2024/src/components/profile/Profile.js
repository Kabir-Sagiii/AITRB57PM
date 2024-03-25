import "./Profile.css";
import { useState } from "react";

function Profile() {
  let [theme, setTheme] = useState({
    bgColor: "white",
    textColor: "black",
    title: "Check to switch Dark Theme",
  });
  let [user, setUser] = useState({
    image: "https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg",
    name: "Raj Verma",
    email: "rajverma@gmail.com",
    city: "Banglore",
  });

  function changeDataToSonal() {
    setUser({
      image:
        "https://th.bing.com/th/id/OIP.1B8x7MHo9IB90YNCkKRXDgHaJQ?rs=1&pid=ImgDetMain",
      name: "Sonal Patel",
      email: "sonalpatel@gmail.com",
      city: "Mumbai",
    });
  }

  function changeDataToRaj() {
    setUser({
      image: "https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg",
      name: "Raj Verma",
      email: "rajverma@gmail.com",
      city: "Banglore",
    });
  }

  function changeTheme(event) {
    if (event.target.checked) {
      setTheme({
        bgColor: "black",
        textColor: "white",
        title: "Uncheck to switch Light Theme",
      });
    } else {
      setTheme({
        bgColor: "white",
        textColor: "black",
        title: "Check to switch Dark Theme",
      });
    }
  }
  return (
    <div id="flexContainer">
      <div className="left">
        <img src={user.image} width="100%" height="100%" alt="user image" />
      </div>

      <div
        className="right"
        style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      >
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{user.name}</dd>
          <dt>
            <b>User City</b>
          </dt>
          <dd>{user.city}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{user.email}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nobis perspiciatis veniam accusantium? Harum, adipisci explicabo.
            Voluptate atque, consequatur a officia hic nisi iusto, explicabo
            delectus ad laborum, magni impedit?
          </dd>
        </dl>
        <input
          type="radio"
          name="user"
          defaultChecked
          onClick={changeDataToRaj}
        />
        Raj Verma
        <input type="radio" name="user" onClick={changeDataToSonal} />
        Sonal Patel
        <br />
        <br />
        <div>
          <input type="checkbox" onChange={changeTheme} />
          <label>{theme.title}</label>
        </div>
      </div>
    </div>
  );
}

export default Profile;
