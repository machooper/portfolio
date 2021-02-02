import seo from '../config/seo.config'
import Layout from '../comps/layout/index'
import Hero from '../comps/sections/hero'
import About from '../comps/sections/about'
import Blog from '../comps/sections/blog'
import Portfolio from '../comps/sections/portfolio'
import Contact from '../comps/sections/contact'
import Footer from '../comps/layout/footer'
export default function Index() {
	return (
		<Layout title="Home" description={seo.description}>
			<Hero/>
			<About/>
			<Portfolio/>
			<Blog/>
			<Contact/>
		</Layout>
)}