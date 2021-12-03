import React, {useEffect} from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Aos from 'aos';
import "aos/dist/aos.css";


export const Layout = ({children}) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <div data-aos="fade">
     <Footer/>
     </div>
    </Container>
  )
}
