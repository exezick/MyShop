import React from 'react'
import '../../App.css';
import {ReactComponent as Curvybg} from '../assets/svg/curvybackground.svg'
import Banner from '../includes/Banner';
import FeaturedProducts from '../includes/FeaturedProducts';

function Home() {
  return (
    <div>
      <Curvybg className="curvybg" />
      <Banner />
      <FeaturedProducts />
    </div>
  )
}

export default Home
