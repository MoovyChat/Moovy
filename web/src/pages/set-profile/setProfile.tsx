import {
  Error,
  StyledDescription,
  StyledInput,
  StyledRegistrationStep,
  StyledSelect,
  StyledSetProfile,
  StyledSteps,
  StyledTextArea,
  Success,
} from './setProfile.styles';
import {
  Profile,
  useIsUserNameExistsMutation,
  useUpdateProfileMutation,
} from '../../generated/graphql';
import React, { FormEventHandler, useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CURRENT_DOMAIN } from '../../constants';
import { Helmet } from 'react-helmet';
import Moovy from '../../svgs/moovy-text-logo-black.png';
import ProfilePic from '../../components/profilePic/profilePic';
import { RegistrationSteps } from './steps-help';
import { batch } from 'react-redux';
import { sliceSetIsProfileExists } from '../../redux/slices/miscSlice';
import { sliceSetProfile } from '../../redux/slices/userProfileSlice';
import { sliceSetUserNickName } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import usePageView from '../../hooks/usePageView';

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

type ProfieProps = {
  profile: Profile | null;
};
const defaultFormData: FormData = {
  fullName: {
    value: '',
    error: '',
    regex: /^[a-zA-Z ]{2,30}$/,
  },
  userName: {
    value: '',
    error: '',
    regex:
      /^([a-zA-Z0-9_-]{4,20})$|^.*?([\s+=!@#$%^&*(){}[\]:;"'<>,.?/\\|`~]).*?$/,
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
const SetProfile: React.FC<ProfieProps> = ({ profile }) => {
  const user = useAppSelector(state => state.user);
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
  const [, isUserNameExists] = useIsUserNameExistsMutation();
  const dispatch = useAppDispatch();
  const [{ fetching }, upsertProfile] = useUpdateProfileMutation();
  const [formData, setFormData] = useState<FormData>({
    fullName: {
      value: profile?.fullname || '',
      error: '',
      regex: /^[a-zA-Z ]{2,30}$/,
    },
    userName: {
      value: user.nickname || '',
      error: '',
      regex:
        /^([a-zA-Z0-9_-]{4,20})$|^.*?([\s+=!@#$%^&*(){}[\]:;"'<>,.?/\\|`~]).*?$/,
    },
    gender: {
      value: profile?.gender || '',
      error: '',
      regex: /^(Male|Female|Other)$/i,
    },
    dob: {
      value: profile?.dob || '',
      error: '',
      regex: /^\d{4}-\d{2}-\d{2}$/,
    },
    bio: {
      value: profile?.bio || '',
      error: '',
      regex: /^.{0,150}$/,
    },
  });
  const [currentIndex, setCurrentIndex] = useState<number>(index);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const props = useSpring({
    opacity: index === currentIndex ? 1 : 0,
    config: { duration: 500 },
  });

  usePageView();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrentIndex(index);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [index]);

  const validateField = (name: string, value: string, regex: RegExp) => {
    switch (name) {
      case 'userName':
        const match1 = regex.exec(value);
        if (match1 === null) {
          return Promise.resolve(`Invalid ${name}`);
        } else if (match1[2]) {
          return Promise.resolve(`Invalid ${name}: '${match1[2]}' not allowed`);
        } else {
          return isUserNameExists({ text: value })
            .then(res => {
              const _data = res.data;
              const isExists = _data?.isUserNameExists;
              if (isExists) return `${value} already exists`;
              return '';
            })
            .catch(error => {
              console.error(error);
              return '';
            });
        }
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
        const dateMatch = regex.exec(value);
        if (dateMatch === null) {
          return `Invalid ${name}`;
        } else {
          // check if input value is a valid date
          const date = new Date(value);
          if (isNaN(date.getTime())) {
            return `Invalid ${name}: date is not valid`;
          }
          // calculate age based on date of birth
          const dobYear = date.getFullYear();
          const dobMonth = date.getMonth() + 1;
          const dobDay = date.getDate();
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
        }
      // Add more cases for other fields as needed
      default:
        return '';
    }
  };

  const handleInputChange = async (
    event: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | HTMLInputElement
    >,
  ) => {
    const { name, value } = event.target;
    let regex = (defaultFormData as Record<string, FormDataType>)[name].regex;
    let error = await validateField(name, value, regex);
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: {
        value,
        error,
        regex: regex,
      },
    }));
  };
  const handleSubmit = () => {
    const dobErrors = formData.dob.error;
    const genderErrors = formData.gender.error;
    const dobValue = formData.dob.value;
    const genderValue = formData.gender.value;
    const nameErrors = formData.userName.error;
    const fullNameErrors = formData.fullName.error;
    const userName = formData.userName.value;
    const fullName = formData.fullName.value;
    if (userName === '') {
      setFormData(prevFormData => ({
        ...prevFormData,
        userName: {
          value: '',
          error: 'Username Cannot be Empty',
          regex: defaultFormData.userName.regex,
        },
      }));
    }
    if (fullName === '') {
      setFormData(prevFormData => ({
        ...prevFormData,
        fullName: {
          value: '',
          error: 'Full name Cannot be Empty',
          regex: defaultFormData.userName.regex,
        },
      }));
    }
    if (dobValue === '') {
      setFormData(prevFormData => ({
        ...prevFormData,
        dob: {
          value: '',
          error: 'Field cannot be Empty',
          regex: defaultFormData.dob.regex,
        },
      }));
    }
    if (genderValue === '') {
      setFormData(prevFormData => ({
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
      genderErrors === '' &&
      userName !== '' &&
      fullName !== '' &&
      nameErrors === '' &&
      fullNameErrors === ''
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
      }).then(res => {
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
            dispatch(sliceSetIsProfileExists(true));
            dispatch(sliceSetProfile(profile));
            dispatch(sliceSetUserNickName(formData.userName.value));
          });
          navigate('/home');
        } else {
          setSuccess(() => false);
          setError(() => true);
          dispatch(sliceSetIsProfileExists(false));
        }
      });
    }
  };

  const handleYearInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setFormData(prevFormData => ({
      ...prevFormData,
      dob: {
        ...prevFormData.dob,
        value: value,
      },
    }));
  };

  const nextClickHandler: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation();
    if (index < RegistrationSteps.length - 1) setIndex(i => i + 1);
    else if (index === RegistrationSteps.length - 1) {
      handleSubmit();
    }
  };
  const values = [
    formData.fullName.value,
    formData.userName.value,
    formData.gender.value,
    formData.dob.value,
    formData.bio.value,
  ];
  return (
    <StyledSetProfile>
      <Helmet>
        <title>Update Profile</title>
        <meta name="description" content="Update Profile" />
        <link rel="canonical" href={`${CURRENT_DOMAIN}/update-profile`} />
      </Helmet>
      <div className="title">
        <div className="logo">
          <img src={Moovy} alt="logo" />
        </div>
      </div>
      <div className="moovy-profile-title">
        <div className="pic-container">
          <ProfilePic src={user.photoUrl} tooltip={true} />
        </div>
        <div className="container">
          <div className="title">User Information</div>
          <div className="description">
            You can edit the public information about yourself. The changes will
            be displayed for other users after the update.
          </div>
        </div>
      </div>
      <div className="moovy-steps-container">
        <StyledSteps>
          {RegistrationSteps.map((step, i) => (
            <StyledRegistrationStep
              isSelected={i === index}
              isError={Object.values(formData)[i].error !== ''}
              className="step"
              key={i}
              onClick={() => setIndex(i)}
            >
              <div className="index">{i + 1}</div>
              <div className="text">
                <div>{step.title}</div>
                <div className="value">{values[i]}</div>
              </div>
              {i !== RegistrationSteps.length - 1 && (
                <div className="line"></div>
              )}
            </StyledRegistrationStep>
          ))}
        </StyledSteps>
        <StyledDescription>
          <animated.div className="item" style={props}>
            <div className="step-index">{`Step ${currentIndex + 1}`}</div>
            <div className="title">
              {RegistrationSteps[currentIndex].description}
            </div>
            <div className="int-ctr">
              {currentIndex === 0 ? (
                <StyledInput
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName.value}
                  onChange={handleInputChange}
                />
              ) : currentIndex === 1 ? (
                <StyledInput
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName.value}
                  onChange={handleInputChange}
                />
              ) : currentIndex === 2 ? (
                <StyledSelect
                  id="gender"
                  name="gender"
                  value={formData.gender.value}
                  onChange={handleInputChange}
                >
                  <option value="">-- Select Gender --</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </StyledSelect>
              ) : currentIndex === 3 ? (
                <StyledInput
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob.value}
                  onChange={handleInputChange}
                  onInput={handleYearInput}
                />
              ) : (
                <StyledTextArea
                  id="bio"
                  name="bio"
                  maxLength={150}
                  value={formData.bio.value}
                  onChange={handleInputChange}
                />
              )}
            </div>
            <Error>{Object.values(formData)[index].error}</Error>
            {error && <Error>Please fix the errors</Error>}
            {fetching ? (
              <Success>Updating profile...</Success>
            ) : (
              success && <Success>Profile updated successfully</Success>
            )}
            <button
              className="step-index next-index"
              onClick={nextClickHandler}
            >
              {currentIndex === RegistrationSteps.length - 1
                ? 'Finish'
                : 'Next'}
            </button>
          </animated.div>
        </StyledDescription>
      </div>
    </StyledSetProfile>
  );
};

export default SetProfile;
