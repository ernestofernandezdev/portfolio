# Usa la imagen oficial de NGINX como base
FROM nginx:latest

# Copia los archivos estáticos al directorio adecuado en NGINX
COPY ./static /usr/share/nginx/html

# Exponer el puerto 80 (por defecto de NGINX)
EXPOSE 80