# Personal Website PRD: Prophetic Vision Portal

## 1. Project Overview

Build a polished personal ministry website for a prophet, using the current UI reference in `ui/stitch_prophetic_vision_portal` as the visual baseline. The website should present the prophet's identity, message, events, appointment booking, donation collection, gallery, and contact pathways in a modern, credible, and mobile-first experience.

The project is unpaid/free, so the stack and operational costs must stay simple. Quality should still be high enough to support professional referrals: fast load times, clean responsive UI, accessible interactions, secure integrations, and easy content updates.

## 2. Goals

- Launch a professional personal website that reflects a modern prophetic ministry brand.
- Make it easy for visitors to book appointments, view events, donate, browse media, and contact the ministry.
- Keep implementation affordable, maintainable, and deployable without a complex backend.
- Prepare the project for future expansion when content, media, or budget becomes available.

## 3. Non-Goals

- Build a full custom CMS in the first release.
- Build a complex user account system.
- Store card details, bank details, or sensitive payment information directly.
- Create a mobile app.
- Support multi-language content in MVP unless explicitly requested later.

## 4. Target Users

- Ministry followers seeking updates, events, and spiritual resources.
- First-time visitors evaluating the prophet's credibility and message.
- People requesting private guidance or appointment sessions.
- Partners and supporters who want to donate.
- Event attendees looking for dates, venue details, and registration links.

## 5. Visual Direction

Use the design direction from `ui/stitch_prophetic_vision_portal/DESIGN.md`.

- Brand mood: bold, youthful, organized, authoritative, and digitally native.
- Palette: dark midnight surfaces with gold accents.
- Typography: Montserrat for headings and Inter for body copy.
- Shape language: sharp corners, structured layouts, glassmorphism overlays.
- Layout: mobile-first, 8px spacing rhythm, large section spacing, strong visual hierarchy.
- Imagery: prophet portrait, ministry moments, event photos, worship scenes, and leadership imagery once real media is provided.

## 6. Recommended Stack

### Application

- Framework: Astro
- UI: HTML, CSS, TypeScript, and small React/Preact islands for interactive admin/calendar screens if needed
- Styling: Tailwind CSS
- Public content: Markdown/MDX or JSON for static sections
- Managed content: Firebase Firestore for calendar slots, booking requests, events, and optional gallery metadata
- Hosting: Netlify or Vercel free tier
- Serverless functions: Netlify Functions, Vercel Functions, or Firebase Cloud Functions for payment initialization/verification if required

### Integrations

- Donations: Paystack or Stripe
- Media storage: local optimized images for small volume; Firebase Storage if gallery/events media needs admin uploads
- Content database: Firebase Firestore for admin-managed calendar, booking requests, events, and media metadata
- Authentication: Firebase Authentication for a restricted admin interface

### Why This Stack

Astro is well-suited for a mostly static public website with selective interactivity. It keeps the public site fast, cheap to host, SEO-friendly, and easier to maintain than a full server-rendered app. Firebase can provide the minimal backend needed for admin login, calendar slots, booking requests, events, and optional media uploads without building a custom API from scratch.

## 7. Information Architecture

### Primary Pages

- Home
- About
- Events
- Booking
- Give
- Gallery
- Contact
- Admin

### Optional MVP Structure

For speed, the first launch can be a polished single-page website with anchored sections:

- Hero
- About / Prophet Profile
- Events
- Booking
- Gallery
- Give
- Contact / Footer

Dedicated pages can be added after real content is available.

## 8. Core Features

### 8.1 Home / Hero

Purpose: establish immediate credibility and provide primary actions.

Requirements:

- Full-screen or near-full-screen hero using the prophet's portrait or ministry image.
- Prophet/ministry name, short positioning statement, and concise supporting copy.
- Primary CTA: Book Appointment.
- Secondary CTA: Learn More or View Events.
- Mobile drawer navigation matching the UI reference.
- Desktop navigation if screen width allows.

