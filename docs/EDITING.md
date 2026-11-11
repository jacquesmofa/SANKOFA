# How to update the Sankofa Royale Awards website

You can change **all the text, photos, prices, dates and links** on sankofaroyaleaward.ca yourself. Changes appear on the live site about **2 minutes** after you save.

You can't change the layout, colours or fonts, or add new kinds of sections; those still need your web designer.

## Two ways to sign in

**Option A: Pages CMS (no GitHub account needed)**
1. Open the invitation email from Pages CMS and sign in.
2. Go to **https://app.pagescms.org** and open **SANKOFA**.

**Option B: Sveltia CMS (for people with a GitHub account)**
1. Go to **https://sankofaroyaleaward.ca/admin/**.
2. Choose **Sign In with GitHub**, or **Sign In Using Access Token** with the token you were given.

Both editors change the same content, so use whichever you prefer.

## Where everything is

| I want to change… | Open |
| --- | --- |
| **The next gala's date, venue, time, dress code** | The next gala → **Next gala: date, venue & dress code** |
| Home page (hero photos, story, timeline, invitation…) | Pages → **Home page** |
| The Gala Night page | Pages → **The Gala Night** |
| What is Sankofa page | Pages → **What is Sankofa** |
| Award categories, nomination steps | Pages → **Nominate (award categories)** |
| Ticket prices and what each tier includes | Pages → **Tickets & tables (prices)** |
| CAWAP page | Pages → **CAWAP** |
| Contact page, sponsorship text, form topics | Pages → **Contact & sponsorship** |
| **Gallery albums and photos** | Gallery → **Gallery albums & photos** |
| Phones, email, WhatsApp number, social links, nomination form link | Site settings → **Contact details, WhatsApp & social links** |
| Menu at the top | Site settings → **Main menu** |
| What Google shows for each page | Site settings → **Google: page titles & descriptions** |

## Common tasks

**Announce the next gala:** The next gala → set **Gala date** (the countdown appears on the home page by itself), **Venue name**, **Venue address** → **Save**. When the gala has passed, the countdown disappears automatically; update **Last gala** with that year's theme and date.

**Add a new gallery album (e.g. 2026):** Gallery albums & photos → Albums → **Add** → Web address `gala-2026`, Year, Title, Theme, Description, Cover photo, Photo shape `portrait` → under **Photos in this album** click **Add** for each photo (upload, or paste a Cloudinary link) → **Save**. Drag albums to put the newest first.

**Add photos to an existing album:** open the album → Photos in this album → **Add** → upload → **Save**.

**Change prices:** Tickets & tables → Tiers → the tier → Price → **Save**. Update the **Note under the prices** too.

## Good habits

- Photos: JPG, **under 2 MB**. Big event shoots are best uploaded to Cloudinary first, then pasted as links.
- Save once, then wait about 2 minutes before checking the site.
- Lists: use **Add** for a new item, drag to reorder, and the bin icon to remove.

## If something goes wrong

Every save is kept in a history, so mistakes can be undone. If a save ever contains an error, the website keeps showing the previous version. If the site ever disappears from HostGator, the uptime guard puts it back within about 20 minutes and opens an issue on GitHub to tell you.

## One-time setup (Jacques)

**Pages CMS:** go to https://app.pagescms.org, sign in with GitHub, install the Pages CMS app on `jacquesmofa/SANKOFA`, open the project → Settings → **Collaborators** → invite editors by email.

**"Sign In with GitHub" for /admin** (runs on our own HostGator server, `/api/auth.php` and `/api/callback.php`):
1. Go to https://github.com/settings/applications/new and fill in:
   - Application name: `Sankofa Royale website editor`
   - Homepage URL: `https://sankofaroyaleaward.ca`
   - Authorization callback URL: `https://sankofaroyaleaward.ca/api/callback.php`
2. Click **Register application**, copy the **Client ID**, then **Generate a new client secret** and copy it. GitHub shows it only once; never paste it in a chat or in the repository.
3. Go to https://github.com/jacquesmofa/SANKOFA/settings/secrets/actions → **New repository secret**, twice:
   - `CMS_GITHUB_CLIENT_ID` = the Client ID
   - `CMS_GITHUB_CLIENT_SECRET` = the client secret
4. Actions → **Build and Deploy** → **Run workflow**. About 2 minutes later, "Sign In with GitHub" works at /admin.

**Contact form by email (optional):** create a free access key at https://web3forms.com with cawap2005@gmail.com, then paste it in Site settings → Contact details → **Web3Forms access key**. Until then, the form opens the visitor's own email app with the message ready to send.

## For developers

Content lives in `src/content/*.json`. After adding a content file or field, run `npm run cms:config` and commit the regenerated `.pages.yml` and `public/admin/config.yml` (the deploy fails if they are out of date). Labels live in `scripts/cms-registry.mjs`.
