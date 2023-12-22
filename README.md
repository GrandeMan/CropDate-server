# CropDate-server

Server app for CropDate, an agriculture app that provides updates on crop prices from wholesale markets in Trinidad and Tobago.

![cropdate-server-landing-page](https://github.com/GrandeMan/CropDate-server/assets/114616062/33810ed7-aeb8-444e-9374-334cce1c52c7)

`Live Demo:` [server-demo-link](https://cropdate-server.azurewebsites.net/)
<br/>
<hr/>

## How it works

- Cron job is run every morning, Monday to Friday.
- App checks if the source data is updated or not
- If updated, it fetches the data, parses it, and then updates the database. It also clears the cache
- When the API is called the app caches the data and returns the value

### Cron Job 

![cron-job-log](https://github.com/GrandeMan/CropDate-server/assets/114616062/f724f5b5-cd4f-4c90-a043-df1cbcd22f6d)
<br/>

The source data is only updated on weekdays but sometimes skips days so there's a buffer between the job and the function to fetch the data. It checks if the date from the source data (which only changes when the data updates) and the current date align.

### Database

I used PostgreSQL and Azure to create the database. I'm not familiar with the syntax so to avoid issues I used an ORM (Prisma). There was no particular reason for using these tools over anything else, I just used the most convenient and reliable tech.

# Created Using

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
