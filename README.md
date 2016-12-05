# REST API Starter
<br/>
<div style='display: flex; justify-content:center;' align-items:'center' ><img height='48px'  src="https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
/> <img height='40px'  src="https://s3.amazonaws.com/media-p.slid.es/uploads/364542/images/2393032/Capture_d_e_cran_2016-03-27_a__18.39.05.png"
/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img height='40px' src="http://passportjs.org/images/PassportJS.svg"
/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>
<br/>
This sample project demonstrates how to set up a user authentication API with Express using JSON Web Tokens. There are several endpoints exposed in the sample, including user and social media login (Facebook, Google, and Twitter), along with an example of a protected admin resource.


## Installation and Running the App
Clone the repo, then:

```bash
yarn
yarn run dev
```

The app will be served at `localhost:3090`.

## Local Setup

To setup the API locally, you will need to run MongoDB or have an MLab instance. You will also need to get the correct id/key/secret from the social media API. Create a `.env` file and populate it with the following values:

```bash
#mongoDB
SECRET_KEY=<secret_key>
MONGO_USER=<mlab_user>
MONGO_PASSWORD=<secret_key>
MONGO_DOMAIN=<domain>
MONGO_DB=<database>

#facebook
FB_ID=<facebook id>
FB_SECRET=<facebookb secret>

#twitter
TWITTER_KEY=<twitter key>
TWITTER_SECRET=<twitter secret>

#google
GOOGLE_ID=<google id>
GOOGLE_SECRET=<google secret>
```

## CRUD Routes

#### **POST** `/api/users`
* Used for signing up a user. Accepts `username`, `email`, and `password` to create a user. Returns a JWT.

#### **POST** `/api/users/authenticate`
* Used for logging a user in. Accepts `username` or `email` and `password` to authenticate a user. Returns a JWT.

#### **GET** `/api/users/me`
* Convenience endpoint which returns only that specific user. Requires a valid JWT.

#### **GET** `/api/users`
* Returns all users in the database. Requires a valid JWT. Requires a valid JWT with an `admin` scope.

#### **GET** `/api/users/{id}`
* Returns a specific `user` in the database. Requires a valid JWT.


#### **PUT** `/api/user/{id}`
* Updates a user. Requires a valid JWT from the respective user or one with an `admin` scope.


#### **DELETE** `/api/user/{id}`
* Deletes a user with a specific `id`. Requires a valid JWT from the respective user or one with an `admin` scope.


## Social Authentication Routes
The following routes return a user object with all the basic social media information.

#### **GET** `/api/users/facebook`
#### **GET** `/api/users/google`
#### **GET** `/api/users/twitter`



## Todo
- [ ] set expiration date
- [ ] testing
- [ ] containerization
- [ ] AWS deployment
