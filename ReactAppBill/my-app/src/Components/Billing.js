import './Billing.css'
import Airtel_logo from '../Assests/logo.png'
import jsPDF from 'jspdf';

export function Billing(props){
    console.log(props.email)
    function onClick(){
        const doc = new jsPDF();
    
       
        var elementHTML = document.querySelector("#p");
    
        doc.html(elementHTML, {
            callback: function(doc) {
                // Save the PDF
                doc.save('sample-document.pdf');
            },
             margin: [10, 10, 10, 10],
            
            y: 10,
            width: 180, //target width in the PDF document
            windowWidth: 650 //window width in CSS pixels
        });}
    return(
        <>
         <div className='container' id='p'>
         <h1 >  INVOICE</h1>
               <div className='grid-parent'>
                
                <div className='c-1 flex-r' ><span>Mobile Service</span> <p>LB</p></div>
                {/* <div className='c-2'></div> */}
                <div className='c-3'><div>
                           <p >
                           <p >{props.name}</p>
                           <p >{props.Agent}</p>
                           <p >No 122,King raj road vikram aircel street</p>
                            <p>
                                <h6>scan here</h6>
                                <img src="https://www.tinydecozone.com/wp-content/uploads/2022/05/Barcode-PNG-Photo.png"></img>
                            </p>
                           </p>
                    </div></div>
                <div className='c-4'>
                <div>
                          
                           <p className='flex-r'>{props.Agent}  No: <span> {props.MobileNo}</span></p>
                           <p className='flex-r'>shipment No:<span>23</span></p>
                           <p className='flex-r'>Bill No:<span>2</span></p>
                           <p className='flex-r'>Bill Date:<span>{props.StartDate}</span></p>
                           <p className='flex-r'>No 122,King raj road vikram aircel street</p>
                            
                        
                    </div>

                </div>
                <div className='c-5'>New Delhi, September 15, 2021announced by the Government of India </div>
                <div className='c-6'>
                <div>
                           <p className='Account'>
                            <h5>YOUR ACCOUNT BALANCE</h5>
                            <p className='flex-r'>Previous Balance<span>2000</span></p>
                            <p className='flex-r'>payment Mode<span>Gpay</span></p>
                            <p className='flex-r'>Current Bill<span>5000</span></p>
                            <p className='flex-r'>Due Date<span>22/10/2002</span></p>
                            
                           </p>
                    </div>

                </div>
                <div className='c-7'>
                <div>
                           <p className='Account'>
                            <h5>THIS MONTH CHARGES</h5>
                            <p className='flex-r'> Monthly rent<span className='padd '>2000</span></p>
                            <p className='flex-r'> total usage<span className='padd'>1000</span></p>
                            <p className='flex-r'>OneTimeCharge<span className='padd-1'>5000</span></p>
                            <p className='flex-r'>Tax<span>200</span></p>
                            
                            <p className='flex-r border '><span className=' up-line'>Total</span><span className='money'>45000</span></p>
                          
                           
                           </p>
                    </div>
                </div>
                {/* <div className='c-8'>
                    <div>
                        <img src='wallet.png'></img>
                    </div>
                </div> */}
                <div className='c-9'>
                    <div className='Account'>
                        <h5>Trafic details</h5>
                        <div className='grid'>
                            <div className='i-1'>

                            </div>
                            <div className='i-2'>
                                <h4>Call rates </h4>
                                <p>
                                    <p>To {props.Agent} Mobile:</p>
                                    <p>TTo Other Mobile:</p>
                                    <p>TTo Landline:</p>
                                    <p>TVideo call:</p>
                                </p>
                            </div>
                            <div className='i-3'>
                            <h5>Local</h5>
                                <p>
                                <p>T0/min</p>
                                <p>T0/min</p>
                                <p>T1.5/min</p>
                                <p>T 2/min</p>
                                </p>
                            </div>
                            <div className='i-4'>
                            <h5>STD</h5>
                                <p>
                                <p>0/min</p>
                                <p> 0/min</p>
                                <p> 1.5/min</p>
                                <p> 2/min</p>
                                </p>
                            </div>
                            <div className='i-5'>
                            <h5>SMS Rates</h5>
                                <p>
                                <p>2</p>
                                <p> 6</p>
                                <p> 8</p>
                                <p> 0</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='c-10'>
                    <p>
                        <p>{props.Agent} No:{props.MobileNo}</p>
                        <p>Amount Due:300</p>
                        <p>For pay this order,payment should be in favour of "{props.Agent} Mobile No :{props.MobileNo}"</p>
                        
                    </p>
                </div>
                

               </div>
               
         </div>
     <div className='btn-bill'>
         <button onClick={onClick} className='submit'>
            Activate Lasers
          </button>
          </div>
        </>
            
    )
}