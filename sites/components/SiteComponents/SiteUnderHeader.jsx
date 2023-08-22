import Challanges from "./UnderHeaderComponents/Challanges.jsx";


const SiteUnderHeader = () => {


    return (
        <>
           <div className="Main_UnderHeader">
               <div className="left">
                   <div className="leftm">
                   <a href="" className="transfer">
                       <div className="btn btn1">
                           <p className="text">Challanges</p>
                       </div>
                   </a><a href="" className="transfer">
                   <div className="btn">
                       <p className="text">Goals</p>
                   </div>
               </a><a href="" className="transfer">
                   <div className="btn">
                       <p className="text">Earnings</p>
                   </div>
               </a>
                   <a href="" className="transfer">
                       <div className="btn">
                           <p className="text">Total Money <br/> Saved </p>
                       </div>
                   </a>
                   </div>


               </div>
               <div className="right">
              <div className="rightMain">
                  <Challanges/>


              </div>
               </div>
           </div>



        </>




    )



}




export default SiteUnderHeader