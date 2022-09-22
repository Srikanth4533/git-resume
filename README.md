
# Github Repositories listing page

This is a Github repositories listing page by passing the required Github username


## API Reference

#### https://docs.github.com/en/rest/reference

#### Get Users

```http
  GET /search/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `string` | **Required**. |

#### Get User

```http
  GET /users/${username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of user to fetch |

#### Get Repositories

```http
  GET /users/${username}/repos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of user to fetch repos |




## Documentation

[Documentation](https://linktodocumentation)

#### Pages

Homepage, ResultsPage, ProfilePage

#### Homepage , Profilepage
Here after we fetch users and repos from the api UserProfile and His Repositories shown here with pagination with 8 repos per page.

#### ResultsPage
After getting results from the api the search results for users is shown here

#### Search Bar
We can see search bar in the app to search for users and we will get the list of the users and from them we can choose the user. 
## Tech Stack

**Client:** React, Redux, Styled Components



## Run Locally

Clone the project

```bash
  git clone https://github.com/Srikanth4533/git-resume.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

