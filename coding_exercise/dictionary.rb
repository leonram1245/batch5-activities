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

get_city_names(dial_book)
loop do
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
