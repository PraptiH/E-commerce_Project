import axios from 'axios'
import { products } from '../../data/product'
import './HomePage.css'
import Header from '../../components/Header/Header'

function HomePage() {
    axios.get('http://localhost:3000/api/products')
        .then((response) => {
            console.log(response.data)
        })

    return (
        <>
            <Header />

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

                                <p className='product-price'>${((product.priceCents) / 100).toFixed(2)}</p>
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