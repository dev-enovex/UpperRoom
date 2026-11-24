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
- The Leadership page uses the supplied portrait at `frontend/public/chisom-ijoma.jpeg`.
- The public navigation uses the logo as the Home link; Initiatives and Leadership are grouped under the About dropdown.
- Internal route changes, including footer links, automatically return the visitor to the top of the destination page.
- Public information pages use consistent full-width photographic page banners and responsive content layouts.
- This is a development foundation, not a production security or payment certification. Test payment callbacks, webhook signatures, email delivery, ticket issuing and PDF/QR downloads end-to-end before launch.

## Summit gallery
Twenty selected photographs from the supplied previous-summit photo archive are included in `frontend/public/gallery/` and displayed on the `/gallery` page. The gallery is linked from the main navigation and footer.

## Book Library
- Public route: `/library`.
- The catalogue is organised using all 12 main categories and their subcategories from the supplied `book.docx`.
- Admin users can add approved books and reading resources from `/admin` → Book library. Provide a publicly reachable PDF/reading URL and optional cover image URL.
- The uploaded Word document supplied subject categories only; it did not contain book titles or book files. The public library therefore starts with the category structure and shows resources after the team adds them.

## SOAR Academy
- Public route: `/academy`.
- Includes starter technology learning pathways: Web Development, UI/UX and Product Design, AI and Productivity, Data Analytics, Cybersecurity Fundamentals, and Digital Skills/Digital Marketing.
- Signed-in users can submit enrolment interest with their contact details, experience level and learning goals.
- Admin users can review enquiries and update their follow-up status from `/admin` → Academy enrolments.
- Course dates, fees, curriculum, delivery format and scholarship availability are not advertised as confirmed; the Academy team can communicate these per cohort.

## SOAR Academy learning portal
- `/academy` lists the learning tracks and accepts signed-in enrolment enquiries.
- `/academy/learning` is the protected student classroom. Only learners whose enrolment status is set to `enrolled` by an administrator can see course content.
- Admins can publish courses and lessons under `/admin` → Academy courses. Add lessons one per line using: `Lesson title | Video URL (optional) | Resource URL (optional)`.
- Admins review learner enquiries under `/admin` → Academy enrolments and set the status to `enrolled` to grant classroom access.
- Students can open lesson videos/resources, mark lessons complete, view progress, and print a completion certificate once all lessons are complete.
- Certificate output is a printable browser document, not a digitally signed credential. The Academy should verify learner identity and completion records before formally recognising certificates.
