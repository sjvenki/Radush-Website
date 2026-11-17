# 9. Thread: Book buy links and hero height

*Started 28 Oct 2026, 13:49 IST · resolved · 26 messages*

**SJ** 28 Oct 2026, 13:48 IST

> Hi Good afternoon. No updates from the field yet. Meanwhile, please make following changes. Once we agree on the changes, we can deploy. In case we hear from the field, we can push those changes in next release.
>
> Please make following changes :
>
> 1\. In the Books page - we have the option \"Buy eBook\" to buy the book. But, we dont have the integration with payment gateway yet. So, for now, when the user clicks on this button, it should open up Contact form. User can fill up and submit. We will connect with the user offline for further steps. While opening up Contact form, can you please set the Message field to something like \"I am interesting in buying this book.\" or if you have a better statement, you could include. Also, please note that this option is available in 2 places, the other says \"Buy Your Copy\". Please link both the hyperlinks to Contact page with the Message text. Please note this message text should be set only when we open it through \"books\" page and not otherwise.
>
> 2\. In the home page (landing page) , the first section which says \"Enable Technology. Drive Business\...\" and the section \"Certified and Recognized\" occupies bit more than full screen when opened in standard resolution of 1920x1080. Do you think we should reduce the height? May be you can look at removing unwanted rows, reduce font size, reduce the image size accordingly and proportionately. If you feel that the current size is good enough - I am Ok to Leave it as is.
>
> *Attachments: before-home-1536x730.png, after-home-1536x730.png, book-to-contact-desktop.png, book-to-contact-phone.png, radush-website-v16.zip, before-products-1536.png, after-products-grid.png, radush-website-v17.zip*

**Claude** 28 Oct 2026, 13:49 IST

> I\'m starting with the two book buttons and the contact form message, then I\'ll measure the home page at 1920x1080.

**Claude** 28 Oct 2026, 13:49 IST *Progress checklist*

> Book buy links and home hero height
>
> ✱ Copy v15 to v16-wip
>
> ○ Point \"Buy eBook\" and \"Buy Your Copy\" to contact form with book message
>
> ○ Measure home hero + certifications at 1920x1080
>
> ○ Tighten height if needed, before/after screenshots

**Claude** 28 Oct 2026, 13:51 IST *Progress checklist*

> Book buy links and home hero height
>
> ✓ Copy v15 to v16-wip
>
> ✓ Point \"Buy eBook\" and \"Buy Your Copy\" to contact form with book message
>
> ✓ Measure home hero + certifications at 1920x1080
>
> ✓ Tighten height, before/after screenshots
>
> ○ After your OK: push to the preview PR (no merge)

**Claude** 28 Oct 2026, 13:51 IST

> Good afternoon SJ. I\'ve made both changes in a new working copy, v16-wip, and nothing is live yet.
>
> **1. Book buy buttons.** \"Buy eBook\" and \"Buy Your Copy\" now both open the Contact page and scroll straight to the form. The Message box is filled in with this text: *\"Hi, I am interested in buying the book \"SRE as a Business Capability\" by Ramesh Alwan. Please contact me with the next steps.\"* The wording is mine, so change it if you like. I tested it on desktop and phone. The text only appears when someone comes from the Books page. If they open Contact any other way, the box is empty.
>
> **2. Home first screen.** I agreed it was a bit too tall. On a 1920x1080 laptop with Windows\' usual 125% scaling, the bottom of the certification logos was cut off. I made the dashboard image a little smaller and trimmed the spacing above and below the hero. I also made the certification strip and badges slightly smaller. Together these bring the bottom from 770px down to 613px, so both sections now fit on one screen. I didn\'t touch the headline, the font sizes or any of the text. The before/after screenshots are attached.
>
> Once you\'re happy, I\'ll push this to the preview link so the team can check it there. I won\'t merge anything.

**SJ** 28 Oct 2026, 13:58 IST

> Looks good. But, one thought - we need to make this generic. Else, when we publish another eBook we will have challenge in formatting the text. So, here is the suggestion - Can we change the action button text to \"Buy SRE eBook\" and when user clicks pass the action button text to Message and it can Read \"Hi, I am interested in Buying SRE eBook by Mr. Ramesh Alwan. Please let me know the next steps.\" Your thoughts. Please.

**Claude** 28 Oct 2026, 13:58 IST

> Agreed, that\'s a better approach, and it\'s done in the same working copy.
>
> Both buttons on the Books page now say **\"Buy SRE eBook\"**, including the second one that used to say \"Buy Your Copy\". When someone clicks either one, the page takes the button text (without the word \"Buy\") and the author\'s name and passes them to the Contact form. The Message box then reads exactly as you wrote it: *\"Hi, I am interested in Buying SRE eBook by Mr. Ramesh Alwan. Please let me know the next steps.\"* I checked both buttons on desktop and phone, and the box stays empty when Contact is opened any other way.
>
> For a future book, we only add a button such as \"Buy AI Playbook eBook\" with the author\'s name, and the message builds itself. One small suggestion: a lowercase \"buying\" would read more naturally mid-sentence. I\'ve kept your capital B for now.
>
> Say the word and I\'ll push both changes to the preview link.

**SJ** 28 Oct 2026, 13:59 IST

> Agreed. Please change it to \"buying\"

**Claude** 28 Oct 2026, 14:00 IST

> Done. The message now reads: *\"Hi, I am interested in buying SRE eBook by Mr. Ramesh Alwan. Please let me know the next steps.\"* Shall I push both changes to the preview link?

**SJ** 28 Oct 2026, 14:00 IST

> Yes. Please.

**Claude** 28 Oct 2026, 14:00 IST *Activity*

> Attached sjvenki/radush-website

