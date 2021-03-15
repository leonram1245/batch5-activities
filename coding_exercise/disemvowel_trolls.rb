def disemvowel(str)
(str.chars - "aeiou".chars.downcase).join
end

puts disemvowel('This is not for trolls')
