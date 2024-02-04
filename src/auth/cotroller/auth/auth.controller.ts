import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { User } from 'src/users/entities/user.entity';
import { CreateCustomerDto } from 'src/users/dtos/customer.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.loginUser(user);
  }

  @Post('register')
  register(@Body() body: CreateCustomerDto): any {
    return this.authService.registerUser(body);
  }
}
