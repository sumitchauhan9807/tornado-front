import Hero1 from './Hero1'
import Hero2 from './Hero2'

const Hero = (props) => {
  if(!props.animation) {
    return <Hero2 data={props}/>
  }
  return <Hero1 data={props}/>
};

export default Hero
