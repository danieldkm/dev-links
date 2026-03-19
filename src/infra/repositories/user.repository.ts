import { User } from '@/domain/entities/user.entity';
import { IUserRepository } from '@/domain/repositories/user.repository';
import { getUser } from '../datasources/user.prismic';

export class UserRepository implements IUserRepository {
  async getUser(): Promise<User> {
    return await getUser()
  }

  async updateUser(user: User): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('User updated:', user);
  }
}
