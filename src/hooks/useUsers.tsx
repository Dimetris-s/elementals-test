import { User } from 'models/User';
import { useEffect, useMemo, useState } from 'react';
import { getUsers } from 'api/getUsers';

type UseUsersResult = {
  users: User[];
  lastUser: User;
  isLoading: boolean;
  isLoaded: boolean;
  loadUsers: () => void;
}

export const useUsers = ():UseUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    const users = await getUsers();
    setUsers(prev => prev.concat(users));
    setLoading(false);
    setLoaded(true);
  }
  useEffect(() => {
    loadUsers();
  }, []);

  const lastUser = useMemo(() => users[users.length - 1], [users])

  return {
    users, lastUser, isLoading, loadUsers, isLoaded
  }
}
