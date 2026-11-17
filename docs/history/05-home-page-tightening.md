# 6. Thread: Home page tightening

*Started 15 Oct 2026, 15:03 IST · resolved · 16 messages*

**SJ** 15 Oct 2026, 15:03 IST

> Good afternoon. I have few review comments on the index.html as stated below. We can work on index.html page only for now. Once we agree we can merge it onto the zip file. Can you please look at the following comments and see if it makes sense and if it makes the page more readable, look more professional.
>
> 1\. Our company name is \"Radush Technologies\" but, this company name is not getting highlighted in the page. One suggestion could be to change the wording in the first section \"Technology consulting & engineering · Bengaluru\" to our company name. Please suggest few other options.
>
> 2\. The first section which says \"Enable Technology. Drive Business\" is taking up most of the screen when it opens up. Please consider reducing font size, removing white spaces (rows) at the beginning of the section and after the after the action buttons \"Talk to Us\" and \"See what we do\"
>
> 3\. Similarly you could consider reducing the font size and removing white spaces (rows) in other sections as well.
>
> 4\. The five product cards under \"Our Products\" look bit bigger in size. Please consider reducing the size of the cards in accordance with that of the cards in \"What we do\" section. You could reduce the image size in each of the cards proportionally. Your suggestions is appreciated. But, do not change the colors. Please.
>
> *Attachments: after-desktop-firstscreen.png, after-phone-firstscreen.png, after-desktop-full.png, before-desktop-full.png, after-phone-full.png, before-phone-full.png, after2-desktop-approach-products.png, after2-desktop-full.png, after2-phone-full.png, radush-website-v13.zip, radush-website-v14.zip, after-products-desktop.png, before-products-desktop.png, after-products-phone.png*

**Claude** 15 Oct 2026, 15:03 IST

> I\'m looking at the v12 home page first, then I\'ll suggest company name options and tighten the spacing.

**Claude** 15 Oct 2026, 15:04 IST *Progress checklist*

> Home page review changes
>
> ✱ Copying v12 into a working folder
>
> ○ Screenshot the current home page
>
> ○ Apply the four review comments
>
> ○ Screenshot the updated home page

**Claude** 15 Oct 2026, 15:06 IST *Progress checklist*

> Home page review changes
>
> ✓ Copied v12 into a working folder
>
> ✓ Screenshotted the current home page
>
> ✓ Applied the four review comments
>
> ✓ Screenshotted the updated home page

**Claude** 15 Oct 2026, 15:07 IST

> Good afternoon SJ. All four comments made sense, and I\'ve applied them to the home page. I need two things from you: your approval of the look, and which wording you want for comment 1. I haven\'t changed any colours or any other page. The work is in a separate copy, so v12 is untouched.
>
> **1. Company name.** By default I used **A**. The name is in bold white and \"Bengaluru\" stays orange.
>
> • **A (applied):** \"**Radush Technologies** · Bengaluru\"
>
> • B: \"**Radush Technologies** · Technology consulting & engineering\"
>
> • C: \"**Radush Technologies** · ISO 9001 & 27001 certified\"
>
> • D: Keep the current line, and put \"Radush Technologies\" as a small heading just above \"Enable Technology.\"
>
> Option A drops the words \"Technology consulting & engineering\" from the page, but the services line underneath already covers them. The new wording is the only copy I added.
>
> **2. Hero.** I reduced the headline size so it now fits on two lines, cut the space above it and below the buttons, and made the artwork a little smaller. On a 1440px screen the section is 468px tall instead of 657px, so the certificates and the start of \"What we do\" now show on the first screen. On a phone the artwork is smaller as well.
>
> **3. Other sections.** I reduced the section headings and the space above and below each section, and made the \"What we do\" tiles, the partner strip and the closing \"Ready to enable...\" band more compact. The whole page is about 17% shorter on desktop and 13% shorter on a phone.
>
> **4. Product cards.** I kept the same 3 + 2 layout as the \"What we do\" tiles. The images are about 20% shorter, at the same proportions, and the card titles and padding are a little smaller. If you\'d like them smaller still, I could put all five cards in a single row on desktop, but the QRcode4you text would get cramped.
>
> Attached are the full-length before and after screenshots, plus the first screen you see on desktop and on a phone after the changes. The first-screen \"before\" shots are in site/v13-wip/review. I\'ll build the v13 zip once you approve.

