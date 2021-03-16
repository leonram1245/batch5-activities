def centuryFromYear(year)
    century = year/100
    if year%100==0
    return century
    else 
    return century+1
    end
    end

put centuryFromYear(1958);