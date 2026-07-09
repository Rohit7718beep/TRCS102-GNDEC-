import React from 'react'

const Footer = () => {
const date= new Date().getFullYear();
  return (
    <footer>
      Copyright by rohit@{date}
    </footer>
  )
}

export default Footer
