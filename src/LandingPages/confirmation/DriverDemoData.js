const driver_demo_data = {
  ProfileImage:
    "https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg",
  gigScore: 71,
  personalInfo: {
    name: "Byomkesh M Bakshi",
    dob: "08/06/1966",
    gender: "Male",
    pan: "XXXXXX453J",
    aadhar: "XXXX XXXX 9876",
    eeshramID: "XXXX XXXX 6253",
    dl: "2004XXXXXXXX1234",
    phone: "9876543210",
    email: "bbakshi@gmail.com",
    address: "66, MG Road, Kolkata, West Bengal 700009",
  },
  character: {
    tenure: {
      phone: "8 years",
      email: "10 years",
      address: "2 year",
    },
    validity: {
      phone: {
        disposable: false,
        spam: false,
        prepaid: true,
      },
      email: {
        disposable: false,
        spam: false,
        deliverable: true,
      },
    },
  },
  digitalFootprint: {
    digitalFootprintScore: 90,
    identityCorrelation: 70,
    govSites: ["EShram", "Digilocker", "MyAadhaar"],
    socialSites: ["WhatsApp", "Google", "FaceBook", "Flipkart"],
  },
  employment: {
    stabilityScore: 70,
    categories: ["Driver", "Factory", "Sales"],
    keyRevenueContributer: {
      value: 80,
      label: "Driver",
    },
    benchmark: 81,
    avgDaysOfWork: "26 days",
    experience: "8 years",
    educationLevel: "Matriculate",
    // skills: ["java", "javascript"],
  },
  finance: {
    range: { min: 30000, max: 40000 },
    consistency: "stable",
    growth: "10%",
    expenditureRange: "stable",
    avgBalance: 7000,
    totalExpenditure: {
      work: 40,
      personal: 60,
    },
  },
  assets: {
    ownerships: [
      { label: "Property", value: 100000 },
      { label: "Vehicle", value: 0 },
      { label: "Stocks", value: 100000 },
      { label: "Other Investment", value: 500000 },
    ],
    investments: [
      {
        label: "FD",
        value: 150000,
      },
      {
        label: "Mutual Funds",
        value: 10000,
      },
    ],
  },
  liability: {
    loans: [
      {
        type: "Vehicle Loan",
        amount: 800000,
        emi: 17394,
        outstandingAmnt: 149605,
        totalDuration: "60 Months",
        outstandingDuration: "9 months",
      },
    ],
    vice: "low",
    creditHunger: "low",
  },
};

export default driver_demo_data;
