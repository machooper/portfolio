import Button from "../ui/button";
export default function Blog() {
    return (
    <>
        <div className="container cta">
            <h2>Read my blog posts</h2>
            <a href="https://machooper9.medium.com" target="_blank" rel="noopener"></a><Button text="Click here" variant='ghost'/>
        </div>

        <style jsx>{`
        h2, a {
            text-align: center;
            margin-bottom: -1rem;
        }
        `}</style>
    </>
)}
