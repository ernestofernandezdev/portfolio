# Usa la imagen oficial de NGINX como base
FROM nginx:latest

# Copia los archivos estáticos al directorio adecuado en NGINX
COPY ./static /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80 (por defecto de NGINX)
EXPOSE 80

# Inicia Nginx cuando el contenedor se ejecute
CMD ["nginx", "-g", "daemon off;"]