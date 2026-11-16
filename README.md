# UpperRoom Soar Summit

A local-development starter for the UpperRoom Soar Summit event and ticketing platform.

## Stack
- Frontend: React + Vite + JavaScript + CSS Modules
- Backend: Node.js + Express + MongoDB/Mongoose
- Authentication: bcrypt + JWT
- Payments: Paystack and Flutterwave server-side initialization and verification
- Ticketing: QR-code payload generation (PNG endpoint) and PDF ticket download

## Requirements
Node.js 20+, npm, and MongoDB (local MongoDB or MongoDB Atlas).

## Run locally
Open two terminals.

### 1. Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Set `MONGODB_URI` and `JWT_SECRET` in `backend/.env`. Add payment keys and email settings when ready.

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:5173.

## Create the first admin
Register a normal account through the UI. Then use MongoDB Compass or mongosh to promote that account:
```js
use upperroom_soar_summit
db.users.updateOne({ email: "you@example.com" }, { $set: { role: "admin" } })
```
Never expose admin role assignment in a public registration endpoint.

## Payment setup
- Paystack: set `PAYSTACK_SECRET_KEY`.
- Flutterwave: set `FLUTTERWAVE_SECRET_KEY`.
- Set `CLIENT_URL` to the frontend origin.
- Use test credentials first. Payment callbacks are not proof of payment: the backend verifies transactions with the provider before marking an order paid.
- Configure provider dashboard webhook URLs to `POST /api/payments/paystack/webhook` and `POST /api/payments/flutterwave/webhook`. Webhook handlers validate provider signatures before processing.

## Important production work
This is a runnable foundation, not a production certification. Before a public launch:
- configure HTTPS, secure secrets, backups, monitoring and a production mail provider;
- test provider test-mode flows and webhook retries end-to-end;
- review privacy/consent, refund, tax and event terms;
- add email verification, password reset, audit logs and rate limits appropriate to traffic;
- set event-specific dates, venue, speakers, ticket inventory and refund policy.
