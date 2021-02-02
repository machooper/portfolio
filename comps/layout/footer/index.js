import {CopyLeft} from './variants'
export default function Footer({variant, social}) {
	if(social) {
		return (
			<CopyLeft social/>
		)
	} else {
		return (
			<CopyLeft/>
		)
	}
}
