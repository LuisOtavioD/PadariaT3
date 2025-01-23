import s from './Footer.module.scss'
import ratin from '../../assets/ratin.jpg'

export default function Footer(){
    return(
       <footer>
         <h2>Alimente os animais de rua</h2>
         <img src={ratin} alt="" />
       </footer>
    )
}