import * as React from 'react';
import { Link } from 'react-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import { about, wrapper, wrapper2 } from './about.module.scss';

const About = () => {
  return (
    <section className={about} name="about">
      <h2>About us</h2>
      <div>
        {/* <p>
          Bulk Apothecary was founded in mid-2010 as a small brick & mortar
          specialty retailer in Streetsboro, Ohio, and has since grown to become
          one of the nation's largest online suppliers of natural ingredients
          and essential oils. Our primary focus from the beginning was soap and
          candle-making supplies, but the word of our fantastic prices, amazing
          quality, and excellent customer service spread. Within three years, we
          expanded our offering to a wide range of specialty ingredients and
          vitamin supplements. We had a dominant online presence that was
          growing by the day. Today, we still operate our small store in Aurora,
          Ohio but also have an online presence that's growth is nothing short
          of amazing.
        </p> */}

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
        <p>
          As a family-owned business, our owners ensure that our employees are
          able to spend as much time with their families as possible.
          Maintaining a healthy work-life balance is highly valued here. We only
          operate Monday-Friday so that parents have weekends with their
          children, provide amazing healthcare and benefits options for all
          types of families, and, through a team-oriented atmosphere, promote a
          positive work environment.
        </p>
        <p>
          Employees in all departments have fun, work together, and get the job
          done!
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
        </div>
        <div className={wrapper2}>
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
