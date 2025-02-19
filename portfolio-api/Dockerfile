# Utilizar una imagen base de Java
FROM openjdk:21-jdk-slim as build

WORKDIR /app

# Copiar el archivo jar generado por el build (en el caso de usar maven o gradle)
COPY target/spring-app.jar /app/spring-app.jar

# Exponer el puerto 8080 (por defecto en Spring Boot)
EXPOSE 8080

# Ejecutar la aplicación Spring Boot
CMD ["java", "-jar", "/app/spring-app.jar"]