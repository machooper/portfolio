import seo from '../config/seo.config'
import Layout from '../comps/layout/index'
import Hero from '../comps/sections/hero'
export default function Index() {
	return (
		<Layout title="Home" description={seo.description}>
			<Hero/>
		</Layout>
)}