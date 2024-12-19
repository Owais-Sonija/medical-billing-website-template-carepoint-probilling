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
                'url': 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
                'name': 'medical-team-meeting'
            },
            {
                'url': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
                'name': 'doctor-using-computer'
            },
            {
                'url': 'https://images.unsplash.com/photo-1587691592099-24045742c181',
                'name': 'medical-consultation'
            },
            {
                'url': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
                'name': 'healthcare-technology'
            },
            {
                'url': 'https://images.unsplash.com/photo-1581056771107-24ca5f033842',
                'name': 'medical-records'
            },
            {
                'url': 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634',
                'name': 'medical-billing-desk'
            },
            {
                'url': 'https://images.unsplash.com/photo-1638202993928-7d113b8e4439',
                'name': 'healthcare-admin'
            },
            {
                'url': 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133',
                'name': 'medical-office'
            },
            {
                'url': 'https://images.unsplash.com/photo-1582750433449-648ed127bb54',
                'name': 'doctor-tablet'
            },
            {
                'url': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
                'name': 'medical-professional'
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
