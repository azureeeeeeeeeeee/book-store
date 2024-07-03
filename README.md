
# BookStore

A Fullstack web app using Python Django + React JS. Created to learn the full implementation of django and react to crate a Fullstack web app.


## Stack

**Programming languange** :
* Python
* Javascript

**Library & Framework** :
* Django
* ReactJS
* ChakraUI
* Tailwind CSS
## Installation

Clone this repository using

```bash
  git clone https://github.com/azureeeeeeeeeeee/book-store.git
```
    
## Backend Setup

Go to the backend folder **from root folder** using
```
cd book_api
```

Create a virtual environment using
```
virtualenv env
```

Activate the virtual env (git bash) using
```
cd env
source Scripts/activate
```

Go back to root backend folder using
```
cd ..
```

Install all dependencies using
```
pip install -r requirements.txt
```

Migrate the database (SQLite) using
```
python manage.py makemigrations
python manage.py migrate
```

Create super user to access database using
```
python manage.py createsuperuser
```

Run the Django Server using
```
python manage.py runserver
```
## Frontend Setup
Go to the frontend folder **from root folder** using
```
cd book-frontend
```

install all dependencies using
```
npm i
```

Run the frontend using
```
npm run dev
```
## Usage

To access the web, go to
```
localhost:3000
```

To access the backend (database & routes), go to
```
127.0.0.1:8000/admin/
127.0.0.1:8000/api/
```
To access the database, use super user.
## Future Improvement

* Adding Search Feature
* Create a protected route
* Improving frontend design
* Cleaning the backend code
* Adding Google OAuth Authorization
* Create a constraint for a certain user profile's role
