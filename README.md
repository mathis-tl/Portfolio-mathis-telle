# Slider d'Images Animé - Serveur Web Local

## 🎬 Description
Slider d'images entièrement responsive avec animations automatiques et navigation manuelle, maintenant avec un serveur Node.js pour un développement local optimal.

## ✨ Fonctionnalités
- ✅ **8 slides** avec images personnalisées et d'oiseaux/papillons
- ✅ Changement d'images **automatique** (toutes les 20 secondes)
- ✅ Navigation **manuelle** avec boutons précédent/suivant
- ✅ **Page de contact** avec informations personnelles (lien fonctionnel)
- ✅ **Responsive design** - s'adapte à tous les écrans
- ✅ **Animations fluides** et effets visuels
- ✅ **Serveur local** pour un développement optimal

## � Démarrage rapide

### Méthode 1 : Script automatique
```bash
./start-server.sh
```

### Méthode 2 : Commandes manuelles
```bash
# Installer les dépendances (première fois uniquement)
npm install

# Démarrer le serveur
npm start
```

## 🌐 Accès au slider
Une fois le serveur démarré, ouvrez votre navigateur et allez sur :
- **Local :** http://localhost:3000
- **Réseau :** http://127.0.0.1:3000

## 📁 Structure du projet
```
├── index.html          # Page principale (slider)
├── contact.html        # Page de contact
├── style.css           # Styles principaux
├── contact.css         # Styles de la page de contact
├── app.js              # Logique JavaScript du slider
├── server.js           # Serveur Express
├── package.json        # Configuration Node.js
├── start-server.sh     # Script de démarrage
├── contact-info.md     # Informations de contact à modifier
└── image/              # Dossier des images
    ├── photo_cv.jpg    # Votre photo de CV
    ├── eagel1.jpg
    ├── crow.jpg
    ├── butterfly1.jpeg
    ├── owl2.jpg
    └── eagel3.jpg
```

## 🛠 Technologies utilisées
- **Frontend :** HTML5, CSS3, JavaScript Vanilla
- **Backend :** Node.js, Express.js
- **Animations :** CSS Transitions & Keyframes

## 🎮 Contrôles
- **Navigation automatique :** 20 secondes entre chaque slide
- **Boutons :** Précédent (<) et Suivant (>)
- **Barre de progression :** En haut de l'écran (se remplit en 20 secondes)

## 📱 Compatibilité navigateurs
- ✅ Chrome
- ✅ Firefox  
- ✅ Safari
- ✅ Edge

## 🔧 Développement
Pour modifier le projet :
1. Éditez les fichiers HTML/CSS/JS
2. Le serveur sert automatiquement les fichiers statiques
3. Rafraîchissez votre navigateur pour voir les changements

Pour arrêter le serveur : `Ctrl+C` dans le terminal

## 📞 Informations de contact
Le slider inclut maintenant une page de contact complète accessible via :
- **Navigation :** Cliquez sur "Contact" dans la barre de navigation
- **Slider :** Bouton "Contactez-moi" sur votre slide personnelle
- **URL directe :** http://localhost:3000/contact.html

### 📝 Informations actuelles :
- **Email :** tellemathis@gmail.com ✅
- **LinkedIn :** À compléter dans `contact.html`
- **Téléphone :** À compléter dans `contact.html`
- **GitHub :** À compléter dans `contact.html`

Consultez le fichier `contact-info.md` pour savoir comment mettre à jour vos informations.