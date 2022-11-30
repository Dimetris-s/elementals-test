import { User } from 'models/User';
import { getRandomName, randomEnum, randomId, rnd } from 'shared/utils/rnd';
import { Color } from 'shared/types/color';
import { delay } from 'shared/utils/delay';

const generateUsers = (count = 50):User[] => {
  const users: User[] = [];
  for(let i = 0; i < count; i++) {
    const user: User = {
      id: randomId(),
      time: rnd(1000, 50000),
      name: getRandomName(),
      speed: rnd(40, 240),
      color: randomEnum(Color)
    }
    users.push(user)
  }
  return users;
}

export const getUsers = async (): Promise<User[]> => {
  const users = generateUsers();
  await delay(1000);
  return users;
}
