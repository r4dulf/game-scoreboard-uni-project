# 🎮 Game Scoreboard

A fullstack app for registering players and tracking scores, built using React, Express, and Prisma.  
Created as a university documentation project.

---

## 🔧 Configuration

### Backend `.env` file (`/backend/.env`):

```env
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="your-jwt-secret"
PORT=3001
```

### Frontend uses `.env` via Vite (`/frontend/.env`):

```env
VITE_API_URL=http://localhost:3001
```

---

## 🧪 Base Commands

### 📁 Backend (`/backend`):

```bash
npm install                   # install dependencies
npx prisma generate           # generate Prisma client
npx prisma migrate dev        # apply migrations
npm run seed                  # seed DB with test players
npm run dev                   # start Express server
```

Swagger available at `http://localhost:3001/api-docs`.

---

### 🎨 Frontend (`/frontend`):

```bash
npm install                   # install dependencies
npm run dev                   # start Vite dev server
npm run storybook             # launch Storybook
```

---

## 📚 Project Includes

- ✅ REST API with JWT auth and Swagger UI
- ✅ SQLite via Prisma ORM
- ✅ Cookie Consent (GDPR compliant)
- ✅ Privacy Policy page (`/privacy`)
- ✅ Storybook with 2 documented components
- ✅ Player score increment/decrement controls
- ✅ ReadMe, License, seed, and env setup

---

## 📄 License

Project is licensed under the [MIT License](./LICENSE.txt).

Dependency license reports:

- [backend/license-checker-report.md](./backend/license-checker-report.md)
- [frontend/license-checker-report.md](./frontend/license-checker-report.md)

---

## 👤 Author

Developed by **Bohdan Stetsiuk**  
Group: ІПЗ-22-2  
For educational demonstration purposes.
