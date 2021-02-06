import Item from "./item"
export default function Portfolio() {
    return (
    <>
        <div className="container">
            <h2 className="title">Portfolio</h2>
        <div className="items">
            <Item url="https://lucycull.design" title="Lucy Cull" image="/portfolio/lucy.webp" body="A portfolio site created for a designer/photographer using React"/>
            <Item url="https://casey-chi.vercel.app" title="Casey" image="/portfolio/casey.webp" body="A simple case converter built using NextJS" dark/>
            </div>
        </div>

        <style jsx>{`
        .items {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
        }
        @media(min-width: 1020px) {
            .items {
                flex-direction: row;
                padding-bottom: 5rem;
            }
        }
        @media(min-width: 1360px) {
            .items {
                padding-bottom: 10rem;
            }
        }

        @media(min-width: 790px) and (max-width: 805px) and (min-height: 590px) and (max-height: 605px) {
            .items {
                flex-direction: row;
            }
        }

        `}</style>
    </>
)}
