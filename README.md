# Papazzio

Papazzio restaurant website built with Next.js, React, TypeScript, and Tailwind CSS.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Daniel's performer editor

The dedicated editor lives at `/admin/performers`. Daniel can add, remove, and edit
performer names, descriptions, and dates, then publish the lineup to
`/specials/live-music/performers`. It only edits `src/content/performers.json`.
No GitHub account or repository access is needed for Daniel.

The editor is disabled until these server-side environment variables are set in
the hosting project's production environment (and `.env.local` for local work):

- `PERFORMERS_ADMIN_PASSWORD`: a randomly generated password of at least 20
  characters. Share it privately with Daniel, never in the repository.
- `PERFORMERS_SESSION_SECRET`: a separate random secret of at least 32 characters.
- `PERFORMERS_GITHUB_TOKEN`: a GitHub fine-grained token restricted to
  `Volta-NYC/papazzio`, with Contents read/write permission. The organization may
  require approval. Keep this token with the website manager; Daniel only needs
  the editor password. This credential has repository-level Contents permission;
  the server restricts editor requests to the single schedule file.
- `PERFORMERS_GITHUB_BRANCH`: `main` for production. Use a disposable test branch
  for local publishing tests. The selected branch must contain the schedule file
  and permit updates by the token's owner; branch protection is not bypassed.

Generate each password/secret independently with
`node -e 'console.log(require("node:crypto").randomBytes(32).toString("base64url"))'`.
Add the values through hosting's environment-variable settings, then redeploy.
Give Daniel the site's `/admin/performers` URL and the editor password. Do not
send him the GitHub token or session secret. Preview environments must use a
separate test branch or leave the editor variables unset.

Publishing creates a GitHub commit, prevents overwriting a concurrently edited
schedule, and refreshes the public page. Reads are cached for up to a minute.
Rotating the password or session secret and redeploying invalidates existing
eight-hour sessions. If GitHub is unavailable, the public page uses the schedule
bundled in the current deployment. Keep the production deployment connected to
the selected branch so each schedule commit also updates this fallback.

Authentication and schedule validation checks (Node.js 22.6 or newer):

```bash
node --experimental-strip-types --test tests/performers.test.mjs
```
