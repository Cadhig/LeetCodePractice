def reverse(array):
    reversedArray = []
    for i in range(len(array)-1, -1, -1):
        reversedArray.append(array[i])
    return reversedArray


print(reverse([1, 2, 123, 23, 5, 233]))