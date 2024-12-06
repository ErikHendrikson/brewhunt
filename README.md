-- Time Estimation --

Inschatten van werk [30 mins, done]

setup project en installeren dependencies [15 mins, done in 15]
- angular 19 met SCSS en signals
- angular mui

Breweries [90 mins, done in 120]
- Component met MUI table en input voor search
- BreweriesService, die de breweries ophaalt en in signal stopt, errormessage wordt naast search input geplaatst
notes: i needed 30 mins extra with implementing a debounce on the user search input for the api calls, since i was researching a signals possiblity, but found that rxjs offered the best solution.

ModalService [60 mins, done in 90]
notes: the data of the modal is displayed outside of the modal, due to a UI glitch. I haven't found the reason yet why this is, but after the first run it works OK.

BreweryDetailed component [60 mins, done in 60]
- volgens design
- toevoegen:   adresgegevens(street, postal code, city, state, phone number)

