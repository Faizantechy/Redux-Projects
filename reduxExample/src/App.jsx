import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Users from "./components/Users";
import PetsCards from "./components/PetsCards";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <nav className="w-full h-10 flex gap-5 justify-center py-2 text-xl font-bold">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/pets"}>Pets</Link>
        <Link to={"/todo"}>todo List</Link>


      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/pets" element={<PetsCards />} />
        <Route path="/todo" element={<TodoList />} />


      </Routes>
    </div>
  );
};

export default App;
