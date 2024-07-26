import useTaskStore from '../../store/task';

const TaskList = () => {
  const tasks = useTaskStore((state: any) => state.tasks);
  console.log(tasks);
  const updateTask = useTaskStore((state: any) => state.updateTask);

  const handleUpdateTaskState = ({id, newState}: any) => {
    updateTask(id, { state: newState });
  };

  return (
    <div className='wrapper pt-10 md:pt-32 2xl:pt-48'>
        <h2 className="header-two">All Tasks</h2>
        <div>
      {tasks.map((task: any) => (
        <div key={task.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.state}</p>
          <button onClick={() => handleUpdateTaskState(task.id, 'in-progress')}>In Progress</button>
          <button onClick={() => handleUpdateTaskState(task.id, 'completed')}>Completed</button>
        </div>
      ))}
    </div>

    </div>
    
  );
};

export default TaskList;
