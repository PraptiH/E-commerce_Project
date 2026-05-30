import axios from 'axios'
import Header from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import formateMoney from '../../utilities/money'
import './HomePage.css'

function HomePage({ cart }) {

    const [products, setProducts] = useState([])
    const [selectedQuantity, setSelectedQuantity] = useState({})

    const handleQuantityChange = (productId, quantity) => {
        setSelectedQuantity({
            ...selectedQuantity,
            [productId]: quantity
        })
    }

    useEffect(() => {

        const fetchProductData = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data)
        }
        fetchProductData()
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
                                <select value={selectedQuantity[product.id] || 1} onChange={(e) => handleQuantityChange(product.id, e.target.value)} className='button-secondary'>

                                   
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                  

                                </select>

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
