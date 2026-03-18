import { User } from '@/domain/entities/user.entity';
import { IUserRepository } from '@/domain/repositories/user.repository';
import { mockUser } from '../datasources/user.mock';

export class UserRepository implements IUserRepository {
  async getUser(): Promise<User> {
    // Simulating API delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    return mockUser;
  }

  async updateUser(user: User): Promise<void> {
    // Simulating API update
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('User updated:', user);
  }
}
