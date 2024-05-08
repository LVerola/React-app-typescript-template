import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrossel from '../../components/Carrossel'

import { Container } from './styles'

const Main: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1558981001-5864b3250a69',
    'https://images.pexels.com/photos/20787/pexels-photo.jpg',
    'https://pixabay.com/get/57e8d340485aa814f6da8c7dda79367b113edbe04e5074417c2878d2944ec4_1920.jpg',
  ]
  return (
    <Container>
      <Header />
      <Carrossel images={images} />
      <Footer />
    </Container>
  )
}

export default Main
