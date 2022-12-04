import React from 'react'
import jsPDF from 'jspdf';
import './three.css'

export default function Three() {
    // console.log(props.email)
    function onClick(){
        const doc = new jsPDF();
    
       
        var elementHTML = document.querySelector("#p");
    
        doc.html(elementHTML, {
            callback: function(doc) {
                // Save the PDF
                doc.save('sample-document.pdf');
            },
             margin: [10, 10, 10, 10],
            
            y: 6,
            width: 180, //target width in the PDF document
            windowWidth: 650 //window width in CSS pixels
        });}

    return(
        <>
         <div className='container' id='p'>
         <h1 >invo</h1>
         <input placeholder='red' ></input>
         <input placeholder='red'></input>
         <img src="wallet.png"></img>
        <button onClick={onClick}>Activate Laser</button>
        
        </div>
    
        </>
    )
}