# Snap Raise Backend

## Questions For This App to Demonstrate

- How do I set up a GraphQL server endpoint? (and which libraries should I use)
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server/) -- for server-side
  - [Jest](https://jestjs.io/) -- for testing
  - [Prisma](https://www.prisma.io/) -- for database
  - [Bcrypt](https://www.npmjs.com/package/bcrypt) -- for password hashing
  - [JWT](https://www.npmjs.com/package/jsonwebtoken) -- for authentication
  - [GraphQL Federation](https://www.apollographql.com/docs/graphql-federation/) -- for federation
- How do I perform a GraphQL query? (bonus)
  - Run the following command in the terminal:
    ```
    docker-compose up -d
    curl -g 'http://localhost:4000/graphql?query={users{id, name, email}}'
    ```
- How do I create a database?
  - Run the following command in the terminal:
    - `prisma deploy`
- How do I add database models?
  - Add the model in the `schema.prisma` file
  - Run the following command in the terminal:
    - `prisma generate`
  - Define the model in the `schema.graphql` file
- How can I make those queryable via my GraphQL Server?
  - Define the query in the `resolvers.js` file
  - Add the resolver to the resolvers object in the `schema.graphql` file
- How do I migrate my database schema?
  - Run the following command in the terminal:
    - `prisma migrate dev --name init`
- How do I roll back my database schema?
  - Run the following command in the terminal:
    - `prisma rollback`
- How do I seed my database?
  - Run the following command in the terminal:
    - `prisma seed`
- How do I set up test and linting builds in Circle CI?
- How do I set up versioning and deployments?
- How do I view historical changes in my database migrations?
- How do I set up a status check endpoint using HTTP/Rest? (Express)
- Provide a GraphQL playground endpoint at /graphql

## How to run it

`npm start`

## GraphQL Playground Examples

- [Local Playground](http://localhost:4000/graphql)


- [Get Users](http://localhost:4000/graphql?query={users{id, name, email}})
```request: {
 query {
     users {
     id
     name
     email
   }
 }
}

response: {
 "data": {
   "users": [
     {
       "id": "1",
       "name": "Ronnie Jackson",
       "email": null
     },
     {
       "id": "2",
       "name": "John Doe",
       "email": null
     },
     {
       "id": "3",
       "name": "Test User",
       "email": "testuser@snapraise.com"
     }
   ]
 }
}```

- [Get User by ID](http://localhost:4000/graphql?query={user(id: 1){id, name, email}})
```request: {  
 query {
   user(id: "3") {
     id
     name
     email
   }
 }
}

response: {
 "data": {
   "user": {
     "id": "3",
     "name": "Test User",
     "email": "testuser@snapraise.com"
   }
 }
}```

- [Login User](http://localhost:4000/graphql?query={login(email: "JohnDoe@snapraise.com", password: "password1"){token, cookie, user{id, name, email}}}}})
```request:{
  mutation{
    loginUser(email:"testuser@snapraise.com", password: "password"){
     user{
       id,
       name,
       email
     },
     token,
     cookie
   } 
  }
}

response:{
  "data": {
    "loginUser": {
      "user": {
        "id": "2",
        "name": "John Doe",
        "email": "testuser@snapraise.com"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwiaWF0IjoxNjM2NDM4NDY2LCJleHAiOjE2MzY0NDIwNjZ9.RkKRVZsyzbWFsUmdBesO4HFZX9mEM_zsEAXyoDNrl2I",
      "cookie": "Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyIiwiaWF0IjoxNjM2NDM4NDY2LCJleHAiOjE2MzY0NDIwNjZ9.RkKRVZsyzbWFsUmdBesO4HFZX9mEM_zsEAXyoDNrl2I; HttpOnly; Max-Age=3600;"
    }
  }
}```

- [Create User](http://localhost:4000/graphql?query={createUser(data: {name: "John Doe", email: "JohnDoe@snapraise.com", password: "password"}){id, name, email}})
```request: {
 mutation {
   createUser(name: "Test User", email: "testuser1@snapraise.com", password: "password") {
     id
     name
     email
   }
 }
}

response: {
 "data": {
   "createUser": {
     "id": "4",
     "name": "Test User",
     "email": "testuser1@snapraise.com"
   }
 }
}```

- [Update User](http://localhost:4000/graphql?query={updateUser(id: 1, name: "John Doe", email: "JohnDoe@snapraise.com", password: "password1"}){id, name, email}})
```request: {
 mutation {
     updateUser(id: "2", email: "testuser123@snapraise.com") {
       id
       name
       email
     }
 }
}

response: {
 "data": {
   "updateUser": {
     "id": "2",
     "name": "John Doe",
     "email": "testuser123@snapraise.com"
    }
 }
}```

- [Delete User](http://localhost:4000/graphql?query={deleteUser(id: 1){id, name, email}})
```request: {
 mutation {
     deleteUser(id: "6") {
       id
       name
       email
     }
 }
}

response: {
 "data": {
   "deleteUser": {
     "id": "6",
     "name": "Test User",
     "email": "testuser@snapraise.com"
   }
 }
}
```

## How to open Prisma Studio (Add a screeenshot)

`npx prisma studio`

## Initial migration

`npx prisma migrate dev --name init`

This command does two things:

1. It creates a new SQL migration file for this migration
2. It runs the SQL migration file against the database

## Add a new field inside a table and generate a new migration

`prisma migrate dev --name added_job_title`

## Build docker image
`docker build -t snapraise/backend-service .`

1. Builds the docker image

## Run docker containers
`docker-compose up -d`

1. Starts the docker containers in the background
2. This will start GraphQL server(Playground), Prisma studio, and Postgres Database
3. You can access the GraphQL server at http://localhost:4000/graphql
4. You can access the Prisma studio at http://localhost:5555

## Run the migration in the docker container 
`docker exec -it backend-service sh -c "npx prisma migrate dev --name init"`

1. It creates a new SQL migration file for this migration
2. It runs the SQL migration file against the database
3. It prints the SQL migration result

## Run the tests in docker container
`docker exec -it backend-service sh -c "npm test`

1. It runs the tests inside the backend-service container
2. It prints the test results
