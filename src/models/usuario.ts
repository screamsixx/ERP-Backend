export interface usuario {
    id: number;
    password: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string;
    email: string;
    fechaNacimiento: string;
    esAdmin: boolean;
}