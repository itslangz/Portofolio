import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.duingzforge.site/kit/portfolio';

const files = [
  // data
  { url: `${BASE_URL}/Asset/data/projects.json`, dest: 'src/data/projects.json' },
  { url: `${BASE_URL}/Asset/data/brands.json`, dest: 'src/data/brands.json' },
  // assets
  { url: `${BASE_URL}/Asset/cv/Renando_Editor_VFX.pdf.pdf`, dest: 'Asset/cv/Renando_Editor_VFX.pdf.pdf' },
  { url: `${BASE_URL}/Asset/img/SERTIFIKAT/dalang.jpg`, dest: 'Asset/img/SERTIFIKAT/dalang.jpg' },
  { url: `${BASE_URL}/Asset/img/SERTIFIKAT/juara2.jpg`, dest: 'Asset/img/SERTIFIKAT/juara2.jpg' },
  { url: `${BASE_URL}/Asset/img/SERTIFIKAT/mindplace2.jpg`, dest: 'Asset/img/SERTIFIKAT/mindplace2.jpg' },
  { url: `${BASE_URL}/Asset/img/SERTIFIKAT/peringkat2.jpg`, dest: 'Asset/img/SERTIFIKAT/peringkat2.jpg' },
  { url: `${BASE_URL}/Asset/img/SERTIFIKAT/shortmovie.jpeg`, dest: 'Asset/img/SERTIFIKAT/shortmovie.jpeg' },
  { url: `${BASE_URL}/Asset/img/SERTIFIKAT/videolabs.jpg`, dest: 'Asset/img/SERTIFIKAT/videolabs.jpg' },
  { url: `${BASE_URL}/Asset/img/favicon.svg`, dest: 'Asset/img/favicon.svg' },
  { url: `${BASE_URL}/Asset/img/gwe.jpeg`, dest: 'Asset/img/gwe.jpeg' },
  { url: `${BASE_URL}/Asset/img/renando-portrait.png`, dest: 'Asset/img/renando-portrait.png' },
  { url: `${BASE_URL}/Asset/svg/CUI.svg`, dest: 'Asset/svg/CUI.svg' },
  { url: `${BASE_URL}/Asset/svg/EBS.svg`, dest: 'Asset/svg/EBS.svg' },
  { url: `${BASE_URL}/Asset/svg/EG.svg`, dest: 'Asset/svg/EG.svg' },
  { url: `${BASE_URL}/Asset/svg/PF.svg`, dest: 'Asset/svg/PF.svg' },
  { url: `${BASE_URL}/Asset/svg/SB.svg`, dest: 'Asset/svg/SB.svg' },
  { url: `${BASE_URL}/Asset/svg/SD.svg`, dest: 'Asset/svg/SD.svg' },
  { url: `${BASE_URL}/Asset/svg/UE.svg`, dest: 'Asset/svg/UE.svg' },
  { url: `${BASE_URL}/Asset/svg/ae.svg`, dest: 'Asset/svg/ae.svg' },
  { url: `${BASE_URL}/Asset/svg/ai.svg`, dest: 'Asset/svg/ai.svg' },
  { url: `${BASE_URL}/Asset/svg/am.svg`, dest: 'Asset/svg/am.svg' },
  { url: `${BASE_URL}/Asset/svg/bl.svg`, dest: 'Asset/svg/bl.svg' },
  { url: `${BASE_URL}/Asset/svg/brand/Extrajoss.png`, dest: 'Asset/svg/brand/Extrajoss.png' },
  { url: `${BASE_URL}/Asset/svg/brand/Netflix.svg`, dest: 'Asset/svg/brand/Netflix.svg' },
  { url: `${BASE_URL}/Asset/svg/brand/SevenDragon.png`, dest: 'Asset/svg/brand/SevenDragon.png' },
  { url: `${BASE_URL}/Asset/svg/brand/Whatsin.png`, dest: 'Asset/svg/brand/Whatsin.png' },
  { url: `${BASE_URL}/Asset/svg/brand/diskominfo.png`, dest: 'Asset/svg/brand/diskominfo.png' },
  { url: `${BASE_URL}/Asset/svg/brand/dpmptsp.png`, dest: 'Asset/svg/brand/dpmptsp.png' },
  { url: `${BASE_URL}/Asset/svg/brand/hara.png`, dest: 'Asset/svg/brand/hara.png' },
  { url: `${BASE_URL}/Asset/svg/brand/jeta.png`, dest: 'Asset/svg/brand/jeta.png' },
  { url: `${BASE_URL}/Asset/svg/brand/logogatsu.png`, dest: 'Asset/svg/brand/logogatsu.png' },
  { url: `${BASE_URL}/Asset/svg/brand/magma.png`, dest: 'Asset/svg/brand/magma.png' },
  { url: `${BASE_URL}/Asset/svg/brand/mbc.png`, dest: 'Asset/svg/brand/mbc.png' },
  { url: `${BASE_URL}/Asset/svg/brand/pemda.png`, dest: 'Asset/svg/brand/pemda.png' },
  { url: `${BASE_URL}/Asset/svg/brand/raincreation.png`, dest: 'Asset/svg/brand/raincreation.png' },
  { url: `${BASE_URL}/Asset/svg/brand/seven.png`, dest: 'Asset/svg/brand/seven.png' },
  { url: `${BASE_URL}/Asset/svg/brand/sma1seragen.png`, dest: 'Asset/svg/brand/sma1seragen.png' },
  { url: `${BASE_URL}/Asset/svg/brand/sma2indramayu.png`, dest: 'Asset/svg/brand/sma2indramayu.png' },
  { url: `${BASE_URL}/Asset/svg/brand/unwir.png`, dest: 'Asset/svg/brand/unwir.png' },
  { url: `${BASE_URL}/Asset/svg/brand/vianos.png`, dest: 'Asset/svg/brand/vianos.png' },
  { url: `${BASE_URL}/Asset/svg/cc.svg`, dest: 'Asset/svg/cc.svg' },
  { url: `${BASE_URL}/Asset/svg/cv.svg`, dest: 'Asset/svg/cv.svg' },
  { url: `${BASE_URL}/Asset/svg/cx.svg`, dest: 'Asset/svg/cx.svg' },
  { url: `${BASE_URL}/Asset/svg/ibis.svg`, dest: 'Asset/svg/ibis.svg' },
  { url: `${BASE_URL}/Asset/svg/is.svg`, dest: 'Asset/svg/is.svg' },
  { url: `${BASE_URL}/Asset/svg/km.svg`, dest: 'Asset/svg/km.svg' },
  { url: `${BASE_URL}/Asset/svg/lr.svg`, dest: 'Asset/svg/lr.svg' },
  { url: `${BASE_URL}/Asset/svg/lrc.svg`, dest: 'Asset/svg/lrc.svg' },
  { url: `${BASE_URL}/Asset/svg/pa.svg`, dest: 'Asset/svg/pa.svg' },
  { url: `${BASE_URL}/Asset/svg/pl.svg`, dest: 'Asset/svg/pl.svg' },
  { url: `${BASE_URL}/Asset/svg/pr.svg`, dest: 'Asset/svg/pr.svg' },
  { url: `${BASE_URL}/Asset/svg/ps.svg`, dest: 'Asset/svg/ps.svg' },
  { url: `${BASE_URL}/Asset/svg/vn.svg`, dest: 'Asset/svg/vn.svg' },
  { url: `${BASE_URL}/Asset/svg/vs.svg`, dest: 'Asset/svg/vs.svg' },
  { url: `${BASE_URL}/Asset/svg/vsco.svg`, dest: 'Asset/svg/vsco.svg' },
];

async function downloadAll() {
  console.log(`Starting download of ${files.length} files...`);
  let successCount = 0;
  let failCount = 0;

  for (const item of files) {
    const destPath = path.resolve(item.dest);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    try {
      const res = await fetch(item.url);
      if (!res.ok) {
        console.error(`FAILED (${res.status}): ${item.url}`);
        failCount++;
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(destPath, Buffer.from(buffer));
      console.log(`OK: ${item.dest} (${buffer.byteLength} bytes)`);
      successCount++;
    } catch (err) {
      console.error(`ERROR fetching ${item.url}:`, err.message);
      failCount++;
    }
  }

  console.log(`\nDownload summary: ${successCount} succeeded, ${failCount} failed.`);
  if (failCount > 0) process.exit(1);
}

downloadAll();

