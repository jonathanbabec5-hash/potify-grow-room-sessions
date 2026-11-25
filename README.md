# Grow Room Sessions

[Complete repository directory tree](docs/DIRECTORY.md)

**Audio edition and listening page.** Give the Grow Room Version of The Soil Remembers a canonical listening copy.

### Setup and usage

Use Node.js 24 for the included checks. Use Python 3 for the local static preview.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory public
```

Play the Grow Room Version. Open http://127.0.0.1:8000/ in a browser. 

### Developer entry points

A standalone player references the recording extracted from the First Cycle edition. The source hash distinguishes this track from old intro revisions. Explore `public/`, `tests/` in the full tree.

### Verification

The public entry page returned HTTP 200 and rendered local content in Chromium at a 390 × 844 viewport.

```sh
node --test tests/project.test.mjs
```

### Release scope

A radio, streaming or sync license requires specific rights and terms. Listening is free in this edition. potify-first-cycle at `7bc29685d6decd1f3d1bbbb0216f837bc7701a51`. Exact Grow Room Version MP3 linked by the public edition. The standalone player was created for this release.

[Technical whitepaper](docs/WHITEPAPER.md) · [Marketing and sales plan](docs/MARKETING.md) · [Dated developer log](docs/BUILD-LOG.md)

Existing asset and code terms remain applicable. Public access to a recording, illustration, brand or manuscript does not itself grant commercial reuse rights.
