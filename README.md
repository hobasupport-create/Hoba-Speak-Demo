# HoBASpeak Demo

HoBASpeak converts an existing app into a real, modern codebase — automatically.

## What HoBASpeak does

You drop in a real project — legacy or current — pick a target language/framework, and HoBASpeak reads the actual source and produces a converted, ready-to-open project: real translated logic, not a renamed folder or a boilerplate stub. Every conversion ships with a report so you know exactly what was translated and what still needs a human look before you ship it.

## The demo

📺 [Watch it](https://x.com/HoBAMel/status/2094986417369960643?s=20)

The video shows a small, deliberately messy legacy Node.js file — `var`-everywhere, callback-based, circa-2011 style — dropped into HoBASpeak. It's auto-detected as Node.js/TypeScript from its `package.json`, converted live to modern TypeScript, and finishes at a real "Conversion Complete" screen. No edits, no cuts — that's the actual product.

(The sample has one source file and one `package.json`; the report correctly shows 1 file converted, 1 skipped — `package.json` is config, not code, so it's left alone rather than force-converted.)

## Try the sample yourself

`legacy-sample/` is the exact file used in the demo above. Zip that folder and drop it into HoBASpeak to see the same conversion for yourself.

## Try HoBASpeak

The public demo is now closed. For Access Contact Hobasupport@gmail.com 

---

**What this repo is, and isn't:**

- Everything in `legacy-sample/` is a fictional, hand-written example built for this demo — not real client code, not real HoBASpeak product code, not a real business.
- This repo contains no HoBASpeak product source, no shared code, no configuration, and no internals of any kind — it's a standalone example project with no connection to how the real, paid HoBASpeak system works.
- This repo is a public-facing companion piece, not infrastructure. Nothing about using HoBASpeak depends on this repo staying online.
