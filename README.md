# Portfolio
Welcome to my portfolio! This repository showcases my projects, skills, and experiences as a developer.

Getting Started
To get this project up and running on your local machine, follow these steps:

Prerequisites
Node.js: Make sure you have Node.js 18 installed on your system.

## Clone the repository
```bash
$ git clone [repository-url]
$ cd [repository-folder]
```
## Install dependencies
```bash
$ npm install
```
Development Server

```bash
# Start the development server with hot reload at localhost:3000
$ npm run dev
```
Building for Production
To prepare the portfolio for production, follow these steps:

## Build for production
```bash
$ npm run build
```
# Start the production server
```bash
$ npm run start
```
Generating a Static Project
If you prefer a static version of the portfolio, you can generate it using:

```bash
$ npm run generate
```

## Production Deployment
Using PM2
For a production-ready deployment, you can use PM2 to manage your Node.js application. Here's how:
```bash
# Install PM2 globally (if not already installed)
$ npm install pm2@latest -g

# Start your application with PM2
$ pm2 start npm --name [app-name] -- run start

# Save the process list
$ pm2 save

# List running applications
$ pm2 ls

# Delete an application
$ pm2 delete [app-name]
```