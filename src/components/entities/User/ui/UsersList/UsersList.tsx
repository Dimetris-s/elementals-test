import React, { FC, useRef } from 'react';
import cn from 'classnames';
import { UserItem } from 'components/entities/User/ui/UserItem';
import styles from './UsersList.module.scss';
import { useUsers } from 'hooks/useUsers';
import { useObserver } from 'hooks/useObserver';

interface UsersListProps {
  className?: string;
}

export const UsersList: FC<UsersListProps> = ({ className }) => {
  const lastElement = useRef<HTMLDivElement | null>(null);
  const { users, loadUsers, isLoading } = useUsers();
  useObserver({ ref: lastElement, callback: loadUsers, isLoading });
  return (
    <div className={cn(styles.root, className)}>
      {users.map((user, index) => <UserItem position={index + 1} user={user} key={user.id} />)}
      <div ref={lastElement} className={styles.observer} />
      {isLoading && 'Loading....'}
    </div>
  );
};
