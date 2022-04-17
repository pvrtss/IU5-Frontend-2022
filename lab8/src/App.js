import './App.css'; 
import './Tasks';

function App() {
  
  const [tasks, setTasks] = React.useState([]);


  function toggleDone(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      })
    );

  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function editTask(id, text) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.text = text;
        }
        return task;
      })
    );
  }

  function createTask(text) {
    setTasks(
      tasks.concat([
        {
          id: Date.now(),
          text,
          done: false,
        }
      ])
    );
  }
  
  
  
  
  
  
  return (
    <div className="App">
      <div className='Logo'>Задачи</div>
      <Tasks/>

      </div>
  );
}

export default App;
