import * as React from 'react';
import { Link } from 'react-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import { team, icon, values } from './employees.module.scss';

const Employees = () => {
  return (
    <section className={team} name="employees">
      <h2>Our employees make us great!</h2>
      <div>
        
         <p>
          We offer proactive, solution-oriented individuals a place to start or
          build a long-term career. As a hyper-growth company, we are constantly
          looking for the best and brightest to join our team!
        </p>
        <p>
          By joining us Natural Essentials/Bulk Apothecary, you will become part
          of an organization with a competitive and enthusiastic culture that
          believes in promoting from within. We recognize that a company is not
          a building, production lines, equipment, or products, but people. For
          that reason, we always look for individuals looking to be part of a
          family and a team. We look for individuals who are looking to build
          something great!
        </p>
        <p>
          At Natural Essentials/Bulk Apothecary, our people are our most
          valuable asset. One of our openings could be your perfect opportunity!
        </p>
     
        <div className={icon}>
          <StaticImage
            alt="Natural Essentials Inc"
            height={30}
            layout="fixed"
            objectFit="contain"
            placeholder="blurred"
            src="../../images/icon.png"
            width={30}
          />
        </div>
        <h3>Our People</h3>
        <p>
          Natural Essentials/Bulk Apothecary is a company built on a commitment
          to success.
        </p>
        <div className={values}>
          <div>
            <h4>Our Values</h4>
            <ul>
              <li>Consistently best quality</li>
              <li>Market-leading pricing</li>
              <li>Collaborative teamwork</li>
              <li>Constant improvement</li>
            </ul>
          </div>
          <div>
            <h4>Our Character</h4>
            <ul>
              <li>Integrity</li>
              <li>Honesty</li>
              <li>Enthusiasm</li>
              <li>Persistence</li>
            </ul>
          </div>
        </div>
        <div className={icon}>
          <StaticImage
            alt="Natural Essentials Inc"
            height={30}
            layout="fixed"
            objectFit="contain"
            placeholder="blurred"
            src="../../images/icon.png"
            width={30}
          />
        </div>
        <h3>Our hiring practices</h3>
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
        <div className={icon}>
          <StaticImage
            alt="Natural Essentials Inc"
            height={30}
            layout="fixed"
            objectFit="contain"
            placeholder="blurred"
            src="../../images/icon.png"
            width={30}
          />
        </div>
        <button>
          <Link duration={700} smooth={true} to="careers">
            Check out our careers
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Employees;
