import re
import json

path = r'C:\Users\yashy\.gemini\antigravity-ide\brain\c69cc543-ac2e-4bc4-a20c-71f396ceb47e\scratch\extracted_pages\5350_isf-hyderabad-2024-main.html'
with open(path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# The user mentioned: "INTERNATIONAL STARTUP FESTIVALS 2024 Distinguished Guests at ISF Conference"
# and "INTERNATIONAL STARTUP FESTIVALS 2024 CXOs (Investors, Mentors & Leaders) at ISF Conference"

# We will just split the HTML into sections using <section
sections = html.split('<section')

def find_people(start_str):
    for sec in sections:
        if start_str in sec:
            print(f"--- Found section for {start_str} ---")
            # Extract all images
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', sec)
            # Extract all elementor-heading-title or similar
            titles = re.findall(r'class="elementor-heading-title[^>]*>([^<]+)</', sec)
            
            # Since Elementor creates many headings, the people are usually paired: name, then designation.
            # Some titles might be "Dr. Sridhar Babu", next is "Hon'ble Minister for IT..."
            
            # Let's clean up whitespace
            titles = [t.strip() for t in titles if t.strip()]
            
            # Print the first few images and titles
            print("Images:")
            for img in imgs[:15]:
                print(img)
                
            print("Titles:")
            for t in titles[:30]:
                print(t)
            print("\n")

find_people("Dr. Sridhar Babu")
find_people("A Balasubramanian")
