import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const expected = '86d5a2f2b75ba58ab609a48d242ccbeb896612b4fd3ac190cf4226ed06e47a49';
const parts = await Promise.all(Array.from({length:4}, (_,i) => readFile(new URL('./source-part-'+(i+1)+'.b64', import.meta.url), 'utf8')));
const archive = Buffer.from(parts.join('').replace(/\s/g,''), 'base64');
if (createHash('sha256').update(archive).digest('hex') !== expected) throw new Error('源码快照校验失败，请重新下载完整仓库。');
const target = new URL('./mao-study-source.zip', import.meta.url);
try { await writeFile(target, archive, {flag:'wx'}); } catch(e) {
  if (e.code !== 'EEXIST') throw e;
  const existing = await readFile(target);
  if (createHash('sha256').update(existing).digest('hex') !== expected) throw new Error('同名文件已有不同内容，已保留。请先换一个目录。');
}
console.log('已恢复完整源码包 mao-study-source.zip，SHA-256校验通过。');
console.log('在PowerShell运行 Expand-Archive -LiteralPath mao-study-source.zip -DestinationPath source，然后进入source目录。');