**SJ** 15 Oct 2026, 15:16 IST

> Point no. 1, on the company - can we add somewhere in the page which could start with \"At Radush Technologies, we will\... \" Does this make sense? If you feel No - I am ok to leave it as is. Please suggest.
>
> In Product cards - please change to 3 + 3 layout. That leaves one blank space in the second row which we can use when we build one new product. I think this gives a consistent layout across. Your views. Please.

**Claude** 15 Oct 2026, 15:16 IST

> Both make sense. I\'ll add the \"At Radush Technologies, we...\" line and switch the product cards to 3 + 3, then share screenshots.

**Claude** 15 Oct 2026, 15:17 IST

> I\'ve made both changes and I think they\'re good calls. I just need your approval to build v13, and then I\'ll make the zip.
>
> **\"At Radush Technologies, we...\"** The best fit is the \"Why do clients choose our services?\" section. Its second line now starts \"At **Radush Technologies**, we combine consulting, hands-on engineering and product thinking...\", with the name in bold white. I used \"we combine\" rather than \"we will\" because the present tense says you already do this, which reads more confidently. That is the only wording I changed. With this line and the name at the top of the page, the company name now shows twice without feeling repeated.
>
> **3 + 3 products.** The cards now sit in two rows of three on desktop, with the last slot in the second row left empty. It matches the \"What we do\" section, which already has a free slot in its second row, so the page now feels consistent. When a sixth product arrives, it just drops into that slot. On tablets and phones the layout is the same as before.

**SJ** 15 Oct 2026, 15:19 IST

> This looks good. please go ahead and build v13. That gives me a better view to look at and see how it looks when we go LIVE.

**Claude** 15 Oct 2026, 15:19 IST

> Approved, thanks. I\'m building v13 now and will share the zip shortly.

**Claude** 15 Oct 2026, 15:20 IST

> v13 is built and attached. Nothing else is needed from you unless you have more comments.
>
> The zip has the full site in its build folder. Compared with v12, only the home page, the stylesheet and the README changed, and the README\'s \"Changes in v13\" section lists all of it. To preview it as it would look live, drag the build folder onto Netlify Drop or into your site\'s Deploys page.

**Claude** 15 Oct 2026, 15:20 IST *Progress checklist*

> Home page review changes
>
> ✓ Applied the four review comments
>
> ✓ Added the company line and the 3 + 3 product grid
>
> ✓ Built and shared radush-website-v13.zip

**Claude** 15 Oct 2026, 15:26 IST *Note from coordinator*

> SJ asked in the project chat for the same 3 + 3 product card layout on products.html (attached). Please apply it on top of v13 and share the updated build here.

**Claude** 15 Oct 2026, 15:26 IST

> I\'m switching the products page cards to the same 3 + 3 layout on top of v13 now.

**Claude** 15 Oct 2026, 15:27 IST

> The products page now has the same 3 + 3 layout, and I\'ve built it as **v14**. Nothing is needed from you unless you\'d like changes.
>
> On desktop the five cards sit in two rows of three, with the last slot in the second row left empty for a new product. To fit three across, the images are shorter, each product name now sits above its description, and the text is a little smaller. The page is about 30% shorter than before. Tablets show two cards per row and phones show one. The colours and wording haven\'t changed.
>
> I named it v14 so the v13 zip you already have stays exactly as it was. The only differences from v13 are this products page change, in the stylesheet, and its note in the README.

**Claude** 15 Oct 2026, 15:27 IST *Progress checklist*

> Products page 3 + 3 layout
>
> ✓ Switched products page cards to a 3 + 3 grid
>
> ✓ Screenshotted before and after
>
> ✓ Built and shared radush-website-v14.zip

