# Australis

Australis is a web page maked in React for the visualization data related whith Sophia2 proyect, this repository keeps the source code and the application changes.

# How to deploy this aplication?

you hace two ways to deploy this app, 
first using node and npm inslalled or using Docker 

For deploy you need: 
* have NodeJs and npm installed. // version 14.15.3 and 6.14.1
* Clone or download this repository. //
* In the terminal, enter to "australis" path.
* Intall dependecies writing "npm install" command.
* launch app Writing "npm start" in the terminal. 
* Open "localhost:3000" in browser.

For deploy whit docker:
* have Docker instaler 
* clone this respository.// git clone http://github.com/TeamSophia2/Australis
* in the terminal, enter to "australis" path. // cd Australis
* make image in docker using the "dockerfile"// sudo docker build -t "australis":1.0 .
* run docker image maping the port //sudo docker run -p 3000:3000 australis:1.0 

#  Visualization in Australis

Australis will have 3 mainly visualizations 

the first visualization are a example that how use a maps maping country information 
related whit the amount of media indexed to caleuche server in practic efect 
