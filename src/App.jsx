import React from "react";
import Searchbar from "./searchbar";
import Card from "./card";
import { useState } from "react";


const App = () => {

  const [searchfield, setSearchfield] = useState("");

return (
  <div className=" hight-100vh width-100vh margin-0 " id="shico">  

  <Searchbar searchfield={searchfield} setSearchfield={setSearchfield} />

  <Card searchfield = {searchfield}/>
  </div>

)

}



export default App ;