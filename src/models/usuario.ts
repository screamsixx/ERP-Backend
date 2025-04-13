export class Usuario {
  private _id?: number;
  private _nombre: string;
  private _apellido: string;
  private _email: string;
  private _telefono: string;
  private _contrasena: string;
  private _fechaNacimiento?: Date;
  private _genero?: string;
  private _direccion?: string;
  private _ciudad?: string;
  private _estado?: string;
  private _codigoPostal?: string;
  private _rol?: string;
  private _fechaRegistro?: Date;
  private _estatus?: string;
  private _catalogoNegocios?: string;
  private _codigoAutenticacion?: string;
  private _usuario: string
  constructor(
    nombre: string,
    apellido: string,
    email: string,
    telefono: string,
    contrasena: string,
    usuario:string,
    fechaNacimiento?: Date,
    genero?: string,
    direccion?: string,
    ciudad?: string,
    estado?: string,
    codigoPostal?: string,
    rol?: string,
    fechaRegistro?: Date,
    estatus?: string,
    catalogoNegocios?: string,
    codigoAutenticacion?: string,
    id?: number,
  ) {
    this._id = id;
    this._nombre = nombre;
    this._apellido = apellido;
    this._email = email;
    this._telefono = telefono;
    this._contrasena = contrasena;
    this._fechaNacimiento = fechaNacimiento;
    this._genero = genero;
    this._direccion = direccion;
    this._ciudad = ciudad;
    this._estado = estado;
    this._codigoPostal = codigoPostal;
    this._rol = rol;
    this._fechaRegistro = fechaRegistro;
    this._estatus = estatus;
    this._catalogoNegocios = catalogoNegocios;
    this._codigoAutenticacion = codigoAutenticacion;
    this._usuario=usuario
  }

  // Getters y Setters
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }

  get nombre(): string {
    return this._nombre;
  }
  set nombre(value: string) {
    this._nombre = value;
  }

  get apellido(): string {
    return this._apellido;
  }
  set apellido(value: string) {
    this._apellido = value;
  }

  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  get telefono(): string {
    return this._telefono;
  }
  set telefono(value: string) {
    this._telefono = value;
  }

  get contrasena(): string {
    return this._usuario;
  }
  set usuario(value: string) {
    this._usuario = value;
  }

  get usuario(): string {
    return this._contrasena;
  }
  set contrasena(value: string) {
    this._contrasena = value;
  }

  get fechaNacimiento(): Date | undefined {
    return this._fechaNacimiento;
  }
  set fechaNacimiento(value: Date | undefined) {
    this._fechaNacimiento = value;
  }

  get genero(): string | undefined {
    return this._genero;
  }
  set genero(value: string | undefined) {
    this._genero = value;
  }

  get direccion(): string | undefined {
    return this._direccion;
  }
  set direccion(value: string | undefined) {
    this._direccion = value;
  }

  get ciudad(): string | undefined {
    return this._ciudad;
  }
  set ciudad(value: string | undefined) {
    this._ciudad = value;
  }

  get estado(): string | undefined {
    return this._estado;
  }
  set estado(value: string | undefined) {
    this._estado = value;
  }

  get codigoPostal(): string | undefined {
    return this._codigoPostal;
  }
  set codigoPostal(value: string | undefined) {
    this._codigoPostal = value;
  }

  get rol(): string | undefined {
    return this._rol;
  }
  set rol(value: string | undefined) {
    this._rol = value;
  }

  get fechaRegistro(): Date | undefined {
    return this._fechaRegistro;
  }
  set fechaRegistro(value: Date | undefined) {
    this._fechaRegistro = value;
  }

  get estatus(): string | undefined {
    return this._estatus;
  }
  set estatus(value: string | undefined) {
    this._estatus = value;
  }

  get catalogoNegocios(): string | undefined {
    return this._catalogoNegocios;
  }
  set catalogoNegocios(value: string | undefined) {
    this._catalogoNegocios = value;
  }

  get codigoAutenticacion(): string | undefined {
    return this._codigoAutenticacion;
  }
  set codigoAutenticacion(value: string | undefined) {
    this._codigoAutenticacion = value;
  }
}
