import { useState } from "react";

export const Challenge = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState(["First category"]);

  const handleAddCategory = () => {
    setCategories((list) => [...list, category]);
    setCategory("");
  };

  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <h1>Challenge</h1>
      <input
        type="text"
        value={category}
        onChange={(event) => handleInputChange(event)}
      />
      <button onClick={() => handleAddCategory()}>Add Category</button>
      <ul>
        {categories.map((category, key) => {
          return <li key={key}>{category}</li>;
        })}
      </ul>
    </>
  );
};
