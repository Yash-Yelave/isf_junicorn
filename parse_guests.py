import re
from bs4 import BeautifulSoup

path = r'C:\Users\yashy\.gemini\antigravity-ide\brain\c69cc543-ac2e-4bc4-a20c-71f396ceb47e\scratch\extracted_pages\5350_isf-hyderabad-2024-main.html'
with open(path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

def find_people(start_str):
    elem = soup.find(string=re.compile(start_str, re.I))
    if not elem:
        print(f"Not found: {start_str}")
        return
    
    parent = elem.parent
    # The parent might be an h3 or div. Let's find the closest elementor-widget-wrap or section
    # Wait, the element might be in an inner section, so let's find the top-level section?
    # Actually, let's just find the section containing the header, then look for the NEXT section which contains the grid
    
    # Let's just find the parent column
    section = parent.find_parent('section')
    
    # Often, Elementor has a section for the title, and the next section for the grid
    if section:
        # Check if this section has images. If not, check next section
        imgs = section.find_all('img')
        if len(imgs) < 2:
            section = section.find_next_sibling('section')
            
    if section:
        # Find all elementor-image-box-wrapper in this section
        boxes = section.find_all(class_='elementor-image-box-wrapper')
        if not boxes:
            boxes = section.find_all(class_='elementor-widget-image-box')
        if not boxes:
            # Maybe it's a team widget?
            boxes = section.find_all(class_='elementor-column')
            
        print(f"--- Section for {start_str} (Found {len(boxes)} boxes/columns) ---")
        for idx, box in enumerate(boxes):
            img = box.find('img')
            title = box.find(class_='elementor-image-box-title')
            desc = box.find(class_='elementor-image-box-description')
            
            img_src = img['src'] if img and img.has_attr('src') else ''
            title_text = title.get_text(strip=True) if title else ''
            desc_text = desc.get_text(strip=True) if desc else ''
            
            # If not using image-box, try looking for individual widgets in the column
            if not title_text and not desc_text:
                headings = box.find_all(class_='elementor-heading-title')
                if len(headings) >= 1:
                    title_text = headings[0].get_text(strip=True)
                if len(headings) >= 2:
                    desc_text = headings[1].get_text(strip=True)
            
            # Or maybe it's in p tags
            if not desc_text:
                p = box.find('p')
                if p:
                    desc_text = p.get_text(strip=True)
                    
            if title_text or desc_text:
                print(f"Person {idx+1}: {title_text} | {desc_text} | {img_src}")

find_people("Sridhar Babu")
print("\n")
find_people("Balasubramanian")
