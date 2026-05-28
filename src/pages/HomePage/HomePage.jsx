import downArrow from '../../assets/down-arrow.png'
import axios from 'axios'
import Header from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import formateMoney from '../../utilities/money'
import './HomePage.css'

function HomePage({ cart }) {

    const [products, setProducts] = useState([])
    const [isOpen, setIsopen] = useState(null)

    const openDropDown = (productId) => {
        if (isOpen === productId) {
            setIsopen(null)
        }
        else {
            setIsopen(productId)
        }
        console.log("click")
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
                                <div>
                                    <button className='button-secondary' onClick={() => openDropDown(product.id)}>1
                                        <img className='downArrow' src={downArrow} alt="" />
                                        {
                                            isOpen === product.id && (
                                                <div className='dropDown'>
                                                    <p>1</p>
                                                    <p>2</p>
                                                    <p>3</p>
                                                    <p>4</p>
                                                    <p>5</p>
                                                    <p>6</p>
                                                    <p>7</p>
                                                    <p>8</p>
                                                    <p>9</p>
                                                    <p>10</p>
                                                </div>
                                            )
                                        }
                                    </button>

                                </div>

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