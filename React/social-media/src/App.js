import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "john",
      password: "12345",
    },
  ]);

  const createNewUser = (username, password) => {
    let newUser = {
      id: users[users.length - 1].id + 1,
      username,
      password,
    };
    setUsers([...users, newUser]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="login"
          element={<Login users={users} setUser={setUser} />}
        />
        <Route
          path="home"
          element={
            <ProtectedRoute user={user}>
              <Home username={user.username} setUser={setUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={<Register createNewUser={createNewUser} users={users} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
