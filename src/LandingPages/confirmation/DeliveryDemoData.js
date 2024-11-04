const delivery_demo_data = {
  ProfileImage:
    "https://static.vecteezy.com/system/resources/thumbnails/043/361/860/small/hand-drawnman-avatar-profile-icon-for-social-networks-forums-and-dating-sites-user-avatar-profile-placeholder-anonymous-user-male-no-photo-web-template-default-user-picture-profile-male-symbol-free-vector.jpg",
  gigScore: 31,
  personalInfo: {
    name: "Anukul Guha",
    dob: "18/01/1969",
    gender: "Male",
    pan: "XXXXXX216L",
    aadhar: "XXXX XXXX 7463",
    eeshramID: "XXXX XXXX 9246",
    dl: "2001XXXXXXXX1349",
    phone: "9241536214",
    email: "a_guha@gmail.com",
    address: "420, Sudder street, Kolkata, West Bengal 700016",
  },
  character: {
    tenure: {
      phone: "2 months",
      email: "2 weeks",
      address: "12 year",
    },
    validity: {
      phone: {
        disposable: false,
        spam: false,
        prepaid: true,
      },
      email: {
        disposable: true,
        spam: false,
        deliverable: false,
      },
    },
  },
  digitalFootprint: {
    digitalFootprintScore: 20,
    identityCorrelation: 70,
    govSites: ["MyAadhaar"],
    socialSites: ["Google", "FaceBook"],
  },
  employment: {
    stabilityScore: 30,
    categories: ["Delivery Associate"],
    keyRevenueContributer: {
      value: 80,
      label: "Delivery Person",
    },
    benchmark: 45,
    avgDaysOfWork: "13 days",
    experience: "2 months",
    educationLevel: "Matriculate",
    // skills: ["java", "javascript"],
  },
  finance: {
    range: { min: 8000, max: 10000 },
    consistency: "stable",
    growth: "3%",
    expenditureRange: "Volatile",
    avgBalance: 750,
    totalExpenditure: {
      work: 15,
      personal: 85,
    },
  },
  assets: {
    ownerships: [{ label: "Vehicle", value: 15000 }],
    investments: [
      {
        label: "FD",
        value: 7000,
      },
    ],
  },
  liability: {
    loans: [
      {
        type: "Vehicle Loan",
        amount: 60000,
        emi: 2000,
        outstandingAmnt: 64067,
        totalDuration: "60 Months",
        outstandingDuration: "57 Months",
      },
    ],
    vice: "high",
    creditHunger: "high",
  },
};

export default delivery_demo_data;
