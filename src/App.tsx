import { useState } from "react";
import Navbar from "./components/MenuBar/Navbar";
import { SelectedPage } from "./utility/types";

function App() {
  const [selectedPage,setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <section className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      
    </section>
  );
}

export default App;