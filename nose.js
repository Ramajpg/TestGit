var persona = /** @class */ (function () {
    function persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    persona.prototype.cualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split(" ");
    };
    ;
    persona.prototype.cualEsTuEdad = function () {
        return "Mi edad es ";
    };
    persona.prototype.cualEsTuGeneracion = function () {
        if (this.nacimiento < 1975) {
            return "soy BB";
        }
        if (this.nacimiento >= 1975 && this.nacimiento < 1999) {
            return "soy Milenial";
        }
        if (this.nacimiento >= 1999 && this.nacimiento < 2010) {
            return "soy centenial";
        }
        if (this.nacimiento >= 2010) {
            return "soy Z";
        }
    };
    persona.prototype.calcularEdad = function () {
        return "Mi edad es " + (2022 - this.nacimiento);
    };
    return persona;
}());
;
var fede = new persona(1984, "Federico Fernandez");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuGeneracion());
console.log(fede.calcularEdad());
