# Game Scoreboard – Educational Project

This is a full-stack educational project built for university coursework. It features a simple scoreboard system where users can register, log in, and track player scores.

## 📦 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express + Prisma (SQLite)
- **Documentation**: Storybook, Swagger
- **GDPR**: Cookie consent, Privacy Policy

---

## ▶️ Getting Started

### Backend Setup

```bash
cd backend
cp .env.example .env                  # Copy example environment file
npm install                           # Install dependencies
npx prisma migrate dev --name init    # Initialize and migrate the database
npm run seed                          # Seed the database with initial players
npm run dev                           # Start the backend server
```

#### Backend Scripts

| Script | Description                             |
| ------ | --------------------------------------- |
| `dev`  | Starts backend server using ts-node-dev |
| `seed` | Seeds database with sample data         |

---

### Frontend Setup

```bash
cd frontend
cp ../frontend.env.example .env       # Copy frontend env variables
npm install                           # Install dependencies
npm run dev                           # Start frontend dev server (Vite)
```

#### Frontend Scripts

| Script            | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `dev`             | Launches Vite development server                             |
| `build`           | Compiles TypeScript and builds production-ready frontend     |
| `lint`            | Lints project files using ESLint                             |
| `preview`         | Serves built frontend locally                                |
| `storybook`       | Starts Storybook on port 6006 for UI component documentation |
| `build-storybook` | Builds static Storybook output for deployment                |

---

## 🧪 Documentation

### API Swagger

Once backend is running:

📄 http://localhost:3000/api-docs

### Storybook UI

📘 http://localhost:6006/

---

## 🔐 Environment Variables

### Backend

File: [`backend/.env.example`](./backend/.env.example)

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret"
PORT=3000
```

### Frontend

File: [`frontend/.env`](./frontend/.env) ← from [`frontend.env.example`](./frontend.env.example)

```env
VITE_API_URL=http://localhost:3000
```

---

## 📜 License

This project is licensed under the MIT License.  
See [LICENSE](./LICENSE) for details.

---

## 🧾 License Reports

- [Backend License Report](./backend/license-checker-report.md)
- [Frontend License Report](./frontend/license-checker-report.md)

---

## 👤 Author

Created by [r4dulf](https://github.com/r4dulf) for educational purposes at university.
