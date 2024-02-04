import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/services/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { PayloadToken } from 'src/auth/models/token.model';
import { Customer } from 'src/users/entities/customer.entity';
import { CreateCustomerDto } from 'src/users/dtos/customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        return user;
      }
    }
    return null;
  }

  ////Firmar el token con usuario
  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async loginUser(user: User) {
    return this.generateJWT(user);
  }

  async registerUser(data: CreateCustomerDto) {
    ////Crear Customer
    const customer = new Customer();
    customer.name = data.name;
    customer.lastName = data.lastName;
    customer.phone = data.phone;

    const newCustomer = this.customerRepo.create(customer);
    await this.customerRepo.save(newCustomer);

    ////Crear User Principal
    const user = new User();
    user.email = data.user.email;
    user.password = await bcrypt.hash(data.user.password, 10);
    user.role = data.user.role;
    user.customer = newCustomer;

    const newUser = this.userRepo.create(user);
    await this.userRepo.save(newUser);

    return this.generateJWT(newUser);
  }
}
