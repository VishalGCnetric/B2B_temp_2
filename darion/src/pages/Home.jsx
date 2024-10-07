import React from 'react'
import BackGroundBanner from '../components/HomeComponent/BackGroundBanner'
import ProductGrid from '../components/HomeComponent/ProductGrid'
import ProductSlider from '../components/HomeComponent/ProductSlider'
import VerticalBannerSlider from '../components/HomeComponent/VerticalSlider'
import NewsletterSignup from '../components/HomeComponent/NewsLetterSignup'

const Home = () => {
  return (
    <div className="w-full ">
<VerticalBannerSlider/>
<BackGroundBanner/>
<ProductGrid/>
<ProductSlider/>
<NewsletterSignup/>
    </div>
  )
}

export default Home