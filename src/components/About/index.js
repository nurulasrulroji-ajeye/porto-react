import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>I describe myself as a passionate developer who loves coding, open source and web platforms ❤️. I love creating and contributing to open source projects. It helped me learn a lot of new things, grow as adeveloper, and support other open source projects. I also enjoy making videos of my activities. In my spare time you can find me at coffee shops, at the beach or at technology gatherings and conferences</p>
          <p>Faithful to ignorance. Give up on what you are looking for. existence exists because there is a limit. If you define yourself by what you know, you will only live within your limits. If you define yourself in your ignorance, then you will gain the horizon of infinity.</p>
          <p>A true friend is someone who thinks that you are a good egg, even though he knows that you are a little cracked.</p>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nurul-asrul-roji-092610238/">
                <FontAwesomeIcon icon={faLinkedin} color="#0e76a8" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/nurulasrulroji-ajeye">
                <FontAwesomeIcon icon={faGithub} color="#F2F2F2" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ajeye_/">
                <FontAwesomeIcon icon={faInstagram} color="#E1306C" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/Ajeye_">
                <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" />
              </a>
            </li>
          </ul>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#F0D04D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
