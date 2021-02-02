import Button from '../comps/button'
import css from './modal.module.css'
export default function Modal({head, body, btn1Text, btn2Text}) {
    return (    
        <div className={css.modal}>
            <div className={css.upper}>
                <div id={css.close}>&times;</div>
                <h1>{head}</h1>
            </div>
            <div className={css.body}>
                <p>{body}</p>
            </div>
            <div className={css.lower}>
               <div className="btngroup"> 
                    <Button text={btn1Text} variant=''/>
                    <Button text={btn2Text} variant="primary"/>
               </div>
            </div>
        </div>
)}
