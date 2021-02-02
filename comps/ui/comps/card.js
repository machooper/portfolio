import Button from './button'
import css from './card.module.css'
export default function Card({img, title, body, buttonText, buttonUrl, buttonVariant}) {
    return (
        <div className={css.container}>
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <p>{body}</p>
            <div className={css.btn}>
                <Button text={buttonText} url={buttonUrl} variant={buttonVariant}/>
            </div>
        </div>
)}