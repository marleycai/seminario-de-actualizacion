:: Compilo c+odigo objeto
g++ -Wall -std=c++11 -c .\src\figura.cpp
g++ -Wall -std=c++11 -c ./src/cuadrado.cpp
g++ -Wall -std=c++11 -c ./src/rectangulo.cpp
g++ -Wall -std=c++11 -c ./src/circulo.cpp

g++ -Wall -std=c++11 -c main.cpp 

:: Compilo el Binario
g++ figura.o cuadrado.o rectangulo.o circulo.o main.o -o album_figuras.exe

:: Limpio los códigos objeto
DEL .\*.o