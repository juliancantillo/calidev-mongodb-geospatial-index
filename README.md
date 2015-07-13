## Indices Geospaciales con MongoDB

MongoDb es una base de datos basada en documentos open-source. Un registro en MongoDb es un documento, el cual es una estructura de datos compuestra por pares clave-valor. Los documentos de MongoDB son similares a objetos JSON.

### Queries en MongoDB

En MongoDB una consulta (query) apunta a una coleccion especifica de documentos. Las consultas especifican criterios o condiciones, que identifican los documentos que MongoDB retorna a los clientes.

Ejemplo 

``
   db.collection.find({ name: "Alfred" });

``