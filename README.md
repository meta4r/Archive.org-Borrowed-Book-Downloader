# Archive.org Borrowed Book Downloader

This repository contains JavaScript bookmarklets designed for downloading and scanning borrowed book pages from Archive.org and converting them into a downloadable PDF.

Find and Open the First Image 🖼️

This bookmarklet scans all images on the current webpage and searches for an image whose URL contains 0001.jp2. If such an image is found, it opens it in a new tab. If no image is found, an alert is displayed.
Instructions

   Create a Bookmark:
    
        In your web browser, create a new bookmark.
        Copy the code from FindandOpen1stimg.js and paste it into the URL field of the bookmark.

  How to Use the Bookmarklet:
    
        Navigate to the webpage of the Archive.org book and click "Borrow" to borrow the book.
        Zoom in on the image a couple of times to get higher quality images for your PDF.
        Click the bookmarklet from your bookmarks bar.
        If the first image is found, it will open in a new tab.
        If not, an alert will notify you.

Download Images and Convert to PDF 📥

This bookmarklet prompts the user for the total number of pages and then sequentially downloads each page. After downloading, it offers an option to create a PDF from the images using an external tool.
Instructions

  Create a Bookmark:
  
        In your web browser, create a new bookmark.
        Copy the code from Download.js and paste it into the URL field of the bookmark.

  How to Use the Bookmarklet:
  
        After using the "Find 1st page" script, ensure you are on the first page.
        Click the bookmarklet from your bookmarks bar.
        Confirm that you are viewing the first page image.
        Enter the total number of pages when prompted.
        The bookmarklet will begin downloading each page.
        After completion, it will offer a link to create a PDF from the downloaded images.

Enjoy!

Feel free to reach out with any questions or suggestions. Happy reading!