Acceptance Criteria:

- Hero loads quickly on mobile.
- CTAs are visible without scrolling on common mobile screens.
- Placeholder content can be replaced easily once real content is provided.

### 8.2 About / Prophet Profile

Purpose: explain who the prophet is, what the ministry stands for, and why visitors should trust the platform.

Requirements:

- Short biography.
- Ministry vision and mission.
- Areas of focus such as prophetic guidance, teaching, leadership, prayer, events, or mentorship.
- Optional credentials, milestones, testimonials, or affiliations.

Acceptance Criteria:

- Content is readable and not overlong.
- Section works with incomplete content by using clean placeholders or hidden optional blocks.

### 8.3 Appointment Booking

Purpose: allow visitors to request or schedule one-on-one sessions.

Public Requirements:

- Display a custom calendar controlled from the admin interface.
- Show available dates and time slots.
- Allow visitors to select a date, select a slot, and submit their booking details.
- Mark slots as unavailable after confirmed booking, pending manual review, or based on admin settings.
- Store booking requests in Firebase for admin review.
- Notification can be handled manually from the admin dashboard in MVP; automated email/WhatsApp notifications are future enhancements unless required before launch.

Fields for booking request:

- Full name
- Email
- Phone / WhatsApp
- Preferred date
- Preferred time
- Session type
- Message / reason for appointment
- Consent checkbox for being contacted

Acceptance Criteria:

- Visitor receives a clear success state after submission.
- Ministry owner can view booking details in the admin dashboard.
- Form validates required fields.
- Spam protection is included through validation, rate limiting where practical, honeypot, or CAPTCHA if needed.
- The admin can create, edit, disable, and delete available slots.
- The admin can view submitted booking requests.

### 8.4 Events Listing

Purpose: show upcoming ministry engagements and encourage registrations.

Requirements:

- List upcoming events with date, title, location, time, image optional, short description, and CTA.
- Support event status: upcoming, sold out/full, online, past.
- Event CTA can link to registration, WhatsApp, external ticketing, or event detail page.
- Past events can be hidden from the homepage or moved to an archive.

Content Model:

- Title
- Slug
- Date
- Start time
- End time
- Location
- Event type
- Description
- Registration URL
- Cover image
- Status

Acceptance Criteria:

- Events can be created, edited, published, unpublished, and deleted from the admin interface.
- Event dates are formatted consistently.
- Empty state is graceful when no events are available.

### 8.5 Donation Collection

Purpose: allow supporters to give securely.

Requirements:

- Preset donation amounts.
- Custom donation amount.
- Payment gateway redirect or inline checkout.
- Clear copy explaining the purpose of giving.
- Payment success and failure states.
- Server-side payment initialization and verification where required by the gateway.
- Never store raw card details.

Recommended Gateway:

- Paystack if Ghanaian/African payment collection is required.
- Stripe if Paystack is more suitable and the account can be activated.

Acceptance Criteria:

- Donation buttons initiate a secure payment flow.
- Invalid amounts are blocked.
- The site displays a clear success/failure result after payment.
- Payment secret keys are never exposed in client-side code.
- Donation transaction references can be stored for reconciliation if required, without storing card details.

### 8.6 Gallery

Purpose: present ministry moments, events, speaking engagements, and brand imagery.

Requirements:

- Responsive image grid.
- Image captions or alt text.
- Image optimization for performance.
- Admin-managed media if Firebase Storage is enabled.
- Local/static media if the final media volume is small.
- Optional category filters later.
- Optional lightbox later.

Acceptance Criteria:

- Images do not distort.
- Gallery remains usable with 4 images or 40 images.
- All images include meaningful alt text when possible.
- Admin can add, edit, reorder, and remove gallery images if admin media management is included.

### 8.7 Contact

Purpose: provide direct communication channels.

Requirements:

