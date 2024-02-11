import { useState } from 'react'
function App() {

  const [color, setColor] = useState("aqua")

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }} >
        <div className="flex flex-wrap justify-center inset-x-0 px-2 ">
          <div className="flex flex-wrap gap-3">
            <button onClick={()=> setColor("red")} className="rounded-full px-4 py-1">Red</button>
            <button onClick={()=> setColor("green")} className="rounded-full  px-4 py-1">Green</button>
            <button onClick={()=> setColor("blue")} className="rounded-full  px-4 py-1">Blue</button>
            <button onClick={()=> setColor("yellow")} className="rounded-full  px-4 py-1"> Yellow</button>
            <button onClick={()=> setColor("black")} className="rounded-full  px-4 py-1">Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
