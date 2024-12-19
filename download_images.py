import os
import requests
from PIL import Image
from io import BytesIO
import time

class ImageDownloader:
    def __init__(self):
        self.image_dir = os.path.join('public', 'images')
        self.ensure_directory()
        
        # Predefined list of medical-related stock photos from a reliable CDN
        self.images = [
            {
                'url': 'https://images.unsplash.com/photo-1630092152293-7499ea2fc7e2',
                'name': 'medical-billing-specialist'
            },
            {
                'url': 'https://images.unsplash.com/photo-1581497396202-5645e76a3a8e',
                'name': 'healthcare-finance'
            },
            {
                'url': 'https://images.unsplash.com/photo-1590650153855-d9e808231d41',
                'name': 'medical-paperwork'
            },
            {
                'url': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
                'name': 'office-analytics'
            },
            {
                'url': 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
                'name': 'healthcare-laptop'
            },
            {
                'url': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
                'name': 'doctor-computer-work'
            },
            {
                'url': 'https://images.unsplash.com/photo-1590650046871-92c887180603',
                'name': 'medical-consultation'
            },
            {
                'url': 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6',
                'name': 'healthcare-team'
            },
            {
                'url': 'https://images.unsplash.com/photo-1576670759896-0e8959bfe87d',
                'name': 'medical-office-desk'
            },
            {
                'url': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
                'name': 'healthcare-technology'
            }
        ]

    def ensure_directory(self):
        """Create the images directory if it doesn't exist."""
        os.makedirs(self.image_dir, exist_ok=True)

    def download_image(self, url, filename):
        """Download an image from the URL and save it with the given filename."""
        try:
            # Add parameters for a high-quality image
            url = f"{url}?auto=format&fit=crop&w=1200&q=80"
            response = requests.get(url, timeout=10)
            
            if response.status_code != 200:
                print(f"Failed to download {filename}: Status code {response.status_code}")
                return False

            # Save the image
            full_path = os.path.join(self.image_dir, f"{filename}.jpg")
            with open(full_path, 'wb') as f:
                f.write(response.content)
            
            print(f"Successfully downloaded: {filename}.jpg")
            return True
            
        except Exception as e:
            print(f"Error downloading {filename}: {str(e)}")
            return False

    def download_all_images(self):
        """Download all predefined images."""
        print("Starting download of medical-related images...")
        
        successful_downloads = 0
        for image in self.images:
            if self.download_image(image['url'], image['name']):
                successful_downloads += 1
            time.sleep(1)  # Be nice to the server
        
        print(f"\nDownload complete. Successfully downloaded {successful_downloads} images.")
        print(f"Images are saved in the {self.image_dir} directory.")

if __name__ == "__main__":
    downloader = ImageDownloader()
    downloader.download_all_images()
