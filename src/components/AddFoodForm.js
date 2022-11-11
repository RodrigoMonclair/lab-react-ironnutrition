import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    calories: 0,
    image: '',
    servings: 0,
  });

  function handleChange(e) {
    console.log(e.target.name) //isso me traz a key(o name) do input
    console.log(e.target.value) // isso me traz a tecla que eu cliquei
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAllFoods([...allFoods, form]);

    setForm({
      name: '',
      calories: 0,
      image: '',
      servings: 0,
    });
  }

  return (
    <div>
      <form style={{ width: '70vw' }}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input
          value={form.name}
          name="name"
          type="text"
          onChange={handleChange}
        />

        <label>Image</label>
        <Input
          value={form.image}
          name="image"
          type="text"
          onChange={handleChange}
        />
        {/* render antd <Input /> type="text" here */}

        <label>Calories</label>
        <Input
          value={form.calories}
          min="0"
          name="calories"
          type="number"
          onChange={handleChange}
        />
        {/* render antd <Input /> type="number" here */}

        <label>Servings</label>
        <Input
          value={form.servings}
          min="0"
          name="servings"
          type="number"
          onChange={handleChange}
        />
        {/* render antd <Input /> type="number" here */}

        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default AddFoodForm;
