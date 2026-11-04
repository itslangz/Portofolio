import fs from 'fs';

const required = [
  'index.html',
  'Asset/dist/app.js',
  'Asset/dist/app.css',
  'src/data/projects.json',
  'src/data/brands.json',
  'Asset/img/gueh.png',
  'Asset/img/gamestore-preview.png',
  'Asset/img/mutiarailmu-preview.png',
  'Asset/img/bolata-preview.png',
  'Asset/img/pagulung-preview.png',
  'Asset/cv/Gilang_Ryan_Eka_Putra_CV.pdf'
];

let allOk = true;
for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error(`Missing: ${file}`);
    allOk = false;
  } else {
    const stat = fs.statSync(file);
    if (stat.size === 0) {
      console.error(`Empty file: ${file}`);
      allOk = false;
    }
  }
}

if (allOk) {
  console.log('All verification checks passed for Gilang portfolio!');
  process.exit(0);
} else {
  process.exit(1);
}
