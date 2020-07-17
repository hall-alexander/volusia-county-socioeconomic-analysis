import requests
import urllib.request
import time
from bs4 import BeautifulSoup

# Set user agent header field to prevent being blocked as bot
headers = requests.utils.default_headers()
headers.update({
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0',
})

# url for commercial properties website
url = 'https://www.point2homes.com/US/Commercial-Properties-For-Lease/FL/Volusia-County.html'
response = requests.get(url, headers=headers)

# parse the response object
soup = BeautifulSoup(response.text, "html.parser")


properties = soup.findAll(class_='address-container')