import { useEffect, useState } from "react"
import Bloags from "../public/Bloags"
import Banner from "./Banner"
import Cards from "./Cards"
import Header from "./Header"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() { 
 let [card,setCard]=useState([]);
 let [cooks,setCooks]=useState([]); 
 let [del,setDel]=useState([]);
 useEffect(()=>{
  fetch('/public/test.json')
  .then(res=>res.json())
  .then(data=>setCard(data)
  )
 },[]);


 let notfy=()=>{
  toast('Tumi Sudu Akbari Click Korte Parbe')
 }
 let  handleWantToCook=(e)=>{
  let newExist=cooks.find(cok=>cok===e);

  if(!newExist){
    setCooks([...cooks,e]);
  }else{
  notfy()
  }
}

let handleReplace=(p)=>{
 let newCooks=cooks.filter(cook=>cook !== p);  
 let newCooks2=cooks.find(cook=>cook === p);  
 setDel([...del,newCooks2]);
 setCooks(newCooks);
  
 
  
}
 
console.log(del);

  return (
    <>
<ToastContainer/>
      
 <div className="md:max-w-7xl mx-auto">
 <Header></Header>
   <div  className="mt-5">
   <Banner></Banner>
   </div>
 </div>
       
       <h1 className="text-4xl text-center font-bold">Our Recipes</h1>
       <div className="text-center  flex justify-center mt-5 ">
        <p className="w-2/5">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
       </div>

       <div className="flex container mx-auto gap-5 justify-around mt-8 p-5">

        <div className="grid grid-cols-2 gap-5">
          {
            card.map(cards=><Cards handleWantToCook={handleWantToCook} cards={cards} key={cards.id}></Cards>)
          }
        </div>
       <div className="border-2 rounded-2xl w-[600px]">
       <Bloags replace={handleReplace} handleAdd={cooks} puran={del}  ></Bloags>
       </div>
       </div>
    </>
  )
}

export default App
