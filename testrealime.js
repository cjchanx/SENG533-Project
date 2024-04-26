import { createClient } from "@supabase/supabase-js";
import sleep from 'sleep-promise';

let timeStart = new Date().getTime();
const supabase = createClient('http://3.18.223.74:54321', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU');
const tableName = 'test'


let timeTable = {}

for (let i = 0; i < 100; i++) {
    timeTable[i] = 0
}

async function sendDate() {
    for (let i = 0; i < 100; i++) {
            timeTable[i] = new Date().getTime()
            supabase.from(tableName).insert([{ item: i}]).then()
            await sleep(1)
    }
}

const channels = supabase.channel('custom-insert-channel')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'test' },
    (payload) => {
      timeTable[payload.new.item] = new Date().getTime() - timeTable[payload.new.item]
    }
  )
  .subscribe()

await sendDate()

await sleep(10000)

console.log("Total time")

for (let i = 0; i < 100; i++) {
    console.log(timeTable[i])
}