**Claude** 28 Oct 2026, 14:01 IST *Progress checklist*

> Book buy links and home hero height
>
> ✓ Copy v15 to v16-wip
>
> ✓ Point both Buy buttons to contact form (\"Buy SRE eBook\", generic message)
>
> ✓ Measure home hero + certifications at 1920x1080
>
> ✓ Tighten height, before/after screenshots
>
> ✓ Pushed to preview PR, preview deployed (not merged)
>
> ○ Build v16 zip when you ask

**Claude** 28 Oct 2026, 14:01 IST

> Both changes are now on the preview link, and Netlify reports the preview ready: https://deploy-preview-1\--radush.netlify.app. Try \"Buy SRE eBook\" on the Books page, and check the home page top section on your 1920x1080 screen.
>
> Nothing is merged and the live radush.io is unchanged. I\'m keeping an eye on the PR. When you want the v16 zip, just ask.

**SJ** 28 Oct 2026, 14:02 IST

> Checked preview. Great. This looks good to go.
>
> Please give me v16 zip and then we can publish the website.

**Claude** 28 Oct 2026, 14:03 IST *Progress checklist*

> Book buy links and home hero height
>
> ✓ Copy v15 to v16-wip
>
> ✓ Point both Buy buttons to contact form (\"Buy SRE eBook\", generic message)
>
> ✓ Measure home hero + certifications at 1920x1080
>
> ✓ Tighten height, before/after screenshots
>
> ✓ Pushed to preview PR, preview deployed
>
> ✓ Built v16 zip
>
> ○ Publish: merge the PR (your call)

**Claude** 28 Oct 2026, 14:03 IST

> Here\'s the v16 zip: radush-website-v16.zip. It has both changes and an updated README. The GitHub PR has the same pages, plus the Google Tag Manager code and the old-URL redirects that were already there.
>
> To publish, merge PR #1 on GitHub: https://github.com/sjvenki/Radush-Website/pull/1. Netlify will then deploy it to radush.io within a minute or two. I\'ve left the merge to you. If you\'d rather I do it, just say \"merge it\" and I\'ll do it and check the live site afterwards.

**SJ** 28 Oct 2026, 14:07 IST

> Checked v16 zip on local. Sorry - just realized. The cards in \"What we do\" has white background while the cards in \"What have we bult\" has Orange background. Should we change the cards in \"What have we built\" to white background as we did in Index.html earlier. We could keep the top image color as is. Your thought. Please.

**Claude** 28 Oct 2026, 14:07 IST

> Agreed, it should match. I\'ll make the product page cards white, keep the top images as they are, and send you a screenshot.

**Claude** 28 Oct 2026, 14:08 IST

> Done. The \"What have we built\" cards now have a white body, the same as the \"What we do\" cards. The top images are unchanged, and the \"Explore / Read more\" links are orange. I also changed the small number badge and the arrow button to our standard orange #F27B22. They were using a slightly redder orange before.
>
> This change is on the preview now (https://deploy-preview-1\--radush.netlify.app/products.html). The v16 zip is rebuilt with it, attached here. If it looks right, merge PR #1 to publish.

**SJ** 28 Oct 2026, 14:09 IST

> This looks great. Get me v17 zip. Please.

**Claude** 28 Oct 2026, 14:10 IST *Progress checklist*

> Book buy links and home hero height
>
> ✓ Book buttons open contact form with prefilled message (v16)
>
> ✓ Shorter home hero + certifications (v16)
>
> ✓ Light product cards on \"What have we built\" (v17)
>
> ✓ Preview updated, v16 and v17 zips built
>
> ○ Publish: merge PR #1 (your call)

**Claude** 28 Oct 2026, 14:10 IST

> Here\'s the v17 zip: radush-website-v17.zip. It has everything from today: the book buttons, the shorter home hero and the white product cards. Its pages match the preview.
>
> I made the card change a separate v17 release. To keep the history clean, I rebuilt v16 without it, so v16 now has only the book and hero changes.
>
> To publish, merge PR #1: https://github.com/sjvenki/Radush-Website/pull/1

**SJ** 28 Oct 2026, 14:12 IST

> This looks Great. Merge it for me ad publish. Please. I presume the current website copy will be in github history and I can switch to the current production website whenever I want to. Please confirm.

**Claude** 28 Oct 2026, 14:13 IST

> On it. I\'ll check the backup of the current site first, then merge and confirm radush.io is live.

**Claude** 28 Oct 2026, 14:17 IST *Progress checklist*

> Book buy links and home hero height
>
> ✓ Book buttons open contact form with prefilled message (v16)
>
> ✓ Shorter home hero + certifications (v16)
>
> ✓ Light product cards on \"What have we built\" (v17)
>
> ✓ Preview updated, v16 and v17 zips built
>
> ✓ Merged PR #1, live on radush.io

**Claude** 28 Oct 2026, 14:17 IST

> It\'s live. I merged PR #1, and Netlify published it to **radush.io** at 08:43 UTC. The deploy reports ready, with all 28 old-URL redirects in place. Please give the site a quick look in your browser. I can\'t open radush.io from here, so I checked through Netlify instead.
>
> And yes, I can confirm the old site is safe, and you can switch back whenever you want. There are two ways to do it:
>
> • **Instant:** In Netlify → radush → Deploys (https://app.netlify.com/projects/radush/deploys), open any deploy from before today and click **\"Publish deploy\"**. The old site is back in seconds, and nothing on GitHub changes.
>
> • **Permanent:** The old React code is kept in GitHub on the branch backup/pre-v15-react, and it\'s also in main\'s history. I can revert the merge for you, and Netlify\'s original build settings are still in place to rebuild it.

