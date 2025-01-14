import './Hero.css'

const Hero = () => {
    return <>
        <main>
            <section className='Hero'>
                <div className='text-container'>
                    <h1>your feet deserve the best</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className='Btn-container'>
                        <button className='shop-btn'>Shop Now</button>
                        <button className='category-btn'>Category</button>
                    </div>
                    <div className='shop-container'>
                        <h6>Also Available On</h6>
                        <div className='shop'>
                            <img src="/public/images/flipkart.png" alt="filpkart.png" />
                            <img src="/public/images/amazon.png" alt="amazon.png" />
                        </div>
                    </div>
                </div>
                <div className='img-container'>
                    <img src="/public/images/shoe_image.png" alt="" />
                </div>
            </section>
        </main>
    </>
}

export default Hero;