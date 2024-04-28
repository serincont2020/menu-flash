import { CreateRoleDto } from "./crear-role.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateRoleDto extends PartialType(CreateRoleDto) {}

