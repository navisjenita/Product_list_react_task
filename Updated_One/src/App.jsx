import Header from "./header";
import FilterableCard from"./card"
import { useState } from "react";

function App() {
  
  
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery)

  return (
    <div>
<Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  <FilterableCard searchQuery={searchQuery}/>
  
    </div>
  );
}

export default App;