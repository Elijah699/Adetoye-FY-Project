import TaskInput from './AddTasks'
import Hero from './Hero'
import PomodoroTimer from '../podmoro/PodmoroTimer'

const LandingPage = () => {
  return (
    <>
    <Hero />
    <TaskInput />
    <PomodoroTimer />
    </>
  )
}

export default LandingPage