def string_formatter(names)
    names = names.map { |name| name[:name] }
    ln = names.pop
    return ln.to_s if names.empty?
    "#{names.join(', ')} & #{ln}"
  end

puts string_formatter([{name: "Marnoel"},{name: "Matt"}, {name: "Cherry"}]) 