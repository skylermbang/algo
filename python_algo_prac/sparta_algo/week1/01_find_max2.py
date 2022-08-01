input = [3, 5, 6, 1, 2, 4]


def find_max_num(array):
    maxNum = array[0]
    for num in array:
        if num > maxNum:
            maxNum = num
    return maxNum


result = find_max_num(input)
print(result)
