import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
vus: 10,
duration: '5s',
};


export default function () {

    const supabaseUrl = 'http://127.0.0.1:54321';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU'
    const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

    const endpoint =  'http://127.0.0.1:54321/rest/v1/test'

    const headers = {
        'apikey': apiKey,
	'Authorization': `Admin ${anonKey}`,
	'Content-Type': 'application/json'
	};

	const data = {item: 1};

	const response = http.post(endpoint, JSON.stringify(data), {headers:  headers});

    // Sleep for a short duration (e.g., 1 second) between requests
    sleep(1);
}

