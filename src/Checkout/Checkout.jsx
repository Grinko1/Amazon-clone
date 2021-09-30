import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProviser'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

export default function Checkout() {
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkImg"/>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout_title'>Your shopping Basket</h2>
                    {
                        basket.map((item)=> (
                            <CheckoutProduct 
                                             id={item.id}
                                             title={item.title}
                                             image={item.image}
                                             price={item.price}
                                             rating={item.rating} />
                        ))
                    }
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}
