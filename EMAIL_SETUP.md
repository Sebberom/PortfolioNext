# Configuration de l'envoi d'emails

Le formulaire de contact est maintenant configuré pour envoyer des emails directement via une API backend.

## Options de configuration

### Option 1: Resend (Recommandé - Facile)

1. Créer un compte sur [resend.com](https://resend.com/)
2. Obtenir votre clé API
3. Installer le package:
   ```bash
   npm install resend
   ```
4. Créer un fichier `.env.local`:
   ```
   RESEND_API_KEY=re_votre_cle_api
   ```
5. Décommenter le code Resend dans `app/api/contact/route.ts`

### Option 2: Nodemailer avec SMTP (Gmail, Outlook, etc.)

1. Installer nodemailer:
   ```bash
   npm install nodemailer
   ```
2. Pour Gmail, activer "Mots de passe d'application" dans votre compte Google
3. Créer un fichier `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=votre.email@gmail.com
   SMTP_PASSWORD=votre_mot_de_passe_app
   ```
4. Décommenter le code nodemailer dans `app/api/contact/route.ts`

### Option 3: SendGrid

1. Créer un compte sur [sendgrid.com](https://sendgrid.com/)
2. Obtenir votre clé API
3. Installer le package:
   ```bash
   npm install @sendgrid/mail
   ```
4. Créer un fichier `.env.local`:
   ```
   SENDGRID_API_KEY=SG.votre_cle_api
   ```
5. Ajouter le code SendGrid dans `app/api/contact/route.ts`

## Test en développement

Actuellement, l'API log simplement les emails dans la console. Pour tester:

1. Démarrer le serveur: `npm run dev`
2. Remplir le formulaire de contact
3. Vérifier la console du serveur pour voir les données

## Notes importantes

- Ne jamais commit le fichier `.env.local` (il est dans .gitignore)
- Utiliser des variables d'environnement pour les données sensibles
- Tester en local avant de déployer en production
