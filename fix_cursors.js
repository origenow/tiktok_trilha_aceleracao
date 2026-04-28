const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('c:/Users/Pedro Borela/Desktop/projetos_dev/tiktok/app/src/components');
files.push('c:/Users/Pedro Borela/Desktop/projetos_dev/tiktok/app/src/app/page.tsx');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    // Split into lines
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Check if line has <button or onClick
        if (line.includes('<button') || line.includes('onClick')) {
            // Also need to check if it has className
            if (line.includes('className="') && !line.includes('cursor-pointer')) {
                lines[i] = line.replace(/className="/, 'className="cursor-pointer ');
                changed = true;
            } else if (line.includes('className={') && !line.includes('cursor-pointer')) {
                lines[i] = line.replace(/className=\{/, 'className={`cursor-pointer ` + ');
                changed = true;
            } else if (line.includes('<button') && !line.includes('className=')) {
                // If button doesn't have className
                lines[i] = line.replace(/<button/, '<button className="cursor-pointer"');
                changed = true;
            }
        }
    }
    
    if (changed) {
        fs.writeFileSync(file, lines.join('\n'));
        console.log('Updated', file);
    }
});
