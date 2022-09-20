import React, { KeyboardEventHandler, useEffect, useState } from 'react';

import { IoMdCloseCircle } from 'react-icons/io';
import { MdCheckCircle } from 'react-icons/md';
import { User } from '../../../Utils/interfaces';
import { UserNameEditParent } from './userNameEdit.styles';
import { setStoredUserLoginDetails } from '../../../Utils/storage';
import { useUpdateUserNickNameMutation } from '../../../generated/graphql';

type props = {
  user: User;
  setShowNickNameEdit: any;
  showNickNameEdit: boolean;
};
const UserNameEdit: React.FC<props> = ({
  user,
  setShowNickNameEdit,
  showNickNameEdit,
}) => {
  const [name, setName] = useState<string>('');
  const [err, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [{ data, error, fetching }, updateUserName] =
    useUpdateUserNickNameMutation();

  useEffect(() => {
    if (!fetching && data) {
      const errors = data.updateUserNickName.errors;
      if (errors) {
        let mainError = errors[0];
        let errorField = mainError.message;
        setError(true);
        setErrorMessage(errorField);
        setShowNickNameEdit(true);
      }
    }
  }, [fetching, error]);
  const validateName = (name: string) => {
    setName(name);
    let usernameRegex = /^[a-zA-Z0-9_@$.]+$/;
    let isValid = usernameRegex.test(name);
    if (!isValid) {
      setError(true);
      setErrorMessage('Name is invalid');
    } else setError(false);
  };

  const changeName = async () => {
    // Update nickname/username fields in the user.
    await updateUserName({
      uid: user.uid,
      nickname: name,
    }).then(async ({ data }) => {
      const errors = await data?.updateUserNickName.errors;
      console.log('Data Errors: ', errors);
      if (errors) setShowNickNameEdit(true);
      else {
        setStoredUserLoginDetails({ ...user, nickname: name });
        setShowNickNameEdit(false);
      }
    });
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.stopPropagation();
      if (!err) changeName();
    }
  };
  return (
    <>
      {showNickNameEdit && (
        <UserNameEditParent>
          <div className='edit-name-text'>Set User Name</div>
          <div className='edit-name'>
            <input
              type='text'
              placeholder='Enter User Name'
              value={name}
              maxLength={15}
              onKeyPress={handleKeyDown}
              onChange={(e) => {
                e.stopPropagation();
                validateName(e.target.value);
              }}
            />
            {name !== '' && !err ? (
              <div
                className='submit'
                onClick={(e) => {
                  e.stopPropagation();
                  changeName();
                }}>
                <MdCheckCircle size={25} />
              </div>
            ) : (
              <div
                className='error'
                onClick={(e) => {
                  e.stopPropagation();
                  setName('');
                }}>
                <IoMdCloseCircle size={25} />
              </div>
            )}
          </div>
          {err && (
            <div style={{ color: 'white', fontSize: '0.8em' }}>
              {errorMessage}
            </div>
          )}
        </UserNameEditParent>
      )}
    </>
  );
};

export default UserNameEdit;
