import socks from '../../assets/athletic-cotton-socks-6-pairs.jpg'
import basketball from '../../assets/intermediate-composite-basketball.jpg'
import cottonShirt from '../../assets/adults-plain-cotton-tshirt-2-pack-teal.jpg'
import rating45 from '../../assets/rating-45.png'
import rating40 from '../../assets/rating-40.png'
import './HomePage.css'
import Header from '../../components/Header/Header'

function HomePage() {
    return (
        <>
            <Header/>

            <div className='product-cart'>

                <div className='product-info'>

                    <img className='product-img' src={socks} alt="" />

                    <div className='product-details'>
                        <h4 className='product-text'>Black and Gray Athletic Cotton Socks - 6 Pairs</h4>

                        <img className='rating-img' src={rating45} alt="" />
                        <p className='product-price'>$10.90</p>
                        <button className='button-secondary'>1</button>

                        <button className='button-primary'>Add to Cart</button>
                    </div>

                </div>

                <div className='product-info'>

                    <img className='product-img' src={basketball} alt="" />

                    <div className='product-details'>
                        <h4 className='product-text'>Intermediate Size Basketball</h4>

                        <img className='rating-img' src={rating45} alt="" />
                        <p className='product-price'>$20.95</p>
                        <button className='button-secondary'>1</button>

                        <button className='button-primary'>Add to Cart</button>
                    </div>
                </div>

                <div className='product-info'>

                    <img className='product-img' src={cottonShirt} alt="" />

                    <div className='product-details'>
                        <h4 className='product-text'>Adults Plain Cotton T-Shirt - 2 Pack</h4>

                        <img className='rating-img' src={rating40} alt="" />
                        <p className='product-price'>$20.95</p>
                        <button className='button-secondary'>1</button>

                        <button className='button-primary'>Add to Cart</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage;