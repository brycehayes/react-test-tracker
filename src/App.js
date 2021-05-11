import Header from './components/Header';
import Tasks from './components/Tasks';
import Wines from './components/Wines';
import Books from './components/Books';
import Bikes from './components/Bikes';
import FrenchCities from './components/FrenchCities';

import { useState, useEffect } from'react';
import AddTask from './components/AddTask';
import AddBicycle from './components/AddBicycle';


function App() {

    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        //use async because we are going to call FetchTasks which returns a promise

        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        } 
        getTasks();
    }, [])

    //Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();

        return data;
    }

    //Cities is the State
    //setCities is a function that allows you to change the State
    const [cities, setCities] = useState ([
      {
          id: 1,
          name: 'Pari',
          population: 2200000, 
          visited: false,   
      },
      {
          id: 2,
          name: 'Lyon',
          population: 720000,
          visited: false,    
      },
      {
          id: 3,
          name: 'Nice',
          population: 340000,
          visited: true,    
         },
  ]);

  const [wines, setWines] = useState ([
    {
        id: 1,
        name: 'Châteauneuf-du-Pape',
        region: 'La Provence',
        year: '2019',
        sampled: false,
    },
    {
        id: 2,
        name: 'Château Le Coin',
        region: 'Bordeaux',
        year: '2018',
        sampled: false,
    },
    {
        id: 3,
        name: 'Cabalié 2020',
        region: "Pays d'Oc",
        year: '2020',
        sampled: false,
    },
    {
      id: 4,
      name: 'Cote du Rhone',
      region: "Rhone Valley",
      year: '2017',
      sampled: true,
    },
]);
 
const [bikes, setBikes] = useState ([
  {
      id: 1,
      company: 'Colnago',
      type: 'Road',
      available: true
  },
  {
      id: 2,
      company: 'Trek',
      type: 'Mountain Bike',
      available: true
  }, 
  {
      id: 3,
      company: 'Ribble',
      type: 'Gravel Bike',
      available: false
  },
  {
      id: 4,
      company: 'Raleigh',
      type: 'Hybrid',
      available: true
  },
  {
    id: 6,
    company: 'Cannondale',
    type: 'TT',
    available: true
  },

]);

const [books, setBooks] = useState([
  {
      id: 1,
      title: "Catch 22",
      author: "Josesph Heller"
  },
  {
      id: 2,
      title: "To kill a mockingbird",
      author: "Harper Lee"
  },
  {
      id: 3,
      title: "Le petit Nicolas",
      author: "Sempe"
  },
]);

//Add task
const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    //console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]); 
}

//Delete Task
const deleteTask = (id) => {
    setTasks( tasks.filter((task) => task.id !== id))
}


const deleteBike = (id) => {
    setBikes( bikes.filter((bike) => bike.id !== id));
}

const deleteCity = (id) => {
    setCities ( cities.filter( (city) => city.id !== id));
}

const deleteWine = (id) => {
    setWines( wines.filter((wine) => wine.id !== id));
}



//Toggle Reminder
//{...task, reminder: !task.reminder} ...  This will go through all the task properties and values
//and you want to change the reminder from true to false for the specified id.
const toggleReminder = (id) => {
    console.log("The id of the task is: ", id);
    setTasks ( tasks.map( (task) => task.id === id ? {...task, reminder: !task.reminder} : task));
}




//Toggle Available
const toggleAvailable = (id) => {
    console.log("The id of the task is: ", id);
    setBikes ( bikes.map( ( bike) => bike.id === id ? {...bike, available: !bike.available} : bike));
    //console.log("The id of bike is: ", id);
}





const toggleSampled = (id) => {
    console.log(id);
}

  return (
    <div className="container">
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      <AddBicycle></AddBicycle>
      {/* {showAddTask ? <AddTask onAdd={addTask}/> : <div/>} */}
      {tasks.length > 0 ? <Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h2>No Tasks left</h2>} 
      {/* <Books books={books}></Books> */}
      <Bikes bikes={bikes} onDelete={deleteBike} onToggle={toggleAvailable}></Bikes>
      {/* <FrenchCities cities={cities} onDelete={deleteCity} onToggle={toggleRed}></FrenchCities> */}
      {/* <Wines wines={wines} onDelete={deleteWine}/> */}
    </div>
  );
}

export default App;
