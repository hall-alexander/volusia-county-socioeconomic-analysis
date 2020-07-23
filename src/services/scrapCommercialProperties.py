import requests
import urllib.request
import time
from bs4 import BeautifulSoup
from typing import List, Dict


# helper functions to retrieve specific text in div elements
def findSquareFootage(element):
    try:
        result = element.find('strong').text
    except:
        result = 'null'
    return result

def determineRentalTerm(element):
    try:
        if (element['class'][1] == 'has-rental-term'):
            result='Rent per square footage'
    except:
        result = 'Annual fee'
    return result

def addProperties(response: 'requests.models.Response') -> List[Dict]:
    # Container for dictionary objects
    pageResults=[]

    # parse the response object
    soup = BeautifulSoup(response.text, "html.parser")

    # find all tags with class matching address-container
    properties = soup.findAll(class_='address-container')
    price = soup.findAll(class_=['price has-rental-term', 'price'])
    characteristics = soup.findAll(class_='characteristics-cnt')

    # list comprehensions to use for generator expressions
    fullAddresses = [str.upper(x['data-address']) for x in properties]
    streetAddresses = [x.split(',')[0] for x in fullAddresses]

    # try to throw index error to test if there are results on this page
    try:
        fullAddresses[0]

         # generator functions for addProperties
        addressNumber = (x.split(' ')[0] for x in streetAddresses)
        addressStreet = (' '.join(x.split(' ')[1:-1]) for x in streetAddresses)
        streetSuffix = (x.split(' ')[-1] for x in streetAddresses)
        city = (x.split(',')[1] for x in fullAddresses)
        descriptions = (x['title'] for x in properties)
        prices = (x['data-price'] for x in price)
        rentType = (determineRentalTerm(x) for x in price)
        squarefeet = (findSquareFootage(x) for x in characteristics)

        while(True):
            try:
                entry = {
                    'adrno': next(addressNumber),
                    'adrstr': next(addressStreet),
                    'adrsuf': next(streetSuffix),
                    'city': next(city),
                    'description': next(descriptions),
                    'price': next(prices),
                    'rentType': next(rentType),
                    'sqft': next(squarefeet)
                }
                pageResults.append(entry)
            except StopIteration:
                print("Properties processed")
                break
    except IndexError:
        print("No more results")
        raise ValueError("Empty page. No properties to scrape!")

    return pageResults
    

# use this when dealing with data quality later
# abbreviations = {'NORTH': 'N', 'WEST': 'W', 'EAST': 'E', 'SOUTH': 'S', 'HIGHWAY': 'HWY'}

def main():

    # container for all scraped properties
    results = {'properties': []}

    # Set user agent header field to prevent being blocked as bot
    headers = requests.utils.default_headers()
    headers.update({
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0',
    })

    # url for commercial properties website
    url = 'https://www.point2homes.com/US/Commercial-Properties-For-Lease/FL/Volusia-County.html'
    response = requests.get(url, headers=headers)

    # We don't want to use the append method. That would append a list of dicts to the list value of the properties key
    # Instead, we want to add the dict objects to a single list
    # Possible improvement: use itertools.chain() to add multiple objects from multiple lists to one list.
    # Or maybe use something like np.arr.flatten()
    results['properties'] = results['properties'] + addProperties(response)

    #iterate through all pages until list of addresses is empty
    pageNumber = 2
    while (response.status_code == 200):
        url = f'https://www.point2homes.com/US/Commercial-Properties-For-Lease/FL/Volusia-County.html?page={pageNumber}'
        response = requests.get(url, headers=headers)
        try:
            results['properties'] = results['properties'] + addProperties(response)
            print("Page number is: {}".format(pageNumber))
            pageNumber = pageNumber + 1
            time.sleep(2)
        except ValueError as e:
            print(e)
            break

    return results

if __name__=='__main__':
    main()