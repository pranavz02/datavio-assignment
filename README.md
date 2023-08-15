
# Datavio Assignment

This is an assignment to be submitted to Datavio.


## API Reference

#### POST Register

```http
  POST /api/user/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of user |
| `email` | `string` | **Required**. Email ID of user |
| `password` | `string` | **Required**. Password of user |



#### POST Register

```http
  GET /api/user/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. Email ID of user |
| `password` | `string` | **Required**. Password of user |

#### POST URL

```http
  POST /api/url
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `flipkartURL` | `string` | **Required**. Any URL of Flipkart |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`

`JWT_SECRET`


## Run Locally

Clone the project

```bash
  git clone https://github.com/pranavz02/datavio-assignment.git
```

Go to the project directory

```bash
  cd datavio-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Authors

- [@pranavz02](https://www.github.com/pranavz02)

