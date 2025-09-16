'use client';



export default function TogglePanel({ setBg }: { setBg: (bg: string) => void }) {
  return (
    <div className="fixed z-10 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg gap-2 flex flex-row md:flex-col bottom-4 left-1/2 -translate-x-1/2 md:top-1/2 md:left-4 md:-translate-y-1/2">
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
      <button
        onClick={() => setBg('bg3')}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200"
      >
        bg3
      </button>
      <button
        onClick={() => setBg('bg4')}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200"
      >
        bg4
      </button>
    </div>
  );
}
