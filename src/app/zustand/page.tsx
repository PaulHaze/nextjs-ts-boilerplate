'use client';

import { useCounterStore } from '@/stores/useCounterStore';

export default function ZustandPage() {
  const count = useCounterStore((state) => state.counter);
  const handleInc = useCounterStore((state) => state.increaseCounter);
  const handleDec = useCounterStore((state) => state.decreaseCounter);
  const handleReset = useCounterStore((state) => state.resetCounter);
  return (
    <div className="flex-col gap-y-5 pt-10 flex-center">
      <h1>Zustand Example</h1>
      <h5>Current count is {count}</h5>
      <div className="flex justify-center space-x-2">
        <button
          type="button"
          onClick={handleDec}
          className="rounded bg-white/80 px-4 py-2 text-slate-800"
        >
          -
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="flex-grow rounded border border-slate-700 px-4"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleInc}
          className="rounded bg-white/80 px-4 py-2 text-slate-800"
        >
          +
        </button>
      </div>
    </div>
  );
}
