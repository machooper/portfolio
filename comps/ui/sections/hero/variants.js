import Button from '../../comps/button'
import css from './hero.module.css'
export function Standard({head, sub, buttonText, buttonUrl, buttonVariant, buttonBg, buttonHov}) {
    return (
    <div className={css.container}>
        <div className={css.contents}>
            <h1>{head}</h1>
            <p>{sub}</p>
            <Button text={buttonText} url={buttonUrl} variant={buttonVariant} bg={buttonBg} hov={buttonHov} />
        </div>
    </div>  
)}