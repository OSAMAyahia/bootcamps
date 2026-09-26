@echo off
cd /d "%~dp0"
start "" http://localhost:3000/bootcamps/cybersecurity
node server.js 3000
