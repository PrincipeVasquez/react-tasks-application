import TaskList from "./Components/TaskList";
import TaskForm from './Components/TaskForm';

function App() {

  return <main className="bg-gray-50 dark:bg-gray-900 h-screen flex flex-col items-center pb-10">
    <div className="container">
      <TaskForm />
      <TaskList />
    </div>
  </main>
}

export default App;