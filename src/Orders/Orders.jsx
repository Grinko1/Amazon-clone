import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProviser';
import Order from './Order';
import './Orders.css';

function Orders() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('creates', 'desc')
      .onSnapshot((snapshot) =>
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        ),
      );
  }, []);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
          {
              orders?.map(order => (
                  <Order order={order}/>
              ))
          }
      </div>
    </div>
  );
}

export default Orders;
