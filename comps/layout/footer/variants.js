import Copy from './copy'
import Social from '../../ui/comps/social'
import css from './footer.module.css'
function CopyLeft({social}) {
	if (social) {
	return (
		<footer id={css.footer}>
			<Copy/>
			<Social/>
		</footer>
	)} else {
		return (
		<footer id={css.footer}>
			<Copy/>
		</footer>
	)}
}
export {CopyLeft}

