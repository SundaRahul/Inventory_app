import React, { useState, useEffect } from "react";

const ItemForm = ({ onAddItem, editingItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setCategory(editingItem.category);
      setQuantity(editingItem.quantity);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !quantity) {
      alert("Please fill out all fields");
      return;
    }

    const newItem = {
      id: editingItem ? editingItem.id : Date.now(),
      name,
      category,
      quantity: parseInt(quantity),
    };

    onAddItem(newItem);
    setName("");
    setCategory("");
    setQuantity("");
  };

  return (
    <form
      className="flex flex-col gap-4 p-4 border rounded-md bg-gray-100 w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Quantity</label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        {editingItem ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
};

export default ItemForm;


// import React, { useState } from "react";

// const ItemForm = ({ onAddItem }) => {
//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");
//   const [quantity, setQuantity] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !category || !quantity) {
//       alert("Please fill out all fields");
//       return;
//     }

//     const newItem = {
//       id: Date.now(), // Unique ID based on timestamp
//       name,
//       category,
//       quantity: parseInt(quantity),
//     };

//     onAddItem(newItem);
//     setName("");
//     setCategory("");
//     setQuantity("");
//   };

//   return (
//     <form
//       className="flex flex-col gap-4 p-4 border rounded-md bg-gray-100 w-full max-w-md"
//       onSubmit={handleSubmit}
//     >
//       <div>
//         <label className="block text-sm font-medium mb-1">Name</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter item name"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Category</label>
//         <input
//           type="text"
//           className="w-full p-2 border rounded"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           placeholder="Enter category"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Quantity</label>
//         <input
//           type="number"
//           className="w-full p-2 border rounded"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           placeholder="Enter quantity"
//         />
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//       >
//         Add Item
//       </button>
//     </form>
//   );
// };

// export default ItemForm;
