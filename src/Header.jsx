 
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex py-3 items-center justify-around">
          <div>
          <h1 className="text-3xl font-bold">Recipe Calories</h1>
          </div>

          <div>
            <ul className="flex space-x-10 ">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>
          </div>

          <div className="flex gap-5 items-center">
          <div className="bg-[#F3F3F4] px-5 gap-  rounded-full flex items-center ">
          <CiSearch className="font-bold  text-2xl" />
           <input className="placeholder:text-black rounded-full p-3 bg-transparent" type="text" name="" placeholder="Search..." id="" />
          </div>
          <div className=" bg-[#0BE58A] rounded-full p-2">
          <FaRegUserCircle className="text-3xl  " />
          </div>
          </div>
        </div>
    );
};

export default Header;