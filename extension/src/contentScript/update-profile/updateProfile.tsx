import './update-profile.scss';

import {
  BackButton,
  Button,
  ButtonContainer,
  Container,
  ErrorMessage,
  FieldContainer,
  FormContainer,
  ParentProfile,
  StepContainer,
  SuccessMessage,
  TextArea,
} from './updateProfile.styles';
import {
  FocusEventHandler,
  KeyboardEventHandler,
  RefObject,
  useContext,
  useEffect,
  useRef,
} from 'react';
import {
  Profile,
  useIsUserNameExistsMutation,
  useUpsertProfileMutation,
} from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { EXT_URL } from '../../constants';
import { ThemeContext } from 'styled-components';
import { ThemeProps } from '../../theme/theme';
import { batch } from 'react-redux';
import { sliceAddUserNickName } from '../../redux/slices/user/userSlice';
import { sliceSetIsProfileNeedsToBeUpdated } from '../../redux/slices/misc/miscSlice';
import { useState } from 'react';

type FormDataType = {
  value: string;
  error: string;
  regex: RegExp;
};

type FormData = {
  userName: FormDataType;
  fullName: FormDataType;
  gender: FormDataType;
  dob: FormDataType;
  bio: FormDataType;
};

type Field = {
  name: keyof FormData;
  label: string;
};

