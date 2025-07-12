export class Person {
    public id?: number
    public cpf: string
    public name: string
    public birth: Date
    public email: string
    public user_id?: number

    constructor(
        cpf: string,
        name: string,   
        birth: Date,
        email: string,
    ){
        this.cpf = cpf
        this.name = name
        this.birth = birth
        this.email = email
    }

}