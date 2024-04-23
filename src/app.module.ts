import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { PersonasModule } from './personas/personas.module';
import { RegistroModule } from './registro/registro.module';
import { MesasModule } from './mesas/mesas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TipoFacturaModule } from './tipo_factura/tipo_factura.module';
import { TipoPedidoModule } from './tipo_pedido/tipo_pedido.module';
import { DetallePedidosModule } from './detalle_pedidos/detalle_pedidos.module';
import { CategoriaModule } from './categoria/categoria.module';
import { Subcategoria1Module } from './subcategoria1/subcategoria1.module';
import { Subcategoria2Module } from './subcategoria2/subcategoria2.module';
import { Subcategoria3Module } from './subcategoria3/subcategoria3.module';
import { BebidasModule } from './bebidas/bebidas.module';
import { RecetaSub1Module } from './receta_sub1/receta_sub1.module';
import { RecetaSub2Module } from './receta_sub2/receta_sub2.module';
import { RecetaSub3Module } from './receta_sub3/receta_sub3.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { AuthController } from './auth/auth.controller';
import { BebidasController } from './bebidas/bebidas.controller';
import { CategoriaController } from './categoria/categoria.controller';
import { DetallePedidosController } from './detalle_pedidos/detalle_pedidos.controller';
import { IngredientesController } from './ingredientes/ingredientes.controller';
import { MesasController } from './mesas/mesas.controller';
import { PedidosController } from './pedidos/pedidos.controller';
import { PersonasController } from './personas/personas.controller';
import { RecetaSub1Controller } from './receta_sub1/receta_sub1.controller';
import { RecetaSub2Controller } from './receta_sub2/receta_sub2.controller';
import { RecetaSub3Controller } from './receta_sub3/receta_sub3.controller';
import { RegistroController } from './registro/registro.controller';
import { RolesController } from './roles/roles.controller';
import { Subcategoria1Controller } from './subcategoria1/subcategoria1.controller';
import { Subcategoria2Controller } from './subcategoria2/subcategoria2.controller';
import { Subcategoria3Controller } from './subcategoria3/subcategoria3.controller';
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
import { PersonasService } from './personas/personas.service';
import { RecetaSub1Service } from './receta_sub1/receta_sub1.service';
import { RecetaSub2Service } from './receta_sub2/receta_sub2.service';
import { RecetaSub3Service } from './receta_sub3/receta_sub3.service';
import { RegistroService } from './registro/registro.service';
import { RolesService } from './roles/roles.service';
import { Subcategoria1Service } from './subcategoria1/subcategoria1.service';
import { Subcategoria2Service } from './subcategoria2/subcategoria2.service';
import { Subcategoria3Service } from './subcategoria3/subcategoria3.service';
import { TipoFacturaService } from './tipo_factura/tipo_factura.service';
import { TipoPedidoService } from './tipo_pedido/tipo_pedido.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

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
    AuthModule, UsuariosModule, RolesModule, PersonasModule, RegistroModule, MesasModule, 
    PedidosModule, TipoFacturaModule, TipoPedidoModule, DetallePedidosModule, CategoriaModule, 
    Subcategoria1Module, Subcategoria2Module, Subcategoria3Module, BebidasModule, RecetaSub1Module, 
    RecetaSub2Module, RecetaSub3Module, IngredientesModule],
  controllers: [
    AuthController, BebidasController, CategoriaController, DetallePedidosController, IngredientesController,
    MesasController, PedidosController, PersonasController, RecetaSub1Controller, RecetaSub2Controller,
    RecetaSub3Controller, RegistroController, RolesController, Subcategoria1Controller, Subcategoria2Controller,
    Subcategoria3Controller, TipoFacturaController, TipoPedidoController, UsuariosController],
  providers: [
    AuthService, BebidasService, CategoriaService, DetallePedidosService, IngredientesService, MesasService,
    PedidosService, PersonasService, RecetaSub1Service, RecetaSub2Service, RecetaSub3Service, RegistroService,
    RolesService, Subcategoria1Service, Subcategoria2Service, Subcategoria3Service, TipoFacturaService,
    TipoPedidoService, UsuariosService
  ],
})
export class AppModule { }
