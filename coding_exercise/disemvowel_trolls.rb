def disemvowel(str)
(str.chars - "aAeEiIoOuU".chars).join
end

puts disemvowel('This is not for trolls')
