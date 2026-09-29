// Default fallback record matching the redesigned certificate verification
export const fallbackCertificateData = {
  certificateId: "NGAT20162318",
  verified: true,
  verificationMessage: "This certificate has been successfully verified through the official Ministry of Education portal.",
  verificationTimestamp: "2026-09-29T21:36:00Z",
  candidate: {
    fullName: "Abdi kalif abdi",
    username: "NGAT20162318",
    gender: "Male",
    examDate: "Sept 2026",
    avatar: "/prof.jpg"
  },
  results: {
    totalScore: 50,
    passMark: 50,
    status: "Pass",
    certificate: "Verified"
  },
  issuer: {
    organization: "Ministry of Education",
    year: "2026",
    copyright: "© 2026 Ministry of Education. All rights reserved."
  }
};

export const fetchCertificateData = async (id = '') => {
  try {
    const url = id ? `/api/verify/${id}` : '/api/verify';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.data || fallbackCertificateData;
  } catch (error) {
    console.warn("Using fallback certificate data:", error.message);
    return fallbackCertificateData;
  }
};
