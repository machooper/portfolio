import Button from "../ui/button";
export default function Blog() {
    return (
    <>
        <div className="container cta">
            <h2>Read my blog posts</h2>
            <Button text="Click here" variant='ghost' url="https://machooper9.medium.com"/>
        </div>

        <style jsx>{`
        .container {
            margin-top: 2rem;
        }
        h2, a {
            text-align: center;
            margin-bottom: -1rem;
        }
        `}</style>
    </>
)}
