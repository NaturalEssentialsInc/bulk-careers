import styled from 'styled-components';

export const FormObject = {
  personalInformation: {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    legal: '',
    veteran: '',
    background: '', // background check
  },
  position: {
    position: '',
    startDate: '',
    salary: '',
    employment: '',
  },
  education: {
    schoolName: [{}, {}, {}, {}],
    schoolLocation: [{}, {}, {}, {}],
    class: [{}, {}, {}, {}],
    degree: [{}, {}, {}, {}],
    major: [{}, {}, {}, {}],
  },
  references: {
    referenceName: [{}, {}, {}, {}],
    referenceTitle: [{}, {}, {}, {}],
    referenceCompany: [{}, {}, {}, {}],
    referencePhone: [{}, {}, {}, {}],
  },
  employmentHistory: {
    employers: [
      {
        employerName: '',
        jobTitle: '',
        datesEmployed: '',
        workPhone: '',
        startingPay: '',
        endingPay: '',
        employerAddress: '',
        employerCity: '',
        employerState: '',
        employerZip: '',
      },
    ],
  },
  signature: {
    name: '',
    date: '',
    signature: '',
  },
};

export const proObject1 = {
  firstName: 'Carl',
  middleName: 'Andrew',
  lastName: 'Palumbo',
  address: '710 Jefferson St',
  city: 'Tremont',
  state: 'Ohio',
  zip: '44113',
  phone: '6144620098',
  email: 'C@gmail.com',
  legal: 'no',
  veteran: 'yes',
  background: 'yes',
  position: 'default,Any open position',
  startDate: '02012024',
  salary: '75,000',
  employment: 'Full-time',
  schoolName1: 'Kent State University',
  schoolName2: '',
  schoolName3: '',
  schoolName4: '',
  schoolLocation1: 'Kent, OH',
  schoolLocation2: '',
  schoolLocation3: '',
  schoolLocation4: '',
  year: '2017',
  degree: 'Comp',
  major1: 'Lasers',
  major2: '',
  major3: '',
  major4: '',
  referenceName1: 'Darain Bennett',
  referenceTitle1: 'CFO ',
  referenceCompany1: 'Legal Aid Society of Cleveland',
  referencePhone1: '216-687-1900',
  referenceName2: '',
  referenceTitle2: '',
  referenceCompany2: '',
  referencePhone2: '',
  referenceName3: '',
  referenceTitle3: '',
  referenceCompany3: '',
  referencePhone3: '',
  referenceName4: '',
  referenceTitle4: '',
  referenceCompany4: '',
  referencePhone4: '',
  employerName1: 'Bulk Solutions',
  jobTitle1: 'King of the World',
  datesEmployed1: '01012020 - 01012021',
  workPhone1: '456-789-1234',
  startingPay1: '50,000',
  endingPay1: '65,000',
  employerAddress1: '1710 E 9th St',
  employerCity1: 'Cleveland',
  employerState1: 'OH',
  employerZip1: '44114',
  employerName2: 'Dinkos Tacos',
  jobTitle2: 'Taco Artist',
  datesEmployed2: '01012018 - 01012020',
  workPhone2: '216-555-5555',
  startingPay2: '10,000',
  endingPay2: '50,000',
  employerAddress2: '1710 E 9th St',
  employerCity2: 'Cleveland',
  employerState2: 'OH',
  employerZip2: '44114',
  employerName3: 'Bearcat Solutions',
  jobTitle3: 'King of the World',
  datesEmployed3: '01012020 - 01012021',
  workPhone3: '456-789-1234',
  startingPay3: '50,000',
  endingPay3: '65,000',
  employerAddress3: '1710 E 9th St',
  employerCity3: 'Cleveland',
  employerState3: 'OH',
  employerZip3: '44114',
  employerName4: 'Dinkos Tacos',
  jobTitle4: 'Taco Artist',
  datesEmployed4: '01012018 - 01012020',
  workPhone4: '216-555-5555',
  startingPay4: '10,000',
  endingPay4: '50,000',
  employerAddress4: '1710 E 9th St',
  employerCity4: 'Cleveland',
  employerState4: 'OH',
  employerZip4: '44114',
  printedName: 'Carl Palumbo',
  date: '01012024',
  signature: 'Carl Palumbo',
};

