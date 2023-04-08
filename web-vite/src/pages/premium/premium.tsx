import { useEffect, useState } from 'react';

import { useDecryptDataMutation } from '../../generated/graphql';

const Premium = () => {
  const [, decrypt] = useDecryptDataMutation();
  const [fetching, setFetching] = useState<boolean>(false);
  useEffect(() => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    const iv = searchParams.get('iv');
    const data = searchParams.get('data');

    if (iv && data) {
      decrypt({ iv, data }).then((res) => {
        const { error, data } = res;
        if (error) console.log(error);
        if (data) {
          const _data = data?.decryptData;
          const _result = _data?.split('?')[1];
          const isSuccess =
            _result?.split('=')[0].trim().toLowerCase() === 'success';
          const isTrue = _result?.split('=')[1].trim().toLowerCase() === 'true';
          if (isSuccess && isTrue) {
            // Perform mutation.
          }
        }
      });
    }
  }, []);
  return (
    <div>
      {fetching
        ? 'Please do not close the browser'
        : 'You can safely close this tab'}
    </div>
  );
};

export default Premium;
