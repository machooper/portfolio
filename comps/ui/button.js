import Link from 'next/link'
export default function Button({variant, text, url, bg, hov}) {
    if (variant.includes('ghost')) {
       return (
       <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: var(--white); max-width: 100px; border: 1px solid var(--grey); box-shadow: none; color: inherit;}
            button:hover {
                border: 1px solid inherit;
            }
            @media(prefers-color-scheme: dark) {
                button {background: transparent;}
        `}</style>
        </>
)} else if (variant.includes('primary')) {
    return (
        <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: var(--primary); border: 0; max-width: 100px;color: var(--white);}
            button:hover {
                background: var(--secondary);
            }
        `}</style>
        </>
)} else if (variant.includes('success')) {
        return (
            <>
            <button href={url}>{text}</button>
            <style jsx>{`
                button {background: var(--success); border: 0;}
                button:hover {
                    background: var(--grey);
                }
            `}</style>
            </>
)} else if (variant.includes('warning')) {
    return (
        <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: var(--warn); border: 0;}
            button:hover {
                background: var(--grey);
            }
        `}</style>
        </>
)} else if (variant.includes('error')) {
    return (
        <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: var(--error); border: 0;}
            button:hover {
                background: var(--grey);
            }
        `}</style>
        </>
)} else {
    return (
        <>
        <button href={url}>{text}</button>
        <style jsx>{`
            button {background: var(--grey); border: 0;}
            button:hover {
                background: var(--primary);
            }
        `}</style>
        </>
)}}
