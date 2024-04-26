input = [3, 5, 6, 1, 2, 4]


def find_max_num(array):
    maxNum = array[0]
    for num in array:
        for num2 in array:
            if num < num2:
                break
            else:
                return num;
    return maxNum


result = find_max_num(input)
print(result)
