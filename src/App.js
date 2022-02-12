import react from 'react';
import Header from "./Components/Header"
import Content from "./Components/Content"
import Slide from "react-reveal"
import "./App.css"


function App(){
  return(<>
  <Slide top><Header/></Slide>
  <Content/>

  </>)}

export default App; 