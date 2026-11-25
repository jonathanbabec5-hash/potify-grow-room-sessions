import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
const html=readFileSync('public/index.html','utf8');
test('check the published edition and its primary assets',()=>{
assert.ok(html.includes('audio/the-soil-remembers-grow-room.mp3'));
assert.ok(readFileSync('public/audio/the-soil-remembers-grow-room.mp3').length>100000);

});
