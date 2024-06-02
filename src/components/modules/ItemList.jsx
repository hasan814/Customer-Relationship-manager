import FormInput from "@/elements/FormInput";
import { v4 as uuidv4 } from "uuid";

const ItemList = ({ form, setForm }) => {
  // =========== Form ==========
  const { products } = form;

  // =========== Function ==========
  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = (event, index) => {
    const { name, value } = event.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };
  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  // =========== Rendering ==========
  return (
    <div className="item-list">
      <p>Purchased Products</p>
      {products.map((product, index) => (
        <div className="form-input__list" key={index}>
          <FormInput
            name="name"
            label="Product Name"
            type="text"
            value={product.name}
            onChange={(event) => changeHandler(event, index)}
          />
          <div>
            <FormInput
              name="price"
              label="Product Price"
              type="text"
              value={product.price}
              onChange={(event) => changeHandler(event, index)}
            />
            <FormInput
              name="qty"
              label="Product Qty"
              type="number"
              value={product.qty}
              onChange={(event) => changeHandler(event, index)}
            />
          </div>
          <button onClick={() => deleteHandler(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ItemList;
