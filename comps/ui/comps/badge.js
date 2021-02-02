export default function Badge({text, variant}) {
   if(variant.includes('primary')) { 
   return (
        <span style={{padding: '.1rem .5rem', background: 'var(--primary)', borderRadius: 'var(--radius)', margin: '.1rem'}}>{text}</span>
  )} else if(variant.includes('success')) { 
    return (
        <span style={{padding: '.1rem .5rem', background: 'var(--success)', borderRadius: 'var(--radius)', margin: '.1rem'}}>{text}</span>
  )} else if(variant.includes('primary')) { 
    return (
        <span style={{padding: '.1rem .5rem', background: 'var(--error)', borderRadius: 'var(--radius)', margin: '.1rem'}}>{text}</span>
  )}
  else if(variant.includes('warning')) { 
    return (
        <span style={{padding: '.1rem .5rem', background: 'var(--warn)', borderRadius: 'var(--radius)', margin: '.1rem'}}>{text}</span>
)}}