import { defineConfig } from 'vitepress';
export default defineConfig({
  lang: 'en-US',
  title: 'AirSend',
  description: 'Instantly collaborate with anyone in seconds. Have conversations, voice and video calls, share files, manage tasks and keep notes in one space.',
  themeConfig: {
    nav: [
      { text: 'What is Airsend?', link: '/what-is-airsend' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is AirSend?', link: '/what-is-airsend' },
        ],
      },
      {
        text: 'AirSend',
        items: [
          { text: 'AirSend Channels', link: '/product/airsend-channels' },
          { text: 'Public channels', link: '/product/public-channels' },
          { text: 'Files, Actions, and Wiki', link: '/product/files-actions-wiki' },
          
        ],
      },
    ],
  },
});
