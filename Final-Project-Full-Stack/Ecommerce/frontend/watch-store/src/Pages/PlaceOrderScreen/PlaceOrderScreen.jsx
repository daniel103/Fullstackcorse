import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Store } from '../../store';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import "./PlaceOrderScreen.css";

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function PlaceOrderScreen() {
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;



  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/orders`,
        {
          orderItems: cart.cartItems,
          shoppingAddress: cart.shoppingAddress,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.data._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      console.log(err);
    }
  };

  const total = cart.cartItems.reduce((a, c) => a + c.quantity * c.price , 0)

  return (
    <div className="order">
      <h1 className="my-3">Preview Order</h1>
      <Row className="PlaceOrderScreen">
        <Col md={8}>
          <div className="order-clint">
                <strong>Name: {cart.shoppingAddress.fullName} </strong> 
                <strong>Address: {cart.shoppingAddress.address} </strong>
                <strong>City: {cart.shoppingAddress.city} </strong>
                <strong>PostalCode: {cart.shoppingAddress.postalCode} </strong>
                <strong>Country: {cart.shoppingAddress.country} </strong>
              <Link to="/order" className='edit'>Edit</Link>
              <ListGroup variant="flush">
                {cart.cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                          ></img>{' '}
                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>Price: ₪{item.price}</Col>
                      <span>{item.date}</span>
                      <strong>Total ₪{item.total = total}</strong>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/cart" className="edit">Edit</Link>
                    </div>
        </Col>
        <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row className='order-total'>
                    <Col>
                      <strong> Order Total</strong>
                    </Col>
                    <Col>
                      <strong>₪{total}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button className="btn-PlaceOrder"
                      type="button"
                      onClick={placeOrderHandler}
                      disabled={cart.cartItems.length === 0}
                      >
                      Place Order
                    </Button>
                  </div>
                  {loading && <LoadingBox></LoadingBox>}
                </ListGroup.Item>
              </ListGroup>
        </Col>
      </Row>
    </div>
  );
}