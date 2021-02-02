import Button from '../ui/button'
export default function Hero() {
    return (
    <>
        <div className="container">
            <div className="content">
                <h1>Full Stack Developer</h1>
                <Button variant="primary" text="Contact Me" url="#contact"/>
            </div>
        </div> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>

        <style jsx>{`
            h1 {font-size: 2.4rem; text-align: center; margin-bottom: 2rem;}
            svg {animation: bounce .4s forwards;animation-delay: 1.2s;}
            @keyframes bounce {
                0% {transform: translateY(0px)}
                50% {transform: translateY(-5px)}
                100% {transform: translateY(0px)}
            }
        `}</style>
    </>
)}