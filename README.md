# Resistor Vision

**Resistor Vision** is a portable, beginner-friendly resistor color-code calculator. It supports manual 4-, 5-, and 6-band selection, visual previews, resistance/tolerance/temperature-coefficient calculations, exact reverse lookup, and nearest E12 preferred-value guidance.

> **Educational boundary:** Always inspect the physical part, its markings, and its datasheet before use. This local app intentionally has no image-recognition feature, so it does **not** infer band colors or claim certainty from an unclear photo.

| Feature | Local behavior |
|---|---|
| Manual bands | Selects digit, multiplier, tolerance, and (for 6 bands) temperature-coefficient colors. |
| Calculation | Explains significant digits, multiplier, resistance, and tolerance range step by step. |
| Reverse lookup | Finds exact supported 4-, 5-, or 6-band representations for a positive resistance value. |
| Standard-value guide | Identifies the closest E12 value as a learning aid, not a design recommendation. |
| Visual preview | Renders selected bands on an educational resistor illustration. |

## Local Linux and Windows use

Install **Node.js 22+** and pnpm. This is a portable local application, not a hosted service or native installer, and has no public website URL.

| Task | Linux / macOS shell | Windows PowerShell or Command Prompt |
|---|---|---|
| Generate the calculator report | `./run-local.sh demo --out reports/demo` | `run-local.cmd demo --out reports\demo` |
| Calculate 4.7 kΩ ±5% | `./run-local.sh calculate yellow violet red gold` | `run-local.cmd calculate yellow violet red gold` |
| Reverse lookup 4.7 kΩ | `./run-local.sh reverse --value 4700 --bands 4` | `run-local.cmd reverse --value 4700 --bands 4` |
| Serve local calculator on chosen port | `./run-local.sh serve reports/demo --port=4059` | `run-local.cmd serve reports\demo --port=4059` |

The report server binds only to `127.0.0.1`; open the printed URL on the same computer.

## Validation

```bash
pnpm install
pnpm test
pnpm check
pnpm demo
```

Tests cover color tables, 4/5/6-band calculations, tolerance, temperature coefficient, reverse mapping, invalid combinations, and rounding.

## License

MIT.

## Live Render Demo

A responsive, synthetic/demo report is available at [https://resistor-vision-artu.onrender.com](https://resistor-vision-artu.onrender.com). The hosted view is read-only and preserves the repository's documented local-first boundaries.

<!-- render-live-url:https://resistor-vision-artu.onrender.com -->
