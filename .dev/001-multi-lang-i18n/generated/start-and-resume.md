# Start and Resume Guide — 001-multi-lang-i18n
**Current Round:** 1

## Quick Start
1. Read `.dev/blueprint.md` — project-wide status
2. Read `init.md` — this requirement's scope
3. Read `rounds/round-001/plan.md` — technical approach
4. Read `rounds/round-001/tasks.md` — find the next `not-started` task

## Key Documents
- Requirement: `.dev/001-multi-lang-i18n/init.md`
- Issues: `.dev/001-multi-lang-i18n/issues.md`
- Current plan: `.dev/001-multi-lang-i18n/generated/rounds/round-001/plan.md`
- Current tasks: `.dev/001-multi-lang-i18n/generated/rounds/round-001/tasks.md`

## Resuming After Interruption
1. Read `.dev/blueprint.md`
2. Check `issues.md` for open issues
3. Read `tasks.md` for current round
4. Find first task not in `done`

## Execution Mode
Standard sequential execution loop. All 11 tasks are tightly coupled (HTML + JS + config), no parallelization benefit.

## Constitution
See `init.md § Constitution`:
- `i18n.js` single responsibility
- New language = new JSON file only
- Translation key missing → fallback to HTML original
- `kebab-case` filenames, `camelCase` JS variables, dot-path JSON keys

## Git Workflow
Branch: `feat/001-multi-lang-i18n`

Commit format:
```
[001] T-XXX <type>: <imperative summary ≤ 72 chars>
```
Types: `feat` · `fix` · `ui` · `config` · `test` · `docs` · `chore`

## Round History
**Current Round:** 1

### Round 1 (in-progress)
- **Status:** ▶ in-progress
- **Location:** `generated/rounds/round-001/`
- **Tasks:** 11 planned, 0 completed
- **Summary:** First implementation round — i18n infrastructure, HTML data-i18n marking, ICP support.
