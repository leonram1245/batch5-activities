def disemvowel(str)
(str.chars - "aeiou".chars).join
end

puts disemvowel('This is not for trolls')
