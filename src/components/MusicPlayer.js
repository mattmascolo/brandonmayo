import React from 'react'

const musicplayer = () => {
  return (
    <div>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=250&q=80" className="object-cover" />
            <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
              <h3 className="font-bold">Super Artist</h3>
              <span className="opacity-70">Albumtitle</span>
            </div>
          </div>
          <div>
            <div className="relative h-1 bg-gray-200">
              <div className="absolute h-full w-1/2 bg-green-500 flex items-center justify-end">
                <div className="rounded-full w-3 h-3 bg-white shadow" />
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
            <div>
              1:50
            </div>
            <div className="flex space-x-3 p-2">
              <button className="focus:outline-none">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20" /><line x1={5} y1={19} x2={5} y2={5} /></svg>
              </button>
              <button className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </button>
              <button className="focus:outline-none">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4" /><line x1={19} y1={5} x2={19} y2={19} /></svg>
              </button>
            </div>
            <div>
              3:00
            </div>
          </div>
          <ul className="text-xs sm:text-base divide-y border-t cursor-default">
            <li className="flex items-center space-x-3 hover:bg-gray-100">
              <button className="p-3 hover:bg-green-500 group focus:outline-none">
                <svg className="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </button>
              <div className="flex-1">
                Artist - Title
              </div>
              <div className="text-xs text-gray-400">
                2:58
              </div>
              <button className="focus:outline-none pr-4 group">
                <svg className="w-4 h-4 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" /></svg>
              </button>
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-100">
              <button className="p-3 hover:bg-green-500 group focus:outline-none">
                <svg className="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </button>
              <div className="flex-1">
                Artist - Title
              </div>
              <div className="text-xs text-gray-400">
                2:58
              </div>
              <button className="focus:outline-none pr-4 group">
                <svg className="w-4 h-4 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" /></svg>
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default musicplayer