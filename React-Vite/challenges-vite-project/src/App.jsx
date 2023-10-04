import { useState } from 'react'
import './App.css'

function App() {

 const [category, setCategory] = useState('');
 const [categories, setCategories] = useState([]);
 const handleInputChange = (event) => {
   setCategory(event.target.value);
 };

 const handleAddCategory = () => {
   if (category.trim() !== '') {
    
     setCategories([...categories, category]);

     setCategory('');
   }
 };

 return (
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
 );
}

export default App;