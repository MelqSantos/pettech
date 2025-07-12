import { Person } from "@/entities/person.entity";

export class PersonRepository {
    async findById(id: number): Promise<Person | null> {
        return {
            id,
            cpf: '123456789',
            name: 'John Doe',
            birth: new Date('1990-01-01'),
            email: 'teste@gmail.com',
            user_id: 1
        }
    }

    async create(person: Person): Promise<Person> {
        return person;
    }
}