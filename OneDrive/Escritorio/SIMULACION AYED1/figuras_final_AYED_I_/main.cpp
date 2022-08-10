#include <iostream>
#include "./include/figura.hpp"
#include "./include/circulo.hpp"
#include "./include/cuadrado.hpp"   
#include "./include/rectangulo.hpp"
using namespace std;

void mostrarFiguras(Figura *figura[]); // funcion mostramos figuras apartir de un puntero figura

int main()
{ 
    Figura *figura [3];
    figura[0] = new Circulo(); 
    figura[1] = new Cuadrado();
    figura[2] = new rectangulo();

    figura[0]->setX(5);
    figura[1]->setX(12);
    figura[2]->setX(15);
    figura[2]->setY(5); //en este caso setY para el rectangulo.

    mostrarFiguras(figura);

    cout << endl;

    for(int i=0;i<3;i++)
    {
        delete figura[i];
    }

    return 0;
}

void mostrarFiguras(Figura *figura[])
{
    for(int i=0;i<3;i++)
    {
        cout << "\nFigura " << i+1 << endl;
        cout << "El area es: " << figura[i]->area()<<endl;
        cout << "El perimetro es: " << figura[i]->perimetro()<<endl;
    }

}

