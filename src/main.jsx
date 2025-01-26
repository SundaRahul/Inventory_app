import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import App from './App'
import ItemTable from "./components/ItemTable";
import ItemForm from "./components/ItemForm";
import axios from "axios";

const Main = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch items from the backend
  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add or update item
  const handleAddOrUpdateItem = async (newItem) => {
    try {
      if (editingItem) {
        // Update the item in the backend
        const response = await axios.put(
          `http://localhost:5000/api/items/${editingItem._id}`,
          newItem
        );
        setItems(
          items.map((item) =>
            item._id === editingItem._id ? response.data : item
          )
        );
        setEditingItem(null);
      } else {
        // Add new item to the backend
        const response = await axios.post("http://localhost:5000/api/items", newItem);
        setItems([...items, response.data]);
      }
    } catch (error) {
      console.error("Error adding/updating item:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (item) => {
    setEditingItem(item);
  };

  // Handle delete button click
  const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/items/${id}`);
    console.log(response.data.message); // Log success message
    setItems((prevItems) => prevItems.filter((item) => item._id !== id)); // Update UI
  } catch (error) {
    console.error("Error deleting item:", error.message);
  }
};
  

  // Filter items by category
  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  // Sort items by quantity
  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  // Apply filter and sort
  const filteredAndSortedItems = items
    .filter((item) =>
      filterCategory === "All" ? true : item.category === filterCategory
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
    );

  return (
    <StrictMode>
      <Header />
      <div className="flex flex-col p-4">
        <ItemForm
          onAddItem={handleAddOrUpdateItem}
          editingItem={editingItem}
        />
        
        {/* Filters and Sorting Controls */}

      <div className="flex gap-4 my-4">
       
        <select
          className="p-2 border rounded"
          value={filterCategory}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="All">All Categories</option>
          {Array.from(new Set(items.map((item) => item.category))).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Sort Order  */}
        <select
          className="p-2 border rounded"
          value={sortOrder}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="asc">Sort by Quantity (Ascending)</option>
          <option value="desc">Sort by Quantity (Descending)</option>
        </select>
      </div>


        {/* Display Table */}
          <ItemTable
            items={filteredAndSortedItems}
            onEdit={handleEdit}
            onDelete={(id)=>deleteItem(id)}
          />
      </div>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Main />);




