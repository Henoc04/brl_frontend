# # Utiliser une image de base nginx
# FROM nginx:alpine

# # Définir le répertoire de travail dans le conteneur
# WORKDIR /usr/share/nginx/html

# # Supprimer les fichiers existants dans le répertoire de travail par défaut de nginx
# RUN rm -rf ./*

# # Copier les fichiers construits de votre application Angular dans le répertoire de travail du conteneur
# COPY ./dist/brl_front .

# # Exposer le port 80 (par défaut pour nginx)
# EXPOSE 80

# # Démarrer nginx en mode démon
# CMD ["nginx", "-g", "daemon off;"]

FROM node:16-alpine3.18 as angular

WORKDIR /usr/src/app

COPY package.json package.json
COPY server.js server.js
COPY . .
RUN npm install
RUN npm run build

FROM httpd:alpine3.20
WORKDIR /usr/local/apache2/htdocs
COPY --from=angular /app/dist/brl-front .

# Démarrer nginx en mode démon
CMD ["npm", "start"]
