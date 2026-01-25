
## About Semina API
![STATUS : ](https://img.shields.io/badge/STATUS%20%3A%20-IN%20PROGRESS-green?style=plastic)



Pada Semina API ini dipergunakan untuk REST API pada platform sistem event organizer (cms) & platform pemesanan event.

## 

Untuk dokumentasi yang lebih jelas dan lengkap dapat mengunjungi link dokumentasi di bawah ini :


## 🔗 Link Dokumentasi
[![Semina API  UI Docs](https://img.shields.io/badge/Semina_API_|_DOCS-blue?style=for-the-badge&logo=ko-fi&logoColor=white)](https://lisgiyanto1.github.io/semina-be/)



## Mengimplementasikan

* [ ]  Limitter Request
* [x]  Versioning
* [ ]  Middleware (Helmet.js)
* [ ]  Authentication & Authorization (JWT)
* [x]  Unit Testing (Jest)
* [ ]  Validation Input (Zod)
* [x]  Logging (Winston)
* [ ]  ODM (Prisma x Mongo)

> 📝 **Note:** Pengembangan Masih Berlanjut Sampai Tuntas.



## API Reference Of Semina API

#### Create Categories

```http
  POST /api/v1/categories
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. name of category |
| `organizerId`| `uuid`| **Required**. Id relation from organizer entity

#### Create Organizer

```http
  POST /api/v1/organizer
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of categories entity |




## Run Locally

Clone the project

```bash
  git clone https://github.com/Lisgiyanto1/semina-be.git
```

Go to the project directory

```bash
  cd semina-db
```

Install dependencies & build

```bash
  npm install
```

```bash
  npm build
```

Start the server

```bash
  npm run start
```

Start with nodemon
```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Authors

- [@lisgiyanto sofiyan](https://github.com/Lisgiyanto1/)


## Tech Stack

![nodejs-express-mongodb-docker](https://www.readmecodegen.com/api/social-icon?name=nodejs%2Cexpress%2Cmongodb%2Cdocker&size=46&bg=%23374151&shape=circle&animation=shake&link=)

