import { IndexCategory } from "./types";
export const indexCategories: IndexCategory[] = [
 {id:"housing",name:"Housing and Rental Practicality",shortName:"Housing",weight:12.5,rubric:["Legal and policy environment","Landlord permission and pet-permitting evidence","Housing pressure, apartment practicality and local variation"]},
 {id:"public-spaces",name:"Public Spaces and Everyday Access",shortName:"Public spaces",weight:12.5,rubric:["Parks, beaches and walking access","Leash, control and designated-area rules","National evidence and local-authority variation"]},
 {id:"transport",name:"Dog-Friendly Transport",shortName:"Transport",weight:12.5,rubric:["Rail, urban transport and ferries","Size, carrier and operator restrictions","Assistance-dog distinction"]},
 {id:"veterinary",name:"Veterinary Support and Access",shortName:"Veterinary",weight:12.5,rubric:["Professional regulation and service capacity","Geographic access and referral context","Urban and rural differences; counts do not prove quality"]},
 {id:"climate",name:"Climate and Environmental Management",shortName:"Climate",weight:12.5,rubric:["Heat, cold and humidity","Wildfire, flooding and severe weather","Regional and seasonal management burden"]},
 {id:"cost",name:"Dog Ownership Cost Pressure",shortName:"Cost",weight:12.5,rubric:["Veterinary, food and routine-service evidence","Housing and purchasing-power context","Local-currency evidence; no raw-conversion annual total"]},
 {id:"travel",name:"International Dog Travel Complexity",shortName:"Travel",weight:12.5,rubric:["Official inbound process and documentation","Permits, tests, treatments, waiting and quarantine","Route restrictions and source clarity"]},
 {id:"everyday",name:"Everyday Dog Ownership Practicality",shortName:"Everyday",weight:12.5,rubric:["Walking, services and ownership infrastructure","Accommodation and domestic travel","Urban, rural, cultural and regulatory context"]}
];
export const scoreLabels={1:"Substantial barriers",2:"Notable constraints",3:"Mixed conditions",4:"Generally supportive",5:"Broadly supportive"} as const;
