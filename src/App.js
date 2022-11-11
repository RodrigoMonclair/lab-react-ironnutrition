import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button, Input } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  /*  console.log(allFoods); */
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false)

  function handleShowForm(){
    setShowForm(!showForm)
  }
  

  return (
    <div className="App">

    {showForm === true &&  (<AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />)}
      
      <Button onClick={handleShowForm}>{showForm === true? <span>Hide Form</span>:<span>Add New Food</span>}</Button>

      {/* Display Search component here */}
      
      <SearchBar search={search} setSearch={setSearch}/>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}

        {allFoods
          .filter((food) => {
            return food.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((food) => {
            return (
              <div>
                <FoodBox
                  food={{
                    name: food.name,
                    calories: food.calories,
                    image: food.image,
                    servings: food.servings,
                  }}
                  key={food.name}
                  allFoods = {allFoods}
                  setAllFoods = {setAllFoods}
                />
              </div>
            );
          })}
      </Row>
    </div>
  );
}

export default App;