const defaultFormData: FormData = {
  userName: {
    value: '',
    error: '',
    regex:
      /^([a-zA-Z0-9_-]{4,20})$|^.*?([\s+=!@#$%^&*(){}[\]:;"'<>,.?/\\|`~]).*?$/,
  },
  fullName: {
    value: '',
    error: '',
    regex: /^[a-zA-Z ]{2,30}$/,
  },
  gender: {
    value: '',
    error: '',
    regex: /^(Male|Female|Other)$/i,
  },
  dob: {
    value: '',
    error: '',
    regex: /^\d{4}-\d{2}-\d{2}$/,
  },
  bio: {
    value: '',
    error: '',
    regex: /^.{0,150}$/,
  },
};

const steps = [
  {
    label: 1,
    fields: [
      { name: 'userName', label: 'User Name' },
      { name: 'fullName', label: 'Full Name' },
    ] as Field[],
  },
  {
    label: 2,
    fields: [
      {
        name: 'gender',
        label: 'Gender',
      },
      {
        name: 'dob',
        label: 'DOB',
      },
      {
        name: 'bio',
        label: 'Bio (optional)',
      },
    ] as Field[],
  },
];

type props = {
  profile: Profile | null | undefined;
};
const UpdateProfile: React.FC<props> = ({ profile }) => {
  const user = useAppSelector((state) => state.user);
  const [formData, setFormData] = useState<FormData>({
    userName: {
      value: user.nickname,
      error: '',
      regex:
        /^([a-zA-Z0-9_-]{4,20})$|^.*?([\s+=!@#$%^&*(){}[\]:;"'<>,.?/\\|`~]).*?$/,
    },
    fullName: {
      value: profile?.fullname as string,
      error: '',
      regex: /^[a-zA-Z ]{2,30}$/,
    },
    gender: {
      value: profile?.gender as string,
      error: '',
      regex: /^(Male|Female|Other)$/i,
    },
    dob: {
      value: profile?.dob as string,
      error: '',
      regex: /^\d{4}-\d{2}-\d{2}$/,
    },
    bio: {
      value: profile?.bio as string,
      error: '',
      regex: /^.{0,150}$/,
    },
  });

  const dobRef = useRef<HTMLInputElement | null>(null);
  const bioRef = useRef<HTMLTextAreaElement | null>(null);
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const [focussedElement, setFocussedElement] = useState<RefObject<
    HTMLInputElement | HTMLTextAreaElement
  > | null>(null);
  const themeContext: ThemeProps = useContext(ThemeContext);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  const [, isUserNameExists] = useIsUserNameExistsMutation();
  const [, upsertProfile] = useUpsertProfileMutation();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleKeyDown: KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    if ((e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z')) {
      e.stopPropagation();
    }
  };

  useEffect(() => {
    focussedElement?.current?.focus();
  }, [focussedElement]);

  const onBlurHandler: FocusEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    e.stopPropagation();
    focussedElement?.current?.focus();
  };
  const validateField = async (name: string, value: string, regex: RegExp) => {
    switch (name) {
      case 'userName':
        const match1 = regex.exec(value);
        if (match1 === null) {
          return `Invalid ${name}`;
        } else if (match1[2]) {
          return `Invalid ${name}: '${match1[2]}' not allowed`;
        } else {
          const res = await isUserNameExists({ text: value });
          const _data = res.data;
          const isExists = _data?.isUserNameExists;
          if (isExists) return `${value} already exists`;
        }
        return '';
      case 'fullName':
      case 'gender':
      case 'bio':
        const match = regex.exec(value);
        if (match === null) {
          return `Invalid ${name}`;
        } else if (match[2]) {
          return `Invalid ${name}: '${match[2]}' not allowed`;
        }
        return '';
      case 'dob':
        if (!value.match(regex)) {
          return 'Please enter a valid date in the format YYYY-MM-DD';
        }
        const dobYear = parseInt(value.substring(0, 4));
        const dobMonth = parseInt(value.substring(5, 7));
        const dobDay = parseInt(value.substring(8, 10));
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        const currentDay = now.getDate();
        let age = currentYear - dobYear;
        if (
          currentMonth < dobMonth ||
          (currentMonth === dobMonth && currentDay < dobDay)
        ) {
          age--;
        }
        if (age < 13) {
          return 'You must be at least 13 years old to sign up';
        }
        return '';
      // Add more cases for other fields as needed
      default:
        break;
    }
  };

  const handleFocus = (
    ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (ref && ref.current) {
      ref.current.focus();
      setFocussedElement(() => ref);
    }
  };
  const handleInputChange = async (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    let regex = (defaultFormData as Record<string, FormDataType>)[name].regex;
    let error = await validateField(name, value, regex);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: {
        value,
        error,
        regex: regex,
      },
    }));
  };

  const handleNextStep = () => {
    const nameErrors = formData.userName.error;
    const fullNameErrors = formData.fullName.error;
    const userName = formData.userName.value;
    const fullName = formData.fullName.value;
    if (userName === '') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        userName: {
          value: '',
          error: 'Username Cannot be Empty',
          regex: defaultFormData.userName.regex,
        },
      }));
    }
    if (fullName === '') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        fullName: {
          value: '',
          error: 'Full name Cannot be Empty',
          regex: defaultFormData.userName.regex,
        },
      }));
    }
    if (
      userName !== '' &&
      fullName !== '' &&
      nameErrors === '' &&
      fullNameErrors === ''
    )
      setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dobErrors = formData.dob.error;
    const genderErrors = formData.gender.error;
    const dobValue = formData.dob.value;
    const genderValue = formData.gender.value;
    if (dobValue === '') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        dob: {
          value: '',
          error: 'Field cannot be Empty',
          regex: defaultFormData.dob.regex,
        },
      }));
    }
    if (genderValue === '') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        gender: {
          value: '',
          error: 'Field Cannot be Empty',
          regex: defaultFormData.gender.regex,
        },
      }));
    }
    if (
      dobValue !== '' &&
      genderValue !== '' &&
      dobErrors === '' &&
      genderErrors === ''
    ) {
      // TODO: validate form data
      upsertProfile({
        options: {
          uid: user?.id,
          nickname: formData.userName.value,
          gender: formData.gender.value,
          fullname: formData.fullName.value,
          dob: formData.dob.value,
          bio: formData.bio.value,
        },
      }).then((res) => {
        const error = res.error;
        const _data = res.data;
        if (error) {
          setSuccess(() => false);
          setError(() => true);
        }
        const profile = _data?.upsertProfile;

        if (profile) {
          setSuccess(() => true);
          setError(() => false);
          batch(() => {
            dispatch(sliceAddUserNickName(formData.userName.value));
            dispatch(sliceSetIsProfileNeedsToBeUpdated(false));
          });
        } else {
          setSuccess(() => false);
          setError(() => true);
        }
      });
    }
  };

  const commonSetFR = (name: string) => {
    setFocussedElement(() =>
      name === 'userName'
        ? userNameRef
        : name === 'fullName'
        ? fullNameRef
        : name === 'dob'
        ? dobRef
        : name === 'bio'
        ? bioRef
        : null
    );
  };

  return (
    <ParentProfile>
      <div className='logo'>
        {themeContext.theme === 'dark' ? (
          <img src={`${EXT_URL}/Moovy/moovy-text-logo-white.png`} alt='Moovy' />
        ) : (
          <img src={`${EXT_URL}/Moovy/moovy-text-logo-black.png`} alt='Moovy' />
        )}
      </div>

      <Container>
        <FormContainer onSubmit={handleSubmit}>
          {steps.map((step, index) => (
            <StepContainer
              key={index}
              visible={index === currentStep}
              accentColor={accentColor}>
              <div className='progress-bar'>
                <div className={`circle ${step.label === 1 ? 'active' : ''}`}>
                  <span>1</span>
                </div>
                <div
                  className={`line ${step.label >= 2 ? 'active' : ''}`}></div>
                <div className={`circle ${step.label >= 2 ? 'active' : ''}`}>
                  <span>2</span>
                </div>
              </div>
              {step.fields.map(({ name, label }) => (
                <FieldContainer
                  key={name}
                  className='form'
                  accentColor={accentColor}
                  onClick={(e) => {
                    commonSetFR(name);
                  }}>
                  {name === 'gender' ? (
                    <select
                      id='gender'
                      name='gender'
                      value={formData.gender.value}
                      onChange={handleInputChange}
                      required>
                      <option value=''>Select gender</option>
                      <option value='Male'>Male</option>
                      <option value='Female'>Female</option>
                      <option value='Other'>Other</option>
                    </select>
                  ) : name === 'dob' ? (
                    <input
                      type='date'
                      id='dob'
                      name='dob'
                      ref={dobRef}
                      value={formData.dob.value}
                      onKeyDown={handleKeyDown}
                      onChange={handleInputChange}
                      onBlur={onBlurHandler}
                      onFocus={() => handleFocus(dobRef)}
                      onClick={(e) => {
                        commonSetFR(name);
                      }}
                      className={formData.dob.error ? 'input error' : 'input'}
                      required
                    />
                  ) : name === 'bio' ? (
                    <TextArea
                      accentColor={accentColor}
                      id={name}
                      name={name}
                      ref={bioRef}
                      onFocus={() => handleFocus(bioRef)}
                      value={formData[name].value}
                      onKeyPress={handleKeyDown}
                      onBlur={onBlurHandler}
                      onClick={(e) => {
                        commonSetFR(name);
                      }}
                      className={formData[name].error ? 'input error' : 'input'}
                      placeholder={label}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <input
                      type='text'
                      tabIndex={name === 'userName' ? 1 : 2}
                      id={name}
                      name={name}
                      onKeyDown={handleKeyDown}
                      onClick={(e) => {
                        commonSetFR(name);
                      }}
                      value={formData[name].value}
                      className={formData[name].error ? 'input error' : 'input'}
                      placeholder={label}
                      ref={name === 'userName' ? userNameRef : fullNameRef}
                      onBlur={onBlurHandler}
                      onFocus={() => {
                        let ref =
                          name === 'userName' ? userNameRef : fullNameRef;
                        handleFocus(ref);
                      }}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                  <label
                    htmlFor={name}
                    className='label'
                    onClick={(e) => {
                      commonSetFR(name);
                    }}>
                    {label}
                  </label>
                  {formData[name].error && (
                    <div className='error'>{formData[name].error}</div>
                  )}
                </FieldContainer>
              ))}
            </StepContainer>
          ))}
          <ButtonContainer>
            {currentStep > 0 && (
              <BackButton onClick={handleBackStep}>Back</BackButton>
            )}
            {currentStep === steps.length - 1 ? (
              <Button type='submit'>Submit</Button>
            ) : (
              <Button onClick={handleNextStep} tabIndex={3}>
                Next
              </Button>
            )}
          </ButtonContainer>
        </FormContainer>
      </Container>
      {error && (
        <ErrorMessage>Error updating Profile. Please contact us!</ErrorMessage>
      )}
      {success && (
        <SuccessMessage>Profile updated successfully!</SuccessMessage>
      )}
    </ParentProfile>
  );
};

export default UpdateProfile;
