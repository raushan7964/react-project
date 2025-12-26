import AboutBanner from '../components/about/AboutBanner'
import AboutSection from '../components/about/AboutSection'

const About = () => {
  return (
    <>
      <AboutBanner
        heading="About Us"
        title="Welcome to Our Company"
        description="We are committed to delivering the best services to our clients. Our team of experts works tirelessly to ensure customer satisfaction and excellence in every project we undertake."
        buttonText="Click Me"
        onButtonClick={() => console.log('Clicked')}
      />
      <AboutSection description="We are committed to delivering the best services to our clients. Our team of experts works tirelessly to ensure customer satisfaction and excellence in every project we undertake." />
    </>
  )
}

export default About
