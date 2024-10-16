import React from 'react'
import BackGroundBanner from '../components/HomeComponent/BackGroundBanner'
import ProductGrid from '../components/HomeComponent/ProductGrid'
import ProductSlider from '../components/HomeComponent/ProductSlider'
import VerticalBannerSlider from '../components/HomeComponent/VerticalSlider'
import NewsletterSignup from '../components/HomeComponent/NewsLetterSignup'
import ShopByCategory from '../components/HomeComponent/ShopbyCategory'

const Home = () => {
  return (
    <div className="w-full ">
<VerticalBannerSlider/>
<ShopByCategory/>
<ProductGrid/>
    </div>
  )
}

export default Home