import './App.css';
import {
  BrowserRouter , Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import CartScreen from './components/CartScreen/CartScreen';
import ShoppingAddressScreen from './components/ShoppingAddressScrean/ShoppingAddressScreen';
import OrdersScreen from './Admin/OrdersScreen';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Register from './Pages/Register/Register'
import AdminRoute from './components/AdminRoute/AdminRoute';
import ProductScreenAdmin from './Admin/ProductScreenAdmin';
import UpdateProduct from './Admin/UpdateProduct';
import AddProduct from './Admin/AddProduct';
import PlaceOrderScreen from './Pages/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen from './Pages/OrderScreen/OrderScreen';
import ProductScreen from './components/ProductScreen/ProductScreen';



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />} />
    <Route path="/order" element={<ShoppingAddressScreen />}/>
    <Route path="/cart" element={<CartScreen />} />
    <Route path="/product/:id" element={<ProductScreen />} />
    <Route path="/placeholder" element={<PlaceOrderScreen />} />
    <Route path="/order/:id" element={<ProtectedRoute><OrderScreen /></ProtectedRoute>}></Route>
      {/* Admin Routes */}
      <Route path="/admin/product/:id" element={<AdminRoute><ProductScreenAdmin /></AdminRoute>}></Route>
      <Route path="/admin/product/update/:id" element={<AdminRoute><UpdateProduct /></AdminRoute>} />
      <Route path="/admin/product/addProduct" element={<AdminRoute><AddProduct /></AdminRoute>} />
      <Route path="/admin/orders" element={<AdminRoute><OrdersScreen /></AdminRoute>} />
  </Routes>
    </BrowserRouter>
  );
}

export default App;
