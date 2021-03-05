def is_perfect_square(n)
    i=1
    if n==0 
      i=0
    end
    while i**2<n    
       i+=1
    end
    if i**2 == n && i>=0
        puts true
    else
        puts false
    end
end


is_perfect_square(-1)
is_perfect_square(0)
is_perfect_square(3)
is_perfect_square(4)
is_perfect_square(25)
is_perfect_square(26)


