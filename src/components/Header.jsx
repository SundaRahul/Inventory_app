import React from "react";
// Header part 
const Header = () => {
  return (
    <div className="flex w-full justify-between items-center p-4 bg-gray-100">

      <div className="flex gap-1 items-center">
        <img className="w-10 h-10" src="supply.png" alt="" />
        <div className="text-blue-400 font-semibold">
          InventoryApp
        </div>
      </div>
      
      
    </div>
  );
};

export default Header;
