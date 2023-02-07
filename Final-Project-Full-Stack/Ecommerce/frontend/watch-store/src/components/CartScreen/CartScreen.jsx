import { useContext } from 'react';
import { Store } from '../../store';
import MessageBox from '../MessageBox/MessageBox';
import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./CartScreen.css";

const CartScreen = () => {
    const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/product/v1/${item._id}`);
    if (data.countInStock < quantity) {
        window.alert('Sorry. Product is out of stock');
        return;
      }
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...item, quantity },
      });
  }

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item});
  }

  const checkoutHandler = () => {
    navigate('/order')
  }
const total = cartItems.reduce((a, c) => a + c.quantity * c.price , 0)
  return (
    <div className="cart-list">
      <h1>Shopping Cart</h1>
      <Row className="cart">
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup className="cart-list">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Col md={3} className="icon-btn">
                      <img
                        src={item.image}
                        alt={item.subModel}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link className="subModel" to={`/product/${item._id}`}>{item.subModel}</Link>
                      <Button variant="light" className="btn-icons" id='btn-minus'
                      onClick={() => updateCartHandler(item, item.quantity - 1)}
                      disabled={item.quantity === 1}>
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="light" className="btn-icons" id='btn-plus'
                        onClick={() => updateCartHandler(item, item.quantity + 1)}
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    <Col md={2}>
                      <Button className="btn-icons" id='btn-delete'
                      onClick={() => removeItemHandler(item)}
                      variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                    <Col md={3}>₪{item.price}</Col>
                    </Col>
                <ListGroup.Item>
                </ListGroup.Item>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
                <h3 className="total">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : ₪
                    {cartItems.total = total}
                  </h3>
        </Col>
                    <Button
                      type="button"
                      variant="primary"
                      id="button-checkout"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                    <a href="http://localhost:3000/" className='link'>Home</a>
      </Row>
    </div>
  );
}

export default CartScreen;