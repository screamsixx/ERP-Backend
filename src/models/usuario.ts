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
 *         esAdmin:
 *           type: boolean
 */

export interface usuario {
    id: number;
    pass: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string;
    email: string;
    fechaNacimiento: Date;
    esAdmin: boolean;
}
