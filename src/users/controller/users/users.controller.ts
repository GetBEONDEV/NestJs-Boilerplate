import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';
import { UserService } from 'src/users/services/user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateUserDto, CreateUserDto } from 'src/users/dtos/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}
}
