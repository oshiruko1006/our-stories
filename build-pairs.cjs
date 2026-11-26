const fs = require('node:fs');
const path = require('node:path');
const dir = path.join(__dirname,'content','pairs');
const stories = fs.readdirSync(dir).filter(f=>f.endsWith('.json')).sort().map(f=>JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')));
const ids = new Set();
for(const s of stories){if(!s.id || ids.has(s.id))throw new Error('Missing or duplicate pair ID');ids.add(s.id);}
fs.writeFileSync(path.join(__dirname,'content','stories.json'),JSON.stringify({stories},null,2)+'\n');
console.log('Built '+stories.length+' pair entries');
