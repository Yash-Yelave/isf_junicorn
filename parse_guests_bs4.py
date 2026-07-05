from bs4 import BeautifulSoup
import json

path = r'C:\Users\yashy\.gemini\antigravity-ide\brain\c69cc543-ac2e-4bc4-a20c-71f396ceb47e\scratch\extracted_pages\5350_isf-hyderabad-2024-main.html'
with open(path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

def find_people(start_str):
    print(f"=== Extracting {start_str} ===")
    results = []
    # Find the section
    elem = soup.find(string=lambda t: t and start_str in t)
    if not elem:
        print("Not found")
        return
        
    section = elem.find_parent('section')
    if section:
        # get all images inside the section
        imgs = section.find_all('img')
        for img in imgs:
            src = img.get('src', '')
            if not src:
                continue
            
            # The text is usually near the image. Let's find the nearest text.
            # Easiest way: look at the parent column
            col = img.find_parent(class_='elementor-column')
            if col:
                text_elems = col.find_all(['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'])
                texts = []
                for t in text_elems:
                    txt = t.get_text(strip=True)
                    if txt and txt not in texts:
                        texts.append(txt)
                
                # filter out some empty or irrelevant text
                filtered = [t for t in texts if t and len(t) > 2]
                name = filtered[0] if len(filtered) > 0 else ""
                desc = filtered[1] if len(filtered) > 1 else ""
                if len(filtered) > 2:
                    desc += " " + filtered[2]
                    
                results.append({"name": name, "desc": desc, "image": src})
                
    print(json.dumps(results[:15], indent=2))

find_people("Dr. Sridhar Babu")
print("\n")
find_people("Balasubramanian")
