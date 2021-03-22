def find_unique(arr)
    puts arr.find_all { |e| arr.count(e) == 1}
  end
  
  
find_unique([3,5,3,1,2])