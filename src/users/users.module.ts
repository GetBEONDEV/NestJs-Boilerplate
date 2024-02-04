import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './controller/users/users.controller';
import { CostumersController } from './controller/costumers/costumers.controller';
import { Customer } from './entities/customer.entity';

import { UserService } from './services/user.service';
import { User } from './entities/user.entity';

import { CustomerService } from './services/cuaromer.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Customer])],
  controllers: [UsersController, CostumersController],
  providers: [UserService, CustomerService],
  exports: [UserService, TypeOrmModule],
})
export class UsersModule {}
