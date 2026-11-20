# Upper Room SOAR Company — Website

A local-development React and Express website for Upper Room SOAR Company and the SOAR Summit.

## Brand and content update
- Uses the official Upper Room SOAR Summit logo supplied by the project owner at `frontend/public/upperroom-soar-logo.png`.
- Uses the supplied `ABOUT UPPER ROOM SOAR COMPANY.docx` as the source for the organisation's public-facing content.
- Includes dedicated pages for About, Vision & Mission, Initiatives, Leadership, Get Connected, Partnership, and Events.
- Retains the account registration, attendee dashboard, event ticket selection, Paystack and Flutterwave checkout foundation.

## Frontend pages
- Home
- About Upper Room
- Our Vision & Mission (including all six vision pillars)
- Our Initiatives (SOAR Summit, Community Outreach, SOAR Academy, Fellowship and Discipleship)
- Leadership (Ijoma, Chisom Jessica)
- Get Connected (fellowship, discipleship, mentorship and outreach volunteering)
- Partner With Us (six partnership pathways and the Benue IDP outreach account)
- Events and event details
- Summit Gallery featuring 20 selected photographs from the previous year's gathering
- Account registration/sign-in, attendee dashboard and admin event management

## Stack
- Frontend: React + Vite + JavaScript + CSS Modules
- Backend: Node.js + Express + MongoDB/Mongoose
- Authentication: bcrypt + JWT
- Payments: Paystack and Flutterwave server-side initialization and verification
- Ticketing: QR-code payload generation and PDF ticket download

## Requirements
- Node.js 20+
- npm
- MongoDB (local MongoDB or MongoDB Atlas)

## Run locally

Open two terminals.

### 1. Backend
```bash
cd backend
npm install
```
Copy `backend/.env.example` to `backend/.env`, then set `MONGODB_URI` and `JWT_SECRET`.

Start the API:
```bash
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
Open the local Vite address shown in the terminal (normally http://localhost:5173).

## First admin account
Register an account through the website, then promote it in MongoDB Compass or mongosh:
```js
use upperroom_soar_summit
db.users.updateOne({ email: "you@example.com" }, { $set: { role: "admin" } })
```
Do not expose admin role assignment in public registration.

## Payment setup
- Paystack: set `PAYSTACK_SECRET_KEY` in `backend/.env`.
- Flutterwave: set `FLUTTERWAVE_SECRET_KEY` and `FLUTTERWAVE_SECRET_HASH`.
- Set `CLIENT_URL` to the frontend origin.
- Use provider test credentials first. The backend must verify provider transactions before treating orders as paid.
- Configure webhook URLs in the provider dashboards as documented in the original payment controller/API routes.

## Notes
- The source archive intentionally excludes `node_modules`; run `npm install` in both `frontend` and `backend` on your computer.
- Event dates, venue details, speakers, ticket inventory, and contact channels should be confirmed and entered by the site administrator before public launch.
- The leadership page currently uses a branded placeholder treatment rather than a portrait because the supplied project ZIP did not contain a separate portrait image.
- This is a development foundation, not a production security or payment certification. Test payment callbacks, webhook signatures, email delivery, ticket issuing and PDF/QR downloads end-to-end before launch.

## Summit gallery
Twenty selected photographs from the supplied previous-summit photo archive are included in `frontend/public/gallery/` and displayed on the `/gallery` page. The gallery is linked from the main navigation and footer.
