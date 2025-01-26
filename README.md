# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

![Screenshot 2025-01-26 212848](https://github.com/user-attachments/assets/d4391297-719c-466d-8594-73ace39e38a5)

# Inventory Management Frontend

This is the frontend part of the Inventory Management application, built with React.js. It provides a user-friendly interface to view, add, update, and delete items from the inventory.

## Features

- **View Inventory**: Displays a list of all items in the inventory.
- **Add New Item**: Allows users to add new items to the inventory.
- **Update Item**: Enables users to update item details.
- **Delete Item**: Lets users remove items from the inventory.
- **Filter and Sort**: Filters items by category and sorts them by quantity.

## Technologies Used

- **React.js**: JavaScript library for building the user interface.
- **Axios**: Used for making HTTP requests to the backend API.
- **Tailwind CSS**: For styling the components.

## Installation

### Prerequisites

- Node.js (v14 or later)

### Steps to Set Up

1. Clone the repository:
    ```bash
    git clone https://github.com/SundaRahul/inventory_app.git
    cd inventory-frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root and add the backend API URL:
    ```bash
    REACT_APP_API_URL=http://localhost:5000/api/items
    ```

4. Run the development server:
    ```bash
    npm start
    ```

   The frontend will be accessible at `http://localhost:3000`.

## Usage

- The app will automatically fetch items from the backend and display them in a table.
- Use the "Add Item" button to add new inventory items.
- You can edit or delete existing items by clicking the respective buttons.
- Items can be filtered by category and sorted by quantity.


If you have any questions or need help, feel free to open an issue or contact me.

