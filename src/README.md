# Src

## Purpose

Contains the production implementation of Resistor Vision: command handling, domain rules, storage, reports, and local serving as applicable.

## Contents

- `cli.mjs` — Implements Resistor Vision's command-line interface and coordinates validation, persistence, report generation, and local serving.
- `model.mjs` — Defines Resistor Vision's domain model, validation rules, calculations, and aggregation helpers.
- `render.mjs` — Generates and serves Resistor Vision's demonstration report through a deployment-friendly HTTP host.
- `report.mjs` — Builds Resistor Vision's self-contained report artifacts and browser-side interactions from validated data.

## Responsibilities

Production behavior belongs here. Generated reports, user data, and repository documentation should remain outside this folder.

## Important Notes

- This folder is part of **Resistor Vision** and should be kept consistent with the commands and architecture documented in the root README.
- Paths and file roles listed above reflect the current repository implementation.

