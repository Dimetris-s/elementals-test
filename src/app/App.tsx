import React from 'react';
import { Container } from 'components/common/Container';
import { UsersList } from 'components/entities/User/ui/UsersList';

export const App = () => {

  return (
    <Container>
      <UsersList />
    </Container>
  );
};


// TODO: First render disable observer (get only 50 users)
// TODO: Enum color get
// TODO: Avatar vertical aligning
// TODO: Responsive
// TODO: Cut very long names

