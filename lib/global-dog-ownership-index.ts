import { indexCountries } from "@/data/global-dog-ownership-index/countries";
import { indexSources } from "@/data/global-dog-ownership-index/sources";
import { IndexCountry } from "@/data/global-dog-ownership-index/types";
export const INDEX_BASE="/world-atlas/global-dog-ownership-index";
export const INDEX_VERSION="1.0";
export const INDEX_NOTICE="The Global Dog Ownership Index combines source-backed evidence with transparent Dog Haven Group editorial assessment. National profiles cannot represent every city, region, landlord, transport operator, climate zone or individual dog owner.";
export function overall(country:IndexCountry){if(country.assessments.length!==8||country.assessments.some(a=>a.score===null||!a.rationale||!a.sourceIds.length))return null;return Number((country.assessments.reduce((n,a)=>n+(a.score??0),0)/8).toFixed(1));}
export function band(score:number){return score<=1.7?"Substantial barriers":score<=2.5?"Notable constraints":score<=3.4?"Mixed conditions":score<=4.2?"Generally supportive":"Broadly supportive";}
export function countryBySlug(slug:string){return indexCountries.find(c=>c.slug===slug);}
export function sourcesFor(country:IndexCountry){const ids=new Set(country.assessments.flatMap(a=>a.sourceIds));return indexSources.filter(s=>ids.has(s.id));}
