import { useState } from "react";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Sentiment from "./components/Sentiment";
import About from "./components/About";


function App() {

  const [isPage, setIsPage] = useState('home')
  console.log("ispage mail", isPage)

  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-full bg-gray-800 p-4 w-64">
        <Sidebar isPage={isPage} setIsPage={setIsPage} />
      </div>
      <div className="ml-64 w-full p-4">
        {isPage === "home" ? <HomePage /> : (isPage === 'analytics' ? <Sentiment /> : <About />)}
      </div>
    </div>
  );
}

export default App;
