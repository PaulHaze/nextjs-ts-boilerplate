'use client';

import { useTheme } from 'next-themes';

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="">ThemeToggler</h1>
      <button
        onClick={toggleTheme}
        aria-label="auto"
        aria-live="polite"
        className="rounded px-5 py-3"
      >
        <svg
          className="sun-and-moon text-stone-800 dark:text-stone-200"
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <circle
            className="sun"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="currentColor"
          />
          <g className="sun-beams" stroke="currentColor">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </button>
      {/* <div className="h-20 w-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46">
          <path
            fill="currentColor"
            d="M18 6.42a1 1 0 0 0 1-1V1.91a1 1 0 0 0-2 0v3.51a1 1 0 0 0 1 1"
            class="clr-i-solid clr-i-solid-path-1"
          />
          <path
            fill="currentColor"
            d="M18 29.58a1 1 0 0 0-1 1v3.51a1 1 0 0 0 2 0v-3.51a1 1 0 0 0-1-1"
            class="clr-i-solid clr-i-solid-path-2"
          />
          <path
            fill="currentColor"
            d="M8.4 9.81A1 1 0 0 0 9.81 8.4L7.33 5.92a1 1 0 0 0-1.41 1.41Z"
            class="clr-i-solid clr-i-solid-path-3"
          />
          <path
            fill="currentColor"
            d="M27.6 26.19a1 1 0 0 0-1.41 1.41l2.48 2.48a1 1 0 0 0 1.41-1.41Z"
            class="clr-i-solid clr-i-solid-path-4"
          />
          <path
            fill="currentColor"
            d="M6.42 18a1 1 0 0 0-1-1H1.91a1 1 0 0 0 0 2h3.51a1 1 0 0 0 1-1"
            class="clr-i-solid clr-i-solid-path-5"
          />
          <path
            fill="currentColor"
            d="M34.09 17h-3.51a1 1 0 0 0 0 2h3.51a1 1 0 0 0 0-2"
            class="clr-i-solid clr-i-solid-path-6"
          />
          <path
            fill="currentColor"
            d="m8.4 26.19l-2.48 2.48a1 1 0 0 0 1.41 1.41l2.48-2.48a1 1 0 0 0-1.41-1.41"
            class="clr-i-solid clr-i-solid-path-7"
          />
          <path
            fill="currentColor"
            d="m27.6 9.81l2.48-2.48a1 1 0 0 0-1.41-1.41L26.19 8.4a1 1 0 0 0 1.41 1.41"
            class="clr-i-solid clr-i-solid-path-8"
          />
          <circle
            cx="18"
            cy="18"
            r="10"
            fill="currentColor"
            class="clr-i-solid clr-i-solid-path-9"
          />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
      </div> */}
    </div>
  );
}
