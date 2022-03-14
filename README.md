# Walmart challenge backend

# API cuenta-api 
1. [Equipo Dueño del Proyecto](/README.md#1-equipo-dueño-del-proyecto)
2. [Integrantes del Equipo](/README.md#2-integrantes-del-equipo)
3. [Descripción y Objetivo](/README.md#3-descripción-y-objetivo)
4. [Manual de Instalación](/README.md#4-manual-de-instalación)
5. [Especificación de la API](/README.md#5-especificación-de-la-api)

## 1. Equipo Dueño del Proyecto
Responsable y Dueño del Proyecto:
- <b>Responsable:</b> EQUIPO AZUL
* <b>Contacto:</b> yerko.banda@hotmail.com

## 2. Integrantes del Equipo
- <b>Proyecto:</b> desafio-walmart-api
- <b>Product Owner:</b> Juan Perez
* <b>Contacto:</b> juan.perez@hotmail.com
- <b>Scrum Master:</b> Alan Brito
* <b>Contacto:</b> alan.brito@hotmail.com
- <b>Dev Team:</b>
* Yerko Banda M.
* <b>Contacto:</b> yerko.banda@hotmail.com

## 3. Descripción y Objetivo
* <b>Descripción:</b> api para evualacion de postulacion a walmart.
* <b>Objetivo:</b> El objetivo de esta API es poder obtener los productos listados dentro de una busqueda.

## 4. Manual de Instalación
<b>Especifica la forma en que se ejecuta la aplicación:</b>
<br>
* <b>Clonar repositorio:</b> 
```
git clone https://github.com/yerkobanda77/desafio-walmart-api.git
```
* <b>Cambiar a rama Dev:</b> 
```
git checkout develop
```
* <b>Instalación de Dependencias:</b>
```
npm install
```
* <b>Configurar host mongoDb:</b> validar archivo .env
* <b>Levantar server MongoDB</b>
* <b>Ejecución por defecto:</b> 
```
npm run local
```
* <b>Validar disponibilidad:</b> http://localhost:3000/healthcheck

## 5. Especificación de la API

### 5.1. Operaciones
Detalla las operaciones que se pueden explotar a través de la API.

| <b>Operación</b> | <b>Descripción Capacidad</b> | 
| ------ | ------ | 
| productsFilters/{search} | Operación que obtiene los productos filtrados por el paramtero ingresado. |
| healthcheck | Operación que permite saber si la API está disponible. |