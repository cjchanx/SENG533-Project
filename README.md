# Supabase Performance Testing

The goal of this project is to test the performance of Supabase both in regular requests and for the Realtime interface using Websockets.

Tests for regular PostgreSQL queries were performed using PostgREST style API calls using _K6_.
Tests for the realtime API were done using a custom timing script in Node.js.

# Setup Instructions
1. Setup an AWS instance with EC2 T2 Small
2. Install K6
3. Install Supabase

# Data Examples
## POST Request
![image](https://github.com/cjchanx/SENG533-Project/assets/78698227/81ee5529-655e-462d-89be-0a596b3769c2)

## Realtime API Requests
![image](https://github.com/cjchanx/SENG533-Project/assets/78698227/e94f63eb-baec-487c-86be-4313f9d46024)




