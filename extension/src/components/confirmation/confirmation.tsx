import React from 'react';
import { StyledConfirmation } from './confirmation.styles';
import { sliceSetIsReportActive } from '../../redux/slices/misc/miscSlice';
import { useAppDispatch } from '../../redux/hooks';

type props = {
  reportCommentOrReply: (_report: boolean) => Promise<void>;
};
const Confirmation: React.FC<props> = ({ reportCommentOrReply }) => {
  const dispatch = useAppDispatch();
  return (
    <StyledConfirmation
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="confirm-message">
        Are you sure you want to report this message? This may result in the
        content being removed.
      </div>
      <div className="confirm-options">
        <div
          className="confirm report"
          id="confirm-report"
          onClick={(e) => {
            e.stopPropagation();
            reportCommentOrReply(true);
          }}
        >
          Report
        </div>
        <div
          className="confirm cancel"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(sliceSetIsReportActive(''));
          }}
        >
          Cancel
        </div>
      </div>
    </StyledConfirmation>
  );
};

export default Confirmation;
