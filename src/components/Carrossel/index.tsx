import React, { useState, useEffect } from 'react'
import { Container } from './styles'

interface CarrosselProps {
  images: string[]
}

const Carrossel: React.FC<CarrosselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // muda a imagem a cada 2 segundos

    return () => {
      clearInterval(timer)
    }
  }, [images])

  return (
    <Container>
      <img src={images[currentImageIndex]} alt="Carrossel" />
    </Container>
  )
}

export default Carrossel
