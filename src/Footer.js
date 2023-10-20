import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <footer>
     All Rights Reserved.   
     Copyright &copy; {year.getFullYear()}
    </footer>
  )
}

export default Footer