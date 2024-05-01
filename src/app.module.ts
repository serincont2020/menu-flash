import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { RegistroModule } from './registro/registro.module';
import { MesasModule } from './mesas/mesas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TipoFacturaModule } from './tipo_factura/tipo_factura.module';
import { TipoPedidoModule } from './tipo_pedido/tipo_pedido.module';
import { DetallePedidosModule } from './detalle_pedidos/detalle_pedidos.module';
import { CategoriaModule } from './categoria/categoria.module';
import { BebidasModule } from './bebidas/bebidas.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { AuthController } from './auth/auth.controller';
import { BebidasController } from './bebidas/bebidas.controller';
import { CategoriaController } from './categoria/categoria.controller';
import { DetallePedidosController } from './detalle_pedidos/detalle_pedidos.controller';
import { IngredientesController } from './ingredientes/ingredientes.controller';
import { MesasController } from './mesas/mesas.controller';
import { PedidosController } from './pedidos/pedidos.controller';
import { RegistroController } from './registro/registro.controller';
import { RolesController } from './roles/roles.controller';
import { TipoFacturaController } from './tipo_factura/tipo_factura.controller';
import { TipoPedidoController } from './tipo_pedido/tipo_pedido.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { AuthService } from './auth/auth.service';
import { BebidasService } from './bebidas/bebidas.service';
import { CategoriaService } from './categoria/categoria.service';
import { DetallePedidosService } from './detalle_pedidos/detalle_pedidos.service';
import { IngredientesService } from './ingredientes/ingredientes.service';
import { MesasService } from './mesas/mesas.service';
import { PedidosService } from './pedidos/pedidos.service';
import { RegistroService } from './registro/registro.service';
import { RolesService } from './roles/roles.service';
import { TipoFacturaService } from './tipo_factura/tipo_factura.service';
import { TipoPedidoService } from './tipo_pedido/tipo_pedido.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsuariosData } from './usuarios/entity/usuarios.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Subcategoria1Module } from './subcategoria1/subcategoria1.module';
import { RecetaSub1Module } from './receta_sub1/receta_sub1.module';
import { RecetaSub1Controller } from './receta_sub1/receta_sub1.controller';
import { Subcategoria1Controller } from './subcategoria1/subcategoria1.controller';
import { RecetaSub1Service } from './receta_sub1/receta_sub1.service';
import { Subcategoria1Service } from './subcategoria1/subcategoria1.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:"postgres",
    host:"localhost",
    port: 5432,
    username: 'postgres',
    // password: 'Admin123*.',
    database:'softrest',
    entities: [join(__dirname,'**','*.entity.{ts,js}')],
    synchronize: true
    }),
    TypeOrmModule.forFeature([
      UsuariosData
    ]),
    AuthModule, UsuariosModule, RolesModule, RegistroModule, MesasModule, 
    PedidosModule, TipoFacturaModule, TipoPedidoModule, DetallePedidosModule, CategoriaModule, 
    Subcategoria1Module, BebidasModule, RecetaSub1Module, IngredientesModule, JwtModule],
  controllers: [
    AuthController, BebidasController, CategoriaController, DetallePedidosController, IngredientesController,
    MesasController, PedidosController, RecetaSub1Controller, RegistroController, RolesController,
     Subcategoria1Controller, TipoFacturaController, TipoPedidoController, UsuariosController],
  providers: [
    AuthService, BebidasService, CategoriaService, DetallePedidosService, IngredientesService, MesasService,
    PedidosService, RecetaSub1Service, RegistroService, RolesService, Subcategoria1Service, 
    TipoFacturaService,
    TipoPedidoService, UsuariosService, JwtService
  ],
})
export class AppModule { }
