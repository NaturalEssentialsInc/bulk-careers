import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Fieldset from '../Fieldset';
import Label from '../Label';
import Modal from '../Modal';
import ErrorSchema from '../../lib/errorSchema.js';
import {
  app,
  addressBlock,
  employer,
  formGroup,
  full,
  radio,
  textarea,
} from './application.module.scss';
import logo from './logoN.png';
import styled from 'styled-components';
import { FormObject } from './app.jsx';

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
  const [values, setValues] = useState(FormObject);

  const [message, setMessage] = useState('Thank you for your application!');

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
  `;

  const MyInput = styled.input`
    border: none;
    background-color: #c8e0f4;
    min-height: 30px;
    border-radius: 5px;

    margin-bottom: ${(props) => (props.stack ? '0.2rem' : 'none')};

    border-bottom: ${(props) => (props.stack ? '1px solid black' : 'none')};

    ${(props) =>
      props.isSignature ? `min-height: 100px; background-color: #eee` : ``};
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
  const Label = styled.label``;
  const Input = styled.input``;

  const TextArea = styled.textarea``;

  const Select = styled.select`
    border: none;
    min-height: 30px;
    background-color: #c8e0f4;
  `;

  const Button = styled.button``;

  const Error = styled.div``;

  const Success = styled.div``;

  let EmploymentGrouping = (props) => {
    let value = props.value + 1;
    return (
      <div style={{}}>
        <span>
          <SectionDiv>
            <MyLabel style={{ fontWeight: 'bold' }}>Employer ({value})</MyLabel>
            <MyInput type="text" name="employerName" />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Job Title</MyLabel>
            <MyInput type="text" name="jobTitle" />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Dates Employed</MyLabel>
            <MyInput type="text" name="datesEmployed" />
          </SectionDiv>
        </span>
        <span>
          <SectionDiv>
            <MyLabel>Work Phone</MyLabel>
            <MyInput type="text" name="workPhone" />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Starting pay rate</MyLabel>
            <MyInput type="text" name="startingPay" />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Ending pay rate</MyLabel>
            <MyInput type="text" name="endingPay" />
          </SectionDiv>
        </span>
        <span>
          <SectionDiv isEmpAddress>
            <MyLabel>Address</MyLabel>
            <MyInput type="text" name="employerAddress" />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>City</MyLabel>
            <MyInput type="text" name="employerCity" />
          </SectionDiv>
          <SectionDiv>
            <MyLabel>State</MyLabel>
            <Select name="employerState">
              {stateAbbrs.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </Select>
          </SectionDiv>
          <SectionDiv>
            <MyLabel>Zip</MyLabel>
            <MyInput type="text" name="employerZip" />
          </SectionDiv>
        </span>
      </div>
    );
  };

  const handleGetValues = async () => {
    // document.querySelectorAll('input', 'select').forEach((input) => {
    //   // console.log(input.name + ' : ' + input.value);

    //   setValues((prev) => ({
    //     ...prev,
    //     [input.name]: input.value,
    //   }));
    // });

    let mockValues = {
      personalInformation: {
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main St',
        city: 'Anytown',
        state: 'NY',
        zip: '12345',
        phone: '123-456-7890',
        email: 'xjjs@gmail.com',
        legal: 'yes',
        veteran: 'no',
        background: 'yes',
      },
      position: {
        position: 'Software Developer',
        startDate: '2021-10-10',
        salary: '100000',
        employment: 'fullTime',
      },
      education: {
        schoolName: ['Harvard', 'Yale', 'MIT', 'Columbia'],
        schoolLocation: ['Cambridge', 'New Haven', 'Boston', 'New York'],
        class: ['2010', '2011', '2012', '2013'],
        degree: ['BS', 'BA', 'MS', 'PhD'],
        major: ['CS', 'Math', 'Physics', 'Chemistry'],
      },
      references: {
        referenceName: [
          'John Smith',
          'Jane Doe',
          'James Brown',
          'Jimmy Carter',
        ],
        referenceTitle: ['CEO', 'CFO', 'CTO', 'COO'],
        referenceCompany: ['Microsoft', 'Apple', 'Google', 'Amazon'],
        referencePhone: [
          '123-456-7890',
          '234-567-8901',
          '345-678-9012',
          '456-789-0123',
        ],
      },
      employmentHistory: {
        employers: [
          {
            employerName: 'Microsoft',
            jobTitle: 'Software Developer',
            datesEmployed: '2010-2015',
            workPhone: '123-456-7890',
            startingPay: '100000',
            endingPay: '150000',
            employerAddress: '123 Main St',
            employerCity: 'Redmond',
            employerState: 'WA',
            employerZip: '12345',
          },
          {
            employerName: 'Apple',
            jobTitle: 'Software Developer',
            datesEmployed: '2015-2020',
            workPhone: '234-567-8901',
            startingPay: '150000',
            endingPay: '200000',
            employerAddress: '123 Main St',
            employerCity: 'Cupertino',
            employerState: 'CA',
            employerZip: '12345',
          },
          {
            employerName: 'Google',
            jobTitle: 'Software Developer',
            datesEmployed: '2020-2025',
            workPhone: '345-678-9012',
            startingPay: '200000',
            endingPay: '250000',
            employerAddress: '123 Main St',
            employerCity: 'Mountain View',
            employerState: 'CA',
            employerZip: '12345',
          },
          {
            employerName: 'Amazon',
            jobTitle: 'Software Developer',
            datesEmployed: '2025-2030',
            workPhone: '456-789-0123',
            startingPay: '250000',
            endingPay: '300000',
            employerAddress: '123 Main St',
            employerCity: 'Seattle',
            employerState: 'WA',
            employerZip: '12345',
          },
        ],
      },
      signature: {
        name: 'John Doe',
        date: '2021-10-10',
        signature: 'John Doe',
      },
    };

    let data = await handleSubmit(mockValues);
  };

  const handleSubmit = async (mockValues) => {
    //go to local host as a test for now port 3000 endpoint /careers
    let msg1 = 'Thank you for your application!';
    let response = await fetch('http://localhost:3000/careers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mockValues),
    });
    // console.log(data);
    // let data = await response.json();
    // console.log(data);
    // return data;
  };

  return (
    <FullPage>
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
              be considered. Please complete each section, even if you attach a
              resume
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
              <MyInput type="text" name="firstName" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel>Last Name</MyLabel>
              <MyInput type="text" name="lastName" />
            </SectionDiv>
          </span>
          <span>
            <SectionDiv isEmpAddress>
              <MyLabel>Address</MyLabel>
              <MyInput type="text" name="address" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel>City</MyLabel>
              <MyInput type="text" name="city" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel>State</MyLabel>
              <Select name="state">
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
              <MyInput type="text" name="phone" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel>Email Address</MyLabel>
              <MyInput type="text" name="email" />
            </SectionDiv>
          </span>
          <span>
            <SectionDiv>
              <MyLabel>Are you legally eligible to work in the US?</MyLabel>
              <FormGroup isRadio>
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

              <FormGroup isRadio isSpec>
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
            <FormGroup isRadio>
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
        <SubPageSection>
          <SubPageSubtitle>
            <h3>Position</h3>
          </SubPageSubtitle>
          <span>
            <SectionDiv>
              <MyLabel>Position Applying For</MyLabel>
              <Select name="position">
                {openJobs.map((job) => (
                  <option value={job}>{job}</option>
                ))}
              </Select>
            </SectionDiv>
            <SectionDiv>
              <MyLabel>Available Start Date</MyLabel>
              <MyInput type="date" name="startDate" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel>Desired Pay</MyLabel>
              {/* input can only be a number */}
              <MyInput type="number" name="salary" />
            </SectionDiv>
          </span>
          <SectionDiv>
            <MyLabel>Employment desired</MyLabel>
            <FormGroup isRadio>
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
              <MyInput type="text" stack="true" name="schoolName" />
              <MyInput type="text" stack="true" name="schoolName" />
              <MyInput type="text" stack="true" name="schoolName" />
              <MyInput type="text" stack="true" name="schoolName" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel stack="true">Location</MyLabel>
              <MyInput type="text" stack="true" name="schoolLocation" />
              <MyInput type="text" stack="true" name="schoolLocation" />

              <MyInput type="text" stack="true" name="schoolLocation" />
              <MyInput type="text" stack="true" name="schoolLocation" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel stack="true">Years Attended</MyLabel>
              <MyInput type="text" stack="true" name="class" />
              <MyInput type="text" stack="true" name="class" />

              <MyInput type="text" stack="true" name="class" />
              <MyInput type="text" stack="true" name="class" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel stack="true">Degree Recieved</MyLabel>
              <MyInput stack="true" type="text" name="degree" />
              <MyInput stack="true" type="text" name="degree" />

              <MyInput stack="true" type="text" name="degree" />
              <MyInput stack="true" type="text" name="degree" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel stack="true">Major</MyLabel>
              <MyInput type="text" stack="true" name="schoolLocation" />
              <MyInput type="text" stack="true" name="schoolLocation" />

              <MyInput type="text" stack="true" name="schoolLocation" />
              <MyInput type="text" stack="true" name="schoolLocation" />
            </SectionDiv>
          </span>
        </SubPageSection>
        <SubPageSection>
          <SubPageSubtitle>
            <h3>References</h3>
            <p>(Business and professional only)</p>
          </SubPageSubtitle>
          <span>
            <SectionDiv>
              <MyLabel stack="true">Name</MyLabel>
              <MyInput type="text" stack="true" name="referenceName" />
              <MyInput type="text" stack="true" name="referenceName" />
              <MyInput type="text" stack="true" name="referenceName" />
              <MyInput type="text" stack="true" name="referenceName" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel stack="true">Title</MyLabel>
              <MyInput type="text" stack="true" name="referenceLocation" />
              <MyInput type="text" stack="true" name="referenceLocation" />

              <MyInput type="text" stack="true" name="referenceLocation" />
              <MyInput type="text" stack="true" name="referenceLocation" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel stack="true">Company</MyLabel>
              <MyInput type="text" stack="true" name="class" />
              <MyInput type="text" stack="true" name="class" />

              <MyInput type="text" stack="true" name="class" />
              <MyInput type="text" stack="true" name="class" />
            </SectionDiv>
            <SectionDiv>
              <MyLabel stack="true">Phone</MyLabel>
              <MyInput type="text" stack="true" name="referencePhone" />
              <MyInput type="text" stack="true" name="referencePhone" />
              <MyInput type="text" stack="true" name="referencePhone" />
              <MyInput type="text" stack="true" name="referencePhone" />
            </SectionDiv>
          </span>
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
            that false or misleading information in my application or interview
            may result in my employment being terminated.
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
            <MyLabel>Signature</MyLabel>
            <MyInput isSignature type="text" name="signature" />
          </SectionDiv>
        </SubPageSection>
      </SubPage>
      {/* <button
        style={{
          backgroundColor: '#4444bb',
          color: 'white',
          fontSize: 36,
          borderRadius: '10px',
          padding: 15,
          margin: 15,
        }}
        onClick={(e) => {
          handleGetValues(e);
        }}
      >
        Submit
      </button> */}
      <SubmitButton
        type="submit"
        value="Submit"
        onClick={(e) => {
          console.log('clicked');
          handleGetValues(e);
        }}
      >
        Submit
      </SubmitButton>
    </FullPage>
  );
};

const SubmitButton = styled.button`
  background-color: #4444bb;
  color: white;
  font-size: 36px;
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
`;

export default Application;
