class persona {
    private nacimiento: number;
    private nombre: string;

    constructor(anioNacimiento: number, nombre: string){
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }

public cualEsTuNombre(): string{
    return "Mi nombre es "+ this.nombre.split(" ");
};

public cualEsTuEdad (): string{
    return "Mi edad es ";
}
public cualEsTuGeneracion(){
    if (this.nacimiento<1975){
        return "soy BB";
    }
    if (this.nacimiento>=1975 && this.nacimiento<1999){
        return "soy Milenial";
    }
    if (this.nacimiento>=1999 && this.nacimiento<2010){
        return "soy centenial";
    }
    if (this.nacimiento>=2010){
        return "soy Z";
    }
}
public calcularEdad(){
 return "Mi edad es " + (2022 - this.nacimiento)
}
};

//Consola
let fede = new persona (1984, "Federico Fernandez");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuGeneracion());
console.log(fede.calcularEdad());