export const proObject = {
  address: '123 Main St',
  background: 'yes',
  city: 'New York',
  date: '2024-02-14',
  datesEmployed1: '2019-01-01 - 2020-12-31',
  datesEmployed2: '2018-01-01 - 2019-12-31',
  datesEmployed3: '2017-01-01 - 2018-12-31',
  datesEmployed4: '2016-01-01 - 2017-12-31',
  datesEmployed5: '',
  degree1: 'Bachelor of Science',
  degree2: 'Master of Arts',
  degree3: 'Associate of Applied Science',
  degree4: 'Doctor of Philosophy',
  email: 'carl@example.com',
  employerAddress1: '456 Elm St',
  employerAddress2: '789 Oak St',
  employerAddress3: '321 Pine St',
  employerAddress4: '654 Maple St',
  employerAddress5: '',
  employerCity1: 'New York',
  employerCity2: 'Los Angeles',
  employerCity3: 'Chicago',
  employerCity4: 'Houston',
  employerCity5: '',
  employerName1: 'ABC Company',
  employerName2: 'XYZ Corporation',
  employerName3: '123 Industries',
  employerName4: '456 Enterprises',
  employerName5: '',
  employerState1: 'NY',
  employerState2: 'CA',
  employerState3: 'IL',
  employerState4: 'TX',
  employerState5: ' ',
  employerZip1: '10001',
  employerZip2: '90001',
  employerZip3: '60601',
  employerZip4: '77001',
  employerZip5: '',
  employment: 'full-time',
  endingPay1: '60000',
  endingPay2: '80000',
  endingPay3: '40000',
  endingPay4: '50000',
  endingPay5: '',
  firstName: 'John',
  jobTitle1: 'Software Engineer',
  jobTitle2: 'Marketing Manager',
  jobTitle3: 'Sales Representative',
  jobTitle4: 'Project Manager',
  jobTitle5: '',
  lastName: 'Doe',
  legal: 'yes',
  major1: 'Computer Science',
  major2: 'Business Administration',
  major3: 'Marketing',
  major4: 'Finance',
  middleName: 'Andrew',
  phone: '123-456-7890',
  position: 'Senior Developer',
  printedName: 'John Doe',
  referenceCompany1: 'ABC Inc.',
  referenceCompany2: 'XYZ Corp.',
  referenceCompany3: '123 Company',
  referenceCompany4: '456 Enterprises',
  referenceName1: 'Jane Smith',
  referenceName2: 'Mike Johnson',
  referenceName3: 'Sarah Davis',
  referenceName4: 'David Wilson',
  referencePhone1: '111-222-3333',
  referencePhone2: '444-555-6666',
  referencePhone3: '777-888-9999',
  referencePhone4: '000-999-8888',
  referenceTitle1: 'Manager',
  referenceTitle2: 'Director',
  referenceTitle3: 'Supervisor',
  referenceTitle4: 'Executive',
  salary: '75000',
  schoolLocation1: 'New York',
  schoolLocation2: 'Los Angeles',
  schoolLocation3: 'Chicago',
  schoolLocation4: 'Houston',
  schoolName1: 'University of ABC',
  schoolName2: 'XYZ College',
  schoolName3: '123 University',
  schoolName4: '456 Institute',
  signature: 'John Doe',
  startDate: '2024-02-07',
  startingPay1: '50000',
  startingPay2: '70000',
  startingPay3: '30000',
  startingPay4: '40000',
  startingPay5: '',
  state: 'NY',
  veteran: 'no',
  workPhone1: '111-222-3333',
  workPhone2: '444-555-6666',
  workPhone3: '777-888-9999',
  workPhone4: '000-999-8888',
  workPhone5: ' ',
  year1: '2015',
  year2: '2016',
  year3: '2017',
  year4: '2018',
  zip: '10001',
};

export const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubPage = styled.div`
  max-width: 1200px;
`;

export const SectionDiv = styled.div`
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

export const MyInput = styled.input`
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

export const MyLabel = styled.label`
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

export const HeaderContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
  align-items: end;
  justify-content: center;
  flex-direction: row;
  border-top: 5px solid #222;
  margin-top: 3rem;
`;

export const SubPageTitle = styled.h3`
  color: #222;
  background: white;
  margin-right: 15px;
  margin-left: 0px;
  border: none;
  font-weight: bold;
`;

export const SubPageSection = styled.div`
  flex-direction: column;
  span {
    display: flex;
    flex-direction: row;
  }

  margin: 10px;
`;
export const HeaderBlurb = styled.p`
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

export const Disclaimer = styled.span`
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
export const Logo = styled.img`
  background-size: contain;
  width: 200px;
`;

export const SubPageSubtitle = styled.div`
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

export const Select = styled.select`
  border: none;
  min-height: 30px;
  background-color: #c8e0f4;
`;
