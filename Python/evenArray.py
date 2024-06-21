def even(arr):
    evenNum = []
    for x in arr:
        if x % 2 == 0:
            evenNum.append(x)
    return evenNum

print(even([1, 4, 10, 22, 1]))