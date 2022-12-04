
import './App.css';
import { Welcome } from './Components/Welcome';
import { BrowserRouter, Routes, Route ,Navigate, Link,Outlet,useParams,NavLink} from "react-router-dom";
import { Form } from './Components/Form';
import { Billing } from './Components/Billing';
import jsPDF from 'jspdf';
import { useState } from 'react';

import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     
     <Welcome></Welcome> 
     <Form></Form>
     <Contact></Contact>
     <Footer></Footer>
      {/* <Billing></Billing> */}
      

      
    </div>
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Home/>}></Route>
    //   <Route path='/Learn'  element={<Learn></Learn>}>
    //     <Route path='Course' element={<Course/>}>
    //       <Route path=':Courseid' element={<Courseid/>}></Route>
    //     </Route>
    //     <Route path='Bundle' element={<Bundle/>}></Route>
    //   </Route>
    //   <Route path='/Skills' element={<Navigate replace to="/Learn"/>}></Route>
      

    // </Routes>
    // </BrowserRouter>
    
  //  <h1>;ll</h1>
      
      
  );
}
// function Courseid(){
//   const {Courseid}=useParams()
//   return(
//   <>
//  <h1>{Courseid}</h1>

  
//   </>)
// }
// function Course(){
//   let arr=["red","blue"]
//   let Rand=arr[Math.floor(Math.random()*arr.length)]
//   console.log(Rand)
//   return(
//     <>
//     <br></br>
//     <button>course</button>
//      <NavLink style={({isActive})=>{
//       return{
//          backgroundColor:isActive ? "pink" : "white"}
      
      
//      }}  

//      to={`/Learn/Course/${Rand}` }>{Rand}
//      </NavLink>
//      <NavLink to={`/Learn/Course/test`}>test
//      </NavLink>
//     <Outlet></Outlet>
//     </>
//   )
// }
// function Bundle(){
//   return(
//     <>
//     <br></br>
//     <button>bundle</button>

    
//     </>
//   )
// }
// function Home(){
//   return(
//     <>
    
//     <h1>Welcome to My Tutorials</h1>
//     <Link to='/Learn'>Learn More</Link>
//     </>
//   )}

// function Learn(){
//   return(
//     <>
//     <h2>The below are the course</h2>
//     <Link to="/Learn/Course">Course</Link>
//     {"            "} 
//     <Link to="/Learn/Bundle">Bundle</Link>
//     <Outlet/>
//     </>
//   )
// }

export default App;
