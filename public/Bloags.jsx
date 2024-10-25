 
const Bloags = ({handleAdd,replace,puran}) => {
 
 
  

    return (
        <div className="px-8">
            <h1 className="text-3xl font-bold  text-center p-3">Want to cook:{handleAdd.length}</h1>
            <hr /><hr />
            <div className="text-xl flex justify-around mt-2">
                <h5>Name</h5>
                <h5>Time</h5>
                <h5>Calories</h5>
                <h5></h5>
            </div>
       <div className="">
       <div className="space-y-5 ">
                {
                    handleAdd.map((adds,index)=>(
                        <div className="flex  justify-around items-center">
                            <p>{index+1}</p>
                            <h1>{adds.recipe_name.slice(0,8)}</h1>
                            <h1>{adds.preparing_time}</h1>
                            <h1>{adds.calories}</h1>
                            <button onClick={()=>replace(adds)} className="bg-[#0BE58A] px-8 rounded-full text-black font-bold py-3">Preparing</button>
                            
                        </div>
                    ))
                }
            </div>

            <h1 className="text-3xl  mt-5 text-center font-bold">Currently cooking: {puran.length}</h1>
            <div className="mt-3">
                <hr />
                <hr />
            </div>

            <div className="text-xl flex justify-around mt-2">
                <h5>Name</h5>
                <h5>Time</h5>
                <h5>Calories</h5>
                <h5></h5>
            </div>
          <div>
         
         {
            puran.map((l,i)=>(
                <div className="">
                  <div className="flex space-y-5 justify-around items-center">
                  <p>{i+1}</p>
                    <h1>{l.recipe_name.slice(0,8)}</h1>
                    <h1>{l.preparing_time}</h1>
                    <h1>{l.calories}</h1>
                    <p></p>
                    <p></p>
                  </div>
                </div>
            ))
               
         }
          </div>
           
       </div>
        </div>
    );
};

export default Bloags;