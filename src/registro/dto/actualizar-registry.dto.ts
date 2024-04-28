import { CreateRegistryDto } from "./crear-registry.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateRegistryDto extends PartialType(CreateRegistryDto) {}

