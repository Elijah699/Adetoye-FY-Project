// src/store.ts
import create from 'zustand';

interface TimerState {
  time: number;
  isRunning: boolean;
  intervalId: NodeJS.Timeout | null;
  setTime: (time: number) => void;
  setIsRunning: (isRunning: boolean) => void;
  setIntervalId: (intervalId: NodeJS.Timeout | null) => void;
  resetTimer: () => void;
}

const useTimerStore = create<TimerState>((set) => ({
  time: 1500, // Default 25 minutes in seconds
  isRunning: false,
  intervalId: null,
  setTime: (time) => set({ time }),
  setIsRunning: (isRunning) => set({ isRunning }),
  setIntervalId: (intervalId) => set({ intervalId }),
  resetTimer: () => set({ time: 1500, isRunning: false, intervalId: null }),
}));

export default useTimerStore;
