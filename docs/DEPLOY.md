# Deploying sankofaroyaleaward.ca

```
You (or Claude, or an editor) save a change
        │
        ▼
GitHub "main" branch ──► GitHub Actions: npm ci → npm run build
                                  │ build fails → nothing uploaded, live site untouched
                                  ▼
                         FTPS upload to HostGator (only changed files)
                                  │
                                  ▼
                 preview:    https://sankofaroyaleaward.ca/preview/  (hidden from Google)
                 production: https://sankofaroyaleaward.ca/
                                  │
                                  ▼
                 Automatic check: page opened, new version confirmed
```

Status (10 Nov 2026): the **live site is still the old WordPress/Elementor site**. This repo is the new
React site. Until you switch to production (step 4), every change goes to `/preview/` only, and the
WordPress site keeps running.

## Server facts (from cPanel)
| | |
|---|---|
| Server (FTP host) | `gator3095.hostgator.com` |
| cPanel user | `irineashu` |
| Site folder | `/home3/irineashu/sankofaroyaleaward.ca` |
| Shared IP | `198.57.243.38` |

## Step 1 — Make an FTP account just for this site (2 min)
1. cPanel → **Files → FTP Accounts**.
2. Log in: `sankofa-deploy`. Domain: `gospellanemedia.com` (the main domain; that's fine).
3. Password: click **Password Generator**, copy it somewhere safe.
4. **Directory**: change it to exactly `sankofaroyaleaward.ca` (delete anything cPanel added after it).
5. Quota: Unlimited → **Create FTP Account**.
6. The full username is shown in the list: `sankofa-deploy@gospellanemedia.com`.

Why a separate account: it can only see this one site's folder, so a deploy can never touch another client's site.

## Step 2 — Give GitHub the 3 secrets (2 min)
github.com/jacquesmofa/SANKOFA → **Settings → Secrets and variables → Actions → New repository secret**:

| Name | Value |
|---|---|
| `FTP_SERVER` | `gator3095.hostgator.com` (no `ftp://`, no folder) |
| `FTP_USERNAME` | `sankofa-deploy@gospellanemedia.com` |
| `FTP_PASSWORD` | the password from step 1 |

## Step 3 — First deploy (preview)
Repo → **Actions → "Build and Deploy" → Run workflow → Run workflow**.
After about 1 minute: open https://sankofaroyaleaward.ca/preview/ — that's the new site, safe to share for review.
From now on every push to `main` updates the preview automatically.

If the upload step fails on the encrypted connection: **Settings → Secrets and variables → Actions → Variables tab →
New variable** `FTP_PROTOCOL` = `ftp`, then run again.

## Step 4 — Go live (one time, when the new site is approved)
1. cPanel → **Files → Backup** → download a **Home Directory** backup and the WordPress database
   (Databases section of the same page). Keep them: this is your way back.
2. Repo → **Settings → Secrets and variables → Actions → Variables tab → New variable**:
   `DEPLOY_TARGET` = `production`.
3. **Actions → Build and Deploy → Run workflow**.
4. The new site replaces WordPress at https://sankofaroyaleaward.ca. Our `.htaccess` takes over routing, so
   WordPress stops being served. Its files are still in the folder: after a week with no problems, delete
   `wp-admin`, `wp-includes`, `wp-content` and `wp-*.php` in File Manager (they're old software
   that hackers scan for).

Undo: set `DEPLOY_TARGET` back to `preview` and restore the backup from step 4.1 (cPanel → Backup → Restore).

## Day to day
- **Change something**: push to `main` (Claude does this after `npm run build` passes). The Actions tab shows
  a green tick when the change is live, with the link in the run summary.
- **Redeploy without changes**: Actions → Run workflow (you can pick preview or production).
- **Pull requests**: built as a check, never uploaded.
