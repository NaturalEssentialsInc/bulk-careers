export const FormObject = {
  personalInformation: {
    firstName: '',
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
