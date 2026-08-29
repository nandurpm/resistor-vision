/*
 * ============================================================
 * FILE: resistor.test.mjs
 * PURPOSE: Exercises Resistor Vision's domain behavior, validation, persistence, reporting, and safety boundaries with the Node.js test runner.
 * ============================================================
 */

import assert from "node:assert/strict";import test from "node:test";import { COLORS,calculate,formatOhms,nearestE12,reverseLookup } from "../src/model.mjs";import { reportHtml } from "../src/report.mjs";
test("provides standard color table values",()=>{assert.equal(COLORS.red.digit,2);assert.equal(COLORS.gold.multiplier,-1);assert.equal(COLORS.brown.tolerance,1);assert.equal(COLORS.violet.temp,5)});
test("calculates four-band resistance and tolerance",()=>{const result=calculate(['yellow','violet','red','gold']);assert.equal(result.value,4700);assert.equal(result.tolerance,5);assert.equal(result.low,4465);assert.equal(result.high,4935)});
test("calculates five and six band codes including temperature coefficient",()=>{assert.equal(calculate(['brown','black','black','red','brown']).value,10000);assert.equal(calculate(['brown','black','black','red','brown','red']).temp,50)});
test("maps exact values back to supported colors",()=>{assert.deepEqual(reverseLookup(4700,4).bands,['yellow','violet','red','gold']);assert.deepEqual(reverseLookup(10000,5).bands,['brown','black','black','red','gold'])});
test("rejects invalid combinations and rounds readable values",()=>{assert.throws(()=>calculate(['black','brown','red','gold']),/first significant/);assert.throws(()=>calculate(['brown','black','red','orange']),/Tolerance/);assert.equal(formatOhms(4700),'4.7 kΩ');assert.equal(nearestE12(5000).value,4700)});
test("report includes manual bands, visual preview, reverse lookup, and uncertainty note",()=>{const html=reportHtml();assert.match(html,/Manual band selection/);assert.match(html,/class="resistor"/);assert.match(html,/Reverse lookup/);assert.match(html,/does not claim certainty from unclear images/)});
