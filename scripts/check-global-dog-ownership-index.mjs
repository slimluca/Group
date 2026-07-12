import fs from "node:fs";
const read=p=>fs.readFileSync(p,"utf8"),fail=m=>{throw new Error(m)};
const countries=read("data/global-dog-ownership-index/countries.ts"),sources=read("data/global-dog-ownership-index/sources.ts"),categories=read("data/global-dog-ownership-index/categories.ts"),sitemap=read("app/sitemap.ts");
const slugs=[...countries.matchAll(/slug:"([^"]+)"/g)].map(x=>x[1]),codes=[...countries.matchAll(/code:"([A-Z]{2})"/g)].map(x=>x[1]);
if(slugs.length!==5||new Set(slugs).size!==5)fail("Founding country slugs invalid");if(new Set(codes).size!==5)fail("Country codes invalid");if((categories.match(/weight:12\.5/g)||[]).length!==8)fail("Eight 12.5% categories required");if(/\brank\s*:/.test(countries))fail("Rank field forbidden");if(!sitemap.includes("countriesAlphabetical"))fail("Sitemap missing country routes");
const sourceIds=new Set([...sources.matchAll(/id:"([^"]+)"/g)].map(x=>x[1])),json=JSON.parse(read("public/data/global-dog-ownership-index-v1.json"));
for(const row of json.rows)for(const id of row.sourceIds)if(!sourceIds.has(id))fail(`Unknown source ${id}`);
if(json.rows.length!==40)fail(`Dataset has ${json.rows.length}, expected 40`);if(json.rows.some(r=>r.score<1||r.score>5||!r.summary||!r.sourceIds.length))fail("Invalid dataset row");if(read("public/data/global-dog-ownership-index-v1.csv").trim().split(/\r?\n/).length!==41)fail("CSV mismatch");
console.log("Global Dog Ownership Index validation passed: 5 countries, 8 categories, 40 assessments, resolved sources and matching downloads.");
