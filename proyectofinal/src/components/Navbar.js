import Button from './Button'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return(
        <div class="row row-category">
            <div class="column-brand col-5">
                <Link to="/"><a href="" class="brand-title">Cursos Online</a></Link>
            </div>
            
            <div class="column-category col-6">
                <Link to="/matematica"><Button text="Matematica"></Button></Link>
                <Link to="/quimica"><Button text="Quimica"></Button></Link>
                <Button text="Fisica"></Button>
                <Button text="Algebra"></Button>
            </div>

            <div class="column-cart col-1">
                <CartWidget></CartWidget>
            </div>
        </div>
    )
}