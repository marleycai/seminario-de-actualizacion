#include "../include/circulo.hpp"
#include "../include/figura.hpp"

Circulo::Circulo():Figura()
{
   
}

Circulo::~Circulo()
{
    
}


float Circulo::perimetro()
{
    return (2*3.14*getX());
}

float Circulo::area()
{
    return (3.14*(getX()*getX()));
}
