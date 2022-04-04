# AUSTRALIS
## UNA APLICACIÓN WEB PARA MONITORIAR INDICADORES DE PLURALISMO DE MEDIOS DE PRENSA INTERNACIONAL
![N|Solid](https://raw.githubusercontent.com/TeamSophia2/Australis/main/public/static/logo1.png)

Australis es una aplicacion web hecha con Reactjs, para visualizar datos relacionados al proyecto Sophia2

## Cómo desplegar esta aplicacion
Tienes 2 formas para desplegar esta aplicacion 
### Ambiente desarrollo-servidor
Necesitas:
* Tener NodeJS 16 y npm 8.5 
* Clonar este repositorio
* entrar a la carpeta
* instalar las dependencias usando el comando "npm install"
* lanzar ambiente de desarrollo con "npm start"
* lanzar ambiente de produccion "npm run build"
* luego montar el contenido de la carpeta "build" en un servidor web

### Ambiente contenedores

* Debes tener Docker instalado
* Clonar este Respositorio
* Entrar a la carpeta "Australis
* Countruir imagenes usando el dockerfile "sudo docker build -t "australis":1.0 ."
* Correr el imagenes espeficicando puerto//"sudo docker run -p 80:80 australis:1.0" 

#  Visualizaciones en Australis 

Australis la forman tres escenarios de exploracion
