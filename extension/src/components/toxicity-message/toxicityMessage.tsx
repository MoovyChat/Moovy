import { MdWarning, MdWarningAmber } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { StyledToxicityMessage } from './toxicityMessage.styles';
import { sliceSetFlagged } from '../../redux/slices/misc/miscSlice';

type errorProps = {
  allowed: boolean;
  message: string;
};

const defaultValues = {
  obscene: 95,
  threat: 90,
  identity_attack: 90,
  severe_toxicity: 90,
  toxicity_alert: 98.2,
  toxicity_caution: 70,
  toxicity_warning: 50,
};
const ToxicityMessage = () => {
  const scores = useAppSelector((state) => state.misc.toxicScores);
  const [error, setError] = useState<errorProps | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setError(null);
    dispatch(sliceSetFlagged(false));
    if (scores?.toxicity * 100 > defaultValues.toxicity_alert) {
      setError({
        allowed: false,
        message: 'Alert: Toxic messages are not allowed.',
      });
      dispatch(sliceSetFlagged(false));
    } else if (scores?.toxicity * 100 > defaultValues.toxicity_caution) {
      setError({
        allowed: true,
        message: 'Caution: Message will be flagged for toxic language.',
      });
      dispatch(sliceSetFlagged(true));
    } else if (scores?.toxicity * 100 > defaultValues.toxicity_warning) {
      setError({
        allowed: true,
        message: 'Warning: Your message contains toxic language.',
      });
      dispatch(sliceSetFlagged(false));
    }
    if (scores?.obscene * 100 > defaultValues.obscene) {
      setError({
        allowed: false,
        message: 'Alert: Obscene messages are not allowed.',
      });
      dispatch(sliceSetFlagged(false));
    }
    if (scores?.threat * 100 > defaultValues.threat) {
      setError({
        allowed: false,
        message: 'Alert: Threatening messages are not allowed..',
      });
      dispatch(sliceSetFlagged(false));
    }
    if (scores?.identity_attack * 100 > defaultValues.identity_attack) {
      setError({
        allowed: false,
        message: 'Alert: Identity attacks are not encouraged',
      });
      dispatch(sliceSetFlagged(false));
    }
    if (scores?.severe_toxicity * 100 > defaultValues.severe_toxicity) {
      setError({
        allowed: false,
        message: 'Alert: Severe toxicity is not allowed.',
      });
      dispatch(sliceSetFlagged(false));
    }
  }, [scores]);

  return (
    <StyledToxicityMessage
      isError={error !== null}
      allowed={error?.allowed.toString()}>
      <div>
        {error?.allowed ? (
          <MdWarningAmber fill='#ff5900' />
        ) : (
          <MdWarning fill='#ff0000' />
        )}
      </div>
      <div>{error?.message}</div>
    </StyledToxicityMessage>
  );
};

export default ToxicityMessage;
