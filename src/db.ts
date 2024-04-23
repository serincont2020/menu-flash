import { DataSource } from "typeorm"
import { CategoriaData } from "./categoria/entity/categoria.entity"
import { Subcategoria1Data } from "./subcategoria1/entity/subcategoria1.entity"
import { Subcategoria2Data } from "./subcategoria2/entity/subcategoria2.entity"
import { Subcategoria3Data } from "./subcategoria3/entity/subcategoria3.entity"
import { BebidasData } from "./bebidas/entity/bebidas.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,//1433,
    username:"postgres",
    //password: "Admin123*.",
    database: "softrest",
    synchronize: true,
    logging: true,
    //entities: [CategoriaData, Subcategoria1Data, Subcategoria2Data, Subcategoria3Data, BebidasData],
    entities: ['dist/**/*.entity.js']
    // subscribers: [],
    // migrations: ['migrations'],
})