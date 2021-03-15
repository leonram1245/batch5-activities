def disemvowel(str)
(str.chars - "aeiou".chars.lowercase).join
end

puts disemvowel('This is not for trolls')
