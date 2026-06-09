[OPEN] Debug Session: home-content-hidden

## Symptom
- The portfolio loads and the navbar appears, but the main home content looks empty.

## Hypotheses
- H1: Home sections are rendered but hidden by the `.reveal` class.
- H2: `IntersectionObserver` starts before lazy-loaded route content exists.
- H3: A layout or z-index layer covers the content after render.
- H4: The route mounts correctly, but reveal observers are never rebound for new DOM nodes.

## Evidence So Far
- Build succeeds.
- Runtime page text includes hero/about content.
- Visual screenshot still shows mostly empty hero area.

## Next Step
- Rebind reveal observation after lazy content appears and verify visible state.
