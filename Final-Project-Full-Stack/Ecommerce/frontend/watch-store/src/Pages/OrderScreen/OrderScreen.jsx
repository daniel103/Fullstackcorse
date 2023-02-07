import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import {Button} from "@mui/material"
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';
import { Store } from '../../store';
import Header from '../../components/Header/Header/Header'
import "./OrderScreen.css";

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
export default function OrderScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: console.log(err) });
      }
    };

    if (!userInfo) {
      return navigate('/login');
    }

    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, userInfo, orderId, navigate]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div className="order">
      <Header />
      <h1>The order was created successfully</h1>
      <Row className="PlaceOrderScreen">
        <Col md={8}>
        <strong>order:</strong> {orderId} <br />
                <strong>Name:</strong> {order.shoppingAddress.fullName} <br />
                <strong>Address: </strong> {order.shoppingAddress.address}<br />
                <strong>City: </strong> {order.shoppingAddress.city}<br />
                <strong>PostalCode: </strong> {order.shoppingAddress.postalCode}<br />
                <strong>country: </strong> {order.shoppingAddress.country}
              <ListGroup variant="flush">
                {order.orderItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>₪{item.price}</Col>
                      <strong>Total: ₪{item.total}</strong>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
        </Col>
        <Button className="btn-PlaceOrder" onClick={() => navigate("/")}>Home</Button>
      </Row>
    </div>
  );
}