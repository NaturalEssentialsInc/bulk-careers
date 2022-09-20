import * as React from 'react';
import { Link } from 'react-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import { about, wrapper, wrapper2 } from './about.module.scss';

const About = () => {
  return (
    <section className={about} name="about">
      <h2>About us</h2>
      <div>
       
        <p>
          Natural Essentials, Inc. was founded in 1995 as a family-owned
          business in Aurora, Ohio. Since then, the company has grown from
          humble beginnings into one of the nation’s top contract filling
          companies.
        </p>
        <p>
          In 2010, the family launched Bulk Apothecary as a way to expand
          Natural Essentials. Originally a brick and mortar store in
          Streetsboro, Bulk Apothecary has also grown rapidly from its
          grassroots into one of the nation’s largest online retailers of
          natural ingredients, essential oils, soap making, and candle making
          supplies. Our main focus at Bulk Apothecary is providing the best
          possible customer service by offering amazing products at great prices
          and committing daily to positively impact our customers’ experience.
        </p>
        <div className={wrapper}>
          <StaticImage
            alt="Bulk Apothecary"
            height={60}
            layout="constrained"
            objectFit="contain"
            placeholder="blurred"
            src="../../images/bulk-logo.png"
          />
    
       
          <StaticImage
            alt="Natural Essentials Inc"
            height={60}
            layout="constrained"
            objectFit="contain"
            placeholder="blurred"
            src="../../images/natural-logo.png"
          />
        </div>

        <button>
          <Link duration={700} smooth={true} to="employees">
            Meet our team
          </Link>
        </button>
      </div>
    </section>
  );
};

export default About;
