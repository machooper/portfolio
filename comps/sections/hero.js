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
            h1 {font-size: 2.4rem; text-align: center; margin-bottom: 2rem; max-width: 75vw;}
            svg {animation: bounce .4s forwards;animation-delay: 1.2s;}
            @keyframes bounce {
                0% {transform: translateY(0px)}
                50% {transform: translateY(-5px)}
                100% {transform: translateY(0px)}
            }
            @media(min-width: 400px) and (max-width: 414px) {
                .container {
                    min-height: 84vh;
                }
            }
            @media(min-width: 1020px) { 
                .container {
                    min-height: 85vh;
                }
            }
            @media(min-width: 1110px) {
                .container {
                    min-height: 86vh;
                }
            }
            @media(min-width: 1360px) {
                .container {
                    min-height: 86vh;
                }
            }
            @media(min-width: 790px) and (max-width: 805px) and (min-height: 590px) and (max-height: 605px) {
                .container {
                    min-height: 80.5vh;
                }
            }
            @media(min-width: 1360px) and (max-height: 770px) {
                .container {
                    min-height: 81.5vh;
                }
            }
            @media(min-width: 1919px) {
                .container {
                    min-height: 85vh;
                }
            }
        `}</style>
    </>
)}