import re
import json

path = r'C:\Users\yashy\.gemini\antigravity-ide\brain\c69cc543-ac2e-4bc4-a20c-71f396ceb47e\scratch\extracted_pages\5350_isf-hyderabad-2024-main.html'
with open(path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

idx = html.find('A Balasubramanian')
if idx != -1:
    # the CXO section starts here or around here
    content = html[idx-5000:idx+30000]
    
    matches = re.findall(r'<div class="elementor-column[^>]+>(.*?)</div>\s*</div>\s*</div>', content, re.DOTALL)
    
    results = []
    for m in matches:
        img_match = re.search(r'<img[^>]+src="([^"]+)"', m)
        if img_match:
            img_url = img_match.group(1)
            # headings might be in h2, h3, h4 or even p
            text_blocks = re.findall(r'<h[23456][^>]*>(.*?)</h[23456]>|<p[^>]*>(.*?)</p>', m)
            # text_blocks is a list of tuples since we used | in regex
            texts = []
            for tb in text_blocks:
                t = tb[0] if tb[0] else tb[1]
                t = re.sub(r'<[^>]+>', '', t).strip()
                if t and t not in texts:
                    texts.append(t)
                    
            if texts:
                name = texts[0]
                desc = texts[1] if len(texts)>1 else ''
                results.append({"name": name, "title": desc, "img": img_url})

    print(json.dumps(results[:40], indent=2))
