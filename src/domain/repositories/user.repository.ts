import { User } from '../entities/user.entity';

export interface IUserRepository {
  getUser(): Promise<User>;
  updateUser(user: User): Promise<void>;
}
