
import React from "react";

const ItemTable = ({ items, onEdit, onDelete }) => {
  return (
    <div className="overflow-auto">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.category}</td>
              <td
                className={`border p-2 ${
                  item.quantity < 10 ? "bg-red-200" : ""
                }`}
              >
                {item.quantity}
              </td>
              <td className="border p-2 w-40">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onDelete(item._id)}
                >
                Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
