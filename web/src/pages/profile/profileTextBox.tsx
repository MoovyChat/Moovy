import { ProfileTextBoxParent } from './profile.styles';
import React from 'react';

type props = {
  title: string;
  type: string;
  value: string;
  setValue: (key: string, value: string) => void;
  keyItem?: string;
  error?: string;
};
const ProfileTextBox: React.FC<props> = ({
  title,
  type,
  value,
  setValue,
  keyItem,
  error,
}) => {
  return (
    <ProfileTextBoxParent error={error}>
      <div className="title">{error && error !== 'none' ? error : title}</div>
      <div className="in">
        {type === 'text' || type === 'date' ? (
          <input
            type={type}
            name={title}
            id={title}
            value={value}
            maxLength={25}
            minLength={2}
            onChange={e => {
              e.stopPropagation();
              setValue(keyItem!, e.target.value);
            }}
          />
        ) : type === 'textarea' ? (
          <textarea
            id={title}
            value={value}
            maxLength={100}
            onChange={e => {
              e.stopPropagation();
              setValue(keyItem!, e.target.value);
            }}
          />
        ) : (
          <select
            onChange={e => {
              e.stopPropagation();
              setValue(keyItem!, e.target.value);
            }}
            value={value}
          >
            <option defaultChecked value="">
              Choose your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        )}
      </div>
      <div className="light-container">
        <div className="light"></div>
      </div>
    </ProfileTextBoxParent>
  );
};

export default ProfileTextBox;
