import { Profile } from "../profile/Profile";
import { Product } from "../products/Product";
function Home() {
  return (
    <div>
      <Product title="Mobile Brand" />

      <Product title="Jewelery's" />
      <Product title="Electronics and Clothing" />
    </div>
  );
}

export default Home;
