import { A4Page } from 'react-html2pdf'
import './Form.css'
import { useState } from 'react';
import { ReactDOM } from 'react';
import { Billing } from './Billing';
export function Form(){
    // const formData=[];
    const [name, setName] = useState('John');
    const [Agent,setAgent]= useState('Airtel')
    // state for storing email
    const [MobileNo, setMobileNo] = useState('9000344544');
    const [StartDate, setStartDate] = useState('21/10/2002');
    const [EndDate, setEndDate] = useState('');
  
    // function for storing name
    const handleNameChange = e => {
        setName(e.target.value)
    };
    const handleSimAgent = e => {
        setAgent(e.target.value)
    };
    // function for storing email
    const handleMobileNo = e => {
        setMobileNo(e.target.value)
    };
  
    const handleStartDate = e => {
        setStartDate(e.target.value)
    };
  
    const handleEndDate = e => {
        setEndDate(e.target.value)
    };
  
  
    
    
    // function for handling form submission
    const handleFormSubmit = e => {
      e.preventDefault();
      // object to store input data
       const formData = {
        name: name,
        simAgent:Agent,
        mobile:MobileNo,
        sdate:StartDate,
        edate:EndDate};
    
      
    };
    
    return(
        <>
        <div className='Main_container' id='m'>
              {/* <h1>{form.name}</h1> */}
            <div className='content'>
                   
                   <h1>BILLING CALCULATOR </h1>
                   <div className='effects' >
                    <form className='form' onSubmit={handleFormSubmit}>
                            
                        <div className='form_child'><legend>Name</legend><input type="text" placeholder="John" onChange={handleNameChange}></input></div>
                        <div className='form_child'><legend>Sim Agent:</legend><input onChange={handleSimAgent} type="text" placeholder="Airtel" id='sim'></input></div>
                        <div className='form_child'><legend>Mobile No:</legend> <input type="text" placeholder="9567997xxxx" onChange={handleMobileNo}></input></div>
                        <div className='form_child'> <legend>Bill Date:</legend><input type="date" onChange={handleStartDate}></input></div>
                        {/* <div className='form_child'> <legend>End Date:</legend><input type="date" onChange={handleEndDate}></input></div> */}
                        {/* <button className='submit' >Calculate</button> */}

                     </form>
                   </div>
                   <div className='bill'>
                   <Billing name={name} Agent={Agent} MobileNo={MobileNo} StartDate={StartDate} EndDate={EndDate} ></Billing>
                   </div>
            </div>

        </div>
        </>
    )
}