- Contact form or clear contact CTAs.
- Email, phone/WhatsApp, social links, and location if provided.
- If a contact form is included, store submissions in Firebase for admin review.
- Privacy-conscious copy around how submitted details will be used.

Acceptance Criteria:

- Contact submission is visible in the admin dashboard, or contact CTAs open the correct email/phone/WhatsApp channel.
- Social links open correctly.
- Footer includes privacy policy and terms links, even if basic pages are created later.

### 8.8 Admin Interface

Purpose: give the prophet or site manager simple control over calendar availability, booking requests, events, and optionally gallery media.

Requirements:

- Protected admin login.
- Dashboard summary for upcoming bookings and events.
- Calendar availability manager.
- Booking request list with status controls.
- Optional contact submission list.
- Event manager.
- Optional gallery manager.
- Simple forms with validation and clear save states.

Admin Roles:

- MVP can support one administrator account.
- Additional roles and permissions are future enhancements.

Acceptance Criteria:

- Unauthenticated users cannot access admin pages.
- Admin can manage booking availability without editing code.
- Admin can manage events without editing code.
- Admin can review booking requests without relying on email delivery.
- Admin changes appear on the public site after save.
- Admin UI works well on laptop and remains usable on mobile.

## 9. Content Requirements

Content still needed from the client:

- Prophet full name and preferred public title.
- Ministry name and logo, if available.
- Biography.
- Mission and vision statements.
- Hero tagline and supporting copy.
- Professional photos and gallery images.
- Event details.
- Booking rules, availability, session types, and pricing if applicable.
- Donation account/payment gateway details.
- Contact email, phone/WhatsApp, social links, and location.
- Admin account email.
- Google Drive media link if available.
- Legal/privacy requirements, if any.

Temporary placeholders are acceptable during development but must be clearly tracked and replaced before launch.

## 10. Functional Requirements

- Responsive layout for mobile, tablet, and desktop.
- Accessible navigation drawer with keyboard support.
- Smooth anchor navigation for single-page layout.
- Form validation with useful error messages.
- Admin-protected CRUD flows for calendar slots and events.
- Firebase-backed storage for booking requests and optional contact submissions.
- SEO metadata per page or section.
- Open Graph image support for social sharing.
- Sitemap and robots.txt.
- Optimized image loading using responsive sizes and lazy loading.
- Config-driven content where practical.

## 11. Non-Functional Requirements

- Performance: target Lighthouse performance score of 90+ on production build.
- Accessibility: target Lighthouse accessibility score of 90+.
- SEO: semantic headings, metadata, descriptive links, and clean page titles.
- Security: no exposed payment secrets, no raw card handling, validated form inputs.
- Admin security: authenticated access, protected write rules, and least-privilege database/storage rules.
- Maintainability: content separated from layout where practical.
- Reliability: forms and payment flows must be tested before launch.

## 12. Implementation Plan

### Data Model

Recommended Firebase collections:

- `calendarSlots`: date, startTime, endTime, sessionType, capacity, status, notes, createdAt, updatedAt
- `bookingRequests`: slotId, fullName, email, phone, message, status, createdAt, updatedAt
- `events`: title, slug, date, startTime, endTime, location, type, description, registrationUrl, coverImageUrl, status, createdAt, updatedAt
- `galleryItems`: imageUrl, thumbnailUrl, altText, caption, category, sortOrder, status, createdAt, updatedAt
- `contactMessages`: fullName, email, phone, message, status, createdAt
- `donationRecords`: gateway, reference, amount, currency, status, createdAt, verifiedAt

Statuses should use small controlled values, for example `draft`, `published`, `archived`, `available`, `disabled`, `pending`, `confirmed`, `cancelled`, `read`, and `unread`.

### Phase 1: Foundation

- Scaffold Astro + Tailwind project.
- Create design tokens from the Stitch UI color and typography direction.
- Build shared layout, navigation drawer, footer, buttons, cards, and section components.
- Configure Firebase for admin authentication, Firestore data, and optional Storage.
- Add placeholder content files and initial data models.

