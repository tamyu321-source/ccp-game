# Archive Fog / 檔案迷霧

A standalone multilingual political-satire text puzzle game.

## Run

Open `index.html` in a browser. No build step or server is required.

## Content

- Traditional Chinese, Simplified Chinese, and English UI.
- 357 level entries covering mostly CCP history, censorship, Hu-era and Xi-era slogans, current internet memes, dark-humor political slang, and social black humor, with Soviet, North Korea, Taiwan, KMT-CCP era, WWII China, Hong Kong, current-affairs, and US political sets.
- Core play is a Yang-le-Ge-Yang-style layered triple-match board. Text tiles sit in stacked 3D layers; only uncovered tiles can be picked into a seven-slot tray, and three matching tiles clear automatically.
- The player does not guess by typing. Archive-term characters or letters are key triple groups hidden among clue-based decoy groups; clearing key groups reveals the answer step by step.
- Early levels use direct historical terms. Later levels add metaphors, puns, more stacked layers, denser decoy groups, and fewer hints.
- The timer is derived from the number of tile groups, so harder boards get more total time instead of a fixed short limit.
- Cards use an expanded local Wikimedia Commons event/person image set when available, plus 40 locally modeled architecture/political-scene cards for halls, gates, courts, memorials, walls, towers, skylines, checkpoints, and data-center motifs. Solved or failed answer reveals always include the term's context summary.
- Every triple-match card group now gets its own deterministic background variant. Answer tiles, photo tiles, and plain decoy tiles all receive unique archive textures, stamps, crop offsets, and blueprint-like overlays while matching triples keep the same look for readability.
- Photo-backed cards use per-card focal cropping, zoom, darkening, and stronger 3D edges so repeated source images read less monotonously on the board.
- Route modes: timeline order or base-difficulty order. Challenge pressure is seeded-random in both routes.
- Leader modes: General Archive, Diao Mai Hu/Xi, Cured Meat/Mao, Crusher/Deng, and Elder/Jiang. Each mode filters the word bank and changes tray pressure or scoring, while global Hu Jintao and current cross-strait meme entries can still appear in any leader mode.
- Progress is saved separately for each route and leader-mode combination. A local score leaderboard records high-score clears across modes.
- Successful decodes show structured context. Historical entries use cause/course/result; slang and meme entries use origin/spread/meaning.

## Audio

Music and effects are generated with the Web Audio API. The game includes five original selectable ceremonial tracks: flag march, gospel choir, procession, memorial bells, and recessional. Each now uses an independent 384-step melody cycle with distinct chord and bass progressions, hymn-like movement, soft choir layers, bells, low drums, and less electronic lead tones. They are written to evoke a solemn civic anthem mood without copying or sampling existing anthem melodies.
