# Étape 1 : Construction de l'application Angular
FROM node:20.14-alpine as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et le package-lock.json (si présent)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Afficher les dépendances installées
RUN ls -la node_modules

# Copier tout le reste du code source de l'application Angular dans le conteneur
COPY . .

# Afficher le contenu du répertoire de travail
RUN ls -la

# Construire l'application Angular et afficher les erreurs
RUN npm run build --prod > build.log 2>&1 || { echo "Build failed. See build.log for details."; cat build.log; exit 1; }

# Étape 2 : Préparer l'image nginx
FROM nginx:alpine

# Copier les fichiers construits de l'étape 1 dans le répertoire par défaut de nginx
COPY --from=build /app/dist/brl_front /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer nginx en mode démon
CMD ["nginx", "-g", "daemon off;"]
