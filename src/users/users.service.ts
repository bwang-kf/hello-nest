import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserCreateDto } from './dto/user-create-dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    private readonly users: User[] = [];

    // create(user: User) {
    //     this.users.push(user);
    // }

    create(userDto: UserCreateDto) {
        let user = new User;
        user.age = userDto.age;
        user.email = userDto.email;
        user.name = userDto.name;
        this.users.push(user)
    }
    
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}
