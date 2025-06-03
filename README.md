# 🐦 Tweet2Post – Viral Tweet Monitoring & Auto-Poster

Tweet2Post is an intelligent automation tool that monitors Twitter/X for viral or high-impact tweets, filters them using custom logic, and performs the following actions:
- Sends an email alert for qualifying tweets
- Prepares the tweet content for social media posting (e.g., for Canva or Instagram)

---

## 🚀 Features

- ✅ Real-time Twitter stream using Twitter API v2
- 🔥 Filters tweets by engagement metrics & viral keywords
- 📩 Sends email notifications when a tweet matches the criteria
- 🖼️ Prepares content for automated Canva uploads (future scope)
- 🧠 Designed for marketers, content curators, or media agencies

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **API:** Twitter API v2 (via `twitter-api-v2`)
- **Emailing:** Nodemailer
- **Scheduling:** `node-cron` (optional for polling mode)
- **Environment Management:** `dotenv`

---

## 🧪 Use Cases

- Curate viral news and content in real time
- Auto-generate viral content calendars for marketing
- Alert editorial teams to breaking or high-impact tweets
- Integrate with Canva/Instagram for automatic meme/post generation

---

## 🧰 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/tweet2post.git
cd tweet2post
