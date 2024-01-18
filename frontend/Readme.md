#!/bin/bash

# Make sure MongoDB is running (you can adjust the command according to your installation)
service mongod start

# Configure the database schema (you can use a MongoDB-specific migration script)
npm run db:migrate

# Create configuration files if they don't exist
cp config.example.js config.js


# Install the necessary dependencies
npm install

# Configure the database (replace with the commands specific to your database)
# MongoDB:
# mongo < setupDatabase.js

# Create the configuration file if needed
# cp config.example.js config.js

# Start the application
npm start


# Quick Notes
This is an awesome application that uses MongoDB as a database.

## Prerequisites
- Node.js: v14.0.0 or later
- npm: v6.0.0 or higher
- MongoDB: make sure you have an instance of MongoDB running

Make sure you have Node.js and npm installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).

## Installation

1. Clone the repository: `git clone https://github.com/ensolvers-github-challenges/Entivero-6eb2d8.git`.
2. Navigate to the project directory: `cd /d/UserData/User/Desktop/NotesApp`.
3. Run the configuration script: `./setup.sh`.

## Configuration

- You can adjust the configuration in the `config.js` file.

## Execution

Run the application with the following command:

````bash
npm run dev