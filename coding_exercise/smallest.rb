def find_smallest_int(arr)
    x = arr[0]
    for a in arr do
        if a < x
            x = a
        end
    end
    puts x
end

find_smallest_int([5,7,4,10])