import { useEffect, useState } from 'react';
import {
  AdminUser,
  useGetAdminsAndModeratorsQuery,
} from '../generated/graphql';
import { useAppSelector } from '../redux/hooks';

export const useIsUserAdmin = () => {
  const [{ fetching, error, data }] = useGetAdminsAndModeratorsQuery({});
  const [adminsAndMods, setAdminAndMods] = useState<AdminUser[]>([]);
  const loggedInUserId = useAppSelector(state => state.user.id);

  useEffect(() => {
    if (!fetching && data) {
      const _data = data?.getAdminsAndModerators;
      setAdminAndMods(() => _data);
    }
  }, [fetching, error, data]);

  const isAdminOrMod = adminsAndMods.some(
    admin => admin.userId === loggedInUserId,
  );

  return { isAdminOrMod, loading: fetching, adminError: error };
};
