def linearSearch(array, value):
    for index in array:
        if value == index:
            return 'Found'
    return 'Not Found'

print(linearSearch([1, 2, 3, 4], 2))