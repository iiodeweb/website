Exploded sketch asset guide
===========================

Drop all exploded-view SVG assets in this folder.

Required:
- manifest.json
- stroke-only SVG files (one file per component)

Optional (recommended for overlap control):
- matte SVG files (solid shape, same viewBox as stroke)

Manifest part schema:
{
  "id": "lens",
  "stroke": "/assets/Re27/exploded/lens-stroke.svg",
  "matte": "/assets/Re27/exploded/lens-matte.svg",
  "z": 10,
  "from": { "x": 0, "y": 0, "rotate": 0, "scale": 1, "opacity": 1 },
  "to": { "x": 0, "y": -220, "rotate": 0, "scale": 1, "opacity": 1 },
  "move": { "start": 0.1, "end": 0.7 },
  "visible": { "start": 0.05, "end": 0.85, "feather": 0.06 }
}

Notes:
- from = assembled state, to = exploded state.
- x/y are pixel offsets from center of canvas.
- move.start/move.end define when a part starts and ends movement (0 to 1 scroll progress).
- visible.start/visible.end define when a part exists in the sequence (for appear/disappear).
- matte helps hide lines behind front components while staying lightweight.
