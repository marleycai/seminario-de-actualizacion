#ifndef RECTENAGULO_H
#define RECTENAGULO_H
#include "../include/figura.hpp"
class rectangulo: public Figura // herencia 
 {
  public :
     rectangulo(); 
     ~rectangulo();
    float area();
    float perimetro();

   
};
#endif // CIRCULO_H