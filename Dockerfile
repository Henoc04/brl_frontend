# Étape 1 : Construction de l'application Angular
FROM node:14-alpine as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et le package-lock.json (si présent)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du code source de l'application Angular dans le conteneur
COPY . .

# Construire l'application Angular
RUN npm run build --prod

# Étape 2 : Préparer l'image nginx
FROM nginx:alpine

# Copier les fichiers construits de l'étape 1 dans le répertoire par défaut de nginx
COPY --from=build /app/dist/brl_front /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer nginx en mode démon
CMD ["nginx", "-g", "daemon off;"]
