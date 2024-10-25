import { IoTimeOutline } from "react-icons/io5";
import { FaBandcamp } from "react-icons/fa";
const Cards = ({cards,handleWantToCook}) => {
    return (
        <div className="border-2 rounded-2xl p-8 space-y-5 border-gray-600">
             <div className="flex justify-center">
             <img className="w-[200px]" src={cards.image} alt="" />
             </div>
             <h3 className="text-2xl font-semibold">{cards.recipe_name}</h3>

             <p> {cards.short_description}</p>
             <div className="mt-2">
                <hr />
                <hr />
                
             </div>

             <p className="text-2xl font-bold">Ingredients: 6</p>
             <p>
              <li>  {
                    cards.ingredients[0]
                }</li>
              <li>  {
                    cards.ingredients[1]
                }</li>
              <li>  {
                    cards.ingredients[2]
                }</li>
              <li>  {
                    cards.ingredients[3]
                }</li>
              
                </p>
                <div className="mt-2">
                    <hr />
                    <hr />
                </div>

                <div className="flex gap-5">
                <div className="flex gap-2">
                <IoTimeOutline className="text-2xl" />
                <p>{cards.preparing_time}</p>
                </div>

                <div className="flex gap-2">
                <FaBandcamp className="text-2xl" />
                <p>{cards.calories}</p>
                </div>
                </div>
                
                <div>
                    <button onClick={()=>handleWantToCook(cards)} className="bg-[#0BE58A] text-black font-bold px-8 rounded-full py-3">Want to Cook</button>
                </div>
        </div>
    );
};

export default Cards;