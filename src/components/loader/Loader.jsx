import React from 'react'
import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Bars color="#330099" />
    </main>
  )
}

export default Loader