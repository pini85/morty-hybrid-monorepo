
# Morty Hybrid Monolith Application

This project is a hybrid monolith application featuring microservices for authentication (`auth-service`) and API proxying (`api-proxy-service`) to the Rick and Morty API. It is built using Express and React with TypeScript. A shared folder is included for shared types across the services.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Generating Documentation](#generating-documentation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Usage](#usage)

## Prerequisites

Ensure you have the following software installed:

- Node.js (version 18.18.0 or above)
- npm (version 6.x or above)
- TypeScript (`npm install -g typescript`)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/pini85/morty-hybrid-monorepo.git
   cd morty-hybrid-monorepo
   ```

2. Install dependencies for all services using npm workspaces:
   ```sh
   npm install
   ```

## Environment Variables

Create `.env` files in the root directories of `auth-service` and `api-proxy-service` with the following variables:

### auth-service/.env
```plaintext
JWT_SECRET=veryComplexSecret
PORT=5000
```

### api-proxy-service/.env
```plaintext
JWT_SECRET=veryComplexSecret
PORT=5001
```

Ensure that `JWT_SECRET` is the same in both services.

## Running the Application

To start the application, run the following command from the root directory:
```sh
npm run start
```

This command will start the `auth-service`, `api-proxy-service`, and `client` microservices. The client will be available at `http://localhost:5173`.

## Generating Documentation

To generate documentation using TypeDoc, run the following command:
```sh
npm run docs
```

Ensure you have TypeScript installed globally to use the `tsc` command:
```sh
npm install -g typescript
```

## Project Structure

```
morty-hybrid-monorepo/
├── README.md
├── auth-service/
│   ├── nodemon.json
│   ├── package.json
│   ├── src/
│   └── tsconfig.json
├── api-proxy-service/
│   ├── nodemon.json
│   ├── package.json
│   ├── src/
│   └── tsconfig.json
├── client/
│   ├── README.md
│   ├── index.html
│   ├── node_modules/
│   ├── package.json
│   ├── public/
│   ├── src/
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── shared/
│   ├── package-lock.json
│   ├── package.json
│   ├── src/
│   └── tsconfig.json
├── docs/
│   ├── index.html
│   ├── ...
├── node_modules/
├── package-lock.json
├── package.json
├── tsconfig.json
├── typedoc.json
```

## Technologies Used

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, TypeScript, styled-components, react-query
- **Authentication**: JWT (JSON Web Tokens)
- **Documentation**: TypeDoc

## Usage

1. Install dependencies using npm:
   ```sh
   npm install
   ```

2. Create `.env` files in the `auth-service` and `api-proxy-service` directories.

3. Run the application:
   ```sh
   npm run start
   ```

4. Access the client at `http://localhost:5173`.

5. Generate documentation:
   ```sh
   npm run docs
   ```

For further details, please refer to the source code and comments.
