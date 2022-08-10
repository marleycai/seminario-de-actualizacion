#include "../include/cuadrado.hpp"
#include "../include/figura.hpp"
Cuadrado::Cuadrado():Figura()
{
    
}
Cuadrado::~Cuadrado()
{
   
}

float Cuadrado::perimetro()
{
    return getX()*4;
}

float Cuadrado::area()
{
    return getX()*2;
}