### Phase 2: Static Content Experience

- Build homepage sections from the UI reference.
- Add About, Events, Booking, Gallery, Give, and Contact sections.
- Implement responsive layout and accessibility basics.
- Add SEO metadata and social sharing defaults.

### Phase 3: Admin and Data

- Build protected admin login.
- Build calendar availability management.
- Build booking request management.
- Build event management.
- Build contact submission management if contact form is included.
- Add gallery management if media upload is needed.

### Phase 4: Payment Integration

- Connect Paystack or Stripe.
- Implement serverless payment initialization/verification.
- Add donation amount validation.
- Add payment success and failure states.
- Test payment flow in sandbox/test mode.

### Phase 5: Content Replacement

- Replace placeholders with approved prophet/ministry content.
- Optimize and compress images.
- Add real event data.
- Review all text for tone, accuracy, and professionalism.

### Phase 6: QA and Launch

- Test mobile, tablet, and desktop views.
- Test forms.
- Test booking flow.
- Test donation flow with gateway sandbox/test mode.
- Test admin create/edit/delete flows.
- Test Firebase security rules if Firebase is used.
- Run production build.
- Deploy to free hosting.
- Connect custom domain if available.

## 13. Suggested File Structure

```text
src/
  components/
    Button.astro
    Calendar.astro
    Footer.astro
    GalleryGrid.astro
    Header.astro
    SectionHeading.astro
  content/
    events/
  data/
    site.ts
    gallery.ts
    donationAmounts.ts
  lib/
    firebase.ts
    payments.ts
  layouts/
    BaseLayout.astro
  pages/
    admin/
      index.astro
      calendar.astro
      events.astro
      gallery.astro
    index.astro
    privacy.astro
    terms.astro
  styles/
    global.css
public/
  images/
```

## 14. Risks and Mitigations

- Missing content and media may delay launch.
  Mitigation: build with structured placeholders and a content checklist.

- Payment gateway approval may take time.
  Mitigation: choose gateway early and implement donation UI with gateway adapter boundaries.

- Admin scope may expand beyond the free-project budget.
  Mitigation: keep the admin interface intentionally small: calendar availability, booking requests, events, and optional gallery only.

- Free hosting limits may affect advanced backend needs.
  Mitigation: keep the public site static-first and use Firebase only for admin-managed data/media.

- Firebase costs can grow if media is large.
  Mitigation: use optimized images, limit uploads, and fall back to curated local media if volume is small.

- Real photos may not match the design quality.
  Mitigation: define image guidelines and use tasteful cropping, overlays, and optimization.

## 15. Success Metrics

- Website is launched and shareable on a public URL.
- Visitor can book/request an appointment successfully through the custom calendar.
- Visitor can view current events.
- Visitor can make or initiate a donation through a secure payment flow.
- Gallery displays real ministry media cleanly.
- Admin can manage calendar availability and events.
- Site passes basic performance, accessibility, and mobile QA.
- Client can request content updates without needing a full rebuild of the design.

## 16. MVP Definition

The MVP is complete when:

- The website has a polished responsive homepage based on the provided UI.
- Navigation, hero, about, events, booking, gallery, donation, and contact sections are present.
- Custom calendar booking works.
- Admin calendar and event management work.
- Donation flow is connected to a real or sandbox payment provider.
- Placeholder content has been replaced or explicitly approved for launch.
- Production deployment is complete.

## 17. Future Enhancements

- Full event detail pages.
- Sermon/teaching library.
- Blog or prophetic word archive.
- Newsletter subscription.
- Testimonial section.
- Admin CMS using Decap CMS, Sanity, or Contentful.
- Gallery categories and lightbox.
- WhatsApp automation for booking confirmations.
- Email automation for appointment follow-ups.
- Multi-currency donations.
- Multi-language support.
