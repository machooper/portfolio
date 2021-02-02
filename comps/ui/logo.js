import Link from 'next/link'
import seo from '../../config/seo.config'
export default function Logo() {
	return (
	<>
		<Link href="/">
			<div>
				<img src="/icons/logo.svg" alt={seo.title}/>
				<h1>{seo.title}</h1>
			</div>
		</Link>

		<style jsx>{`
		div {
			display: flex;
			align-items: center;
		}
		img {
			width: 30px;
			height: 30px;
			object-fit: cover;
			margin-right: .5rem;
		}
		`}</style>
	</>
)}

