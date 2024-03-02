export function Product({ title }) {
  var products = ["Apple Brand", "Samsung Brand", "Oneplus Brand"];
  var [a, b, c] = products;
  // props object type :  props = { title="Mobile Brand" }
  return (
    <div>
      <h2>{title}</h2>
      <ol>
        <li>{a}</li>
        <li>{b}</li>
        <li>{c}</li>
      </ol>
    </div>
  );
}
