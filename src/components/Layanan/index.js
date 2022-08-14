import Loader from "react-loaders";
import './index.scss';
import Media from "./Media";
import WebDev from "./WebDev";


const Service = () => {
  return (
    <>
      <div className="container service-page">
        <div className="text-zone">
          <h1>Our Services</h1>
          <p>Happiness is a by-product of an effort to make someone else happy.</p>
        </div>
        <div className="services">
          <div className="content">
            <section className="web-dev">
              <h2>Web Development</h2>
              <p>I'm love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites.</p>
              <WebDev />
            </section>
            <section className="media">
              <h2>Media Service</h2>
              <p>When the product is right, you don’t have to be a great Marketer</p>
              <Media />
            </section>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Service
