import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';

import { formGroup, radio, textarea } from './application.module.scss';
import logo from './logoN.png';
import styled from 'styled-components';
import { FormObject, proObject } from './app.jsx';
import { navigate } from 'gatsby-link';
// import { Formik } from 'formik';

const FormGroup = ({ children, isRadio = false, isTextArea = false }) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
      className={`${formGroup} ${isRadio ? radio : ''} ${
        isTextArea ? textarea : ''
      }`}
    >
      {children}
    </div>
  );
};

const Application = ({ openJobs }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  const [values, setValues] = useState(FormObject);

  const endpoints = {
    post: '/.netlify/functions/postApplication',
  };

  // prettier-ignore
  const stateAbbrs = [
    '--',
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
  ];

  {
  }
  const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const SubPage = styled.div`
    max-width: 1200px;
  `;

  const SectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid #222;
    border-left: 1px solid #222;
    border-bottom: 1px solid #222;

    width: 100%;
    padding: 0.2rem;
    ${(props) => (props.isEmpAddress ? `min-width: 40%` : ``)}
    ${(props) => (props.isSubmit ? `border: none` : ``)}
  `;

  const MyInput = styled.input`
    border: none;
    background-color: #c8e0f4;
    min-height: 30px;
    border-radius: 5px;

    margin-bottom: ${(props) => (props.stack ? '0.2rem' : 'none')};

    border-bottom: ${(props) => (props.stack ? '1px solid black' : 'none')};

    ${(props) =>
      props.isSignature
        ? `min-height: 100px; background-color: #eee; width: 80%; align-self: center;font-size: 24px; border-radius: 10px; padding: 15px; margin: 15px; font-style: italic;`
        : ``};
  `;

  const MyLabel = styled.label`
    ${(props) =>
      props.stack
        ? `display: flex;
           justify-content: center;
           border-bottom: 1px solid #222;
           margin-bottom: 0.2rem;`
        : `display: flex;
    border: none;
    padding-left: 0.2rem;
    align-items: center;
    shadow: none;
    margin-right: auto;`};
  `;

  const HeaderContainer = styled.div`
    display: flex;
    padding-bottom: 1rem;
    align-items: end;
    justify-content: center;
    flex-direction: row;
    border-top: 5px solid #222;
    margin-top: 3rem;
  `;

  const SubPageTitle = styled.h3`
    color: #222;
    background: white;
    margin-right: 15px;
    margin-left: 0px;
    border: none;
    font-weight: bold;
  `;

  const SubPageSection = styled.div`
    flex-direction: column;
    span {
      display: flex;
      flex-direction: row;
    }

    box-shadow: none;
    margin: 10px;
  `;
  const HeaderBlurb = styled.p`
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    width: 33%;
    background: #eee;
  `;

  const Disclaimer = styled.span`
    display: flex;
    align-text: center;
    align-content: center;

    justify-content: center;
    padding: 2rem;
    border: 1px solid #222;
    flex-direction: row;
    font-size: 16px;
    font-weight: bold;
    background: #eee;
  `;
  const Logo = styled.img`
    background-size: contain;
    width: 200px;
  `;

  const SubPageSubtitle = styled.div`
    display: flex;
    h3 {
      color: white;
      font-weight: bold;
      border: none;
    }
    p {
      color: white;
      font-size: 12px;
      font-weight: bold;
    }

    background-color: #4444bb;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `;

  const Select = styled.select`
    border: none;
    min-height: 30px;
    background-color: #c8e0f4;
  `;

  let EmploymentGrouping = (props) => {
    let value = props.value + 1;
    return (
      <div style={{}}>
        <span>
          <SectionDiv>
            <MyLabel style={{ fontWeight: 'bold' }}>Employer ({value})</MyLabel>
            <MyInput type="text" name={`employerName${value}`} />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Job Title</MyLabel>
            <MyInput type="text" name={`jobTitle${value}`} />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Dates Employed</MyLabel>
            <MyInput type="text" name={`datesEmployed${value}`} />
          </SectionDiv>
        </span>
        <span>
          <SectionDiv>
            <MyLabel>Work Phone</MyLabel>
            <MyInput type="text" name={`workPhone${value}`} />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Starting pay rate</MyLabel>
            <MyInput type="text" name={`startingPay${value}`} />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Ending pay rate</MyLabel>
            <MyInput type="text" name={`endingPay${value}`} />
          </SectionDiv>
        </span>
        <span>
          <SectionDiv isEmpAddress>
            <MyLabel>Address</MyLabel>
            <MyInput type="text" name={`employerAddress${value}`} />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>City</MyLabel>
            <MyInput type="text" name={`employerCity${value}`} />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>State</MyLabel>
            <Select name={`employerState${value}`}>
              {stateAbbrs.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </Select>
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Zip</MyLabel>
            <MyInput type="text" name={`employerZip${value}`} />
          </SectionDiv>
        </span>
      </div>
    );
  };

  const Popup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    opacity: 0.9;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    font-size: 24px;
    height: 200px;
    background-color: #222;
    color: white;
    border: 1px solid #000;
    z-index: 100;
    animation:
      fade-in 2s,
      fade-out 2s 5s;
  `;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);
    // go back to the original state
    return () => clearTimeout(timer);
  }, [show]);

  let ReferencesGrouping = (props) => {
    let value = props.value + 1;
    return (
      <div style={{}}>
        <span>
          <SectionDiv>
            <MyLabel style={{ fontWeight: 'bold' }}>
              Reference ({value})
            </MyLabel>
            <MyInput required type="text" name={`referenceName${value}`} />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Title</MyLabel>
            <MyInput type="text" name={`referenceTitle${value}`} />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Company</MyLabel>
            <MyInput type="text" name={`referenceCompany${value}`} />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Phone</MyLabel>
            <MyInput type="text" name={`referencePhone${value}`} />
          </SectionDiv>
        </span>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let inputs = e.target.elements;
    // console.log(typeof inputs);
    inputs = Array.from(inputs);
    // console.log(inputs);
    let tempObject = {};
    inputs.forEach((input) => {
      if (input.name) {
        tempObject[input.name] = input.value;
      }
    });
    // console.log(proObject);

    let response = await fetch(endpoints.post, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tempObject),
    });
    let data = await response.json();
    setShow(true);
    setTimeout(() => {
      navigate('/');
    }, 4000);
  };

  return (
    <FullPage show>
      <form onSubmit={handleSubmit}>
        <SubPage>
          <HeaderContainer>
            <SubPageTitle>Application For Employment</SubPageTitle>
            <Logo src={logo} />
            <HeaderBlurb>
              <p>
                We are an Equal Opportunity Employer and committed to excellence
                through diversity
              </p>
              <p>
                Please print or type. The application must be fully completed to
                be considered. Please complete each section, even if you attach
                a resume
              </p>
            </HeaderBlurb>
          </HeaderContainer>
          <SubPageSection>
            <SubPageSubtitle>
              <h3>Personal Information</h3>
            </SubPageSubtitle>
            <span>
              <SectionDiv>
                <MyLabel>First Name</MyLabel>
                <MyInput
                  required
                  type="text"
                  name="firstName"
                  htmlFor="firstName"
                />
              </SectionDiv>
              <SectionDiv>
                <MyLabel>Middle Name</MyLabel>
                <MyInput type="text" name="firstName" htmlFor="firstName" />
              </SectionDiv>
              <SectionDiv>
                <MyLabel>Last Name</MyLabel>
                <MyInput required type="text" name="lastName" />
              </SectionDiv>
            </span>
            <span>
              <SectionDiv isEmpAddress>
                <MyLabel>Address</MyLabel>
                <MyInput required type="text" name="address" />
              </SectionDiv>
              <SectionDiv>
                <MyLabel>City</MyLabel>
                <MyInput required type="text" name="city" />
              </SectionDiv>
              <SectionDiv>
                <MyLabel>State</MyLabel>
                <Select required name="state">
                  {stateAbbrs.map((state) => (
                    <option value={state}>{state}</option>
                  ))}
                </Select>
              </SectionDiv>
              <SectionDiv>
                <MyLabel>Zip</MyLabel>
                <MyInput type="text" name="zip" />
              </SectionDiv>
            </span>
            <span>
              <SectionDiv>
                <MyLabel>Phone Number</MyLabel>
                <MyInput required type="text" name="phone" />
              </SectionDiv>
              <SectionDiv>
                <MyLabel>Email Address</MyLabel>
                <MyInput required type="text" name="email" />
              </SectionDiv>
            </span>
            <span>
              <SectionDiv>
                <MyLabel>Are you legally eligible to work in the US?</MyLabel>
                <FormGroup required isRadio>
                  <MyLabel>
                    Yes
                    <MyInput type="radio" name="legal" value="yes" />
                  </MyLabel>
                  <MyLabel>
                    No
                    <MyInput type="radio" name="legal" value="no" />
                  </MyLabel>
                </FormGroup>
              </SectionDiv>
              <SectionDiv>
                <MyLabel>Are you a veteran?</MyLabel>

                <FormGroup required isRadio isSpec>
                  <MyLabel>
                    Yes
                    <MyInput type="radio" name="veteran" value="yes" />
                  </MyLabel>
                  <MyLabel>
                    No
                    <MyInput type="radio" name="veteran" value="no" />
                  </MyLabel>
                </FormGroup>
              </SectionDiv>
            </span>
            <SectionDiv>
              <MyLabel>
                If selected for employment are you willing to submit to a
                background check?
              </MyLabel>
              <FormGroup required isRadio>
                <MyLabel>
                  Yes
                  <MyInput type="radio" name="background" value="yes" />
                </MyLabel>
                <MyLabel>
                  No
                  <MyInput type="radio" name="background" value="no" />
                </MyLabel>
              </FormGroup>
            </SectionDiv>
          </SubPageSection>
          <SubPageSection isSubSect>
            <SubPageSubtitle>
              <h3>Position</h3>
            </SubPageSubtitle>
            <span>
              <SectionDiv>
                <MyLabel>Position Applying For</MyLabel>
                <Select required name="position">
                  {openJobs.map((job) => (
                    <option value={job}>{job}</option>
                  ))}
                </Select>
              </SectionDiv>
              <SectionDiv>
                <MyLabel required>Available Start Date</MyLabel>
                <MyInput type="date" name="startDate" />
              </SectionDiv>
              <SectionDiv>
                <MyLabel>Desired Pay</MyLabel>
                <MyInput type="number" name="salary" />
              </SectionDiv>
            </span>
            <SectionDiv>
              <MyLabel>Employment desired</MyLabel>
              <FormGroup required isRadio>
                <MyLabel>
                  Full Time
                  <MyInput type="radio" name="employment" value="fullTime" />
                </MyLabel>
                <MyLabel>
                  Part Time
                  <MyInput type="radio" name="employment" value="partTime" />
                </MyLabel>
                <MyLabel>
                  Seasonal/Temporary
                  <MyInput type="radio" name="employment" value="seasonal" />
                </MyLabel>
              </FormGroup>
            </SectionDiv>
          </SubPageSection>
          <SubPageSection>
            <SubPageSubtitle>
              <h3>Education</h3>
            </SubPageSubtitle>
            <span>
              <SectionDiv>
                <MyLabel stack="true">School Name</MyLabel>
                <MyInput type="text" stack="true" name="schoolName1" />
                <MyInput type="text" stack="true" name="schoolName2" />
                <MyInput type="text" stack="true" name="schoolName3" />
                <MyInput type="text" stack="true" name="schoolName4" />
              </SectionDiv>
              <SectionDiv>
                <MyLabel stack="true">Location</MyLabel>
                <MyInput type="text" stack="true" name="schoolLocation1" />
                <MyInput type="text" stack="true" name="schoolLocation2" />

                <MyInput type="text" stack="true" name="schoolLocation3" />
                <MyInput type="text" stack="true" name="schoolLocation4" />
              </SectionDiv>
              <SectionDiv>
                <MyLabel stack="true">Years Attended</MyLabel>
                <MyInput type="text" stack="true" name="year1" />
                <MyInput type="text" stack="true" name="year2" />

                <MyInput type="text" stack="true" name="year3 " />
                <MyInput type="text" stack="true" name="year4" />
              </SectionDiv>
              <SectionDiv>
                <MyLabel stack="true">Degree Recieved</MyLabel>
                <MyInput stack="true" type="text" name="degree1" />
                <MyInput stack="true" type="text" name="degree2" />

                <MyInput stack="true" type="text" name="degree3" />
                <MyInput stack="true" type="text" name="degree4" />
              </SectionDiv>
              <SectionDiv>
                <MyLabel stack="true">Major</MyLabel>
                <MyInput type="text" stack="true" name="major1" />
                <MyInput type="text" stack="true" name="major2" />
                <MyInput type="text" stack="true" name="major3" />
                <MyInput type="text" stack="true" name="major4" />
              </SectionDiv>
            </span>
          </SubPageSection>
          <SubPageSection>
            <SubPageSubtitle>
              <h3>References</h3>
              <p>(Business and professional only)</p>
            </SubPageSubtitle>
            {[...Array(4)].map((_, i) => (
              <ReferencesGrouping key={i} value={i} />
            ))}
          </SubPageSection>
          <SubPageSection>
            <SubPageSubtitle>
              <h3>Employment History</h3>
            </SubPageSubtitle>
            {[...Array(5)].map((_, i) => (
              <EmploymentGrouping key={i} value={i} />
            ))}
          </SubPageSection>
          <SubPageSection>
            <SubPageSubtitle>
              <h3>Signature Disclaimer</h3>
            </SubPageSubtitle>
            <Disclaimer>
              I certify that my answers are true and complete to the best of my
              knowledge. If this application leads to employment, I understand
              that false or misleading information in my application or
              interview may result in my employment being terminated.
            </Disclaimer>

            <SectionDiv>
              <MyLabel>Name</MyLabel>
              <MyInput type="text" name="printedName" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel>Date</MyLabel>
              <MyInput type="date" name="date" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel>
                <strong>Signature</strong>
              </MyLabel>
              <MyInput isSignature type="text" name="signature" />
            </SectionDiv>
            <SectionDiv isSubmit>
              <SubmitButton>Submit</SubmitButton>
            </SectionDiv>
          </SubPageSection>
        </SubPage>
      </form>
      {show && (
        <Popup>
          <p>Thank you for your submission</p>
        </Popup>
      )}
    </FullPage>
  );
};

const SubmitButton = styled.button`
  background-color: #4444bb;
  color: white;
  align-self: center;
  font-size: 36px;
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
`;

export default Application;
