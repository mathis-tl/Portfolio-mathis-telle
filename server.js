const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Servir les fichiers statiques (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Middleware pour parser les données de formulaire
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route principale pour servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour la page de contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Routes pour les autres pages (temporaires)
app.get('/about', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>À propos - Mathis Telle</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about" class="active">About</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
            <div style="padding: 50px; text-align: center;">
                <h1>À propos de moi</h1>
                <p>Page en construction...</p>
                <a href="/">Retour au slider</a>
            </div>
        </body>
        </html>
    `);
});

app.get('/portfolio', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Portfolio - Mathis Telle</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/portfolio" class="active">Portfolio</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
            <div style="padding: 50px; text-align: center;">
                <h1>Mon Portfolio</h1>
                <p>Page en construction...</p>
                <a href="/">Retour au slider</a>
            </div>
        </body>
        </html>
    `);
});

app.get('/services', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Services - Mathis Telle</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/services" class="active">Services</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
            <div style="padding: 50px; text-align: center;">
                <h1>Mes Services</h1>
                <p>Page en construction...</p>
                <a href="/">Retour au slider</a>
            </div>
        </body>
        </html>
    `);
});

// Route POST pour traiter le formulaire de contact
app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    console.log('📧 Nouveau message reçu:');
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Sujet: ${subject}`);
    console.log(`Message: ${message}`);
    console.log('---');
    
    res.send(`
        <html>
        <head>
            <title>Message envoyé - Mathis Telle</title>
            <link rel="stylesheet" href="/style.css">
            <link rel="stylesheet" href="/contact.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        </head>
        <body>
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/services">Services</a>
                    <a href="/contact" class="active">Contact</a>
                </nav>
            </header>
            <div class="contact-container">
                <div class="contact-content" style="text-align: center; padding: 50px;">
                    <div class="success-message">
                        <i class="fas fa-check-circle" style="font-size: 4rem; color: #4CAF50; margin-bottom: 20px;"></i>
                        <h1>Message envoyé avec succès !</h1>
                        <p>Merci ${name}, votre message a bien été reçu.</p>
                        <p>Je vous répondrai dans les plus brefs délais à l'adresse : ${email}</p>
                        <div style="margin-top: 30px;">
                            <a href="/contact" class="back-btn" style="margin-right: 20px;">
                                <i class="fas fa-arrow-left"></i>
                                Retour au contact
                            </a>
                            <a href="/" class="back-btn">
                                <i class="fas fa-home"></i>
                                Retour au portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré avec succès !`);
    console.log(`📱 Accédez au slider d'images sur :`);
    console.log(`   • Local:    http://localhost:${PORT}`);
    console.log(`   • Réseau:   http://127.0.0.1:${PORT}`);
    console.log(`\n💡 Pour arrêter le serveur, appuyez sur Ctrl+C`);
    console.log(`\n🌐 Ouvrez votre navigateur (Firefox/Chrome) et allez sur http://localhost:${PORT}`);
});

// Gestion des erreurs
app.use((err, req, res, next) => {
    console.error('Erreur serveur:', err.stack);
    res.status(500).send('Quelque chose s\'est mal passé !');
});

// Gestion des routes non trouvées
app.use((req, res) => {
    res.status(404).send(`
        <h1>404 - Page non trouvée</h1>
        <p>La page que vous cherchez n'existe pas.</p>
        <a href="/">Retour au slider d'images</a>
    `);
});
