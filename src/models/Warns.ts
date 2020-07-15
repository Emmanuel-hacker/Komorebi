import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("warns")

export class warns {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "varchar", length: 22})
    guild!: string

    @Column({type: 'varchar', length: 22})
    user!: string

    @Column({type: "varchar", length: 22})
    moderator!: string

    @Column({type: "text"})
    reason!: string;
}