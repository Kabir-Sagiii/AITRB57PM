import "./Profile.css";
import { useState } from "react";

function Profile() {
  let [image, setImage] = useState(
    "https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg"
  );
  let [name, setName] = useState("Raj Verma");
  let [email, setEmail] = useState("raj@gmail.com");
  let [city, setCity] = useState("Pune");
  function changeDataToSonal() {
    setImage(
      "https://i.pinimg.com/originals/e6/78/4b/e6784b9cd722d02e014d7e60ebe25e39.jpg"
    );
    setName("Sonal Patel");
    setCity("Surat");
    setEmail("sonal@gmail.com");
  }

  function changeDataToRaj() {
    setImage("https://cdn9.dissolve.com/p/D430_49_193/D430_49_193_1200.jpg");
    setName("Raj Verma");
    setCity("Pune");
    setEmail("raj@gmail.com");
  }
  return (
    <div id="flexContainer">
      <div className="left">
        <img src={image} width="100%" height="100%" alt="user image" />
      </div>

      <div className="right">
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{name}</dd>
          <dt>
            <b>User City</b>
          </dt>
          <dd>{city}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{email}</dd>
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
        <button onClick={changeDataToRaj}>Raj Verma</button>&nbsp;&nbsp;
        <button onClick={changeDataToSonal}>Sonal Patel</button>
      </div>
    </div>
  );
}

export default Profile;
