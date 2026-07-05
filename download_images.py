import os
import re
import urllib.request
from urllib.parse import urlparse

# Ensure directory exists
out_dir = r"d:\J_Intern\isf_Junicorn\public\assets\images"
os.makedirs(out_dir, exist_ok=True)

src_dir = r"d:\J_Intern\isf_Junicorn\src"
url_pattern = re.compile(r'(https://www\.isfnetwork\.org/[^\s"\'\`\?]+)')

dynamic_template = 'https://www.isfnetwork.org/wp-content/themes/jupiterx/assets/img/photos/1hour1week/1h-1w-pic${num}.jpg'

# Pass 1: Collect URLs
files_to_update = []
all_urls = set()

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            matches = url_pattern.findall(content)
            if matches or dynamic_template in content:
                files_to_update.append((path, content))
                for m in matches:
                    all_urls.add(m)

# Special handling for dynamic carousel
carousel_nums = [1, 2, 3, 4, 6, 8, 9]
carousel_urls = [f"https://www.isfnetwork.org/wp-content/themes/jupiterx/assets/img/photos/1hour1week/1h-1w-pic{num}.jpg" for num in carousel_nums]

url_map = {}
downloaded_filenames = set()

def download_and_map(url):
    if url in url_map:
        return
    
    parsed = urlparse(url)
    filename = os.path.basename(parsed.path)
    if not filename:
        filename = "downloaded_image.png"
    
    # handle collisions
    base, ext = os.path.splitext(filename)
    counter = 1
    new_filename = filename
    while new_filename in downloaded_filenames:
        new_filename = f"{base}_{counter}{ext}"
        counter += 1
        
    downloaded_filenames.add(new_filename)
    local_path = os.path.join(out_dir, new_filename)
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
            out_file.write(response.read())
        url_map[url] = f"/assets/images/{new_filename}"
        print(f"Downloaded: {new_filename}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

# Download all static urls
for url in all_urls:
    download_and_map(url)

# Download carousel urls
for url in carousel_urls:
    download_and_map(url)

# Pass 2: Update files
for path, content in files_to_update:
    new_content = content
    
    # Replace static URLs
    for url, local_path in url_map.items():
        new_content = new_content.replace(url, local_path)
        
    # Replace dynamic template
    new_content = new_content.replace(
        'https://www.isfnetwork.org/wp-content/themes/jupiterx/assets/img/photos/1hour1week/1h-1w-pic${num}.jpg',
        '/assets/images/1h-1w-pic${num}.jpg'
    )
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {path}")

print("Done.")
