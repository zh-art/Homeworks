import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";

function App() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddCategory = () => {
    if (category.trim() !== "") {
      setCategories([...categories, category]);

      setCategory("");
    }
  };

  return (
    <>
      <h2>Bienvenidoooo</h2>
      <h2>Im Juan Bohorquez - Daaz</h2>
      <div>
        <input
          type="text"
          value={category}
          onChange={handleInputChange}
          placeholder="Enter category"
        />
        <button onClick={handleAddCategory}>Add Category</button>

        <ul>
          {categories.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

App.PropTypes = {
  tittle: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
};

App.defaultProps = {
  tittle: "Im Juan Bohorquez - Daaz",
  sum: 20,
};

export default App;
