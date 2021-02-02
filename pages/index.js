import seo from '../config/seo.config'
import Layout from '../comps/layout/index'
import Modal from '../comps/ui/comps/modal'
export default function Index() {
	return (
		<Layout title="Home" description={seo.description}>
			<h1>Test</h1>
			<p>Test</p>
		</Layout>
)}