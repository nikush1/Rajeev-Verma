'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
const links=[['Work','/work'],['Case Studies','/case-studies'],['Services','/services'],['About','/about']];
export default function Header(){const [open,setOpen]=useState(false);return <header className="site-header"><Link className="wordmark" href="/" aria-label="Rajeev Verma home">RV<span>®</span></Link><nav className={`nav-links ${open?'nav-open':''}`} aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-contact" href="/contact" onClick={()=>setOpen(false)}>Let’s talk <ArrowUpRight size={15}/></Link></nav><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>}
