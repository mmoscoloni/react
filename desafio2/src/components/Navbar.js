import Button from './Button'

export default function NavBar() {
    return(
        <div class="row row-category">
            <div class="column-brand col">
                <a href="" class="brand-title">Cursos Online</a>
            </div>
            
            <div class="column-category col">
                <Button text="Matematica"></Button>
                <Button text="Quimica"></Button>
                <Button text="Fisica"></Button>
                <Button text="Algebra"></Button>
            </div>
        </div>
    )
}