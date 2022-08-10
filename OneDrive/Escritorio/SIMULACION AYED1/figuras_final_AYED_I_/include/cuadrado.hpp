#ifndef CUADRADO_H
#define CUADRADO_H
#include "../include/figura.hpp"
class Cuadrado : public Figura
{ 
    public:

        Cuadrado(); 
        ~Cuadrado();

        float perimetro();
        float area();
};
#endif // CUADRADO_H