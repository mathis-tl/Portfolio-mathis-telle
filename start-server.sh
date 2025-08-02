#!/bin/bash

echo "🎬 Démarrage du serveur pour le slider d'images..."
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé sur votre système."
    echo "📥 Veuillez installer Node.js depuis https://nodejs.org/"
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé sur votre système."
    echo "📥 Veuillez installer npm avec Node.js depuis https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js et npm sont installés."
echo ""

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    echo ""
fi

echo "🚀 Démarrage du serveur..."
echo ""

# Démarrer le serveur
npm start