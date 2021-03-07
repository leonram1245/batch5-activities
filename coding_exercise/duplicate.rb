def find_duplicate(arr)
  puts arr.detect{ |e| arr.count(e) > 1 }
  
end
find_duplicate([5,1,6,4,7,8,9,1,4,5,2])