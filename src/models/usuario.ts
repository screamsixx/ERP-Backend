/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         pass:
 *           type: string
 *         nombre:
 *           type: string
 *         apellidoPaterno:
 *           type: string
 *         apellidoMaterno:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         fechaNacimiento:
 *           type: string
 *           format: date-time
 *         rol:
 *           type: string
 */
export class usuario{
     private _id?: number;
     private _pass: string;
     private _email: string;
     private _fechaNacimiento: Date;
     private _rol: string;
     private _nombre: string;
     private _apellidoPaterno: string;
    private _apellidoMaterno?: string;
    constructor(
        pass: string,
        email: string,
        fechaNacimiento: Date,
        rol: string,
        nombre: string,
        apellidoPaterno: string,
        apellidoMaterno?: string,
        id?: number,
      ) {
        this._id = id;
        this._pass = pass;
        this._email = email;
        this._fechaNacimiento = fechaNacimiento;
        this._rol = rol;
        this._nombre = nombre;
        this._apellidoPaterno = apellidoPaterno;
        this._apellidoMaterno = apellidoMaterno;
      }

      get id(): number {
        return this._id ||0; //devuelve cero si no hay
    }

    set id(value: number) {
        this._id = value;
    }

    get pass(): string {
        return this._pass;
    }

    set pass(value: string) {
        this._pass = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(value: Date) {
        this._fechaNacimiento = value;
    }

    get rol(): string {
        return this._rol;
    }

    set rol(value: string) {
        this._rol = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get apellidoPaterno(): string {
        return this._apellidoPaterno;
    }

    set apellidoPaterno(value: string) {
        this._apellidoPaterno = value;
    }

    get apellidoMaterno(): string | undefined {
        return this._apellidoMaterno;
    }

    set apellidoMaterno(value: string | undefined) {
        this._apellidoMaterno = value;
    }
}