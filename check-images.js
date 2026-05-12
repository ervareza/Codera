const https = require('https');

const urls = [
"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1621695420310-74b88b0a514e?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1513635269975-5969336ac1cb?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1541888086925-0c770f4e8587?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1628131336100-3cb83ed3c178?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1610444391696-670557bfecdb?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2940&auto=format&fit=crop",
"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      if (res.statusCode >= 400) {
        console.log(`BROKEN [${res.statusCode}]: ${url}`);
      } else {
        console.log(`OK [${res.statusCode}]: ${url}`);
      }
      resolve();
    });
    
    req.on('error', (e) => {
      console.log(`ERROR [${e.message}]: ${url}`);
      resolve();
    });

    req.on('timeout', () => {
      req.destroy();
      console.log(`TIMEOUT: ${url}`);
      resolve();
    });

    req.end();
  });
}

(async () => {
  console.log('Checking images...');
  for (const url of urls) {
    await checkUrl(url);
  }
  console.log('Check finished.');
})();
