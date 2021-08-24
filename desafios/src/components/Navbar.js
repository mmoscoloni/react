import Button from './Button'
import CartWidget from './CartWidget'

export default function NavBar() {
    return(
        <div class="row row-category">
            <div class="column-brand col-5">
                <a href="" class="brand-title">Cursos Online</a>
            </div>
            
            <div class="column-category col-6">
                <Button text="Matematica"></Button>
                <Button text="Quimica"></Button>
                <Button text="Fisica"></Button>
                <Button text="Algebra"></Button>
            </div>

            <div class="column-cart col-1">
                <CartWidget></CartWidget>
            </div>
        </div>
    )
}