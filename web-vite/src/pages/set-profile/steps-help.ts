export const RegistrationSteps = [
  {
    title: 'Full Name',
    description: 'Please enter your full name.',
    mandatory: true,
  },
  {
    title: 'Username',
    description:
      'Select a username for your account. Your username must be at least 5 characters long and may not contain any offensive or inappropriate language.',
    mandatory: true,
  },
  {
    title: 'Gender',
    description:
      'Please select your gender from the options provided. This information is optional and will not impact your ability to use the platform.',
    mandatory: false,
  },
  {
    title: 'Date of Birth',
    description:
      'Enter your date of birth using the provided format. This information is required to verify that you meet the minimum age requirements to use the platform.',
    mandatory: true,
  },
  {
    title: 'Profile Description',
    description:
      'Please provide a brief description of yourself and your interests. This information will help other users better understand you and connect with you on the platform.',
    mandatory: false,
  },
];
