/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  evn:{
    MONGODB_URL: "mongodb+srv://x-note:qa5mnZTa4AYDk0IO@cluster0.lquq3n1.mongodb.net/?retryWrites=true&w=majority",
    JWT_SECRET: "snh2jd92kjsmas",
    S3_Bucket: "",
    TWITTER_CLONE: "5YuSH05n8LaiuJJJ"
  }
}

module.exports = nextConfig
