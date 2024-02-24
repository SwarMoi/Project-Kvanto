## Swarnendu Moitra (2022)

# This code relies on the pacman, tidyverse and jsonlite packages
require(pacman)
p_load('tidyverse', 'jsonlite')

# Read the text file from JATOS ...
read_file('jatos_results_20221019112700.txt') %>%
  # ... split it into lines ...
  str_split('\n') %>% first() %>%
  # ... filter empty rows ...
  discard(function(x) x == '') %>%
  # ... parse JSON into a data.frame
  map_dfr(fromJSON, flatten=T) -> data

# Optionally save the resulting dataset
write_csv(data, 'Exp3_Results.csv')
