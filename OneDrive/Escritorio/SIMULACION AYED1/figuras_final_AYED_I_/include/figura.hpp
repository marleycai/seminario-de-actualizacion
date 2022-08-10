#ifndef FIGURA_H
#define FIGURA_H
class Figura // clase abstracta 
{
    private:
        float _x;  //variables 
        float _y;

    public:
        Figura(); //constructor
        virtual ~Figura(); //destructor 

        void setX(float x); // para establecer valor, set
        void setY(float y);
        float getX(); //toma el valor para utilizarlo despues  
        float getY();

        virtual float perimetro() = 0; //metodo virtual 
        virtual float area() = 0; //metodo virtual 
};




#endif