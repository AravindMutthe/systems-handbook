# FINAL IDENTICAL COMMANDS — both chats

The chats are different in job and capability, but this agreed
list is identical in both chats. Streaming only — no push, pull,
deploy, update, or send happens on its own, only after the
owner's call.

- **push** — into the repo. Sending files from a chat to GitHub. A push alone does not make anything live, and does not auto-sync the other chat.
- **pull** — from the repo. Downloading the latest files from GitHub into that chat's working copy. Development pulls before it works, so it does not overwrite content.
- **deploy** — live prod. Putting the site on Vercel as the live production site. Only development does this, and only on your tap.
- **update** — synchronize with the content chat, up to the time of your knowledge. Bring the other side up to date with what the content chat knew at that moment — not with content that comes later.
- **send** — share this knowledge / updates with content. Telling the content chat what was learned, changed, or decided, so it knows too.
- **sync / synchronize** — making the two sides match at one point in time. Content and development become aligned. This happens only after your call, never automatically.
- **pipeline** — the path a chat uses to GitHub. Content has a push-only pipeline. Development has a push-and-pull pipeline.

Jobs, kept separate:

- Website / development chat: builds the site; can push, pull and deploy.
- Content chat: creates content from original notes in batches of 6; can push only, cannot pull or deploy.
