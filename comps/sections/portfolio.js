import Item from "./item"
export default function Portfolio() {
    return (
    <>
        <div className="container">
            <h2 className="title">Portfolio</h2>
            <Item url="https://lucycull.design" title="Lucy Cull" image="/portfolio/lucy.webp" body="A portfolio site created for a designer/photographer using React"/>
            <Item url="https://casey-chi.vercel.app" title="Casey" image="/portfolio/casey.webp" body="A portfolio site created for a designer/photographer using React" dark/>
        </div>

    </>
)}
