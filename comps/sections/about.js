export default function About() {
    return (
    <>   
        <div className="container">
            <div className="content">
                <h2 className="title">About Me</h2>
                <p>I'm a full stack developer based in the UK, with a passion for technology. I love finding out about the latest technology and how I can apply it to my work.</p>
                <p>I have been developing websites for various freelance clients, as well as building web apps in my free time for 3 years now.</p>
                <p>I enjoy building fast, responsive, user friendly websites using various Web Development tools.</p> 
                <p>You can learn more about the projects I have created by viewing my portfolio below and more about me by checking out my blog posts.</p> 
            </div>
        </div>

        <style jsx>{`
        .container {
            background: rgba(0,107,179, .4); 
            position: relative;
        }
        p {
            margin: 1rem 0;
        }
        `}</style>
    </>
)}
