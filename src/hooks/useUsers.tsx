import { User } from 'models/User';
import { useEffect, useState } from 'react';
import { getUsers } from 'data/generateUsers';

type UseUsersResult = {
  users: User[];
  isLoading: boolean;
  loadUsers: () => void;
}

export const useUsers = ():UseUsersResult => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    const users = await getUsers();
    setUsers(prev => prev.concat(users));
    setLoading(false);
  }
  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users, isLoading, loadUsers
  }
}
