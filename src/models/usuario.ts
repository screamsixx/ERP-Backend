export interface usuario {
    id: number;
    pass: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string;
    email: string;
    fechaNacimiento: string;
    esAdmin: boolean;
}