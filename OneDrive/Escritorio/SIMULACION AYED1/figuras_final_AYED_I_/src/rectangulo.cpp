#include "../include/rectangulo.hpp"
#include "../include/figura.hpp"
rectangulo::rectangulo(): Figura(){

}
rectangulo :: ~rectangulo(){
}
float rectangulo :: area(){
    return (getX()*getY());
}

float rectangulo :: perimetro(){
    return (2*getX()+2*getY()) ;
};
