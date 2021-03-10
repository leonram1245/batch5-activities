# Activity:
# 1. Create a dictionary (hash) with 10 city names, where the city name (key) will be a string, and the area code would be the value.
# 2. Display the city names to the user for cities which are available in the dictionary
# 3. Get input from the user on the city name
# 4. Display area code based on user's city choice
# 5. Loop - keep the program running and prompt the user for new city names to lookup
# 6. Complete the two methods to lookup city names and to find area code based on city names

dial_book = {
    "newyork" => "212",
    "newbrunswick" => "732",
    "edison" => "908",
    "plainsboro" => "609",
    "sanfrancisco" => "301",
    "miami" => "305",
    "paloalto" => "650",
    "evanston" => "847",
    "orlando" => "407",
    "lancaster" => "717"
  }


def get_city_names(somehash)
    puts somehash.keys
  end
    
def get_area_code(somehash,key)
    puts somehash[key]
    end

loop do
   
    get_city_names(dial_book)
    puts "Enter a City, type esc to exit program"
    city = gets.chomp.downcase
if city == "esc"
    break
end  
 if dial_book.include?(city)
    puts get_area_code(dial_book,city)
 else
    puts "City is not available"
 end

end
