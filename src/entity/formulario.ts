import {Entity,Column,PrimaryGeneratedColumn, BaseEntity} from "typeorm";
@Entity('ADGEE.FORMULARIO')
export class Formulario extends BaseEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome:string;

    @Column()
    descricao:string;

}