### 📝 A predictable todo app using React and FastAPI.

As you would expect, you can perform all CRUD operations through a RESTful API:

- Create a new note
- Read all notes
- Update an existing note
- Delete a note

> ✋🏽 For now, data saved in memory so the **data does not persist**. To connect to a database, edit `main.py` accordingly.

### 🪄 Wanna try it out?

1. **Clone the repo 👾**

```bash
git clone https://github.com/cmdecker95/todo-app-fastapi.git
```

2. **Install dependencies ⚙️**

- Python (run from `backend/`)

```bash
pip install -r requirements.txt
```

- Node (run from `frontend/`)

```bash
npm install
```

3. **Launch the app 🚀**

- FastAPI (run from `backend/`)

```bash
# remove `--reload` for deployment.
uvicorn main:app --reload
```

- Node/React (run from `frontend/`)

```bash
npm start
```

### 💁🏽‍♂️ Yep, this is from a tutorial.

Thank you [Dennis Ivy](https://github.com/divanov11) for a great walkthrough on [how to connect FastAPI to React](https://medium.com/@dennisivy/fast-api-react-crud-app-with-harperdb-5834af537c23#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk1NTEwNGEzN2ZhOTAzZWQ4MGM1NzE0NWVjOWU4M2VkYjI5YjBjNDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjYyMDExNjcsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDcwMTc0MDA0NDg2MjY4NzIxOCIsImVtYWlsIjoiY21kZWNrZXI5NUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IkNocmlzdGlhbiBEZWNrZXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUxtNXd1MTZ4Y01zbng5NDZwajJ2cGFLZGxCeEFJak4waE5Xc1FGMXJ1NnRIUT1zOTYtYyIsImdpdmVuX25hbWUiOiJDaHJpc3RpYW4iLCJmYW1pbHlfbmFtZSI6IkRlY2tlciIsImlhdCI6MTY2NjIwMTQ2NywiZXhwIjoxNjY2MjA1MDY3LCJqdGkiOiI0NGU2ZTUzZWIyYTBlNDUzYzc0NTE2ODYzMzEwNTI0ZDA3ZmYwYTlmIn0.Q7ln_8cYhalrsQu52VTtRVueLKWa-_S8AoMQQeU91iF39RuxadPYGtJxaA5W6NGHFbQOQ6XQ6U0pgxFYNoynHEJ2_o-Q8rqizNKBFIgeGuatNcq1_82yQCeA-SoJh_gW-w2G3zUXdXIj9SYO_eTyCbkY1nKe9XRk_11u1iyRA3PYqmZFP9ZjDsWueIdyF-aCrXIl3LsVZpcO0sR91aBF4cV7ruDmWoF1aj7XVFi9tszxyzF0N6ZcNiJu6ps5Ncs5g8luxqyPJTv6gHGioM2VTSsWZ_uPYymy3NubaNaMCnSjCCYasB8i-EPEjGv2SOOeyQzjzz6k7jw6llLcbrRE5Q)! 🙏🏽
