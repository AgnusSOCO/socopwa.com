# SOCOPWA.COM - Project Preferences & Configuration

**Last Updated**: November 13, 2025

## User Preferences

### Scheduling Platform
- **Platform**: Cal.com
- **URL**: https://cal.com/socopwa/soco-pwa-consultation-meeting
- **Usage**: All "Book a Demo" and "Schedule Consultation" buttons

### Contact Form Configuration
- **Admin Email**: juan@socopwa.com
- **Backend Method**: Free solution (Vercel serverless function)
- **Notifications**: Slack webhook integration desired
- **Submission Flow**: 
  1. User submits form
  2. Email sent to juan@socopwa.com
  3. Slack notification sent
  4. User sees success message

### External Links
- **Partner Websites**: Add real URLs for Microsoft, Cisco, Dell, VMware, Palo Alto, Fortinet, HPE, Verkada
- **Case Studies**: Create new case study documents/pages
- **Certification Documents**: Not available (no links needed)

### Analytics Configuration
- **Provider**: Google Analytics 4 (GA4) + Microsoft Clarity via Google Tag Manager (GTM)
- **Tracking Approach**: Aggressive but legal tracking (comprehensive user data collection)
- **Privacy Requirements**: Privacy notice required for Mexico (LFPDPPP compliance)
- **Data Collection**:
  - User demographics, interests, behavior patterns
  - Device info, location (city-level), user journey
  - Session recordings and heatmaps (Clarity)
  - Form abandonment tracking
  - UTM parameters and referrer data
  - Lead attribution and conversion funnels
- **Events to Track**:
  - `cta_click` (source, destination, service)
  - `contact_form_start` (first input focus)
  - `contact_submit` (service, source, utm_params)
  - `contact_abandon` (form started but not submitted)
  - `demo_book_click` (source, url)
  - `service_modal_open` (service name)
  - `quote_request` (service name)
  - `partner_click` (partner name)
  - `case_study_view` (case study title)
  - `external_link_click` (source, url)
- **Integration**: GA4-Clarity integration passes Clarity session ID to GA4 for pivoting from events to recordings
- **Data Privacy**: Email addresses hashed (SHA-256) before sending to analytics; clear email only in backend/Slack

### Deployment
- **Platform**: Vercel
- **Serverless Functions**: Available for contact form backend
- **Environment Variables Needed**:
  - `VITE_CALENDLY_URL`
  - `VITE_GTM_ID` (Google Tag Manager Container ID, e.g., GTM-XXXXXXX)
  - `VITE_GA4_MEASUREMENT_ID` (Google Analytics 4 Measurement ID, e.g., G-XXXXXXXXXX)
  - `VITE_CLARITY_PROJECT_ID` (Microsoft Clarity Project ID)
  - `VITE_CONTACT_EMAIL`
  - `SLACK_WEBHOOK_URL` (server-side only)

## Technical Decisions

### Contact Form Backend
**Chosen Solution**: Vercel Serverless Function + Slack Webhook

**Why**:
- Free on Vercel
- No third-party service fees
- Full control over data
- Easy Slack integration
- Can add CRM integration later

**Implementation**:
- Create `/api/contact.ts` serverless function
- Accept POST requests with form data
- Send email via Vercel's email service or Resend (free tier)
- Send Slack notification via webhook
- Return success/error response

### Analytics
**Chosen Solution**: Google Analytics 4 (GA4) + Microsoft Clarity via Google Tag Manager (GTM)

**Why**:
- **GA4**: Comprehensive user tracking, demographics, interests, behavior patterns, device/location data, conversion funnels, ad integrations, free
- **Microsoft Clarity**: Unlimited free session recordings and heatmaps, helps identify UX issues and form abandonment points
- **GTM**: Single snippet deployment, easy to add additional tags (LinkedIn Insight, Google Ads, Meta Pixel) without code changes
- **Integration**: GA4-Clarity integration passes session IDs for pivoting from analytics events to actual session recordings
- **B2B Focus**: Better lead attribution, UTM tracking, conversion tracking for enterprise sales funnel

**Implementation**:
- Deploy GTM container script in index.html
- Configure GA4 tag in GTM with custom dimensions (source, service, destination)
- Configure Clarity tag in GTM
- Set up GA4 conversions: contact_submit, demo_book, quote_request
- Enable GA4 enhanced measurement
- Capture and store UTM parameters in localStorage for attribution
- Track form abandonment (form_start + beforeunload without submit)
- Hash email addresses (SHA-256) before sending to analytics
- Keep clear emails only in backend/Slack notifications

**Legal Compliance**:
- Add "Aviso de Privacidad" (privacy notice) link in footer for Mexico LFPDPPP compliance
- Clarity input masking enabled by default for sensitive fields
- No explicit consent banner required for non-sensitive data with proper notice

### Partner URLs
**To Add**:
- Microsoft: https://www.microsoft.com
- Cisco: https://www.cisco.com
- Dell Technologies: https://www.dell.com
- VMware: https://www.vmware.com
- Palo Alto Networks: https://www.paloaltonetworks.com
- Fortinet: https://www.fortinet.com
- HPE: https://www.hpe.com
- Verkada: https://www.verkada.com

## Implementation Phases

### Phase 1: Navigation & CTAs (Current)
- Create navigation utilities
- Wire all CTA buttons
- Add query parameter handling
- Add service pre-fill support

### Phase 2: Contact Form
- Create Vercel serverless function
- Integrate Slack webhook
- Add form validation
- Add submission UI feedback

### Phase 3: Enhanced Interactivity
- Add partner links
- Create case study pages
- Add certifications filter

### Phase 4: Accessibility
- ServiceModal improvements
- ARIA attributes
- Keyboard navigation
- Focus management

### Phase 5: SEO & Analytics
- Fix SEO issues
- Integrate Google Analytics 4 + Microsoft Clarity via GTM
- Add comprehensive event tracking
- Implement UTM parameter capture
- Add form abandonment tracking
- Configure GA4 conversions

## Environment Variables

### Development (.env.local)
```
VITE_CALENDLY_URL=https://cal.com/socopwa/soco-pwa-consultation-meeting
VITE_GTM_ID=[to be provided by user]
VITE_GA4_MEASUREMENT_ID=[to be provided by user]
VITE_CLARITY_PROJECT_ID=[to be provided by user]
VITE_CONTACT_EMAIL=juan@socopwa.com
VITE_ANALYTICS_ENABLED=true
```

### Production (Vercel)
```
VITE_CALENDLY_URL=https://cal.com/socopwa/soco-pwa-consultation-meeting
VITE_GTM_ID=[to be provided by user]
VITE_GA4_MEASUREMENT_ID=[to be provided by user]
VITE_CLARITY_PROJECT_ID=[to be provided by user]
VITE_CONTACT_EMAIL=juan@socopwa.com
VITE_ANALYTICS_ENABLED=true
SLACK_WEBHOOK_URL=[to be provided by user]
```

## Notes
- All preferences documented here should be referenced during implementation
- Update this document if preferences change
- Keep sensitive data (Slack webhook URL) in environment variables only
