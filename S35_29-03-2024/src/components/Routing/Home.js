import React from "react";
import { UseSelector, useSelector } from "react-redux";

function Home() {
  let { name, city } = useSelector(function (info) {
    return info.user;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h2>Home Component</h2>
      <p>Name:{name}</p>
      <p>City:{city}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero cumque
        recusandae ipsa, veniam rem modi illum maxime perspiciatis itaque
        pariatur! Excepturi, laborum ea nisi saepe vel voluptatem quidem! Odio
        magnam architecto, hic voluptatum, officia fuga a laudantium optio omnis
        veritatis nulla recusandae autem aliquid ex enim maxime eius consectetur
        dolorum? Odit ad, atque fugiat consequatur rem ab, laboriosam, soluta ex
        velit eos tenetur provident numquam in maiores eligendi. Repellendus aut
        perspiciatis exercitationem tempora aspernatur eos distinctio molestias
        porro, amet magnam commodi fuga cum expedita eaque ea saepe. Ratione
        neque quod beatae dolorem temporibus debitis, officiis accusantium
        architecto, suscipit quibusdam itaque iste, recusandae incidunt
        explicabo. Pariatur quia quam assumenda deserunt architecto, dignissimos
        magni tempora natus labore, itaque deleniti enim reprehenderit
        excepturi, sed quod nesciunt neque accusamus accusantium cum et esse. Ex
        quia rem obcaecati officia similique reiciendis sequi eos hic nesciunt
        recusandae, omnis iste. Obcaecati illo omnis, libero illum voluptas ea
        laboriosam sint dolorum eaque dolor quae magnam minima suscipit iste
        delectus quidem commodi blanditiis! Voluptates ipsum exercitationem
        impedit, quas ipsam eius voluptatum tenetur neque rerum expedita,
        tempore vel velit mollitia eveniet totam et sed architecto dolorem nihil
        voluptatibus assumenda ducimus magnam. Doloremque repellendus beatae
        aliquid eum earum at totam quisquam?
      </p>
    </div>
  );
}

export default Home;
