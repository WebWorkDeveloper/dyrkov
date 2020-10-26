import Pouch from 'pouchdb';

const local = new Pouch('local');
const db = new Pouch('http://localhost:3000/test');

local.replicate
    .to(db)
    .on('complete', console.log)
    .on('error', console.log)
