export type Project = {
  slug: string; title: string; category: string; thumbnail: string;
  mediaType: 'video' | 'image'; mediaUrl?: string; gallery?: string[];
  client?: string; year?: string; role?: string[]; deliverables?: string[];
  summary?: string; brief?: string; approach?: string; results?: string;
  featured: boolean; published: boolean; assetStatus: 'missing' | 'needs-review' | 'ready';
};
const inventory: Array<[string,string]> = [
 ['Rabitat UGC Ads','Ads & Social Content'],['Fogg Ad Spoof','Ads & Social Content'],['Protein Condom','Ads & Social Content'],['Motion Ads','Ads & Social Content'],['Gym Campaign Ad | BeastLife','Ads & Social Content'],['BeastLife','Ads & Social Content'],['BeastLife Melatonin Commercial','Ads & Social Content'],['Go Zero AI Commercial','Ads & Social Content'],['Reels','Ads & Social Content'],['iQuanta Launch Video with Teaser','Ads & Social Content'],['Creatives!','Ads & Social Content'],['Education','Ads & Social Content'],
 ['Ayelo | Campaign Shoot','Commercials & Campaigns'],['Kacoba Cafe','Commercials & Campaigns'],['Frogo (Food)','Commercials & Campaigns'],['Evtric (Motor Vehicle)','Commercials & Campaigns'],['Commercials','Commercials & Campaigns'],['Real Estate','Commercials & Campaigns'],['Samsons Gym','Commercials & Campaigns'],['JAS 2022','Commercials & Campaigns'],['Travel','Commercials & Campaigns'],
 ['Kritika Kataria (Fashion)','Fashion, Beauty & Jewellery'],['Attrangi','Fashion, Beauty & Jewellery'],['Jewellery Photography','Fashion, Beauty & Jewellery'],['Jewellery Commercials','Fashion, Beauty & Jewellery'],['Rochees watches','Fashion, Beauty & Jewellery'],['Refine Beauty','Fashion, Beauty & Jewellery'],['E Commerce Shoot','Fashion, Beauty & Jewellery'],
 ['Rabitat — Performance Creatives & AI Listing Videos','Freelance & Brand Work'],['Attrangi Jewels — Themed Jewellery Shoot','Freelance & Brand Work']
];
const slugify = (s:string) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
export const projects: Project[] = inventory.map(([title,category],i)=>({
 slug: slugify(title), title, category, thumbnail: `/images/projects/${slugify(title)}.webp`, mediaType:'video',
 featured: [0,4,5,6,12,26].includes(i), published:true, assetStatus:'missing',
 summary:'Project entry migrated from the supplied portfolio brief. Original media and project details still need to be matched and approved.',
}));
export const categories = ['All', ...Array.from(new Set(projects.map(p=>p.category)))];
export function getProject(slug:string){return projects.find(p=>p.slug===slug)}
