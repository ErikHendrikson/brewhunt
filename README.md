-- Time Estimation --

Inschatten van werk [30 mins, done]

setup project en installeren dependencies [15 mins, done in 15]
- angular 19 met SCSS en signals
- angular mui

Breweries [90 mins, done in 120]
- Component met MUI table en input voor search
- BreweriesService, die de breweries ophaalt en in signal stopt, errormessage wordt naast search input geplaatst
notes: i needed 30 mins extra with implementing a debounce on the user search input for the api calls, since i was researching a signals possiblity, but found that rxjs offered the best solution.

OverlayService [60 mins]

BreweryDetailed component [60 mins]
- volgens design
- toevoegen:   adresgegevens(street, postal code, city, state, phone number)

Totaal: 15 + 30 + 90 + 60 + 60 = 255, iets meer dan 4 uur.

Als ik tijd over heb, maar tot 6 uur max…:
-favorites kunnen saven (localstorageService aanmaken met setters en getters) [voorkeur]
-Leaflet map boven de results plaatsen met markers van breweries, evt met kleine dialog die opent met naam en website
- Toasterservice en ToasterComponent met errormessaging als ophalen data mislukt