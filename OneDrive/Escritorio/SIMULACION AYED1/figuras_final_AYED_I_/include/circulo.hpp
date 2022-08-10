#ifndef CIRCULO_H
#define CIRCULO_H
#include "../include/figura.hpp"

class Circulo : public Figura
{
    public:

        Circulo(); 
        ~Circulo(); 

        float perimetro();
        float area();
};
        //setters and getters
        // string getColor() const;
        // void setColor(string color);
        // string getMarca() const;
        // void setMarca(string marca);

#endif // CIRCULO_H