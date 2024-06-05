# Utiliser une image de base nginx
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire de l'image nginx
COPY ./dist/brl_front /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
