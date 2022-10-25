import { DisplayImage, ImageChangerParent } from './imageChanger.styles';
import {
  MdErrorOutline,
  MdInfoOutline,
  MdLink,
  MdUploadFile,
} from 'react-icons/md';
import React, {
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
  useRef,
  useState,
} from 'react';
import ReactCrop, {
  Crop,
  PixelCrop,
  centerCrop,
  makeAspectCrop,
} from 'react-image-crop';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ImageCrop from '../image-crop/imageCrop';
import { StyledButton } from '../../pages/commentThread/commentThread.styles';
import { batch } from 'react-redux';
import { imgPreview } from '../image-crop/imagePreview';
import { isImageURLValid } from '../../utils/helpers';
import { sliceSetUser } from '../../redux/slices/userSlice';
import { useSaveProfilePictureMutation } from '../../generated/graphql';

const ImageChanger = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const storage = getStorage();
  const imageRef = useRef<HTMLImageElement>(null);
  const [url, setUrl] = useState<string>('');
  const [isURLValid, setURLValid] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [, saveProfilePhoto] = useSaveProfilePictureMutation();

  // Image saving states
  const [saved, setSaved] = useState<boolean>(false);
  const [saveClicked, setSaveClicked] = useState<boolean>(false);

  const urlHandler: ChangeEventHandler<HTMLInputElement> = async (e) => {
    setUrl(e.target.value);
    const res = (await isImageURLValid(e.target.value)) as unknown as boolean;
    if (!res) {
      setError('No image found in the URL provided');
    } else {
      setError('');
    }
    setURLValid(res);
  };

  const savePhotoFromUrl: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.stopPropagation();
    setSaveClicked(true);
    setSaved(false);
    const storageRef = ref(storage, user.id);
    let result: any;
    setError('Uploading image. Please stay on this page.');
    if (selectedOption === 'fromLocal') {
      // Upload the updated blob to firebase storage and get the URL.
      const blob = await imgPreview(imageRef.current!, completedCrop!);
      if (!blob) {
        console.log('Error creating blob');
        return;
      }
      // 'file' comes from the Blob or File API
      const _snapshot = await uploadBytes(storageRef, blob);
      const urlSnapShot = await getDownloadURL(storageRef);
      // Saves the URL to the database.
      result = await saveProfilePhoto({ url: urlSnapShot, uid: user.id });
    } else {
      result = await saveProfilePhoto({ url, uid: user.id });
    }
    // Saves the URL to the database.
    const { error, data } = result;
    if (error) console.log(error);
    if (!error) {
      const _data = data?.updateUserProfilePhoto.user;
      const _errors = data?.updateUserProfilePhoto.errors;
      if (_errors) console.log(_errors);
      if (_errors) return;
      if (_data === null || _data === undefined) return;
      dispatch(sliceSetUser(_data));
      setError('Profile pic updated successfully');
      setSaved(true);
    }
  };
  const fileUploadHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setUrl(reader.result?.toString() || '');
    };
    reader.readAsDataURL(file);
  };
  const selectedOptionHandler = (from: string) => {
    switch (from) {
      case 'fromUrl':
        setSelectedOption('fromURL');
        inputFileRef.current!.value = '';
        setUrl('');
        setError('');
        break;
      case 'fromLocal':
        setSelectedOption('fromLocal');
        setError('');
        break;
      default:
        break;
    }
  };
  const closeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
    });
  };

  const saveText = saveClicked ? (saved ? `Saved` : `Saving..`) : `Save`;
  return (
    <ImageChangerParent url={url}>
      <div className='heading'>Upload the photo</div>
      <div className='save-close'>
        <StyledButton
          className='save'
          color={url ? '#de1328' : '#9c535b'}
          onClick={savePhotoFromUrl}>
          {saveText}
        </StyledButton>
        <StyledButton className='close' color='#484242' onClick={closeHandler}>
          Close
        </StyledButton>
      </div>
      <div className='options'>
        <div
          className='from url'
          onClick={(e) => {
            e.stopPropagation();
            selectedOptionHandler('fromUrl');
          }}>
          <div className='text'>Import image from URL</div>
          <div className='input'>
            <MdLink className='icon' size={20} />
            <input
              type='text'
              placeholder='Enter the url'
              value={url}
              onChange={urlHandler}
            />
          </div>
        </div>
        <div className='or'>or</div>
        <div
          className='from local'
          onClick={(e) => {
            e.stopPropagation();
            selectedOptionHandler('fromLocal');
          }}>
          <div className='text'>Upload image</div>
          <div className='input'>
            <MdUploadFile className='icon' size={20} />
            <input
              ref={inputFileRef}
              type='file'
              accept='image/png, image/jpeg'
              placeholder='Upload image'
              onChange={fileUploadHandler}
            />
          </div>
        </div>
      </div>
      <DisplayImage className='display'>
        <div className='display-container'>
          {!!url &&
            (selectedOption === 'fromLocal' ? (
              <ImageCrop
                url={url}
                setCompletedCrop={setCompletedCrop}
                imageRef={imageRef}
              />
            ) : (
              <img alt='image-crop' src={url} ref={imageRef} />
            ))}
        </div>
      </DisplayImage>
      <div className='error'>
        {error ? (
          <div className='in'>
            <MdInfoOutline size={15} />
            <div className='e-in-e'>{error}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </ImageChangerParent>
  );
};

export default ImageChanger;
