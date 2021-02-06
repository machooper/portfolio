import Link from 'next/link'
export default function Item({url, title, body, dark}) {
    const image = title.toLowerCase().replace(/ /g, "")
    return (
    <>
        <Link href={url}>
            <div className="item">
                <h3>{title}</h3>
                <p>{body}</p>
                <picture>
                    <source type="image/avif"
                            srcSet={`/portfolio/${image}.avif`}/>
                    <img alt={title} src={`/portfolio/${image}.webp`}/>
                </picture>
            </div>
        </Link>
        
        <style jsx>{`
        .item {
            width: 90vw;
            height: 90vw;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 1rem 0;
            cursor: pointer;
        }
        h3, p {
            opacity: 0;
            z-index: 2;
            color: ${dark ? 'var(--white)' : 'var(--black)'};
        }
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transition: .3s ease;
            z-index: 1;
        }
        .item:hover img {
            opacity: .4;
        }
        .item:hover h3, .item:hover p {
            opacity: 1;
        }
        @media(min-width: 1020px) {
            .item {
                width: 300px;
                height: 300px;
                margin: 0 1rem;
            }
        }
        @media(min-width: 790px) and (max-width: 805px) and (min-height: 590px) and (max-height: 605px) {
            .item {
                width: 300px;
                height: 300px;
                margin: 0 1rem;
            }
        }
        @media(min-width: 1919px) {
            .item {
                width: 500px;
                height: 500px;
            }
        }
        `}</style>
    </>
)}
