import axios from 'axios'
import Header from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import formateMoney from '../../utilities/money'
import './HomePage.css'

function HomePage({ cart }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data)
            })
    }, [])

    return (
        <>
            <Header cart={cart} />

            <div className='product-cart'>

                {products.map((product) => {
                    return (
                        <div key={product.id} className='product-info'>

                            <img className='product-img' src={product.image} alt="" />

                            <div className='product-details'>
                                <h4 className='product-text'>{product.name}</h4>

                                <div className='productRatingCounter'>
                                    <img
                                        className='rating-img'
                                        src={`/rating-${product.rating.stars * 10}.png`}
                                        alt=""
                                    />
                                    <p>{product.rating.count}</p>
                                </div>

                                <p className='product-price'>{formateMoney(product.priceCents)}</p>
                                <button className='button-secondary'>1</button>

                                <button className='button-primary'>Add to Cart</button>
                            </div>

                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default HomePage;