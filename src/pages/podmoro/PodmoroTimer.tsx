// src/components/PomodoroTimer.tsx
import React, { useEffect } from 'react';
import useTimerStore from '../../store/podmoro';

const PomodoroTimer: React.FC = () => {
  const { time, isRunning, setTime, setIsRunning, setIntervalId, resetTimer } = useTimerStore((state) => ({
    time: state.time,
    isRunning: state.isRunning,
    setTime: state.setTime,
    setIsRunning: state.setIsRunning,
    setIntervalId: state.setIntervalId,
    resetTimer: state.resetTimer,
  }));

  useEffect(() => {
    if (time === 0) {
      resetTimer();
      alert('Time is up!');
    }
  }, [time, resetTimer]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(intervalId as unknown as NodeJS.Timeout);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    const intervalId = useTimerStore.getState().intervalId;
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimerHandler = () => {
    resetTimer();
    const intervalId = useTimerStore.getState().intervalId;
    if (intervalId) clearInterval(intervalId);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="wrapper flex flex-col items-center justify-center min-h-screen bg-black-100">
      <h1 className="text-4xl font-bold mb-4">Pomodoro Timer</h1>
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-6xl font-bold mb-6 text-black-100">{formatTime(time)}</h2>
        <div className="space-x-4">
          <button
            onClick={startTimer}
            disabled={isRunning}
            className={`px-4 py-2 rounded ${isRunning ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'} text-white font-semibold`}
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            disabled={!isRunning}
            className={`px-4 py-2 rounded ${!isRunning ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700'} text-white font-semibold`}
          >
            Stop
          </button>
          <button
            onClick={resetTimerHandler}
            className="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-700 text-white font-semibold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
