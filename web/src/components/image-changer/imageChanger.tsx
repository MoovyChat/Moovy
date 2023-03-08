import {
  DisplayImage,
  DropzoneContainer,
  DropzoneIcon,
  DropzoneText,
  ErrorMsg,
  FileRejectionList,
  ImageChangerParent,
} from './imageChanger.styles';
import { FileError, useDropzone } from 'react-dropzone';
import { MdDone, MdOutlineError } from 'react-icons/md';
import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useSaveProfilePictureMutation,
  useUpdateUserBgMutation,
} from '../../generated/graphql';

import { ImageChangerTypes } from '../../utils/types';
import ImageCrop from '../image-crop/imageCrop';
import Loading from '../../pages/loading/loading';
import { PixelCrop } from 'react-image-crop';
import { StyledButton } from '../../pages/commentThread/commentThread.styles';
import { batch } from 'react-redux';
import { compressImage } from '../../utils/helpers';
import { imgPreview } from '../image-crop/imagePreview';
import { sliceSetUser } from '../../redux/slices/userSlice';
import { urqlClient } from '../../utils/urlClient';
import { withUrqlClient } from 'next-urql';

const MsgObjType = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};
interface MsgObj {
  msg: string;
  status: string;
}

type props = {
  type: string;
};
const ImageChanger: React.FC<props> = ({ type }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const storage = getStorage();
  const imageRef = useRef<HTMLImageElement>(null);
  const [url, setUrl] = useState<string>('');
  const [isURLValid, setURLValid] = useState<boolean>(false);
  const [loadingStatus, setLoadingStatus] = useState<MsgObj>({
    msg: '',
    status: MsgObjType.INITIAL,
  });
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [, saveProfilePhoto] = useSaveProfilePictureMutation();
  const [, saveBg] = useUpdateUserBgMutation();
  const [errors, setErrors] = useState<FileError[]>([]);
  // Image saving states
  const [saved, setSaved] = useState<boolean>(false);
  const [saveClicked, setSaveClicked] = useState<boolean>(false);
  const maxFileSize = 10000000;
  const {
    acceptedFiles,
    fileRejections,
    isDragReject,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/jpg': [],
    },
    maxSize: maxFileSize,
    onDropRejected: (fileRejections) => {
      fileRejections.forEach((fileRejection) => {
        const rejectedFile = fileRejection.file;
        const errors = fileRejection.errors;
        if (rejectedFile.size && rejectedFile.size > maxFileSize) {
          handleFileSizeError(rejectedFile);
        }
        console.log(`Rejected file: ${rejectedFile.name}`);
        console.log(`Reasons for rejection:`);
        errors.forEach((error) => console.log(`- ${error.message}`));
      });
    },
    maxFiles: 1,
    multiple: false,
  });

  const handleFileSizeError = useCallback(
    (file: File) => {
      alert(
        `File "${file.name}" exceeds the maximum file size of ${maxFileSize} bytes.`
      );
    },
    [maxFileSize]
  );

  const fileRejectionItems = fileRejections.map((fileRejection) => (
    <li key={fileRejection.file.name}>
      {fileRejection.file.name} (
      {fileRejection.file.size || fileRejection?.file?.size} bytes) -{' '}
      {fileRejection.errors[0].message}
    </li>
  ));

  // Change the parent top style.
  useEffect(() => {
    const parentDiv = document.getElementById('popup-child') as HTMLDivElement;
    if (parentDiv)
      parentDiv.style.cssText = `
      top: 50%;
    `;
  }, []);

  const savePhotoFromUrl: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.stopPropagation();
    setSaveClicked(true);
    setSaved(false);
    const storageRef = ref(storage, user.id + '-' + type);
    let result: any;
    setLoadingStatus({
      msg: 'Uploading image. Please stay on this page.',
      status: MsgObjType.LOADING,
    });
    if (selectedOption === 'fromLocal') {
      // Upload the updated blob to firebase storage and get the URL.
      const _blob = await imgPreview(imageRef.current!, completedCrop!);
      if (!_blob) {
        console.log('Error creating blob');
        setLoadingStatus({
          msg: 'Error creating blob',
          status: MsgObjType.ERROR,
        });
        return;
      }
      const compressedBlob = await compressImage(_blob);
      if (!compressedBlob) {
        setLoadingStatus({
          msg: 'Error compressing blob',
          status: MsgObjType.ERROR,
        });
        console.log('Error compressing blob');
        return;
      }
      // 'file' comes from the Blob or File API
      const _snapshot = await uploadBytes(storageRef, compressedBlob);
      const urlSnapShot = await getDownloadURL(storageRef);
      // Saves the URL to the database.
      if (type === ImageChangerTypes.PFP)
        result = await saveProfilePhoto({ url: urlSnapShot, uid: user.id });
      else result = await saveBg({ url: urlSnapShot, uid: user.id });
    } else {
      if (type === ImageChangerTypes.PFP)
        result = await saveProfilePhoto({ url, uid: user.id });
      else result = await saveBg({ url, uid: user.id });
    }
    // Saves the URL to the database.
    const { error, data } = result;
    if (error) console.log(error);
    if (!error) {
      if (type === ImageChangerTypes.PFP) {
        const _data = data?.updateUserProfilePhoto.user;
        const _errors = data?.updateUserProfilePhoto.errors;
        if (_errors) console.log(_errors);
        if (_errors) return;
        if (_data === null || _data === undefined) return;
        dispatch(sliceSetUser(_data));
      } else {
        const _data = data?.updateUserBg.user;
        const _errors = data?.updateUserBg.errors;
        if (_errors) console.log(_errors);
        if (_errors) return;
        if (_data === null || _data === undefined) return;
        dispatch(sliceSetUser(_data));
      }
      setLoadingStatus({
        msg: 'Profile pic updated successfully',
        status: MsgObjType.SUCCESS,
      });
      setSaved(true);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        setUrl(reader.result?.toString() || '');
        setSelectedOption('fromLocal');
        setLoadingStatus({
          msg: '',
          status: MsgObjType.INITIAL,
        });
      };
      reader.readAsDataURL(file);
    }
  }, [acceptedFiles]);

  const closeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
      dispatch(sliceSetPopupData(null));
    });
  };
  const saveText = saveClicked ? (saved ? `Saved` : `Saving..`) : `Save`;
  return (
    <ImageChangerParent url={url}>
      <div className='heading'>
        <span>Upload the photo</span>
        <StyledButton className='close' color='#484242' onClick={closeHandler}>
          Close
        </StyledButton>
      </div>
      <div className='save-close'>
        <StyledButton
          className='save'
          color={url ? '#de1328' : '#9c535b'}
          onClick={savePhotoFromUrl}>
          {saveText}
        </StyledButton>
      </div>

      <DisplayImage className='display'>
        <div className='display-container'>
          {!!url ? (
            selectedOption === 'fromLocal' ? (
              type === ImageChangerTypes.PFP ? (
                <ImageCrop
                  url={url}
                  setCompletedCrop={setCompletedCrop}
                  imageRef={imageRef}
                  aspect={1}
                />
              ) : (
                <ImageCrop
                  url={url}
                  setCompletedCrop={setCompletedCrop}
                  imageRef={imageRef}
                  aspect={3.5}
                />
              )
            ) : (
              <img alt='image-crop' src={url} ref={imageRef} />
            )
          ) : (
            <DropzoneContainer
              {...getRootProps({ className: 'dropzone' })}
              isDragActive={isDragActive}
              isDragReject={isDragReject}>
              <input {...getInputProps()} />
              <DropzoneIcon />
              <DropzoneText>
                Drag and drop an image file here, or click to select file
              </DropzoneText>
              {maxFileSize && (
                <ErrorMsg>Maximum file size: {maxFileSize} bytes</ErrorMsg>
              )}

              {isDragReject && (
                <ErrorMsg>
                  Only a single JPEG/JPG file is supported. Please check the
                  file and try again.
                </ErrorMsg>
              )}
              {fileRejections.length > 0 && (
                <FileRejectionList>{fileRejectionItems}</FileRejectionList>
              )}
            </DropzoneContainer>
          )}
        </div>
      </DisplayImage>
      <div className='error'>
        {loadingStatus.status !== MsgObjType.INITIAL ? (
          <div className='in'>
            <div className='loading'>
              {loadingStatus.status === MsgObjType.LOADING ? (
                <Loading />
              ) : loadingStatus.status === MsgObjType.ERROR ? (
                <MdOutlineError size={20} fill='#c11d1d' />
              ) : loadingStatus.status === MsgObjType.SUCCESS ? (
                <MdDone size={20} fill='#00ff2f' />
              ) : (
                ''
              )}
            </div>
            <div className='e-in-e'>{loadingStatus.msg}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </ImageChangerParent>
  );
};

export default withUrqlClient(urqlClient)(ImageChanger);
