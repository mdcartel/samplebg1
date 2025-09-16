'use client';

import { useState } from 'react';

export default function TogglePanel({ setBg }: { setBg: (bg: string) => void }) {
  return (
    <div className="fixed top-1/2 left-4 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg flex flex-col gap-2">
      <button
        onClick={() => setBg('bg1')}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200"
      >
        bg1
      </button>
      <button
        onClick={() => setBg('bg2')}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200"
      >
        bg2
      </button>
    </div>
  );
}
