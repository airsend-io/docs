import { defineConfig } from 'vitepress';
export default defineConfig({
   lang: 'en-US',
   title: 'AirSend Docs',
   description: 'Instantly collaborate with anyone in seconds. Have conversations, voice and video calls, share files, manage tasks and keep notes in one space.',
   // base: "/new-docs/",
   themeConfig: {
      logo: '/airsend-docs.svg',
      socialLinks: [
         { icon: 'github', link: 'https://github.com/airsend-io' },
      ],
      nav: [
         { text: 'What is Airsend?', link: '/' },
         { text: 'Developers', link: '/developers/intro' },
      ],
      sidebar: [
         {
            text: 'Introduction',
            items: [
               {
                  text:"What is AirSend?",
                  link:"/"
               },
               {
                  text:"AirSend Channels",
                  link:"/channels"
               },
               {
                  text:"Files, Actions, and Wiki",
                  link:"/files-actions-and-wiki"
               },
               {
                  text:"Email connection",
                  link:"/email"
               },
               {
                  text:"Notifications",
                  link:"/notifications"
               },
               {
                  text:"Making Your Experience Easier",
                  link:"/making-your-experience-easier"
               },
               {
                  text:"If you're the owner",
                  link:"/if-youre-the-owner"
               },
               {
                  text:"Meetings",
                  link:"/meetings"
               },
               {
                  text:"Style and Customization",
                  link:"/customization"
               },
            ],
         },
         {
            text: 'Application',
            items: [
               {
                  text:"Using AirSend",
                  items:[
                     {
                        text:"AirSend Dashboard",
                        link:"/using-airsend/airsend-dashboard"
                     },
                     {
                        text:"Search in AirSend",
                        link:"/using-airsend/search-in-airsend"
                     },
                     {
                        text:"Changing notification settings",
                        link:"/using-airsend/changing-notification-settings"
                     }
                  ]
               },
               {
                  text:"Channels",
                  items:[
                     {
                        text:"Creating a channel",
                        link:"/channels/creating-a-channel"
                     },
                     {
                        text:"Inside an AirSend channel",
                        link:"/channels/inside-an-airsend-channel"
                     },
                     {
                        text:"Public Channels",
                        link:"/channels/public-channels"
                     },
                     {
                        text:"Closing, deleting, or archiving a channel",
                        link:"/channels/closing-deleting-or-archiving-a-channel"
                     },
                     {
                        text:"Leaving an AirSend channel",
                        link:"/channels/leaving-an-airsend-channel"
                     },
                     {
                        text:"Creating Channels from Contact Forms",
                        link:"/channels/creating-channels-from-contact-forms"
                     },
                     {
                        text:"Channel settings for a channel owner",
                        link:"/channels/channel-settings-for-a-channel-owner"
                     },
                     {
                        text:"If you've been added to a channel",
                        link:"/channels/if-youve-been-added-to-a-channel"
                     },
                     {
                        text:"Creating channels from templates",
                        link:"/channels/creating-channels-from-templates"
                     },
                     {
                        text:"Teams in AirSend",
                        link:"/channels/teams-in-airsend"
                     },
                     {
                        text:"Reopening a closed channel",
                        link:"/channels/reopening-a-closed-channel"
                     },
                     {
                        text:"Sidebar: Finding Channels",
                        link:"/channels/sidebar"
                     }
                  ]
               },
               {
                  text:"Members",
                  items:[
                     {
                        text:"Adding more members to a channel",
                        link:"/members/adding-more-members-to-a-channel"
                     },
                     {
                        text:"Member Types",
                        link:"/members/member-types"
                     },
                     {
                        text:"Changing a Member's Type",
                        link:"/members/changing-a-members-type"
                     },
                     {
                        text:"Removing a member from a channel",
                        link:"/members/removing-a-member-from-a-channel"
                     },
                     {
                        text:"Approving members",
                        link:"/members/approving-members"
                     },
                     {
                        text:"If you're the owner",
                        link:"/members/if-youre-the-owner"
                     }
                  ]
               },
               {
                  text:"Messages",
                  items:[
                     {
                        text:"Messaging inside an AirSend channel",
                        link:"/messages/messaging-inside-an-airsend-channel"
                     },
                     {
                        text:"Direct Messaging",
                        link:"/messages/direct-messaging"
                     },
                     {
                        text:"Creating actions from messages",
                        link:"/messages/creating-actions-from-messages"
                     },
                     {
                        text:"Formatting message content",
                        link:"/messages/formatting-message-content"
                     }
                  ]
               },
               {
                  text:"Actions",
                  items:[
                     {
                        text:"Actions in AirSend",
                        link:"/actions/intro"
                     },
                     {
                        text: "Action-Related Messages",
                        link:"/actions/messages"
                     },
                     {
                        text:"Processing actions in a channel",
                        link:"/actions/processing-actions-in-a-channel"
                     },
                     {
                        text: "Viewing, Searching, and Sorting in the Action Tab",
                        link:"/actions/viewing-searching-sorting"
                     },
                     {
                        text:"Creating actions from messages",
                        link:"/actions/creating-actions-from-messages"
                     },
                     {
                        text:"Kanban Board",
                        link:"/actions/kanban"
                     }
                  ]
               },
               {
                  text:"Files",
                  items:[
                     {
                        text:"Files in AirSend",
                        link:"/files/intro"
                     },
                     {
                        text:"Files and Links Tab",
                        link:"/files/files-and-links"
                     },
                     {
                        text:"Creating a Folder Structure in the Files Tab",
                        link:"/files/creating-a-folder-structure-in-the-files-tab"
                     },
                     {
                        text:"Confirming File Actions",
                        link:"/files/confirming-file-actions"
                     },
                     {
                        text:"Files view",
                        link:"/files/files-view"
                     },
                     {
                        text:"Opening Office files in AirSend",
                        link:"/files/opening-office-files-in-airsend"
                     },
                     {
                        text:"Add a File to the Files Tab",
                        link:"/files/add-a-file-to-the-files-tab"
                     },
                     {
                        text:"Add a file to a message",
                        link:"/files/add-a-file-to-a-message"
                     },
                     {
                        text:"Email a file to a channel",
                        link:"/files/email-a-file-to-a-channel"
                     },
                     {
                        text:"Managing files and folders in Files view",
                        link:"/files/managing-files-and-folders-in-files-view"
                     },
                     {
                        text:"Create Additional folders in the Files Tab",
                        link:"/files/create-additional-folders-in-the-files-tab"
                     }
                  ]
               },
               {
                  text:"Wiki",
                  items:[
                     {
                        text:"Displaying Important Information",
                        link:"/wiki/intro"
                     },
                     {
                        text:"Adding a Folder to a Wiki",
                        link:"/wiki/adding-a-folder-to-a-wiki"
                     },
                     {
                        text:"Share Your Wiki Content",
                        link:"/wiki/share-your-wiki-content"
                     },
                     {
                        text:"Adding a Link to an External URL in a Wiki",
                        link:"/wiki/adding-a-link-to-an-external-url-in-a-wiki"
                     },
                     {
                        text:"Adding a link to a file in a wiki page",
                        link:"/wiki/adding-a-link-to-a-file-in-a-wiki-page"
                     },
                     {
                        text:"Uploading files or folders to the wiki",
                        link:"/wiki/uploading-files-or-folders-to-the-wiki"
                     },
                     {
                        text:"Adding an image to a wiki page",
                        link:"/wiki/adding-an-image-to-a-wiki-page"
                     },
                     {
                        text:"Adding additional pages to the wiki",
                        link:"/wiki/adding-additional-pages-to-the-wiki"
                     },
                     {
                        text:"Formatting wiki content",
                        link:"/wiki/formatting-wiki-content"
                     }
                  ]
               },
               {
                  text:"Meetings",
                  items:[
                     {
                        text:"Meeting in AirSend",
                        link:"/meetings/intro"
                     },
                     {
                        text:"Changing a Meeting from Private to Public",
                        link:"/meetings/changing-a-meeting-from-private-to-public"
                     }
                  ]
               },
               {
                  text:"Account",
                  items:[
                     {
                        text:"Setting up an AirSend account",
                        link:"/account/setting-up-an-airsend-account"
                     },
                     {
                        text:"Settings in AirSend",
                        link:"/account/settings-in-airsend"
                     },
                     {
                        text:"Multiple Language Support",
                        link:"/account/multiple-language-support"
                     },
                     {
                        text:"Deleting Your Account",
                        link:"/account/deleting-your-account"
                     }
                  ]
               },
               {
                  text:"Commands and shortcuts",
                  items:[
                     {
                        text:"Inline commands",
                        link:"/commands-and-shortcuts/inline-commands"
                     },
                     {
                        text:"Channel keyboard shortcuts",
                        link:"/commands-and-shortcuts/channel-keyboard-shortcuts"
                     }
                  ]
               },
               // {
               //    text:"Desktop and mobile apps",
               //    items:[
               //       {
               //          text:"AirSend desktop app",
               //          link:"/apps/airsend-desktop-app"
               //       },
               //       {
               //          text:"AirSend on iOS",
               //          link:"/apps/airsend-on-i-os"
               //       },
               //       {
               //          text:"AirSend on Android",
               //          link:"/apps/airsend-on-android"
               //       }
               //    ]
               // },
            ]
         },
         {
            text: 'Developers',
            items: [
               {
                  text:"Open Source",
                  link:"developers/intro"
               },
               {
                  text: 'API',
                  items: [
                     {
                        text:"Getting Started",
                        link:"developers/api/getting-started"
                     },
                  ],
               },
               {
                  text: 'UI',
                  items: [
                     {
                        text:"Getting Started",
                        link:"developers/ui/getting-started"
                     },
                  ],
               },
            ],
         },
      ],
   },
});

/*


*/