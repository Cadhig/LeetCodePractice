def max(arr):
    highestNum = arr[0]
    for x in arr:
        currentNum = x
        if currentNum > highestNum:
            highestNum = currentNum
    return highestNum

print(max([23, 124, 11, 140]))

def min(arr):
    lowestNum = arr[0]
    for x in arr:
        currentNum = x
        if currentNum < lowestNum:
            lowestNum = currentNum
    return lowestNum

print(min([23, 124, 11, 140]))