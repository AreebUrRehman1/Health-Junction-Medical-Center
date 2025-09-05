// This file contains all the patient data in a single array of objects.

export const patientDetails = [
  {
    name: 'John Doe',
    Id: 'PT8847',
    dateOfBirth: '01/15/1990',
    contact: 'john.doe@email.com',
    gender: 'Male',
    phone: '(555) 123-4567',
    address: '123 Main Street, Anytown, USA 12345',
    allergies: 'Penicillin',
    conditions: 'Hypertension, Type 2 Diabetes',
    surgeries: 'Appendectomy (2010)',
    medications: ['Metformin (for diabetes)', 'Lisinopril (for hypertension)', 'Aspirin (daily)'],
    recentVisits: [
      { date: '08/29/2024', reason: 'Annual physical check-up', notes: 'Patient reported feeling well. Blood work ordered. Discussed diet and exercise.' },
      { date: '05/10/2024', reason: 'Hypertension follow-up', notes: 'Adjusted Lisinopril dosage. Blood pressure readings were stable.' },
      { date: '02/02/2024', reason: 'Sore throat and fever', notes: 'Diagnosed with viral pharyngitis. Advised rest and hydration.' }
    ]
  }, {
    name: 'Jane Smith',
    Id: 'PT9235',
    dateOfBirth: '05/20/1985',
    contact: 'jane.smith@email.com',
    gender: 'Female',
    phone: '(555) 987-6543',
    address: '456 Oak Avenue, Springfield, USA 54321',
    allergies: 'None',
    conditions: 'Migraines',
    surgeries: 'None',
    medications: ['Sumatriptan (for migraines)'],
    recentVisits: [
      { date: '07/15/2024', reason: 'Migraine consultation', notes: 'Discussed migraine triggers. Prescribed new medication.' },
      { date: '01/10/2024', reason: 'Routine check-up', notes: 'General health is good. Advised regular exercise.' }
    ]
  }, {
    name: 'David Lee',
    Id: 'PT7654',
    dateOfBirth: '11/03/1972',
    contact: 'david.lee@email.com',
    gender: 'Male',
    phone: '(555) 555-1234',
    address: '789 Pine Street, Metropolis, USA 67890',
    allergies: 'Pollen',
    conditions: 'Asthma',
    surgeries: 'Tonsillectomy (1980)',
    medications: ['Albuterol (inhaler)', 'Fluticasone (nasal spray)'],
    recentVisits: [
      { date: '09/01/2024', reason: 'Lab results review', notes: 'Blood test results were normal. Discussed allergy management for the fall season.' },
      { date: '03/18/2024', reason: 'Asthma flare-up', notes: 'Adjusted inhaler usage instructions. Patient showed improvement after one week.' }
    ]
  }, {
    name: 'Emily Chen',
    Id: 'PT1450',
    dateOfBirth: '08/22/2001',
    contact: 'emily.chen@email.com',
    gender: 'Female',
    phone: '(555) 444-5678',
    address: '101 Elm Street, Star City, USA 98765',
    allergies: 'None',
    conditions: 'None',
    surgeries: 'Wisdom teeth removal (2019)',
    medications: ['None'],
    recentVisits: [
      { date: '09/03/2024', reason: 'New patient consultation', notes: 'First visit. Patient is in good health. Provided general wellness advice.' }
    ]
  }, {
    name: 'Michael Brown',
    Id: 'PT3289',
    dateOfBirth: '04/10/1960',
    contact: 'michael.brown@email.com',
    gender: 'Male',
    phone: '(555) 888-9999',
    address: '222 Birch Lane, Central City, USA 13579',
    allergies: 'Dust mites',
    conditions: 'Chronic pain',
    surgeries: 'Knee replacement (2020)',
    medications: ['Ibuprofen (as needed)'],
    recentVisits: [
      { date: '09/04/2024', reason: 'Chronic pain management', notes: 'Discussed physical therapy options and pain relief strategies. Patient reported slight improvement.' }
    ]
  }
];
