# To Do List API
This is a small project to demonstrate basic knowledge of Node.JS. In it we created a small To Do list API. 

## Tools Used:
In this project we use the node's [Express Server](https://expressjs.com/). To help refresh the server, [Nodemon](https://nodemon.io/) is also used as a developer dependency 

## Run the project
To run the project, download or copy the repository with the command:
```Bash
git clone https://github.com/thalesmacena/ToDo-List-API.git
```
after that, open the terminal in the folder where you copied the files, and use a package manager to start the program script
### [NPM](https://www.npmjs.com/)
```Bash
npm run dev
```
### [Yarn](https://yarnpkg.com/)
```Bash
yarn run Dev
```
The server will start at port 3000

## Routes
This is the list of routes found in the index.js file

### GET Routes
`GET http://localhost:3000/todos`
Lists the index of the To Do lists

### POST Routes
`POST http://localhost:3000/todos`
Create a new To Do list

**Params**
| Body Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Required**. The To Do List ID |
| `title` | `string` | **Required**. The To Do List Title |

`POST http://localhost:3000/todos/:id/tasks`
Create a new Task on a To Do List

**Params**
| Route Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Required**. The To Do List ID |

| Body Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | **Required**. The title of the Task |


### PUT Routes
`PUT http://localhost:3000/todos/:id`
Change the title of a To Do List

**Params**
| Route Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Required**. The To Do List ID |

| Body Parameter | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | **Required**. The title of the List |

### DELETE Routess
`DELETE http://localhost:3000/todos/:id`
Delete a To Do List

**Params**
| Route Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Required**. The To Do List ID |

## Middleware

**requisitionCount**
Counts the number of requests made on the server

**checkToDoExists**
Checks if there is a list with the id entered in the request

## Request.HTTP
This is a file with the requests, you can copy them to your API Client or use the VS Code extension [humao.rest-client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) to send requests directly within the VS Code
