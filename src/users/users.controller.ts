import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UserCreateDto } from 'users/dto/user-create-dto';
import { identity } from 'rxjs';
import { UsersService } from 'users/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    async getAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    getOne(@Param() params, @Param('id') id) {
        console.log(`passing by specific param works too ${id}`);
        return params;
        // return `this call returns user ${params.id} ${params}`;
    }

    @Post()
    async create(@Body() userCreateDto: UserCreateDto) {
        this.usersService.create(userCreateDto);
    }

    @Put(':id')
    update(@Param('id') id, @Body() userUpdateDao) {
        return `this call updates user ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return `this call deletes user ${id}`;
    }
}
