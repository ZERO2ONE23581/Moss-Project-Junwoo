import { User } from '@prisma/client';
import useSWR from 'swr';

export interface IUser {
  ok: boolean;
  loggedInUser: User;
}

export default function () {
  const { data, error } = useSWR<IUser>(
    typeof window === 'undefined' ? null : '/api/users/loggedInUser',
  );
  //
  return {
    loading: !data && !error,
    isLoggedIn: data?.ok,
    loggedInUser: data?.loggedInUser,
  };
}
