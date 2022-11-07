### 📝 A predictable todo app using React and FastAPI.

As you would expect, you can perform all CRUD operations through a RESTful API:

- Create a new note
- Read one note, list all notes
- Update an existing note
- Delete a note

> ✋🏽 For now, data is saved in memory so the **data does not persist**. To connect to a database, edit `main.py` accordingly.

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
